function ImproveAccuracy() {
  return (
    <div className="text-gray-400">
      <div className="text-3xl font-semibold">
        Improve the Translator's Detecting Accuracy
      </div>
      <ul className="p-5 list-decimal space-y-2 text-lg">
        <li>
          Keep the image as flat as possible. In other words, avoid uploading
          images that are heavily skewed or rotated.
        </li>
        <li>
          If the image is handwritten, try capturing it with a document scanner
          app before uploading. However, if the original image produces better
          results, upload the original instead.
        </li>
        <li>
          Avoid uploading images containing multiple foreign alphabets. The
          model can handle a foreign alphabet mixed with English (e.g., Arabic
          and English) but may not work well with combinations like Arabic and
          Korean, or Chinese and Korean.
        </li>
      </ul>
    </div>
  );
}

export default ImproveAccuracy;
