import uploadIcon from "../assets/icons/upload-primary.svg";
import { Button } from "./ui/button";
import { useRef, useState } from "react";

function UploadImage() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File>()

  // For reference only so that button will prompt file when click.
  const uploadImage = () => {
    inputRef.current?.click()
  }

  const inputOnChange = (e: any) => {
    setFile(e.target.files[0])
  }

  return (
    <div className="space-y-5">
      <div className="bg-primary-gradient-reverse rounded-lg h-52 p-0.5 outline-5 -outline-offset-3 outline-dashed outline-primary-bg">
        <div className="bg-primary-bg rounded-md h-full w-full p-5 flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col items-center space-y-1">
            <img src={uploadIcon} alt="Upload" />
            <div>Upload image here</div>
          </div>
          {/* For custom file input button. */}
          <input type="file" className="hidden" ref={inputRef} onChange={(e) => inputOnChange(e)} />
          <div className="flex flex-col items-center space-y-1">
            {/* File name will display here. */}
            <div>{file?.name}</div>
            <Button size={"lg"} className="text-lg" onClick={uploadImage}>
              Upload Image
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <Button size={"lg"} className="text-lg">
          Translate Text
        </Button>
        <Button size={"lg"} className="text-lg">
          Reset
        </Button>
      </div>
    </div>
  );
}

export default UploadImage;
