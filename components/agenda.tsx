"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "./ui/separator";

interface Event {
  time: string;
  description: string;
}

interface Stage {
  stageName: string;
  events: Event[];
}

interface DayData {
  day: string;
  date: string;
  betweenHours: string;
  stages: Stage[];
}

const eventData: DayData[] = [
  {
    day: "gün 1",
    date: "23 Eylül Cumartesi",
    betweenHours: "09:00 - 18:00",
    stages: [
      {
        stageName: "Dinamik Sahne",
        events: [
          {
            time: "09:30 - 11:00",
            description: "Under Armour ile Sabah Koşusu",
          },
          {
            time: "14:30 - 15:15",
            description: "DansFabrika ile Dans Atölyesi",
          },
          {
            time: "15:30 - 16:15",
            description: "adidas ile Hiit Workout by Ercan Tepe",
          },
          // Add more events here
        ],
      },
      {
        stageName: "Değişim Sahnesi",
        events: [
          {
            time: "12:00 - 13:00",
            description: "adidas ile Mental Health by Berceste Şeber",
          },
          {
            time: "13.00 - 14.00",
            description: "Nefes ve Yaşam Farkındalığı by Esin Aksoy",
          },
          {
            time: "14.00 – 15.00",
            description: "21 Dakikada Ruh ve Beden Dengesi by Ece Vahapoğlu",
          },
          {
            time: "15.00 – 15.45",
            description: "Life Club ile Aktif Yaşam için Doğru Beslenme Yöntemleri: Her Diyet Herkes İçin Uygun mu? by Kumsal Kurucu",
          },
          // {
          //   time: "15.00 – 16.00",
          //   description: "Pending Data",
          // },
          {
            time: "16.00 – 17.00",
            description: "Mağaraya Giriş 101 by Tuğrul Çağrı Yılmazer",
          },
          {
            time: "17.00 – 18.00",
            description: "Merrell ile Ultra Sohbetler by Özgür Tetik ",
          },
          // Add more events here
        ],
      },
      {
        stageName: "Dönüşüm Sahnesi",
        events: [
          {
            time: "11:00 - 11:45",
            description: "MACFit ile Yoga by Özlem Y. Akkaş",
          },
          {
            time: "12.00 - 12.45",
            description: "MACFit ile Step by Umut Gürsoy",
          },
          {
            time: "13.00 - 13.45",
            description: "MACFit ile Cardio Kickbox by Aysun Düz",
          },
          {
            time: "14.00 - 14.45",
            description: "MACFit ile Zumba by Beyza Necip",
          },
          {
            time: "15.00 - 15.45",
            description: "Puma ile Fonksiyonel Cardio Workout by İnanç Akbaş",
          },
          {
            time: "16.00 - 16.45",
            description: "Urban Active ile Kangoo Jump",
          },
          {
            time: "17.00 - 17.45",
            description: "Urban Active ile Spinning by Ahmet Berkan",
          },
        ],
      },
      {
        stageName: "Enerji Zone",
        events: [
          {
            time: "11:30 - 12:00",
            description: "Costa Coffee ile Gerçek Kahve Atölyesi",
          },
          {
            time: "12.15-13.00",
            description: "Levi’s ile Kalem Çantası Kişiselleştirme",
          },
          {
            time: "13.15-14.00",
            description: "Kahkaha Yogası by Özgür Çağlar Çelik",
          },
          {
            time: "14.15-15.00",
            description: "Name It ile Geri Dönüştürülmüş Kağıttan Animal Helmet",
          },
          {
            time: "15.15-16.00",
            description: "Ritim & Perküsyon Atölyesi",
          },
          {
            time: "16.15-17.00",
            description: "Levi’s ile İleri Dönüştürülmüş Çanta Kişiselleştirme",
          },
          {
            time: "17.15-17.45",
            description: "adidas ile String Art",
          },
          // Add more events here
        ],
      },
      {
        stageName: "Sinerji Zone",
        events: [
          {
            time: "12.00 - 12.45",
            description: "edding ile Mandala by Aslıhan Aksun",
          },
          {
            time: "13.00 - 13.15",
            description: "edding ile Mandala by Aslıhan Aksun",
          },
          {
            time: "14.00 - 14.45",
            description: "edding ile Bez Çanta Tasarımı by Look Project",
          },
          {
            time: "15.00 - 15.45",
            description: "edding ile Bez Çanta Tasarımı by Look Project",
          },
          {
            time: "16.00 - 16.45",
            description: "edding ile Upcycling by Olima Tile Art",
          },
          {
            time: "17.00 - 17.45",
            description: "edding ile Upcycling by Olima Tile Art",
          },
          // Add more events here
        ],
      },
      {
        stageName: "Kids Zone",
        events: [
          {
            time: "12.00-18.00",
            description: "Skechers ile Gün Boyu Çocuk Aktiviteleri (Yüz Boyama, Eğlenceli Parkur Oyunlar)",
          },
          {
            time: "12.00 - 12.40",
            description: "Skechers ile Ahşap Ayakkabı Boyama ve Tasarım Atölyesi",
          },
          {
            time: "12.00 - 13.00",
            description: "Tırtıl Kids ile Rigamajig Atölyesi",
          },
          {
            time: "13.00 - 14.00",
            description: "Skechers ile Çocuk Egzersizi by Ceren Duman",
          },
          {
            time: "15.00 - 15.40",
            description: "Skechers ile Masal Tiyatrosu",
          },
          {
            time: "15.00 - 16.00",
            description: "Tırtıl Kids ile Rigamajig Atölyesi",
          },
          {
            time: "16.00 - 17.00",
            description: "Skechers ile Ahşap Ayakkabı Boyama ve Tasarım Atölyesi",
          },
          {
            time: "17.00 - 18.00",
            description: "Skechers ile Yaratıcılığını Keşfet Boyama Atölyesi",
          },
          // Add more events here
        ],
      },
      {
        stageName: "Active Life",
        events: [
          {
            time: "10:00 - 18:00",
            description: "Joma ile Zorbing Football",
          },
          {
            time: "10:00 - 18:00",
            description: "Joma ile Dev Eller Basketbol",
          },
          {
            time: "10:00 - 18:00",
            description: "BoardridersTR ve DC Katkılarıyla Ekibiyle Kaykay Workshop",
          },
          {
            time: "10:00 - 18:00",
            description: "adidas ile Streetball Turnuvası",
          },
          {
            time: "10:00 - 18:00",
            description: "Body Painting & Tattoo",
          },
          // Add more events here
        ],
      },
      // Add more stages here
    ],
  },
  {
    day: "gün 2",
    date: "24 Eylül Pazar",
    betweenHours: "09:00 - 18:00",
    stages: [
      {
        stageName: "Dinamik Sahne",
        events: [
          {
            time: "09:30 - 11:00",
            description: "Puma ile Sabah Koşusu",
          },
          {
            time: "16:00 - 16:45",
            description: "DansFabrika ile Dans Atölyesi",
          },
          {
            time: "17:00 - 17:45",
            description: "adidas ile Hiit Workout by Halil Kılıç",
          },
        ],
      },
      {
        stageName: "Değişim Sahnesi",
        events: [
          {
            time: "11:30 - 12:30",
            description: "Mindfulness by Erhan Ali Yılmaz",
          },
          {
            time: "12:30 - 13:30",
            description: "Manş ve Kuzey Geçişi by Aysu Türkoğlu",
          },
          {
            time: "13:30 - 14:30",
            description: "DansFabrika Macerası by Ömer Yeşilbaş",
          },
          {
            time: "14:30 - 15:30",
            description: "Puma ile Olimpiyat Yolculuğu by Tuğba Danışmaz",
          },
          {
            time: "15:30 - 16:30",
            description: "ASICS ile Performans Beslenmesi by Orçun Kürüm",
          },
          {
            time: "16:30 - 17:30",
            description:
              "Uzun ve Sağlıklı Yaşamın Ötesini Hedeflemek by Ayşegül Çoruhlu",
          },
        ],
      },
      {
        stageName: "Dönüşüm Sahnesi",
        events: [
          {
            time: "11:00 - 11:45",
            description: "MACFit ile Yoga by Özlem Y. Akkaş",
          },
          {
            time: "12:00 - 12:45",
            description: "MACFit ile Step by Umut Gürsoy",
          },
          {
            time: "13:00 - 13:45",
            description: " MACFit ile Cardio Kickbox by Aysun Düz",
          },
          {
            time: "14:00 - 14:45",
            description: "MACfit ile Zumba by Beyza Necip",
          },
          {
            time: "15:00 - 15:45",
            description: "Urban Active ile Kangoo Jump",
          },
          {
            time: "16:00 - 16:45",
            description: "Urban Active ile Spinning by Ahmet Berkan",
          },
        ],
      },
      {
        stageName: "Enerji Zone",
        events: [
          {
            time: "11.30 - 12.00",
            description: "Costa Coffee ile Gerçek Kahve Atölyesi",
          },
          {
            time: "12.15 - 12.45",
            description: "Levi’s ile Kalem Çantası Kişiselleştirme",
          },
          {
            time: "13.15 - 14.00",
            description: "Kahkaha Yogası by Özgür Çağlar Çelik",
          },
          {
            time: "14.15 - 15.00",
            description: "Jack&Jones ile Neon Enerjisi Atölyesi",
          },
          {
            time: "15.15 - 16.00",
            description: "Ritim & Perküsyon Atölyesi",
          },
          {
            time: "16.15 - 17.00",
            description: "Levi’s ile İleri Dönüştürülmüş Çanta Kişiselleştirme",
          },
          {
            time: "17.15 - 17.45",
            description: "Costa Coffee ile Gerçek Kahve Atölyesi",
          },
        ],
      },
      {
        stageName: "Sinerji Zone",
        events: [
          {
            time: "12.00 - 12.45",
            description: "edding ile Mandala by Aslıhan Aksun",
          },
          {
            time: "13.00 - 13.15",
            description: "edding ile Mandala by Aslıhan Aksun",
          },
          {
            time: "14.00 - 14.45",
            description: "edding ile Bez Çanta Tasarımı by Look Project",
          },
          {
            time: "15.00 - 15.45",
            description: "edding ile Bez Çanta Tasarımı by Look Project",
          },
          {
            time: "16.00 - 16.45",
            description: "edding ile Upcycling by Olima Tile Art",
          },
          {
            time: "17.00 - 17.45",
            description: "edding ile Upcycling by Olima Tile Art",
          },
        ],
      },
      {
        stageName: "Kids Zone",
        events: [
          {
            time: "12.00-18.00",
            description: "Skechers ile Gün Boyu Çocuk Aktiviteleri (Yüz Boyama, Eğlenceli Parkur Oyunlar)",
          },
          {
            time: "12.00 - 13.00",
            description: "Skechers ile Ahşap Ayakkabı Boyama ve Tasarım Atölyesi",
          },
          {
            time: "12.00 - 13.00",
            description: "Tırtıl Kids ile Imagination Atölyesi",
          },
          {
            time: "13.00 - 14.00",
            description: "Skechers ile Yaratıcılığını Keşfet Boyama Atölyesi",
          },
          {
            time: "15.00 - 15.40",
            description: "Skechers ile Masal Tiyatrosu",
          },
          {
            time: "15.00 - 16.00",
            description: "Tırtıl Kids ile Imagination Atölyesi",
          },
          {
            time: "16.00 - 17.00",
            description: "Skechers ile Ahşap Ayakkabı Boyama ve Tasarım Atölyesi",
          },
          {
            time: "17.00 - 18.00",
            description: "Skechers ile Yaratıcılığını Keşfet Boyama Atölyesi",
          },
          // Add more events here
        ],
      },
      {
        stageName: "Active Life",
        events: [
          {
            time: "10:00 - 17:30",
            description: "Joma ile Zorbing Football",
          },
          {
            time: "10:00 - 17:30",
            description: "Joma ile Dev Eller Basketbol",
          },
          {
            time: "10:00 - 17:30",
            description: "BoardridersTR Ekibiyle Kaykay Workshop",
          },
          {
            time: "10:00 - 17:30",
            description: "Streetball Turnuvası",
          },
          {
            time: "10:00 - 17:30",
            description: "Streetball Finali",
          },
          {
            time: "10:00 - 17:30",
            description: "Body Painting & Tattoo",
          },
          {
            time: "19:00 - 19:00",
            description: "Emu ile After Party",
          },
          // Add more events here
        ],
      },
    ],
  },
];

