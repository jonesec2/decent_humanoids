import React, { useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Nav";
import Wrapper from "../components/Wrapper";
import test from "../utils/test.json";
import Footer from "../components/Footer";
import testPic from "../images/dh_groupA.jpg";
import iphirea from "../images/IphiriaClose.png";
import maevePic from "../images/dh_Maeve_1.jpg";
import groupPic from "../images/eb_dh1.jpg";
import pageKey from "../utils/test.json";
import key from "../utils/key.json";
import Title from "../components/Title";
import MainContainer from "../components/MainContainer";
import MainText from "../components/MainText";
import Search from "../components/Search";
import Results from "../components/Results";


export default function Wiki(props) {
   console.log(testPic);
   console.log(iphirea);
   console.log(maevePic);
   console.log(groupPic);

   // decent_humanoids/static/media/iphirea_bg2.f7d452fe.png

   const [search] = useState(key)
   // The trick to getting this to work is to set a default loading page to fall back on
   // But putting all the code in home to send over. So use will search
   // then select and when the link is selected that is where the object 
   // will be chosen and then all of the info will make it over as a prop
   // so rendering would look like "{load prop.title || if null default}"
   // console.log(props)
   const [object, setObject] = useState(
      typeof props.location.state === 'undefined'
         ? test[0]
         : test[props.location.state]);
   // console.log(object)
   // console.log(test[props.location.state.pageName])
   // console.log(test[0])

   useEffect(() => {
      newResult()
   }, [object])

   console.log(search)
   function newResult(test) {
      // let test = "test"
      console.log(test);
      // setObject(test.props.pageNumber)
   }

   return (
      <div>
         <Navbar />
         <div className="noMatch">
            {object ? (
               <Wrapper>
                  {/* <Search /> */}
                  
                  <Title title={object.title} />
                  <hr />
                  <MainText
                     object={{
                        title: object.title,
                        overview: object.overview,
                        mainImage: object.mainImage,
                        left1: object.left1,
                        title1: object.title1,
                        History: object.History,
                        title2: object.title2,
                        Future: object.Future,
                        title3: object.title3,
                        /* Use W3 schools about image gallery to make a cool image gallery */
                        Gallery: object.Gallery
                     }}>
                  </MainText>
                  {/* <Results search={search} newResult={newResult} /> */}
               </Wrapper>
            ) :
               (
                  <Wrapper>
                     <Search />
                     <Title title="test" />
                     <hr />
                     <MainText
                        object={{
                           title: pageKey[0].title,
                           overview: pageKey[0].overview,
                           mainImage: pageKey[0].mainImage,
                           left1: pageKey[0].left1,
                           title1: pageKey[0].title1,
                           History: pageKey[0].History,
                           title2: pageKey[0].title2,
                           Future: pageKey[0].Future,
                           title3: pageKey[0].title3,
                           /* Use W3 schools about image gallery to make a cool image gallery */
                           Gallery: pageKey[0].Gallery
                        }}>
                     </MainText>
                     {/* <Results search={search} newResult={newResult}/> */}
                  </Wrapper>
               )
            }
         </div>
         <Footer />
      </div>
   )
}