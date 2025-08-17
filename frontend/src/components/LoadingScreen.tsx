import spinnerIcon from "../assets/icons/spinner.svg";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black/50">
      <div className="absolute left-1/2 top-1/2 -translate-1/2 space-y-3">
        <img src={spinnerIcon} className="animate-spin" />
        <span> Loading... </span>
      </div>
    </div>
  );
}

export default LoadingScreen;