const SectionDividerAgenda = () => {
  return (
    <div className="custom-shape-divider-bottom-1693420332 ">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="shape-fill"
        ></path>
      </svg>
    </div>
  );
};
const Agenda = () => {
  return (
    <section id="program" className="relative bg-boyner-cinnabar">
      <div className="mx-auto max-w-7xl overflow-hidden py-24 sm:px-6 sm:py-32 sm:pb-56 lg:px-8">
        <h1 className="pb-10 text-center text-4xl font-extrabold text-black ">
          PROGRAM
        </h1>
        <div className="flex w-full justify-center">
          <Tabs defaultValue={eventData[0].day} className="w-full">
            <TabsList className="grid h-auto w-full grid-cols-2">
              {eventData.map((dayData, index) => (
                <TabsTrigger
                  className="flex flex-col items-center justify-center"
                  key={index}
                  value={dayData.day}
                >
                  <p className="text-xl sm:text-2xl">{dayData.date}</p>
                  <p className="text-sm sm:text-base">{dayData.betweenHours}</p>
                </TabsTrigger>
              ))}
            </TabsList>
            {eventData.map((dayData, index) => (
              <TabsContent key={index} value={dayData.day}>
                <Card>
                  <Accordion type="single" collapsible>
                    {dayData.stages.map((stage, stageIndex) => (
                      <AccordionItem key={stageIndex} value={stage.stageName}>
                        <AccordionTrigger>{stage.stageName}</AccordionTrigger>
                        {stage.events.map((event, eventIndex) => (
                          <AccordionContent
                            key={eventIndex}
                            className="border-b-2 border-gray-300"
                          >
                            <div className="flex space-x-3 font-roboto">
                              <div className="min-w-[100px] font-bold">
                                {event.time}
                              </div>
                              <div>{event.description}</div>
                            </div>
                          </AccordionContent>
                        ))}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
          <SectionDividerAgenda />
        </div>
      </div>
    </section>
  );
};

export default Agenda;
