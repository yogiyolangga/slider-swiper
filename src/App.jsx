import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";

import {
  Pagination,
  EffectCube,
  EffectCoverflow,
  Autoplay,
  EffectFlip,
  Navigation,
  EffectCards,
  EffectCreative,
  Parallax,
} from "swiper/modules";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-800 flex flex-col justify-center items-center gap-8 py-10">
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide6 />
        <Slide7 />
        <Slide8 />
      </div>
    </>
  );
}

export default App;

const Slide1 = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center gap-2">
        <h1 className="text-xl font-semibold">Pagination dynamic</h1>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="w-full h-[340px] max-w-80"
        >
          <SwiperSlide>
            <img
              src="images/slide1/1.jpg"
              alt="1"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/2.jpg"
              alt="2"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/3.jpg"
              alt="3"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/4.jpg"
              alt="4"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/5.jpg"
              alt="5"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/6.jpg"
              alt="6"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/7.jpg"
              alt="7"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

const Slide2 = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center gap-2">
        <h1 className="text-xl font-semibold">Vertical</h1>
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="w-80 px-6 h-80"
        >
          <SwiperSlide>
            <img
              src="images/slide1/1.jpg"
              alt="1"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/2.jpg"
              alt="2"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/3.jpg"
              alt="3"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/4.jpg"
              alt="4"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/5.jpg"
              alt="5"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/6.jpg"
              alt="6"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/7.jpg"
              alt="7"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

const Slide3 = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center gap-2 py-10">
        <h1 className="text-xl font-semibold">Effect cube & Loop</h1>
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          loop={true}
          pagination={true}
          modules={[Pagination, EffectCube]}
          className="w-full max-w-96 px-8"
        >
          <SwiperSlide>
            <img
              src="images/slide1/1.jpg"
              alt="1"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/2.jpg"
              alt="2"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/3.jpg"
              alt="3"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/4.jpg"
              alt="4"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/5.jpg"
              alt="5"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/6.jpg"
              alt="6"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slide1/7.jpg"
              alt="7"
              className="w-full rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

const Slide4 = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center gap-2 py-10">
        <h1 className="text-xl font-semibold">Effect coverflow & autoplay</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={true}
          modules={[Pagination, EffectCoverflow, Autoplay]}
          className="w-full max-w-[500px] px-8"
        >
          <SwiperSlide className="w-52">
            <img
              src="images/slide1/1.jpg"
              alt="1"
              className="w-52 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52">
            <img
              src="images/slide1/2.jpg"
              alt="2"
              className="w-52 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52">
            <img
              src="images/slide1/3.jpg"
              alt="3"
              className="w-52 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52">
            <img
              src="images/slide1/4.jpg"
              alt="4"
              className="w-52 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52">
            <img
              src="images/slide1/5.jpg"
              alt="5"
              className="w-52 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52">
            <img
              src="images/slide1/6.jpg"
              alt="6"
              className="w-52 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-52">
            <img
              src="images/slide1/7.jpg"
              alt="7"
              className="w-52 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

const Slide5 = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center gap-2 py-10">
        <h1 className="text-xl font-semibold">Effect flip</h1>
        <Swiper
          effect={"flip"}
          grabCursor={true}
          navigation={true}
          pagination={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, EffectFlip, Autoplay, Navigation]}
          className="w-80"
        >
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/1.jpg"
              alt="1"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/2.jpg"
              alt="2"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/3.jpg"
              alt="3"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/4.jpg"
              alt="4"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/5.jpg"
              alt="5"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/6.jpg"
              alt="6"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/7.jpg"
              alt="7"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

const Slide6 = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center gap-2 py-10">
        <h1 className="text-xl font-semibold">Effect cards</h1>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-80"
        >
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/1.jpg"
              alt="1"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/2.jpg"
              alt="2"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/3.jpg"
              alt="3"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/4.jpg"
              alt="4"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/5.jpg"
              alt="5"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/6.jpg"
              alt="6"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/7.jpg"
              alt="7"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

const Slide7 = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center gap-2 py-10">
        <h1 className="text-xl font-semibold">Effect creative</h1>
        <Swiper
          effect={"creative"}
          grabCursor={true}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="w-80"
        >
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/1.jpg"
              alt="1"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/2.jpg"
              alt="2"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/3.jpg"
              alt="3"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/4.jpg"
              alt="4"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/5.jpg"
              alt="5"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/6.jpg"
              alt="6"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
          <SwiperSlide className="w-80">
            <img
              src="images/slide1/7.jpg"
              alt="7"
              className="w-80 rounded-md cursor-grab active:cursor-grabbing"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

const Slide8 = () => {
  return (
    <>
      <div className="w-full py-10 flex flex-col items-center px-2 gap-2">
        <h1 className="text-xl font-semibold">Parallax</h1>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          grabCursor={true}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="w-full max-w-xl min-h-80 p-2 bg-zinc-600"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              backgroundImage: `url('images/slide1/4.jpg')`,
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div
              className="text-xl font-bold text-white"
              data-swiper-parallax="-300"
            >
              Slide 1
            </div>
            <div
              className="text-lg font-bold text-white"
              data-swiper-parallax="-200"
            >
              Subtitle
            </div>
            <div
              className="text-sm font-bold text-white"
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="text-xl font-bold text-white"
              data-swiper-parallax="-300"
            >
              Slide 1
            </div>
            <div
              className="text-lg font-bold text-white"
              data-swiper-parallax="-200"
            >
              Subtitle
            </div>
            <div
              className="text-sm font-bold text-white"
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="text-xl font-bold text-white"
              data-swiper-parallax="-300"
            >
              Slide 1
            </div>
            <div
              className="text-lg font-bold text-white"
              data-swiper-parallax="-200"
            >
              Subtitle
            </div>
            <div
              className="text-sm font-bold text-white"
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
