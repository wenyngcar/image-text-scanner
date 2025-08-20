import logo from "../assets/logo/logo.svg";

function Header() {
  return (
    <div className="space-y-5">
      <a href="/" className="inline-block">
        <img src={logo} />
      </a>
      <div className="space-y-3 md:text-center">
        <div className="text-5xl font-semibold">Online Image Text Scanner</div>
        <div className="text-gray-400 text-2xl">
          Extracts text from images containing foreign alphabets, scripts, and
          other writing system.
        </div>
      </div>
    </div>
  );
}

export default Header;
