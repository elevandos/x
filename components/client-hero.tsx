"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "@/public/boyner-logo-dark-bg.svg";
import HeroImage from "@/public/assets/kit/hero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Button } from "./ui/button";

const navigation = [
  { name: "Program", href: "#program" },
  { name: "Konuşmacılar", href: "#konusmacilar" },
  { name: "Sponsorlar", href: "#partnerler" },
  { name: "Sıkça Sorulan Sorular", href: "#sss" },
  { name: "Nasıl Ulaşırım", href: "#ulasim" },
];

function LogoComponent() {
  return (
    <a href="#" className="-m-1.5 flex items-center justify-center p-1.5 ">
      <span className="sr-only">Boyner Dynamic Fest Logo</span>
      <Image
        className="h-36 w-36 object-contain lg:h-48 lg:w-48"
        src={Logo}
        alt="boyner-logo"
      />
    </a>
  );
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="fixed z-[100] flex h-20 min-h-[5rem] w-full items-center justify-between bg-black p-6 px-4 duration-300 ease-in-out  md:px-8 lg:h-24 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <LogoComponent />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Menüyü Aç</span>
              <Bars3Icon className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-md font-bold uppercase leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pointer-events-none hidden lg:flex lg:flex-1 lg:justify-end">
            <Button
              className="pointer-events-none hidden cursor-not-allowed"
              variant="outline"
            >
              ÜCRETSİZ KATIL
              <span className="ms-2" aria-hidden="true">
                &rarr;
              </span>
            </Button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/98 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <LogoComponent />
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Menüyü Kapat</span>
                <XMarkIcon className="h-10 w-10" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-16 flow-root">
              <div className="-my-6  divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block px-3 py-2 text-base font-extrabold uppercase leading-7 text-white hover:text-boyner-about"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="relative isolate mb-4 mt-6 h-80 overflow-hidden pt-14 sm:h-[50vh] md:mb-0 lg:h-screen">
        <Swiper modules={[Navigation]} navigation>
          <SwiperSlide>
            <Image
              className="absolute inset-0 h-full w-full"
              src={HeroImage}
              alt="hero"
              layout="fill"
            />
          </SwiperSlide>
         <SwiperSlide>
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={HeroImage}
              alt="hero"
              layout="fill"
            />
          </SwiperSlide>
                   <SwiperSlide>
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={HeroImage}
              alt="hero"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={HeroImage}
              alt="hero"
              layout="fill"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
