import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.svg";
import img6 from "../../assets/img6.svg";


const Hero = () => {

  const [loaded, setLoaded] = useState(false);

  const plots = [
    {
      id:1,
      photo: img1,
      tag: "They say it’s impossible for our financial systems to include everyone...",
    },
    {
      id:2,
      photo: img2,
      tag: `...well we cant argue the facts, but we had an idea!`,
    },
    {
      id:3,
      photo: img3,
      tag: `What if we started with just one person?`,
    },
    {
      id:4,
      photo: img4,
      tag: `And then someone else...`,
    },
    {
      id:5,
      photo: img5,
      tag: `As our circles continue to grow, so do our opportunities`,
    },
    {
      id:6,
      photo: img6,
      tag: `For us, financial inclusion is not the job of a single individual, or organisation; it is a collective mission and we are happy to be part of that growth story.`,
    },

  ];

  const [sliderRef] = useKeenSlider(

    {
      loop: true,
      rtl: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          setLoaded(true);
          // slider.container.addEventListener("mouseover", () => {
          //   mouseOver = true;
          //   clearNextTimeout();
          // });
          // slider.container.addEventListener("mouseout", () => {
          //   mouseOver = false;
          //   nextTimeout();
          // });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
      <main >
        <div ref={sliderRef} className="keen-slider">
          {plots.map((item, index)=>(
          <div key={index}  className="keen-slider__slide min-h-screen flex flex-col md:flex-row items-center w-full justify-center px-4 sm:px-8">
            <div className=" min-h-[50vh] md:min-h-screen w-full">
              <img src={item?.photo} alt="slider-image" className="w-full"/>
            </div>
            <div className="min-h-[50vh] sm:min-h-screen w-full mt-4 sm:mt-0 flex sm:items-center sm:justify-center sm:px-10">
              {
                item.id === 6
                    ?
                    <h1 className="px-2 text-center leading-snug flex font-medium text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center leading-snug font-quicksand text-[#0432B7]">
                  {item.tag}
                </h1>
                    :
                    <h1 className="px-2 text-center leading-snug flex font-medium text-4xl md:text-4xl lg:text-5xl xl:text-7xl text-center leading-snug text-[] font-quicksand text-[#0432B7]">
                      {item.tag}
                    </h1>
              }
            </div>
          </div>
          ))}
        </div>
      </main>
  );
};

export default Hero;
