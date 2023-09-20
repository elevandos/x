import Image from "next/image";
import speaker1 from "@/public/assets/konuşmacılar/aysegul-coruhlu-konusmaci-dynamic-fest-1.jpg";
import speaker2 from "@/public/assets/konuşmacılar/aysu-duz-konusmaci-dynamic-fest.jpg";
import speaker3 from "@/public/assets/konuşmacılar/aysu-turkoglu-konusmaci-dynamic-fest-1.jpg";
import speaker4 from "@/public/assets/konuşmacılar/beyza-necip-konusmaci-dynamic-fest.jpg";
import speaker5 from "@/public/assets/konuşmacılar/dilara-kocak-konusmaci-dynamic-fest.jpg";
import speaker6 from "@/public/assets/konuşmacılar/ece-vahapoglu-konusmaci-dynamic-fest.jpg";
import speaker7 from "@/public/assets/konuşmacılar/erhan-ali-yilmaz-konusmaci-dynamic-fest.jpg";
import speaker8 from "@/public/assets/konuşmacılar/kumsal-kurucu-konusmaci-dynamic-fest.jpg";
import speaker9 from "@/public/assets/konuşmacılar/esin-aksoy-konusmaci-dynamic-fest-1.jpg";
import speaker10 from "@/public/assets/konuşmacılar/orcun-kurum-konusmaci-dynamic-fest.jpg";
import speaker11 from "@/public/assets/konuşmacılar/ozlem-akkas-konusmaci-dynamic-fest.jpg";
import speaker12 from "@/public/assets/konuşmacılar/tugrul-cagri-yilmazer-konusmaci-dynamic-fest-1.jpg";
import speaker13 from "@/public/assets/konuşmacılar/umut-gursoy-konusmaci-dynamic-fest.jpg";
import speaker14 from "@/public/assets/konuşmacılar/beceste-seber-konusmaci-dynamic-fest.jpg";
import TugbaDanismazImg from "@/public/assets/konuşmacılar/tugba-danismaz-konusmaci-dynamic-fest.jpg";
import OmerYesilbasImg from "@/public/assets/konuşmacılar/omer-yesilbas-konusmaci-dynamic-fest.jpg";
import OzgurTetikImg from "@/public/assets/konuşmacılar/ozgur-tetik-konusmaci-dynamic-fest.jpg";

