import Footer from "./components/Footer";
import Header from "./components/Header";
import UploadImage from "./components/UploadImage";

function App() {
  return (
    <div className="container p-5 space-y-20 xl:p-7 xl:px-16">
      <Header />
      <UploadImage />
      <Footer />
    </div>
  );
}

export default App;
