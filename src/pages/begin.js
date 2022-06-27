// import { Component } from 'react';
// import SwiftSlider from 'react-swift-slider'

// const data =  [
//     {'id':'1','src':'../images/Capture.png'},
//     {'id':'2','src':'https://media.mfbproject.co.za/repos/2017_alfa_romeo_stelvioquadrifoglio_official_09.jpg'},
//     {'id':'3','src':'https://media.mfbproject.co.za/repos/2018-alfa-romeo-stelvio-quadrifoglio-specs-photos-speed-2.jpg'},
//     {'id':'4','src':'https://media.mfbproject.co.za/repos/alfa-romeo-giulia-quadrifoglio-2017-us-wallpapers-and-hd-images-13.jpg'},
//     {'id':'5','src':'https://media.mfbproject.co.za/repos/ARWP_Infra_Desk_1920_1080_Quad.png'}
//   ];

//   class Begin extends Component {
//     render() {
//       return (
//         <SwiftSlider data={data} enableNextAndPrev={false}/>
//       );
//     }
//   }
//    export default Begin ;

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "bootstrap/dist/css/bootstrap.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";

import "../styles/styles.css";
import "../styles/flickity.css";
import Button from "@mui/material/Button";
import "../pages/register/Register";

import { Slide } from "react-slideshow-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import { Link } from "react-router-dom";

{
  /* <CCarousel controls indicators dark>
  <CCarouselItem>
    <CImage className="d-block w-100" src="/images/react.jpg" alt="slide 1" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src="/images/vue.jpg" alt="slide 2" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Second slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src="/images/angular.jpg" alt="slide 3" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Third slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel> */
}

export default function Begin() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />;
    },
  };

  return (
    <Slider {...settings}>
      <div class="size">
        <img
          src="../assets/Studying-rafiki.svg"
          class="FirsSlide_rowStyle__3fTL2 md hydrated"
        ></img>

        <ion-row class="md hydrated">
          <ion-col class="md hydrated">
            <ion-text class="md hydrated">
              <h2>!وفرنالك الي بتحتاجه</h2>
            </ion-text>
            <ion-text
              color="medium"
              class="ion-color ion-color-medium md hydrated"
            >
              <h6>موقعنا بضم كل ما يحتاجه الطالب في جامعة بيرزيت </h6>
            </ion-text>
          </ion-col>
        </ion-row>

        <Button class="button" component={Link} to={"pages/register/Register"}>
          !يلا سجّل معنا
        </Button>
      </div>
      <div class="size">
        <img
          src="../assets/Grades-bro.svg"
          class="FirsSlide_rowStyle__3fTL2 md hydrated"
        ></img>
        <ion-row class="md hydrated">
          <ion-col class="md hydrated">
            <ion-text class="md hydrated">
              <h2>بحاجة لموقع بقيّم الدكاترة ؟</h2>
            </ion-text>
            <ion-text
              color="medium"
              class="ion-color ion-color-medium md hydrated"
            >
              <h6>ويوفّرلك كل المعلومات الي بتحتاجها عن دكاتركتك؟</h6>
            </ion-text>
          </ion-col>
        </ion-row>
      </div>
      <div class="size">
        <img
          src="../assets/Exams-rafiki.svg"
          class="FirsSlide_rowStyle__3fTL2 md hydrated"
        ></img>
        <ion-row class="md hydrated">
          <ion-col class="md hydrated">
            <ion-text class="md hydrated">
              <h2>BzuSociety مرحبًا بك في </h2>
            </ion-text>
            <ion-text
              color="medium"
              class="ion-color ion-color-medium md hydrated"
            >
              <h6>هل تبحث عن موقع خاص بطلبة جامعة بيرزيت ؟</h6>
            </ion-text>
          </ion-col>
        </ion-row>
      </div>
    </Slider>
  );
}

// return (

//   <Flickity options={{ fullscreen: true, lazyLoad: 1, imagesLoaded: false }}>
//     <div >
//       <img src="/assets/person/1.jpeg" />
//     </div>
//     <div >
//       <img src="https://placeimg.com/640/480/animals" />
//     </div>
//     <div >
//       <img src="https://placeimg.com/640/480/animals" />
//     </div>
//   </Flickity>
// );

// export default function Begin() {
//   return (
//       <div class="carousel-wrapper">
//           <Carousel infiniteLoop useKeyboardArrows autoPlay>
//               <div>
//                   <img src="https://media.mfbproject.co.za/repos/2017_alfa_romeo_stelvioquadrifoglio_official_09.jpg" />
//               </div>
//               <div>
//                   <img src="https://media.mfbproject.co.za/repos/2017_alfa_romeo_stelvioquadrifoglio_official_09.jpg" />
//               </div>
//               <div>
//                   <img src="https://media.mfbproject.co.za/repos/2017_alfa_romeo_stelvioquadrifoglio_official_09.jpg" />
//               </div>
//           </Carousel>
//       </div>
//   );
// }

// class Begin extends Component
// export default function Begin()  {
//   const onChange = (event) => {
//    console.log(event);
//   };
//     return (
//       <div className="container carousel-wrapper">
//         <Carousel autoPlay="true" onChange={onChange}>
//           <div>
//             <img
//               className="card-img-top"
//               src="https://picsum.photos/500/300?img=2"
//               alt="Card image cap"
//             />
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Slide Card 1</h5>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a href="#" className="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div>
//             <img
//               className="card-img-top"
//               src="https://picsum.photos/500/300?img=2"
//               alt="Card image cap"
//             />
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title"> 2</h5>
//                 <p className="card-text">
//                 ??????????????????????????????????????
//                 </p>
//                 <a href="#" className="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div>
//             <img
//               className="card-img-top"
//               src="https://picsum.photos/500/300?img=3"
//               alt="Card image cap"
//             />
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Slide Card 3</h5>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a href="#" className="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div>
//             <img
//               className="card-img-top"
//               src="https://picsum.photos/500/300?img=3"
//               alt="Card image cap"
//             />
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Slide Card 3</h5>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a href="#" className="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div>
//             <img
//               className="card-img-top"
//               src="https://picsum.photos/500/300?img=3"
//               alt="Card image cap"
//             />
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Slide Card 3</h5>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 <a href="#" className="btn btn-primary">
//                   Go somewhere
//                 </a>
//               </div>
//             </div>
//           </div>
//         </Carousel>
//       </div>
//     );

//     }
// export default Begin;
