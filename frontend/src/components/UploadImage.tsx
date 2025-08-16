import uploadIcon from "../assets/icons/upload-primary.svg";
import { Button } from "./ui/button";
import { useRef, useState } from "react";

function UploadImage() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string>()

  // For reference only so that button will prompt file when click.
  const uploadImage = () => {
    inputRef.current?.click()
  }

  const inputOnChange = (e: any) => {
    setFile(e.target.files[0])
    setPreview(URL.createObjectURL(e.target.files[0]))
  }

  // Removes the image and the translated text.
  function handleReset() {
    setFile(null)
    setPreview("")

    // Clear also the reference. 
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return (
    <>
      <div className="hidden md:block h-96 w-full bg-primary-gradient p-0.5 rounded-lg">
        <div className="bg-primary-bg h-full w-full rounded-md text-center p-2 space-y-5">
          <div className="text-2xl font-semibold">Preview Uploaded Image</div>
          {preview ? (
            <img src={preview} className="mx-auto object-contain h-72" />
          ) : (
            <div className="text-3xl mt-32">No Image Uploaded</div>
          )}
        </div>
      </div>
      <div className="space-y-5 md:flex md:space-y-0 md:space-x-10">
        <div className="bg-primary-gradient-reverse rounded-lg h-52 p-0.5 outline-5 -outline-offset-3 outline-dashed outline-primary-bg md:basis-2/3">
          <div className="bg-primary-bg rounded-md h-full w-full p-5 flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col items-center space-y-1">
              <img src={uploadIcon} alt="Upload" />
              <div>Upload image here</div>
            </div>
            {/* For custom file input button. */}
            <input type="file" className="hidden" ref={inputRef} onChange={(e) => inputOnChange(e)} accept=".png, .jpg, .jpeg" />
            <div className="flex flex-col items-center space-y-1">
              {/* File name will display here. */}
              <div>{file?.name}</div>
              <Button size={"lg"} className="text-lg" onClick={uploadImage}>
                Upload Image
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-2 md:basis-1/3">
          <div className="text-gray-400">Accepted format: .png, .jpg, .jpeg. If your image is not compatible, please convert them before uploading.</div>
          <div className="flex flex-col space-y-4">
            <Button size={"lg"} className="text-lg">
              Translate Text
            </Button>
            <Button size={"lg"} className="text-lg" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadImage;
