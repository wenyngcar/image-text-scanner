import uploadIcon from "../assets/icons/upload-primary.svg"
import { Button } from "./ui/button"

function UploadImage() {
  return (
    <>
      <div className="bg-primary-gradient-reverse rounded-lg h-52 p-0.5 outline-5 -outline-offset-3 outline-dashed outline-primary-bg">
        <div className="bg-primary-bg rounded-md h-full w-full p-5 flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col items-center">
            <img src={uploadIcon} alt="Upload" />
            <div>Upload image here</div>
          </div>
          <Button className="w-full">Upload Image</Button>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <Button>Translate Text</Button>
        <Button>Reset</Button>
      </div>
    </>
  )
}

export default UploadImage
