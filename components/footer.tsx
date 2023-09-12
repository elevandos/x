import Image from "next/image";
import BoynerLogo from "@/public/boyner-logo-dark-bg.svg";
import AppStoreLogo from "@/public/assets/kit/app-store-logo.png";
import GooglePlayLogo from "@/public/assets/kit/google-play-logo.png";
import AppGalleryLogo from "@/public/assets/kit/app-gallery-logo.png";

const navigation = {
  main: [
    { name: "Boyner Hakkında", href: "https://kurumsal.boyner.com.tr/" },
    { name: "Kullanım Koşulları" 
      [Sözleşme Metni]
     },
  ],
};

const apps = [
  {
    name: "App Store",
    href: "#",
    imageSrc: AppStoreLogo,
    imageAlt: "App Store",
  },
  {
    name: "Google Play",
    href: "#",
    imageSrc: GooglePlayLogo,
    imageAlt: "Google Play",
  },
  {
    name: "App Gallery",
    href: "#",
    imageSrc: AppGalleryLogo,
    imageAlt: "App Gallery",
  },
];

export default function Footer() {
  return (
    <footer className="relative flex flex-col justify-between space-y-10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center space-y-10 overflow-hidden pt-32 sm:px-6 lg:px-8">
        <div className="mb-16 flex items-center justify-center p-2">
          <Image src={BoynerLogo} alt="" className="h-auto w-64 lg:w-96" />
        </div>
        {/* <div className="flex flex-wrap justify-center space-x-6 p-2">
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.href}
              className="mb-2 text-sm leading-6 text-white hover:text-gray-900"
            >
              <Image
                src={app.imageSrc}
                alt={app.imageAlt}
                className="h-auto w-40"
              />
            </a>
          ))}
        </div> */}
        <nav
          className="flex justify-center space-x-3 text-xs tracking-tighter"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-white hover:text-muted-foreground"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
