import React from "react"
import Photo from "./components/Photo"
import Header from "./components/Header"
import Buttons from "./components/Buttons"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Photo />
      
      <div className="main-content">
        <Header />
        <Buttons />
        <About />
        <Interests />
      </div>

      <Footer />
    </div>
  );
}

export default App;
