import uploadIcon from "@/assets/icons/upload-primary.svg";
import { Button } from "../ui/button";
import LoadingScreen from "../LoadingScreen";
import TranslatedText from "../TranslatedText";
import UploadImage from "../UploadImage";
import SupportedLanguages from "../SupportedLanguages";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useImageTranslator } from "@/hooks/useImageScanner";

function Form() {
  const {
    inputRef,
    file,
    preview,
    loading,
    detectedText,
    isError,
    uploadImage,
    inputOnChange,
    handleReset,
    handleSelectValue,
    handleTranslate,
  } = useImageTranslator();

  return (
    <>
      <div>
        <SupportedLanguages />
        <div className="space-y-20 lg:flex lg:space-x-[5%] lg:space-y-0 ">
          <UploadImage uploadedImage={preview} />
          <div className="space-y-5 md:flex md:space-y-0 md:space-x-10 lg:flex-col lg:space-y-5 xl:justify-between ">
            <div className="bg-primary-gradient-reverse rounded-lg h-52 w-full p-0.5 outline-5 -outline-offset-3 outline-dashed outline-primary-bg md:basis-2/3">
              <div className="bg-primary-bg rounded-md h-full w-full p-5 flex flex-col justify-center items-center gap-5">
                <div className="flex flex-col items-center space-y-1">
                  <img src={uploadIcon} alt="Upload" />
                  <div>Upload image here</div>
                </div>
                {/* For custom file input button. */}
                <input
                  type="file"
                  className="hidden"
                  ref={inputRef}
                  onChange={(e) => inputOnChange(e)}
                  accept=".png, .jpg, .jpeg"
                />
                <div className="flex flex-col items-center space-y-1">
                  {/* File name will display here. */}
                  <div>{file?.name}</div>
                  <Button size={"lg"} className="text-lg" onClick={uploadImage}>
                    Upload Image
                  </Button>
                  {(isError && !file) && (
                    <div className="text-red-500 text-center">
                      ❗No image uploaded.
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-2 md:basis-1/3">
              <div className="text-gray-400">
                Accepted format: .png, .jpg, .jpeg. If your image is not
                compatible, please convert them before uploading.
              </div>
              <div className="flex flex-col space-y-4">
                <Select onValueChange={(value) => handleSelectValue(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Recognizer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ar">Ararbic</SelectItem>
                    <SelectItem value="ch_tra">Chinese Traditional</SelectItem>
                    <SelectItem value="ch_sim">Chinese Simplified</SelectItem>
                    <SelectItem value="en">Latin Alphabet</SelectItem>
                    <SelectItem value="ja">Kanji, Hiragana, Katakana</SelectItem>
                    <SelectItem value="ko">Hangul</SelectItem>
                    <SelectItem value="ru">Cyrillic</SelectItem>
                    <SelectItem value="th">Thai</SelectItem>
                  </SelectContent>
                </Select>
                {(isError) && (
                  <div className="text-red-500 text-center">
                    ❗Please select a recognizer.
                  </div>
                )}

                <Button
                  size={"lg"}
                  className="text-lg"
                  onClick={handleTranslate}
                >
                  Scan Image
                  {loading && <LoadingScreen />}
                </Button>
                <Button size={"lg"} className="text-lg" onClick={handleReset}>
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TranslatedText text={detectedText?.text} />
    </>
  );
}

export default Form;
