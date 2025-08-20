import sa from "@/assets/icons/flags/sa.svg";
import us from "@/assets/icons/flags/us.svg";
import china from "@/assets/icons/flags/cn.svg";
import indonesia from "@/assets/icons/flags/id.svg";
import japan from "@/assets/icons/flags/jp.svg";
import korea from "@/assets/icons/flags/kr.svg";
import russia from "@/assets/icons/flags/ru.svg";
import thailand from "@/assets/icons/flags/th.svg";
import philippines from "@/assets/icons/flags/ph.svg";

const languages = [
  { flag: sa, name: "Arabic" },
  { flag: china, name: "Chinese Simplified" },
  { flag: china, name: "Chinese Traditional" },
  { flag: us, name: "English" },
  { flag: indonesia, name: "Indonesian" },
  { flag: japan, name: "Japanese" },
  { flag: korea, name: "Korean" },
  { flag: russia, name: "Russian" },
  { flag: philippines, name: "Tagalog" },
  { flag: thailand, name: "Thai" },
];

function SupportedLanguages() {
  return (
    <div className="mb-20 text-gray-400 font-semibold">
      <p className="mb-3">Supported Languages:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {languages.map(({ flag, name }) => (
          <div key={name} className="flex items-center space-x-2">
            <img src={flag} alt={name} className="w-5 h-5" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupportedLanguages;