import Flyer from "@/public/assets/kit/calisma-yuzeyi-10.png";
import Gallery from "./gallery";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const people = [
  {
    name: "Aysu Türkoğlu",
    role: "ULTRA MARATON SPORCUSU",
    imageUrl: speaker3,
    bio: [
      `Kuzey Kanalı’nı yüzerek geçen en genç Türk sporcu ve ilk Türk kadın olan Milli Yüzücü Aysu Türkoğlu; 2 Mayıs 2001 tarihinde Bodrum'da dünyaya geldi. Ege Üniversitesi Spor Bilimleri Fakültesi Antrenörlük Bölümü’nde 3. Sınıf öğrencisi olarak öğrenimine devam eden milli sporcu, yüzmeye ablasından aldığı ilham ile 7 yaşında Bodrum Spor Yüzme Kulübü’nde başladı.`,
      `14 yaşından itibaren yüzmenin açık su branşıyla başarılar elde etmeye devam eden Türkoğlu, profesyonel kariyerine katılmış olduğu uluslararası Aquamasters yüzme yarışmasında 6km’lik parkurda kadınlar klasman birincisi olarak başladı.`,
      `Kuzey Kanalı’nı geçerek elde ettiği başarı sonrasında sıradaki hedefi “The Ocean 7” olarak belirledi. Kuzey Kanalı, Cook Boğazı, Moloka’ i Kanalı, İngiliz Kanalı (Manş Geçişi), Catalina Kanalı, Tsugaru Boğazı ve Cebelitarık Boğazı'nı içeren bu yeni hedef kapsamında; 11 saat 48 dakika ile dünyada bu etabı tamamlayan 22 sporcudan biri oldu. Bu başarıya imza atan tek Türk sporcu olarak Kuzey Kanalı’nı geçmeyi başaran Türkoğlu; “The Ocean 7” hedefi için yoğun antrenman programı ve çalışmalarına devam ediyor.`,
    ],
  },
  {
    name: "Ayşegül Çoruhlu",
    role: "ANTIAGING VE BİYOKİMYA UZMANI",
    imageUrl: speaker1,
    bio: [
      `Uzun Ömür Uzmanı olarak tanınan ve sağlıklı yaşam alanındaki öncü isimler arasında yer alan Ayşegül Çoruhlu, 
    1994 yılında İstanbul Tıp Fakültesi’nden mezun oldu. Şişli Etfal Hastanesi’nde Biyokimya alanında eğitimini tamamlarken eş zamanlı olarak Biyomedikal Mühendisliği MasterProgramına iki yıl devam etti.`,
      `2000 yılında Amerikan Hastanesi’nde Biyokimya Uzmanı olarak çalışmaya başladıktan sonra, Intemed Polikliniği’nde Labarotuvar Şefi olarak kariyerine devam eden Dr. Çoruhlu; antioksidan, gıda duyarlılığı, 
    kişiye özel hormon ve genetik testleri gibi ileri anti-aging yaklaşımlarını ilk uygulayanhekimlerden biri olarak sağlıklı yaşamın olmazsa olmazı konular ile ilgili eczacılara ve doktorlara seminerler verdi.`,
      `Dr. Çoruhlu’nun “Alkali Diyet” ve “Tokuz Ama Açız” adıyla kaleme aldığı kitapları mevcuttur. Bugün;bir özel üniversitede beslenme konusunda ders, kurumsal şirketlerde ve çeşitli sağlık yaşamorganizasyonlarında da Alkali Yaşam seminerleri vermektedir.`,
    ],
  },
  {
    name: "Berceste Şeber",
    role: "KLİNİK SPOR PSİKOLOĞU",
    imageUrl: speaker14,
    bio: [
      `Berceste Şeber, 2015 yılında Bahçeşehir Üniversitesi Psikoloji bölümünden yüksek onur derecesi ile mezun oldu. Ardından Bahçeşehir Üniversitesi Klinik Psikoloji yüksek lisans Programı’nı tamamlayarak Uzman Klinik Psikolog ünvanı ile çalışmalarını sürdürmeye başladı.`,
      `2017 senesinde, yüksek lisansını tamamladıktan sonra Marmara Üniversitesi’nde Spor Psikolojisi alanında çalışmak üzere Spor Yönetim Bilimleri (Spor Psikolojisi) Doktora Programı’na kabul edildi. 2021 yılında Avrupa Spor Psikolojisi Federasyonu (European Federation of Sport Psychology) tarafından Uygulamalı Spor Psikolojisi alanında Uzman ünvanını (SASP-FEPSAC) aldı. Barça Innovation Hub’ta verilen ‘Atletlerin Gelişimi için Spor Psikolojisi eğitimini tamamladı.`,
      `Pek çok spor kulübünde spor psikoloğu olarak çalışan eski milli tenisçi Şeber, her ay düzenli olarak Deplase Dergi’ye spor içerikleri üreterek okuyucusuyla buluşuyor ve spor psikolojisi alanında çalışmalarını sürdürmeye devam ediyor.`,
    ],
  },
  {
    name: "Ece Vahapoğlu",
    role: "YAZAR ve SAĞLIKLI YAŞAM KOÇU",
    imageUrl: speaker6,
    bio: [
      `8 Mart 1978’de İstanbul’da doğan Ece Vahapoğlu, İşletme okuduğu The American University of Rome’u 2000 yılında birincilikle bitirdi. Fransa IEHEI’de AB ve Uluslararası İlişkiler yüksek lisansı yaptı. 2001 yılında JC Derneği tarafından “Türkiye’nin En Başarılı Genci” seçildi. ABD Dışişleri Bakanlığı’nın ‘Uluslararası Yükselen Yıldızlar Liderlik Programı’na katıldı.`,
      `Çok satanlar listelerinde yer alan dokuz kişisel gelişim kitabı ve bir romanı var. İlk kitabı 23 yaşındayken yayınlandı. ÖTEKİ adlı romanı altı dile çevrildi.`,
      `Çeşitli TV kanallarında (NTV, CNBC-e, SkyTürk, CİNE5, ATV) programlar hazırlayıp sundu. Sabah, Akşam ve Takvim gazetelerinde köşe yazarlığı ve röportajlar yaptı. Sosyal medyada ve bloğunda sağlıklı yaşamla ilgili bilgiler paylaşıyor.`,
      `Spor, eğitim, sağlık ve kültür alanında sosyal sorumluluk projelerinde yer alıyor. İstanbul Aydın Üniversitesi’nde “Radyo ve TV Sunuculuğu” dersi verdi. Gençlik ve Spor Bakanlığı’na bağlı Herkes İçin Spor Federasyonu’ndan sertifikalı Wellness ve Yoga Eğitmenliği’nin yanı sıra Hamile ve Çocuk Yogası Eğitmenliği uzmanlık alanları arasında yer alıyor.`,
      `Sağlıklı Yaşam, Spor ve Beslenme, Wellness, Yoga ve Nefes, Hamile Yogası, Ofis Yogası workshop ve seminerleri veriyor.`,
      `Fitness, pilates, yoga ve koşu ile ilgili spor etkinlikleri yapıyor. Spor, eğitim ve sağlık alanında sosyal sorumluluk projelerinde yer alıyor.`,
      `Ulusal ve uluslararası pek çok etkinlikte moderatör sunuculuk yapıyor. Türkçe, İngilizce, Fransızca ve İtalyanca sunuculuk yapıyor.`,
      `Ece Vahapoğlu Gençlik ve Spor Bakanlığı desteğiyle Dünyanın En Zor ve En Yüksek Maratonu olan Everest Maratonu'na katılan ilk Türk olarak yarışı Kadınlar'da 4. bitirerek ülkesine madalya kazandırdı.`,
    ],
  },
  {
    name: "Erhan Ali Yılmaz",
    role: "MINDFULNESS EĞİTMENİ",
    imageUrl: speaker7,
    bio: [
      `2015 yılında Mindfulness kavramını Türkiye’de duyurmak ve yaşama pozitif anlamda dokunmak için Mindfulness Academy’i kuran Erhan Ali Yılmaz; son 10 senede Miami, Stockholm, Riga, Kiev ve İstanbul'da yaşadı. Bu süre zarfında bir yandan dünyanın tanınan markalarına hizmet verdi; uluslararası pek çok üniversite ve konferansa eğitimci ve konuşmacı olarak katıldı.`,
      `Uyguladığı Mindfulness egzersizlerinin yaşamını olumlu anlamda değiştiren bir dönüm noktası olduğunu düşünen Yılmaz, kariyerinin devam eden yıllarında profesyonel dünyadan arta kalan zamanını mindfulness kavramı üzerine yaptığı çalışmalara adadı. 2016 yılından itibaren Türkiye'de ve uluslararası alanda 1200'ü kurumsal yönetici olmak üzere 15.000 üzerinde kişiye Mindfulness eğitimi verdi. `,
      `Bugün Mindfulness Academy’de yurt içi ve yurt dışında mindfulness temelli eğitimler vermeye devam eden ve “Mindfulnes Alliance”’ın da asıl üyelerinden olan Erhan Ali Yılmaz, Alliance bünyesinde uluslararası arenadaki etkinliklerde konuşmacı olarak yer alıyor.`,
    ],
  },
  {
    name: "Esin Aksoy",
    role: "PERFORMANS ve İYİ YAŞAM DANIŞMANI",
    imageUrl: speaker9,
    bio: [
      `Kariyerine; NLP Koçu, Eğitmen ve Danışman olarak devam eden Esin Aksoy, 2001 yılında Yıldız Teknik Üniversitesi Matematik Mühendisliği Bölümü’nden mezun olduktan sonra birçok kurumda çalıştı. `,
      `Mindfulness, storytelling, şiddetsiz iletişim, nefes, ruhsal rehberlik, OSHO eğitimleri, transaksiyonel analiz alanlarında aldığı eğitimler ile deneyimlediği teknikleri birleştirerek kendi koçluk yolculuğunu başlattı.`,
      `2010-2011 yıllarında sürdürdüğü Vip Direktörlüğü görevinden ayrıldıktan sonra kurumsal eğitmenlik ve bireysel danışmanlık yapmaya başlayan Aksyon bugün; Bireysel Gelişim ve Bütünsel Dönüşümsel, Motivasyon alanlarında verdiği kurumsal eğitimler ile gelişim alanındaki çalışmalarını sürdürüyor.`,
    ],
  },
  {
    name: "Kumsal Kurucu",
    role: "DİYETİSYEN",
    imageUrl: speaker8,
    bio: [""],
  },
  {
    name: "Orçun Kürüm",
    role: "UZMAN DİYETİSYEN",
    imageUrl: speaker10,
    bio: [
      `Orçun Kürüm, 2013 yılında ise Colorado’da Amerika’nın saygın kurumlarından “International Society of Sports Nutrition” sınavlarına katılarak bu kurumun onaylı sporcu beslenmesi uzmanı olmaya hak kazanan ilk Türk diyetisyendir. `,
      `Aynı zamanda 4 senedir Yeni Yüzyıl Üniversitesi’nde Sporcu Beslenmesi üzerine ders veriyor. 2018-2019 yıllarında Ulus Liv Hastanesinde sporcu beslenmesi birini de yöneten Kürüm, bir çok yerli ve uluslararası firmaya ürün geliştirme ve iletişim konularında iş birliği yapmaya devam ediyor. 10 senedir Nişantaşı’ndaki ofisinde hem bireysel ve kurumsal danışmanlıklarını sürdürürken farklı mecralarda tüketicilere faydalı içerikler üreterek toplum sağlığı adına eğitici çalışmalarını sürdürüyor.`,
    ],
  },
  {
    name: "Ömer Yeşilbaş",
    role: "DANSFABRİKA KURUCUSU",
    imageUrl: OmerYesilbasImg,
    bio: [""],
  },
  {
    name: "Özgür Tetik",
    role: "MERRELL TÜRKİYE HEAD COACH",
    imageUrl: OzgurTetikImg,
    bio: [""],
  },
  {
    name: "Tuğba Danışmaz",
    role: "MİLLİ ATLET",
    imageUrl: TugbaDanismazImg,
    bio: [""],
  },
  {
    name: "Tuğrul Çağrı Yılmazer",
    role: "FITNESS EĞİTMENİ",
    imageUrl: speaker12,
    bio: [
      `Life Fitness Academy Master Trainer’ı ve Asics Marka Elçisi Tuğrul Çağrı Yılmazer, “High Intensity Interval Training – Yüksek Yoğunluklu Aralıklı Antrenman” (HIIT) modelini; Taş Devri döneminde mağara adamının avlanma ritüeline benzetiyor. Hızlı kalori yakmak ve sağlıklı yaşamak isteyenlere etkili ve özgün antrenman önerileri sunuyor.`,
      `Sosyal medyada çeşitli mecralar üzerinden Mağara Adamı mahlasıyla yaptığı paylaşımlarla, modern yaşam alışkanlıkları sebebiyle hareketsiz kalan ve yüksek kalorili yiyeceklerle beslenen günümüz insanına, özünde bir avcı toplayıcı olduğunu ve ataları gibi yaşaması gerektiğini hatırlatan paylaşımlar yaparak herkesi hareket etmeye davet ediyor.`,
    ],
  },
];

