import sa from "@/assets/icons/flags/sa.svg";
import us from "@/assets/icons/flags/us.svg";
import china from "@/assets/icons/flags/cn.svg";
import japan from "@/assets/icons/flags/jp.svg";
import korea from "@/assets/icons/flags/kr.svg";
import russia from "@/assets/icons/flags/ru.svg";
import thailand from "@/assets/icons/flags/th.svg";

const languages = [
  { flag: sa, name: "Arabic (العربية)" },
  { flag: china, name: "Chinese Characters (汉字)" },
  { flag: us, name: "Latin Alphabet" },
  { flag: japan, name: "Kanji, Hiragana, Katakana (日本語)" },
  { flag: korea, name: "Hangul (한글)" },
  { flag: russia, name: "Cyrillic (Кириллица)" },
  { flag: thailand, name: "Thai (ไทย)" },
];

function SupportedLanguages() {
  return (
    <div className="mb-20 text-gray-400">
      <p className="mb-3">Supported writing system:</p>
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
