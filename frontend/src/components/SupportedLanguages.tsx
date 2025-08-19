import sa from "@/assets/icons/flags/sa.svg"
import us from "@/assets/icons/flags/us.svg"
import china from "@/assets/icons/flags/cn.svg"
import france from "@/assets/icons/flags/fr.svg"
import german from "@/assets/icons/flags/de.svg"
import indonesia from "@/assets/icons/flags/id.svg"
import italy from "@/assets/icons/flags/it.svg"
import japan from "@/assets/icons/flags/jp.svg"
import korea from "@/assets/icons/flags/kr.svg"
import portugal from "@/assets/icons/flags/pt.svg"
import russia from "@/assets/icons/flags/ru.svg"
import spain from "@/assets/icons/flags/es.svg"
import thailand from "@/assets/icons/flags/th.svg"
import philippines from "@/assets/icons/flags/ph.svg"

const languages = [
  { flag: us, name: "English" },
  { flag: sa, name: "Arabic" },
  { flag: china, name: "Chinese Simplified" },
  { flag: china, name: "Chinese Traditional" },
  { flag: france, name: "French" },
  { flag: german, name: "German" },
  { flag: indonesia, name: "Indonesian" },
  { flag: italy, name: "Italian" },
  { flag: japan, name: "Japanese" },
  { flag: korea, name: "Korean" },
  { flag: portugal, name: "Portuguese" },
  { flag: russia, name: "Russian" },
  { flag: spain, name: "Spanish" },
  { flag: philippines, name: "Tagalog" },
  { flag: thailand, name: "Thai" },
]

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
  )
}

export default SupportedLanguages