function SectionDividerSpeakers() {
  return (
    <div className="custom-shape-divider-bottom-1693430661">
      <svg
        className="border-0"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="shape-fill border-0"
        ></path>
      </svg>
    </div>
  );
}

const Speakers = () => {
  return (
    <section id="konusmacilar" className="relative w-full bg-black">
      <div className="w-full overflow-hidden px-4 py-24 sm:px-0 sm:py-32 sm:pt-0">
        <div className="w-full py-24 sm:py-32 sm:pt-24">
          <h2 className="text-center text-4xl font-extrabold tracking-tight text-white ">
            FESTİVALİN İLHAM VEREN KONUŞMACILARI
          </h2>
          {/* <h5 className="mt-2 text-center text-lg font-semibold tracking-tight text-white opacity-80 ">
            
          </h5> */}
          <div className="mx-auto max-w-7xl">
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-4"
            >
              {people.map((person) => (
                <li
                  key={person.name}
                  className="text-boyner-neon-text hover:text-white "
                >
                  <Dialog>
                    <DialogTrigger>
                      <Image
                        className="hover:bg-ray-900 aspect-[1/1] w-full object-cover transition-all duration-300 ease-in-out hover:scale-110"
                        src={person.imageUrl}
                        alt=""
                      />
                      <h3 className="mt-6 text-left text-lg font-bold leading-8 tracking-tight transition-all duration-300 ">
                        {person.name}
                      </h3>
                      <p className="text-left text-base leading-7 text-white">
                        {person.role}
                      </p>
                    </DialogTrigger>
                    <DialogContent className="max-h-[600px] overflow-auto">
                      <DialogHeader>
                        <DialogTitle>{person.name}</DialogTitle>
                      </DialogHeader>
                      <DialogDescription>
                        {person.bio.map((paragraph, index) => (
                          <p
                            key={index + "-konusmaci-paragraph"}
                            className="my-6"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-4 w-full pt-24">
            <Image className="h-full w-full" src={Flyer} alt=""></Image>
          </div> 
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-4xl font-extrabold tracking-tight text-white ">
              FESTİVAL MODASI
            </h2>
            <div className="my-6 p-4 ">
              <Gallery />
            </div>
            <h2 className="text-center text-2xl font-extrabold tracking-tight text-white lg:text-3xl ">
              FESTİVAL MODASINI %10 İNDİRİMLE YAŞAMAK İÇİN{" "}
              <a
                href="https://www.boyner.com.tr/content/dynamic-festival"
                target="_blank"
                rel="noopener noreferrer"
                className="text-boyner-about underline"
              >
                TIKLA!
              </a>
            </h2>
          </div>
        </div>
      </div>
      <SectionDividerSpeakers />
    </section>
  );
};

export default Speakers;
