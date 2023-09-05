import Image from "next/image";
import EddingLogo from "@/public/sponsor/edding-logo-dynamic-fest.jpg";
import JomaLogo from "@/public/sponsor/joma-sports-logo-dynamic-fest.jpg";
import LevisLogo from "@/public/sponsor/levis-logo-dynamic-fest.jpg";
import UnderArmourLogo from "@/public/sponsor/ua-logo-dynamic-fest.jpg";
import HopiLogo from "@/public/sponsor/hopi-logo-dynamic-fest-sponsor.svg";
import AdidasLogo from "@/public/sponsor/adidas-logo-dynamic-fest.jpg";
import MacfitLogo from "@/public/sponsor/macfit-logo-dynamic-fest.jpg";
import TirtilKids from "@/public/sponsor/tirtilkids-logo-dynamic-fest.jpg";
import AsicsLogo from "@/public/sponsor/asics-logo-dynamic-fest.jpg";
import LifeClubLogo from "@/public/sponsor/life-club-logo-dynamic-fest.jpg";
import SkechersLogo from "@/public/sponsor/skechers-logo-dynamic-fest.jpg";
import PumaLogo from "@/public/sponsor/puma-logo-dynamic-fest.jpg";
import DCLogo from "@/public/sponsor/dc-logo-dynamic-fest.jpg";
import EmuLogo from "@/public/sponsor/emu-logo-dynamic-fest.jpg";
import MerrelLogo from "@/public/sponsor/merrell-logo-dynamic-fest.jpg";

const SponsorImages = [
  {
    name: "Hopi",
    imageUrl: HopiLogo,
    alt: "Hopi",
  },
  {
    name: "Adidas",
    imageUrl: AdidasLogo,
    alt: "Adidas",
  },
  {
    name: "Asics",
    imageUrl: AsicsLogo,
    alt: "Asics",
  },
  {
    name: "DC",
    imageUrl: DCLogo,
    alt: "DC",
  },
  {
    name: "Edding",
    imageUrl: EddingLogo,
    alt: "Edding",
  },
  {
    name: "Emu",
    imageUrl: EmuLogo,
    alt: "Emu",
  },
  {
    name: "Joma",
    imageUrl: JomaLogo,
    alt: "Joma",
  },
  {
    name: "Levis",
    imageUrl: LevisLogo,
    alt: "Levis",
  },
  {
    name: "Life Club",
    imageUrl: LifeClubLogo,
    alt: "Life Club",
  },
  {
    name: "MacFit",
    imageUrl: MacfitLogo,
    alt: "MacFit",
  },
  {
    name: "Merrel",
    imageUrl: MerrelLogo,
    alt: "Merrel",
  },
  {
    name: "Puma",
    imageUrl: PumaLogo,
    alt: "Puma",
  },
  {
    name: "Skechers",
    imageUrl: SkechersLogo,
    alt: "Skechers",
  },
  {
    name: "Tırtıl Kids",
    imageUrl: TirtilKids,
    alt: "Tırtıl Kids",
  },
  {
    name: "Under Armour",
    imageUrl: UnderArmourLogo,
    alt: "Under Armour",
  },
];

const Sponsor = () => {
  return (
    <section id="partnerler">
      <div className="mx-auto max-w-7xl overflow-hidden py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="">
          <h1 className="text-center text-2xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
            FESTİVALİN DİNAMİK DESTEKÇİLERİ
          </h1>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="py-22 sm:py-20">
              {" "}
              <div className="-mx-6 grid grid-cols-2 gap-4 overflow-hidden px-6 py-8 sm:mx-0 sm:gap-8 sm:rounded-2xl md:grid-cols-4">
                {SponsorImages.map((sponsor, index) => (
                  <div
                    key={index}
                    className={sponsor.name === "Hopi" ? "col-span-full" : ""}
                  >
                    <Image
                      className={
                        sponsor.name === "Hopi"
                          ? "aspect-square max-h-96 w-full border-2 border-black object-contain"
                          : "aspect-[1/1] w-full border-2 border-black object-cover"
                      }
                      src={sponsor.imageUrl}
                      alt={sponsor.alt}
                      width={158}
                      height={48}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
