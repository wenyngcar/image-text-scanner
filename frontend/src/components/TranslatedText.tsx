import type { detectedText } from "@/types/detectedText";

function TranslatedText({ language, text }: detectedText) {
  return (
    <div className="bg-primary-gradient-reverse rounded-lg min-h-52 p-0.5">
      <div className="bg-primary-bg rounded-md min-h-52 h-full w-full p-5 space-y-2">
        <div className="text-2xl">
          {language ? `Detected Language: ${language}` : "Detected Language:"}
        </div>
        <div className="whitespace-pre-line">{text ? text : "Text will display here."}</div>
      </div>
    </div>
  );
}

export default TranslatedText;
