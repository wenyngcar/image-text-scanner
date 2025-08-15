import logo from "../assets/logo/logo.svg"

function Header() {
  return (
    <div className="space-y-5">
      <img src={logo} />
      <div className="space-y-3">
        <div className="text-5xl font-semibold">Online Image Text Translator</div>
        <div className="text-gray-400 text-2xl">Translate foreign language text in images into English language.</div>
      </div>
    </div>
  )
}

export default Header
