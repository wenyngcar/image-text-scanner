import uploadIcon from "../assets/icons/upload-primary.svg"
import { Button } from "./ui/button"

function UploadImage() {
  return (
    <div className="space-y-5">
      <div className="bg-primary-gradient-reverse rounded-lg h-52 p-0.5 outline-5 -outline-offset-3 outline-dashed outline-primary-bg">
        <div className="bg-primary-bg rounded-md h-full w-full p-5 flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col items-center space-y-1">
            <img src={uploadIcon} alt="Upload" />
            <div>Upload image here</div>
          </div>
          <Button size={"lg"} className="w-full text-lg">Upload Image</Button>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <Button size={"lg"} className="text-lg">Translate Text</Button>
        <Button size={"lg"} className="text-lg">Reset</Button>
      </div>
    </div>
  )
}

export default UploadImage
