"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
const UserTestimonial = () => {
  let sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="md:py-6 bg-indigo-600 ">
      <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            What Our Users Say
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
          Our users consistently praise our intuitive interface and reliable customer service, 
          highlighting the seamless experience and exceptional support they receive.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-8">
          <div className="tiny-three-item ">
            <Slider
              ref={(slider) => (sliderRef.current = slider)}
              {...settings}
            >
              <div className="tiny-slide text-center">
                <div className="customer-testi cursor-e-resize">
                  <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                    <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                    <p className="text-slate-400">
                      {" "}
                      It seems that only fragments of the original text remain
                      in the Lorem Ipsum texts used today.{" "}
                    </p>
                    <ul className="list-none mb-0 text-amber-400 mt-3">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center mt-5">
                    <Image
                      src="/assets/images/client/01.jpg"
                      className="size-14 rounded-full shadow-md mx-auto"
                      alt=""
                      height={100}
                      width={100}
                    />
                    <h6 className="mt-2 font-semibold">Calvin Carlo</h6>
                    <span className="text-slate-400 text-sm">Manager</span>
                  </div>
                </div>
              </div>

              <div className="tiny-slide text-center">
                <div className="customer-testi cursor-e-resize">
                  <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                    <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                    <p className="text-slate-400">
                      {" "}
                      The most well-known dummy text which is said to have
                      originated in the 16th century.{" "}
                    </p>
                    <ul className="list-none mb-0 text-amber-400 mt-3">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center mt-5">
                    <Image
                      src="/assets/images/client/02.jpg"
                      className="size-14 rounded-full shadow-md mx-auto"
                      alt=""
                      height={100}
                      width={100}
                    />
                    <h6 className="mt-2 font-semibold">Christa Smith</h6>
                    <span className="text-slate-400 text-sm">Manager</span>
                  </div>
                </div>
              </div>

              <div className="tiny-slide text-center">
                <div className="customer-testi cursor-e-resize">
                  <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                    <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                    <p className="text-slate-400">
                      {" "}
                      One disadvantage of Lorum Ipsum is that in Latin certain
                      letters appear more frequently than others.{" "}
                    </p>
                    <ul className="list-none mb-0 text-amber-400 mt-3">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center mt-5">
                    <Image
                      src="/assets/images/client/03.jpg"
                      className="size-14 rounded-full shadow-md mx-auto"
                      alt=""
                      height={100}
                      width={100}
                    />
                    <h6 className="mt-2 font-semibold">Jemina CLone</h6>
                    <span className="text-slate-400 text-sm">Manager</span>
                  </div>
                </div>
              </div>

              <div className="tiny-slide text-center">
                <div className="customer-testi cursor-e-resize">
                  <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                    <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                    <p className="text-slate-400">
                      {" "}
                      Thus, Lorem Ipsum has only limited suitability as a visual
                      filler for German texts.{" "}
                    </p>
                    <ul className="list-none mb-0 text-amber-400 mt-3">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center mt-5">
                    <Image
                      src="/assets/images/client/04.jpg"
                      className="size-14 rounded-full shadow-md mx-auto"
                      alt=""
                      height={100}
                      width={100}
                    />
                    <h6 className="mt-2 font-semibold">Smith Vodka</h6>
                    <span className="text-slate-400 text-sm">Manager</span>
                  </div>
                </div>
              </div>

              <div className="tiny-slide text-center">
                <div className="customer-testi cursor-e-resize">
                  <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                    <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                    <p className="text-slate-400">
                      {" "}
                      There is now an abundance of readable dummy texts. These
                      are usually used when a text is required.{" "}
                    </p>
                    <ul className="list-none mb-0 text-amber-400 mt-3">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center mt-5">
                    <Image
                      src="/assets/images/client/05.jpg"
                      className="size-14 rounded-full shadow-md mx-auto"
                      alt=""
                      height={100}
                      width={100}
                    />
                    <h6 className="mt-2 font-semibold">Cristino Murfi</h6>
                    <span className="text-slate-400 text-sm">Manager</span>
                  </div>
                </div>
              </div>

              <div className="tiny-slide text-center">
                <div className="customer-testi cursor-e-resize">
                  <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                    <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                    <p className="text-slate-400">
                      {" "}
                      According to most sources, Lorum Ipsum can be traced back
                      to a text composed by Cicero.{" "}
                    </p>
                    <ul className="list-none mb-0 text-amber-400 mt-3">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center mt-5">
                    <Image
                      src="/assets/images/client/06.jpg"
                      className="size-14 rounded-full shadow-md mx-auto"
                      alt=""
                      height={100}
                      width={100}
                    />
                    <h6 className="mt-2 font-semibold">Cristino Murfi</h6>
                    <span className="text-slate-400 text-sm">Manager</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UserTestimonial;
