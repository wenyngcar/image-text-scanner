import { useState, useRef } from "react";
import api from "@/api/api";
import type { detectedText } from "@/types/detectedText";

export function useImageTranslator() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [detectedText, setDetectedText] = useState<detectedText>();
  const [isError, setIsError] = useState(false);
  const [recognizer, setRecognizer] = useState<string>();

  // Trigger a click on the hidden <input type="file" /> so the user can select a file.
  const uploadImage = () => inputRef.current?.click();

  // Called when the user selects a file. Updates state with the file and its preview URL.
  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isError) setIsError(false);
    const file = e.target.files?.[0];
    if (!file) return;
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleReset = () => {
    setFile(null);
    setPreview("");
    setIsError(false);
    setDetectedText(undefined);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleSelectValue = (value: string) => setRecognizer(value);

  const handleTranslate = async () => {
    setLoading(true);
    // Backend expects FormData instead of a raw file. Use key "image" to match backend parameter.
    const formData = new FormData();
    if (file) formData.append("image", file);

    try {
      if (isError) setIsError(false)
      const res = await api.post(`/upload-image?recognizer=${recognizer}`, formData);
      setDetectedText(res.data);
    } catch (error) {
      if (!file || !recognizer) setIsError(true);
      console.error(`Error handling data: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return {
    inputRef,
    file,
    preview,
    loading,
    detectedText,
    isError,
    recognizer,
    uploadImage,
    inputOnChange,
    handleReset,
    handleSelectValue,
    handleTranslate,
  };
}
