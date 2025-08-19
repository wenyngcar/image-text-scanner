function UploadImage({ uploadedImage }: { uploadedImage?: string }) {
  return (
    <div className="hidden md:block h-96 w-full bg-primary-gradient p-0.5 rounded-lg xl:h-[500px]">
      <div className="bg-primary-bg h-full w-full rounded-md text-center p-2 space-y-5">
        <div className="text-2xl font-semibold">Preview Uploaded Image</div>
        {uploadedImage ? (
          <img src={uploadedImage} className="mx-auto object-contain h-[80%]" />
        ) : (
          <div className="text-3xl mt-[20%] ">No Image Uploaded</div>
        )}
      </div>
    </div>
  );
}

export default UploadImage;
