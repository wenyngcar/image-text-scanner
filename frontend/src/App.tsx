import Header from "./components/Header"
import TranslatedText from "./components/TranslatedText"
import UploadImage from "./components/UploadImage"

function App() {

  return (
    <div className="container p-5 space-y-10">
      <Header />
      <UploadImage />
      <TranslatedText />
    </div>
  )
}

export default App
