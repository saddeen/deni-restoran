import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import Bagian from "./components/Bagian/MengapaPilihKami";
import Tentang from "./components/Tentang/Tentang";
import Footer from "./components/Foooter/Footer";
import Popup from "./components/Popup/Popup";
import Kontak from "./components/Kontak/Kontak";
const App = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const handlePopup = () => setShowPopup(!showPopup);
  return (
    <>
      <Navbar handlePopup={handlePopup} />
      <Hero />
      <Banner />
      <Bagian />
      <Tentang />
      <Kontak />
      <Footer />
      <Popup showPopup={showPopup} handlePopup={handlePopup} setShowPopup={setShowPopup} />
    </>
  );
};

export default App;
