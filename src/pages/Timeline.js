import React, { useRef, useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
// import VizSensor from 'react-visibility-sensor';
// import Results from "../components/Results";
// import iphiriaPic from "../images/IphireaLanding.png";
// import HistoryTest from "../images/dh_history_test.png";
// import HistoryTest2 from "../images/dh_history_test2.png";
// import normalizedHistory from "../images/DH_History_Normalized_Size.png"
import MainTime from "../components/MainTime";
import timeline from "../utils/timeline.json"

export default function Timeline() {

   console.log(timeline)
   // console.log(timeline.length)
   const timelineLength = timeline.length
   // console.log(timelineLength)
   const [i, setI] = useState(0);
   let myRef = useRef(Array.from({ length: timelineLength }, () => React.createRef()));
   const [timeWidth, setTimeWidth] = useState();
   const [approximateRef, setApproximateRef] = useState(0);

   console.log(myRef.current)


   useEffect(() => {
      goToRef(i);
   });

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   useEffect(() => {
      // goToRef(approximateRef);
      setTimeWidth(myRef.current[i].current.offsetWidth)
      // console.log("useEffect approx " + approximateRef);
      // console.log("useEffect approx i " + i);
   })

   function onScroll(e) {
      const scrollX = e.target.scrollLeft
      // console.log(scrollX)
      // setApproximateRef(Math.trunc(scrollX / timeWidth))
      console.log("scrolled!")
      // setI(Math.trunc(scrollX / timeWidth))
      // if (approximateRef > 6) {
      //    setI(6);
      // }
      // else if (approximateRef > 6) {
      //    setI(6)//  { setI(0)}
      // }
      // if (approximateRef === i) {
      //    return
      // } else if (i != approximateRef) {
      //    setI(approximateRef);
      // }
   }
   

   function gotToStart() {
      myRef.current[0].current.scrollIntoView({behavior: 'smooth'});
      setI(0);
   }

   function goToEnd() {
      myRef.current[timelineLength-1].current.scrollIntoView({behavior: 'smooth'});
      setI(timelineLength-1)
   }

   function nextButton() {
      if (i >= timelineLength -1) {
         return;
      }
      else { setI(i + 1) }
      // console.log(myRef.current[i].current)
      // goToRef(i);
   }


   function goToPrevious() {
      if (i <= 0) {
         return;
      }
      else { setI(i - 1) }
      // console.log(myRef.current[i].current)
      // goToRef(i);
   }

   function goToRef(i) {
      console.log("goToRef "+i);
      myRef.current[i].current.scrollIntoView({behavior: 'smooth'});
      console.log(approximateRef)
      // console.log(myRef.current[i].current);
   }

   // console.log(HistoryTest);

   return (
      <div>
         <Navbar />
         <div className="noMatch">
            <Wrapper>
               <div className="minHome">
                  <h1 className="text-left mobileHeading">Campaign Timeline</h1>
                  <hr />
                  <MainTime
                     myRef={myRef}
                     gotToStart={gotToStart}
                     goToEnd={goToEnd}
                     nextButton={nextButton}
                     goToPrevious={goToPrevious}
                     onScroll={onScroll}
                     timeline
                     // gotToRef={goToRef}

                  />
                  <hr className="hrTime"></hr>
                  <div className="row desktopControls">
                     <button onClick={gotToStart} className="col-2 ml-auto navButton">Start</button>
                     <button onClick={goToPrevious} className="col-2 navButton">Previous</button>
                     <div className="col-1 timelineButton"><p className="timelineP text-center">Page #</p> <input value={i +1} className="timelineInput text-center"></input></div>
                     <button onClick={nextButton} className="col-2 navButton">Next</button>
                     <button onClick={goToEnd} className="col-2 mr-auto navButton">End</button>
                  </div>
                  <div className="row mobileControls mx-auto">
                     <button onClick={gotToStart} className="col-2 px-auto ml-auto navButton">Start</button>
                     <button onClick={goToPrevious} className="col-2  navButton">{"<<<"}</button>
                     <div className="col-2 timelineButton"><input  value={i +1} className="timelineInput text-center"></input></div>
                     <button onClick={nextButton} className="col-2  navButton">{">>>"}</button>
                     <button onClick={goToEnd} className="col-2 mr-auto  navButton">End</button>
                  </div>
               </div>
            </Wrapper>
         </div>
         <Footer />
      </div>

   )
}