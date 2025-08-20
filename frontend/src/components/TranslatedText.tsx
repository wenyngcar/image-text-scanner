import type { detectedText } from "@/types/detectedText";

function TranslatedText({ text }: detectedText) {
  return (
    <div className="bg-primary-gradient-reverse rounded-lg min-h-36 p-0.5">
      <div className="bg-primary-bg rounded-md min-h-36 h-full w-full p-5 space-y-2">
        <div className="text-2xl">
          Text will display here:
        </div>
        {text && <div className="whitespace-pre-line"> {text} </div>}
      </div>
    </div>
  );
}

export default TranslatedText;
