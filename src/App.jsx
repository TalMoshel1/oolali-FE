import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectIsMessageSent } from "./features/messageSlice";
import { selectClickedPhoto, setClickedPhoto } from "./features/photoSlice";
import Form from "./components/Form";
// import Background from "./components/Background";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Modal from "./components/Modal";
// import oolaliImage from "./photos/oolali.jpg";
import "./App.css";
import ThreePhotoContainer from "./components/ThreePhotoContainer.jsx";
import PhotoModal from "./components/PhotoModal.jsx";
import { selectTheme } from "./features/themeSlice.js";

function App() {
  const isMessageSent = useSelector(selectIsMessageSent);
  const WhichPhotoClicked = useSelector(selectClickedPhoto);
  const theme = useSelector(selectTheme)


  useEffect(()=>{
    console.log(theme)
  },[theme])

  const aboutRef = useRef(null);
  const photosRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
    return (
      <>
        <div
          className={
            isMessageSent ? " blurred-and-no-pointer-events app" : "app"
          }
          style={isMessageSent ? { overflow: "hidden" } : {}}
        >
          <Navbar
            onAboutClick={() => scrollToRef(aboutRef)}
            onPhotosClick={() => scrollToRef(photosRef)}
            onContactClick={() => scrollToRef(contactRef)}
          />
          {/* <Background/> */}

          <div className="viewport-minus-navbar" ref={aboutRef}>
            <About />
          </div>

          <div ref={contactRef} className="viewport-minus-navbar">
            <div className="container">
              <Form />
            </div>
          </div>

          <div className='viewport-minus-navbar'>
          <div
            className="photos-arrows-align-top photos-arrows-direction-column last-page-height-margin"
            ref={photosRef}
          >
           <ThreePhotoContainer />


          </div>


          </div>

        </div>

        {isMessageSent && <Modal text="הודעתך נשלחה בהצלחה" />}
      </>
    );
  }



export default App;
