import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Festival tarihleri ve saatleri nedir?",
    answer: `Boyner Dynamic Fest heyecanı 23-24 Eylül tarihlerinde 09:00-18:00 saatleri arasında yaşanacak.`,
  },
  {
    question: `Festivale katılım ücretli mi?`,
    answer: `Boyner Dynamic Fest’e ücretsiz bir şekilde katılım sağlayabilirsin. Yapman gereken tek şey IOS ve Android’te ücretsiz olarak yer alan Boyner Dynamic Fest uygulamasını indirmek ve kayıt olmak. Kayıt sonrasında oluşturacağın QR kod ile festival alanına giriş sağlayabilir ve festival enerjisini doyasıya yaşayabilirsin.`,
  },
  {
    question: `Festival alanında bizi neler bekliyor?`,
    answer: `Festival alanındaki Dinamik Sahne, Değişim Sahnesi, Dönüşüm Sahnesi, Enerji Zone, Sinerji Zone ve çocuklara özel alanlar ile etkinliğin programı iki gün boyunca bol hareket, dinamizm ve eğlence içeriyor. 
    \n\nBoyner Dynamic Fest programında dinamik spor antrenmanları, keyifli söyleşiler, basketbol ve kaykay gösterileri, gün boyu sürecek farklı içerikte atölye ve etkinlikler, müzik ve daha fazlasını bulacaksın. Oluşturduğumuz Kids’ Zone alanı ile çocukların keyifli vakit geçireceği etkinlikler de olacak.`,
  },
  {
    question: `Festivaldeki alan içi etkinlikler ücretli midir?`,
    answer: `Festivalin dinamizm ve enerjisini doyasıya yaşatabilmek adına Boyner Dynamic Fest’teki tüm etkinlikler katılımı ücretsiz olarak tasarladık. Sadece  atölye ve koşu gibi etkinliklerimiz kontenjanla sınırlı olduğundan, katılım göstermek istersen etkinlik alanındaki görevli arkadaşlarımızdan bilgi alabilirsin. Etkinliklerin hangi sahnede ne zaman gerçekleşeceğini öğrenmek için de Boyner Dynamic Fest  mobil uygulamasını telefonuna indirmen yeterli.`,
  },
  {
    question: `Bu etkinliklere nasıl katılabilirim?`,
    answer: `Boyner Dynamic Fest mobil uygulamasını indirerek etkinliklerin nerede ve ne zaman gerçekleşeceğini öğrenebilir, etkinlik sırasında alan içi etkinliklere katılım sağlayabilirsin. Atölye ve koşu gibi etkinlikler kontenjanla sınırlı olduğundan etkinlik alanındaki görevli arkadaşlarımızdan bilgi alabilirsin.`,
  },
  {
    question: `Festival alanına nasıl ulaşabilirim?`,
    answer: `E5, TEM ve Kuzey Marmara otoyollarının tam kesişme noktasında bulunan Kemerburgaz Kent Ormanı içindeki YBY WOODS Yaşam ve Etkinlik Alanı’na; ister kendi özel aracınla ister toplu taşımayla ulaşabilirsin. Maslak ve Levent’e sadece 10km, Taksim’e ise 18km mesafede olan alanımıza dakikalar içinde gelebilirsin.`,
  },
  {
    question: `Festival alanında otopark var mı?`,
    answer: `Kemerburgaz Kent Ormanı içerisinde, etkinlik alanının yakınında  İki büyük otopark yer alıyor.`,
  },
  {
    question: `Festivale toplu taşıma ile nasıl ulaşacağım?`,
    answer: `Boyner Dynamic Festival alanı olan Kemerburgaz Kent Ormanı YBY WOODS Yaşam ve Etkinlik Alanı, İstanbul Eyüpsultan ilçesinde Kemerburgaz semtinde bulunuyor. 
    \n\n<strong>Etkinlik alanına toplu taşımayla ulaşmak için;</strong> 
    İETT’nin İstanbul’un pek çok noktasından düzenlediği seferlerle Kemerburgaz veya Göktürk’e ulaştıktan sonra <strong>48U</strong> veya <strong>48G</strong> hatlarına binerek Kemerburgaz Kent Ormanı kapısında bulunan durakta inmen yeterli olacaktır.
    
    \n\n<strong>Metro ile gelmek için;</strong> M11 no’lu Gayrettepe-İstanbul Havalimanı metro hattıyla da Kemerburgaz veya Göktürk istasyonlarına gelebilirsin.
    
    
    \n\n<strong>Anadolu yakasından geliyorsan,</strong>
    
    \n\n· Kadıköy güzergahından geliyorsan, metrobüs aracılığıyla Mecidiyeköy’e varman sonrasında aktarmayla 48R Kemerburgaz Kent Ormanı durağında inerek alana rahatlıkla ulaşabilirsin.
    Üsküdar'dan Üsküdar - Çekmeköy metrosuna binerek Altunizade istasyonunda inip metrobüsle Mecidiyeköy’e aktarma yapabilirsin. Ardından 48 R hattıyla alana ulaşım sağlayabilirsin.
    
    \n\n· Üsküdar – Beşiktaş vapurlarıyla Beşiktaş’a ulaşım sağlayarak Levent metrosunu da kullanabilirsin. Yine buradan 48R numaralı otobüse binerek Kent Ormanı durağında indiğinde Kemerburgaz Kent Ormanı'na ulaşabilirsin.
    
    \n\n<strong>Avrupa yakasından geliyorsan,</strong>
    
    \n\n· Büyükçekmece, Beylikdüzü, Avcılar, Esenyurt, Küçükçekmece, Bahçelievler taraflarından geliyorsan herhangi bir metrobüs istasyonundan metrobüse binerek Yenibosna - Kuleli'de inebilirsin. Buradan 79F numaralı otobüse binerek Mescidi - Selam durağında indikten sonra. 48G Göktürk – Mescid-i Selam ve 48U Kemerburgaz – Bahçeşehir Üniversitesi Kemerburgaz Kampüsü hatlarını kullanarak Kemerburgaz Kent Ormanı’na ulaşabilirsin.
    \n\n· Bağcılar, Güngören taraflarından geliyorsan Habipler minibüsüne binerek Mescid-i Selam durağında inebilirsin. Buradan 48G numaralı hatta binip, Kent Ormanı durağında inerek etkinlik alanına ulaşabilirsin.
    
    \n\n· Taksim'den geliyorsan Yenikapı-Hacıosman metrosuna binerek 4. Levent'te inebilirsin. Buradan 48R numaralı otobüse binerek Kent Ormanı durağında indiğinde Kemerburgaz Kent Ormanı'na ulaşabilirsin.`,
  },
  {
    question: `Festival alanından ayrılıp geri dönebilir miyim?`,
    answer: `Gün içinde festival alanına girip çıkabilirsin. Bunun için, festival alanına girişte verilecek olan festival bilekliğinin gün boyunca takılı olması gerektiğini hatırlatmak isteriz`,
  },
  {
    question: `Festivale katılımda yaş sınırı var mı? Çocuğumla beraber gelebilir miyim?`,
    answer: `Boyner Dynamic Fest’te yaş sınırı yok. Festival alanında yer alan Kids’ Zone’a tüm çocukları bekliyoruz.`,
  },
  {
    question: `Festivalde konser olacak mı?`,
    answer: `23 Eylül akşamı festival sonrası etkinlik alanında Can Bonomo ve Mavi Gri konseri gerçekleşecek. Dilersen <a href="#" target="_blank" rel="noopener noreferrer" class="underline">bu linke tıklayarak</a> konser detaylarına ulaşabilir, konser bileti satın alabilirsin.`,
  },
  {
    question: `Festival alanında yiyecek, içecek var mı?`,
    answer: `Festivalin düzenlendiği etkinlik alanında yiyecek ve içecek satışı yapan farklı mekanlar yer alıyor.`,
  },
  {
    question: `Kendi yiyecek ve içeceklerimi getirebilir miyim?`,
    answer: `Festival süresince istersen dışarıdan kendi yiyeceğini veya içeceğini getirebilirsin.`,
  },
  {
    question: `Festivalde sağlık ekibi bulunacak mı? Tıbbi yardıma ihtiyacım olursa ne yapmalıyım?`,
    answer: `Festival süresince alanda ilk yardım alanı, sağlık ekibi ve ambulansı hazır bulunduracağız. Acil tıbbi müdahale için alandaki güvenlik görevlilerinden yardım talep etmeni rica ediyoruz.`,
  },
  {
    question: `Festivale evcil hayvanım ile gelebilir miyim?`,
    answer: `Festival alanımız patili dostların katılımına da açık.`,
  },
  {
    question: `Festival alanında kayıp eşya bürosu var mı?`,
    answer: `Kaybolan ve bulunan eşyalarınız hakkında bilgi almak için festival giriş kapısından sonraki alanda konumlanan danışma noktasına gidebilirsin.`,
  },
  {
    question: `Festival alanına alınmayan eşyalar olacak mı?`,
    answer: `Festival alanına girmesine izin verilmeyen eşyaların listesi:
    \n\n· Bıçaklar ve keskin nesneler
    \n\n· Yasa dışı maddeler
    \n\n· Profesyonel ses, fotoğraf veya video ekipmanı
    \n\n· Olağandışı miktarlarda ilaç
    \n\n· Havai fişekler ve işaret fişekleri
    \n\n· Silah olarak kullanılabilecek herhangi bir nesne (keskin kalemler dahil)`,
  },
  {
    question: `Festival alanında ATM bulunuyor mu?`,
    answer: `Festival alanında ATM bulunmuyor.`,
  },
  {
    question: `Festival alanında alkol satışı olacak mı?`,
    answer: `Festival alanında herhangi bir alkol satışı olmayacak.`,
  },
  {
    question: `Üyeliğimi sonlandırmak ve hesabımı kapatmak için ne yapmalıyım?`,
    answer: `Hesabını kapatmak için kvkk@boyner.com.tr adresine talebini ve hesap bilgilerini içeren bir e-posta atabilirsin.`,
  },
];

const FAQ = () => {
  return (
    <section id="sss" className="relative bg-boyner-marigold ">
      <div className="mx-auto max-w-7xl overflow-hidden py-24 sm:px-6 sm:py-32 lg:px-8">
        <div>
          <h1 className="text-center text-xl font-extrabold tracking-tight md:text-2xl lg:text-4xl">
            SIKÇA SORULAN SORULAR
          </h1>
          <div className="mt-10 p-2">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={faq.question}
                  className="border-boyner-marigold"
                >
                  <AccordionTrigger className="bg-white text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="bg-boyner-marigold">
                    {faq.answer.split("\n\n").map((paragraph, i) => (
                      <p
                        key={i}
                        className="font-roboto mb-4 font-medium"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      ></p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
          <div className="my-4 w-full pt-24">
            <Image className="h-full w-full" src={Flyer} alt=""></Image>
          </div> 
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-4xl font-extrabold tracking-tight text-white ">
              BOYNER FESTİVAL MODASI
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
export default FAQ;
