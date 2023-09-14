import BoynerLeft from "@/public/assets/boyner-dynamic-fest-left.jpg";
import Image from "next/image";
import BoynerLogo from "@/public/boyner-logo-light.svg";
import LineBg from "@/public/assets/kit/line-bg.png";
import PhoneQRIcon from "@/public/assets/kit/phone-qr.svg";
import TicketIcon from "@/public/assets/kit/tickets-qr.svg";
import QRCode from "@/public/assets/kit/qr-code-1.svg";
import GooglePlay from "@/public/assets/kit/playstore.png";
import AppStore from "@/public/assets/kit/appstore.png";
import AppGallery from "@/public/assets/kit/huaweistore.png";

function VideoContent() {
  return (
    <div className="mt-4 p-4 md:mt-0">
      <div className="flex justify-center">
        <iframe
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/jWu30m_3XkA"
          title="Yılın En Dinamik Festivali Çok Yakında!"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}
function ResponsiveImages() {
  return (
    <div className="flex items-center justify-center">
      {/* Images for larger screens */}
      <div className="hidden items-center justify-center gap-5 sm:flex">
        <Image
          src={PhoneQRIcon}
          alt="Phone QR Icon"
          className="mt-10 h-16 w-16"
        />
        <Image src={QRCode} alt="QR Code" className="mt-10" />
        <Image src={TicketIcon} alt="Ticket Icon" className="mt-10 h-16 w-16" />
      </div>

      {/* Images for mobile screens */}
      <div className="flex flex-wrap justify-center sm:hidden">
        <Image src={GooglePlay} alt="Google Play Logo" className="mt-10" />
        <Image src={AppStore} alt="App Store Logo" className="mt-10" />
        <Image src={AppGallery} alt="App Galery Logo" className="mt-10" />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section>
      <div className="mx-auto max-w-7xl pt-4 sm:pt-12">
        <VideoContent />
      </div>
      <div className="mt-16 flex w-full items-center justify-center">
        <Image src={BoynerLogo} alt="" className="h-auto w-64 lg:w-96" />
      </div>
      <div className="relative flex min-h-[4rem] w-full items-center justify-center">
        <div className="hidden w-full md:block lg:block">
          <Image className="w-full" src={LineBg} alt="" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-xl font-extrabold md:text-2xl lg:text-4xl">
            YILIN EN DİNAMİK FESTİVALİ
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="py-0">
          <div className="px-2 text-center text-lg sm:text-xl">
            <p className="pb-4 font-extrabold">
              23-24 Eylül, Kemerburgaz Kent Ormanı YBY WOODS Yaşam ve Etkinlik
              Alanı
            </p>
            <p className="pb-2">
              Sporun müzikle, iyi yaşamın eğlence ve deneyimle buluştuğu yepyeni
              bir festival deneyimine hazır olun!
            </p>
            <div className="flex flex-col items-center justify-center pb-6">
              <p className="max-w-4xl pb-2 text-center">
                Koşudan yogaya, kangoo jump&apos;tan spining&apos;e farklı spor
                aktivitelerinin, sağlıklı beslenmeden nefes ve
                mindfulness&apos;a ilham veren konuşmaların, bedene ve ruha iyi
                gelen atölyelerin, dans, müzik ve sürpriz birçok farklı
                deneyimin yer alacağı festivalde dinamizmi maksimum seviyede
                yaşamak için 23-24 Eylül&apos;ü ajandanıza kaydedin!
                <br/>
                </p>
            </div>
            <p>
            Festivale ücretsiz katılım için detaylar çok yakında burada!
             <br/> <br/>
            </p>
            <div>
              <h1 className=" inset-0 flex items-center justify-center text-xl font-extrabold md:text-2xl lg:text-3xl">
                UYGULAMAYI İNDİR, ÜCRETSİZ KATIL!
              </h1>
            </div>
            <div>
              <div>
                <div className="flex items-center justify-center">
                  <ResponsiveImages />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
