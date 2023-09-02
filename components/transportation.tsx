import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const transportationOptions = [
  {
    question: "Araç ile Ulaşım",
    answer: [
      `E5, TEM ve Kuzey Marmara otoyollarinin tam kesisme noktasinda bulunan Kemerburgaz Kent Ormani içindeki YBY WOODS Yasam ve Etkinlik Alani' na; kendi özel aracınla istanbul'un her yerinden kolaylıkla ulaşabilirsin.`,
      `Kemerburgaz Kent Ormanı içerisinde, etkinlik alanının yakınında İki büyük otopark yer alıyor.`,
    ],
  },
  {
    question: "Toplu Taşıma ile Ulaşım",
    answer: [
      "Boyner Dynamic Festival alanı olan Kemerburgaz Kent Ormanı YBY WOODS Yaşam ve Etkinlik Alanı, İstanbul Eyüpsultan ilçesinde Kemerburgaz semtinde bulunuyor.",
      "Etkinlik alanına toplu taşımayla ulaşmak için; İETT’nin İstanbul’un pek çok noktasından düzenlediği seferlerle Kemerburgaz veya Göktürk’e ulaştıktan sonra 48U veya 48G hatlarına binerek Kemerburgaz Kent Ormanı kapısında bulunan durakta inmen yeterli olacaktır.",
      "Metro ile gelmek için; M11 no’lu Gayrettepe-İstanbul Havalimanı metro hattıyla da Kemerburgaz veya Göktürk istasyonlarına gelebilirsin.",
    ],
  },
  {
    question: "Toplu Taşıma ile Anadolu Yakasından Geliyorsan",
    answer: [
      "•	Kadıköy güzergahından geliyorsan, metrobüs aracılığıyla Mecidiyeköy’e varman sonrasında aktarmayla 48R Kemerburgaz Kent Ormanı durağında inerek alana rahatlıkla ulaşabilirsin.",
      "•	Üsküdar'dan Üsküdar - Çekmeköy metrosuna binerek Altunizade istasyonunda inip metrobüsle Mecidiyeköy’e aktarma yapabilirsin. Ardından 48 R hattıyla alana ulaşım sağlayabilirsin.",
      "•	Üsküdar – Beşiktaş vapurlarıyla Beşiktaş’a ulaşım sağlayarak Levent metrosunu da kullanabilirsin. Yine buradan 48R numaralı otobüse binerek Kent Ormanı durağında indiğinde Kemerburgaz Kent Ormanı'na ulaşabilirsin.",
    ],
  },
  {
    question: "Toplu Taşıma ile Avrupa Yakasından Geliyorsan",
    answer: [
      "•	Büyükçekmece, Beylikdüzü, Avcılar, Esenyurt, Küçükçekmece, Bahçelievler taraflarından geliyorsan herhangi bir metrobüs istasyonundan metrobüse binerek Yenibosna - Kuleli'de inebilirsin. Buradan 79F numaralı otobüse binerek Mescidi - Selam durağında indikten sonra. 48G Göktürk – Mescid-i Selam ve 48U Kemerburgaz – Bahçeşehir Üniversitesi Kemerburgaz Kampüsü hatlarını kullanarak Kemerburgaz Kent Ormanı’na ulaşabilirsin.",
      "•	Bağcılar, Güngören taraflarından geliyorsan Habipler minibüsüne binerek Mescid-i Selam durağında inebilirsin. Buradan 48G numaralı hatta binip, Kent Ormanı durağında inerek etkinlik alanına ulaşabilirsin.",
      "•	Taksim'den geliyorsan Yenikapı-Hacıosman metrosuna binerek 4. Levent'te inebilirsin. Buradan 48R numaralı otobüse binerek Kent Ormanı durağında indiğinde Kemerburgaz Kent Ormanı'na ulaşabilirsin.",
    ],
  },
];

function ShapeDividerTop() {
  return (
    <div className="custom-shape-divider-top-1693497092 border-0">
      <svg
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

function ShapeDividerBottom() {
  return (
    <div className="custom-shape-divider-bottom-1693510637 border-0">
      <svg
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

const Transportation = () => {
  return (
    <section id="ulasim" className="relative bg-boyner-about">
      <ShapeDividerTop />
      <div className="mx-auto max-w-7xl overflow-hidden py-24 sm:px-6 sm:py-24 lg:px-8">
        <div className="py-2 sm:py-32 sm:pt-24">
          <div className="mb-10">
            <h1 className="text-center text-xl font-extrabold tracking-tight md:text-2xl lg:text-5xl">
              ULAŞIM
            </h1>
            <h2 className="mt-5 text-center text-xs font-medium tracking-wide md:text-base lg:text-xl">
              NEREDEYİZ?
            </h2>
            <p className="mt-5 text-center text-xs font-bold tracking-wide md:text-base lg:text-lg">
              YBY WOODS Yaşam ve Etkinlik Alanı
            </p>
          </div>
          <div className="flex flex-col space-y-6 p-2 sm:flex-row sm:space-x-6 sm:space-y-0">
            <div id="map" className="sm:w-1/2">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  className="absolute left-0 top-0 h-full w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.861001831088!2d28.888260376672513!3d41.15938427132985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab32f31bdd9df%3A0xd6c611b5a866dd3b!2sYBY%20WOODS%20Ya%C5%9Fam%20ve%20Etkinlik%20Alan%C4%B1!5e0!3m2!1str!2str!4v1693498425017!5m2!1str!2str"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </AspectRatio>
            </div>
            <div id="accordion" className="sm:w-1/2">
              <Accordion type="single" collapsible>
                {transportationOptions.map((option, index) => (
                  <AccordionItem
                    key={index}
                    value={option.question}
                    className="border-boyner-about"
                  >
                    <AccordionTrigger className="bg-white font-medium">
                      {option.question}
                    </AccordionTrigger>
                    <AccordionContent className="bg-boyner-about">
                      {option.answer.map((answer, index) => (
                        <p
                          key={index + "-parapgraphs-ulasim"}
                          className="mt-2 font-roboto"
                        >
                          {answer}
                        </p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <ShapeDividerBottom />
    </section>
  );
};

export default Transportation;
