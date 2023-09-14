import React, { useState } from "react";
import Image from "next/image";
import BoynerLogo from "@/public/boyner-logo-dark-bg.svg";
import AppStoreLogo from "@/public/assets/kit/app-store-logo.png";
import GooglePlayLogo from "@/public/assets/kit/google-play-logo.png";
import AppGalleryLogo from "@/public/assets/kit/app-gallery-logo.png";

// İlgili bileşenleri içe aktarın
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const navigation = {
  main: [
    { name: "Boyner Hakkında", href: "https://kurumsal.boyner.com.tr/" },
    { name: "Kullanım Koşulları", href: "#" },
  ],
};

const dialogContentStyle: React.CSSProperties = {
  maxHeight: "600px", 
  overflowY: "auto",  
};



const apps = [
  {
    name: "App Store",
    href: "https://play.google.com/store/apps/details?id=tr.com.boyner.dynamic",
    imageSrc: AppStoreLogo,
    imageAlt: "App Store",
  },
  {
    name: "Google Play",
    href: "#",
    imageSrc: GooglePlayLogo,
    imageAlt: "Google Play",
  },
];
export default function Footer() {
  return (
    <footer className="relative flex flex-col justify-between space-y-10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center space-y-10 overflow-hidden pt-32 sm:px-6 lg:px-8">
        <div className="mb-16 flex items-center justify-center p-2">
          <Image src={BoynerLogo} alt="" className="h-auto w-64 lg:w-96" />
        </div>
     
        <div className="flex flex-wrap justify-center space-x-6 p-2">
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
        </div>
        {/* Ana navigasyon menüsü */}
        <nav
          className="flex justify-center space-x-3 text-xs tracking-tighter"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              {item.name === "Kullanım Koşulları" ? (
                <Dialog>
                  <DialogTrigger>
                    <button className="text-sm leading-6 text-white hover:text-muted-foreground">
                      {item.name}
                    </button>
                  </DialogTrigger>
                    <DialogContent style={dialogContentStyle}>
                    <DialogHeader>
                      <DialogTitle>Kullanım Koşulları</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
    <strong>BOYNER DYNAMIC FEST İNTERNET SİTESİ KULLANIM KOŞULLARI </strong>

    <p>İNTERNET SİTEMİZİ KULLANMAYA BAŞLAMADAN ÖNCE LÜTFEN AŞAĞIDAKİ KULLANIM KOŞULLARININ TAMAMINI DİKKATLİCE OKUYUNUZ. HABER BÜLTENİ İNTERNET SİTESİ KULLANIM KOŞULLARINA DİLEDİĞİNİZ ZAMAN ANA SAYFADAN ULAŞABİLİRSİNİZ.</p>
    <br />
    <p>İNTERNET SİTEMİZE ERİŞİM VE KULLANIM, KULLANIM KOŞULLARINDA BELİRLENEN ŞARTLARA UYULMASINA BAĞLIDIR. KULLANIM KOŞULLARINDA BELİRTİLEN HERHANGİ BİR KOŞUL SİZİN İÇİN UYGUN DEĞİL İSE İNTERNET SİTEMİZE ERİŞİMİNİZİ SONLANDIRMANIZI RİCA EDERİZ</p>
    <br />
    <h2>Madde 1: Kapsam</h2>
    <br />
    <p>Bu metinde, Boyner Büyük Mağazacılık Anonim Şirketi’ne (“Şirket” veya “Boyner”) ait DYNAMIC FEST İnternet Sitesi’ni ziyaret eden Ziyaretçilerimiz uyması gereken kullanım koşullarını (“Kullanım Koşulları”) bulunmaktadır.</p>
    <br />
    <h2>Madde 2: Amaç</h2>
    <br />
    <p>Kullanım Koşulları, Şirketimize ait DYNAMIC FEST İnternet Sitesi’ni ziyaret eden kişilerin uyması gereken şart ve koşulları belirlemek amacıyla hazırlanmıştır.</p>
    <br />
    <h2>Madde 3: Tanımlar</h2>
    <br />
    <p>
        <strong>İnternet Sitesi:</strong> Ziyaretçilerin dynamicfest.boyner.com.tr bağlantı adresi üzerinden erişebildiği, Boyner tarafından düzenlenen Boyner Dynamic Fest etkinliğine ilişkin yenilikler, güncel gelişmeler, tanıtımlara ilişkin bilgilerin ilgililerle paylaşılması amacıyla oluşturulmuş ve yayınlanmış olan internet sitesidir.  İnternet Sitesi, tüm alt bileşenleriyle ve alan adlarıyla birlikte bir bütün teşkil eder ve http, https, ftp, dns, veri tabanı, mobil, IOS, Android, e-posta, API ve benzeri tüm servisler ile İnternet Sitesi’ne Boyner tarafından yüklenen doküman, fotoğraf, video ve benzeri her türlü dosya fiziksel olarak nerede barındırıldığına bakılmaksızın işbu Kullanım Koşulları hükümlerine tabidir.
    </p>
    <br />
    <p>
        <strong>Ziyaretçi(ler):</strong> İnternet Sitesi’ni ziyaret eden ve ticari amaç gütmeden tamamen şahsi kullanım amacıyla İnternet Sitesi’nde sunulan hizmetlerden yararlanan gerçek kişilerdir.
    </p>
    <br />
    <h2>Madde 4: İnternet Sitesi’nin Kullanım Koşulları</h2>
    <br />
    <p>4.1. Ziyaretçi, İnternet Sitesi’ni kullanmakla 18 yaşından büyük olduğunu kabul eder. Ziyaretçi’nin 18 yaşından küçük olması durumunda veli ve/veya vasisinden onay/izin aldığı varsayılacaktır.</p>
    <br />
    <p>4.2. Ziyaretçi, İnternet Sitesi’nde yaptığı işlemleri İnternet Sitesi’ne teknik olarak hiçbir surette zarar vermeyecek şekilde yürütmekle yükümlüdür. Ziyaretçi İnternet Sitesi’ne sağlayacağı tüm bilgi, içerik, materyal ve sair içeriğin sisteme zarar verecek her türlü program, virüs, yazılım, lisanssız ürün, truva atı vb. içermemesi için gerekli koruyucu yazılımları ve lisanslı ürünleri kullanmak da dâhil olmak üzere gerekli her türlü tedbiri alacaktır.</p>
    <br />
    <p>4.3. Ziyaretçi, yürürlükte bulunan mevzuat hükümleri ile internet kullanımına ilişkin düzenlemelere aykırı davranmak; İnternet Sitesi’ni kullanan üçüncü kişilerin bilgilerini hukuka aykırı olarak elde etmek veya elde etmeye teşebbüs etmek; Boyner tarafından yayınlanan bilgileri hukuka aykırı bir şekilde değiştirmek, kullanmak veya bu yönde girişimde bulunmak; Boyner ve/veya üçüncü bir kişinin kişilik ve fikri mülkiyet haklarını ihlal etmek, İnternet Sitesi ile ilişkilendirecek şekilde hukuka aykırı, müstehcen, başkalarının mahremiyetini ihlal eden, pornografik, çıplaklık içeren ya da tasvir eden herhangi bir içerik paylaşmak; Boyner ve/veya üçüncü bir kişinin itibarını zedeleyici veya Boyner’in faaliyetlerini engelleyici eylemlerde bulunmak; üçüncü kişilerin haklarını ihlal eden, haksız rekabet teşkil eden hukuka ve/veya ahlaka aykırı paylaşımda bulunmak; İnternet Sitesi’nin çalışmasını olumsuz yönde etkileyecek davranış ve faaliyetlerde bulunmak, güvenlik sistemlerini engellemek ve İnternet Sitesi’ni kullanılmaz hale getirmek veya bu yönde girişimde bulunmak dahil bunlarla sınırlı olmamak üzere hukuka ve ahlaka aykırı eylemlerde bulunmayacaktır.</p>
    <br />
    <p>4.4. Boyner, sunduğu hizmetin sürekliliğini, kalitesini, doğruluğunu, kesintiye uğramayacağını, hatasız olduğunu veya virüs içermediğini veya diğer zararlı bileşenleri veya kusurları içermediğini taahhüt etmez. İnternet Sitesi ve içeriği "olduğu gibi" sunulmaktadır. Bu madde kapsamında olası bir aykırılık nedeniyle doğan zararlardan Boyner’in herhangi bir sorumluluğu ve/veya tazminat yükümlülüğü bulunmamaktadır. </p>
    <br />
    <p>4.5. İnternet Sitesi’ne ilişkin aşağıdaki durum ve koşulların oluşması halinde Boyner’in sorumluluğu ve/veya tazminat yükümlülüğü bulunmamaktadır:</p>
    <br />
    <ul>
        <li>Ziyaretçi’nin İnternet Sitesinin gereği gibi çalışması için gerekli güncellemeleri zamanında ve/veya doğru bir biçimde yapmaması ve bu nedenle doğrudan ve/veya dolaylı olarak zararın meydana gelmesi,</li>
        <li>Ziyaretçi’nin İnternet Sitesi’ni hukuka aykırı bir amaç için kullanması ve bu nedenle doğrudan ve/veya dolaylı olarak zararın meydana gelmesi,</li>
        <li>İnternet Sitesi’nin kullanımı sırasında veya sonrasında oluşabilecek performans kaybı, eksiklik, hata, kesinti, internet data paketi harcamaları, hat ve/veya sistem arızası sonucu ortaya çıkabilecek doğrudan ve/veya dolaylı zararların meydana gelmesi,</li>
        <li>İnternet Sitesi’nin devre dışı bırakılması ya da yanlış kurulması nedeniyle doğrudan ve/veya dolaylı zararların meydana gelmesi,</li>
        <li>Boyner’den kaynaklanmayan herhangi bir sebeple (altyapısal ve/veya donanımsal sebepler vb.) herhangi bir hata, ihmal, kesinti, silinme, bozulma, iletimde gecikme veya iletişim ağı başarısızlığı gibi teknik sorunlardan dolayı İnternet Sitesi ve Ziyaretçi arasındaki iletişimde kesinti olması nedeniyle doğrudan ve/veya dolaylı zararların meydana gelmesi,</li>
    </ul>
    <br />
    <p>4.6. İnternet Sitesi’nin izin ve yetki verilmeyen herhangi bir amaçla kullanılması ya da bu kapsamda sair bir tasarruf gerçekleştirilmesi amacıyla, Boyner’in yazılı izni alınmaksızın, herhangi bir robot, örümcek veya başka otomatik aletler ya da manuel süreçlerin kullanılması yasaktır.</p>
    <br />
    <p>4.7. Boyner, Ziyaretçi’nin bu Kullanım Koşulları’na aykırı davrandığını tespit eder yahut bu hususta makul bir şüphe ortaya çıkarsa veya Ziyaretçi’nin İnternet Sitesi’ni kullanma amacının hukuka ve ahlaka aykırı olduğunun anlaşılır ise Ziyaretçi’nin İnternet Sitesi’ne erişimini geçici süreyle ya da süresiz olarak engelleyebilir. Bu durumda Ziyaretçi, herhangi bir hak ve alacak talebinde bulunamaz, itiraz ileri süremez. Boyner’in kanundan doğan tazminat hakları saklıdır.</p>
    <br />
    <p>4.8. İşbu 4. maddede belirtilen koşullardan herhangi birine aykırılık halinde Boyner’in Sözleşme’den ve kanundan doğan tazminat hakları saklıdır. Bu ihlalden doğan/doğacak doğrudan veya dolaylı tüm zararlardan Ziyaretçi sorumlu olup, Boyner’in rücu hakkı saklıdır. Bunlara ek olarak, Boyner’in hukuki ve cezai yollara başvurma hakkı saklıdır.</p>
    <br />
    <h2>Madde 5: Boyner’e Tanınan Yetkiler</h2>
    <br />
    <p>5.1. Boyner, dilediği bir zamanda tek taraflı olarak ve herhangi bir bildirimde bulunmaksızın İnternet Sitesi üzerinden yeni hizmetler sunabilir, İnternet Sitesi’nin içeriğini kısmen veya tamamen değiştirebilir, İnternet Sitesi’nin çalışmasını ya da sunduğu hizmetleri geçici bir süre askıya alabilir, tamamen durdurabilir, kısmen veya tamamen değiştirebilir, İnternet Sitesi’ni yalnızca üye olanların kullanımına sunabilir yahut İnternet Sitesi’ni ücretli hale getirebilir.</p>
    <br />
    <h2>Madde 6: Sağlanan İçerikler ve Diğer Site Linkleri</h2>
    <br />
    <p>6.1. Boyner’in sunduğu içeriğin bazı bölümleri ve İnternet Sitesi’ndeki tanıtım içeriklerinin bir kısmı ya da tamamı, üçüncü kişiler tarafından sağlanabilir. İnternet Sitesi’nde belirtilen düşünce, tavsiye, hizmet, öneri ve diğer içeriğin yazarı veya sağlayıcısı üçüncü kişiler olduğu durumlarda, Boyner, 5651 sayılı İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun uyarınca "yer sağlayıcı" olması sebebiyle, bu bilgilerin bütünlüğünden, kullanışlılığından ve doğruluğundan, bu nedenle üçüncü kişiler tarafından yapılan fikri mülkiyet ihlallerinden sorumlu değildir. </p>
    <br />
    <p>6.2. Boyner İnternet Sitesi üzerinden, üçüncü kişilerin sahip olduğu ve işlettiği başka web sitelerine ve/veya uygulamalara dosyalara veya içeriklere bağlantı (“link”) verebilir, yönlendirme yapabilir. Bu bağlantılar (“linkler”) /yönlendirmeler, web sitesini veya siteyi işleten kişinin desteklendiği ya da web sitesi veya içerdiği bilgilere yönelik herhangi bir türde bir beyan veya garanti niteliği taşımamaktadır. </p>
    <br />
    <p>6.3. İnternet Sitesi üzerindeki bağlantılar (“linkler”) vasıtasıyla erişilen portallar, web siteleri, dosyalar ve içerikler, bu bağlantılar (“linkler”) vasıtasıyla erişilen portallar veya web sitelerinde sunulan hizmetler veya ürünler veya bunların içeriği ya da bunların ya da üçüncü kişilerin gizlilik politikaları ve uygulamalarından Boyner’in herhangi bir sorumluluğu ve/veya tazminat yükümlülüğü bulunmamaktadır.</p>
    <br />
    <h2>Madde 7: Gizlilik ve Kişisel Verilerin Korunması</h2>
    <br />
    <p>7.1. Ziyaretçi, kullandığı ve/veya Boyner’e aktardığı/açıkladığı her türlü veri, bilgi veya içeriğin üzerinde yasal olarak hak sahibi olduğunu, hakkı kullanmaya ve üzerinde tasarrufta bulunmaya hukuken yetkili olduğunu ve Kişisel Verilerin Korunması Kanunu veya ilgili ikincil mevzuatı ihlal etmediğini yahut Kişisel Verileri Koruma Kurulu tarafından yayınlanan kararlara aykırı hareket etmediğini ve herhangi bir kişiye veya şahsa zarar vermediğini kabul eder. Ziyaretçi, kullandığı her türlü veri, bilgi veya içeriği üzerinde yasal olarak hak sahibi olmaması nedeniyle hem Boyner’in hem de üçüncü kişilerin uğrayabileceği her türlü zararı tazminle yükümlüdür.</p>
    <br />
    <h2>Madde 8: Fikri Mülkiyet Hakları</h2>
    <br />
    <p>8.1. Boyner, İnternet Sitesi’nde kullanılan ürün ve/veya hizmetlerin, her türlü yazılım, tasarım, kaynak kod, objekt kod, dizin, görsel veya içeriğin projelerin, belgelerin, İnternet Sitesi’ne ilişkin veya İnternet Sitesi’nde yer alan görsellerin, metinlerin, bültenlerin, sloganların, videoların, tasarımların, know-how ve her türlü ticari bilginin, illüstrasyonların, veri tabanının, sistem akışına ilişkin herhangi bir verinin, her türlü logo, amblem ve verilerin, fikirlerin, Boyner ve/veya iş ortaklarına ait ticari markalar ve ticari görünümlerin, akışların, kaynak kodlarının, araştırmaların, kodların, tekniklerin, istatistiklerin ve mali ve manevi haklarına ilişkin tüm fikri hakların tek sahibidir ve bu içeriklere ilişkin Fikir ve Sanat Eserleri Kanunu ve mevzuattan kaynaklanan tüm hakları münhasıran haizdir. Bu kapsamda Ziyaretçi, hiçbir şekilde tersine mühendislik yapmayacağını ya da İnternet Sitesi’nin kaynak kodunu bulmak veya elde etmek amacına yönelik herhangi bir başka işlemde bulunmayacağını, herhangi bir bilgisayar şebekesinin güvenliğini ihlal etmeyeceğini, güvenlik şifreleme kodlarını kırmayacağını, SPAM e-posta veya zararlı yazılım girişiminde bulunmayacağını, üçüncü kişilerin veya Boyner’in fikri mülkiyet haklarını ihlal edecek şekilde davranması halinde, Ziyaretçi, Boyner’in ve/veya söz konusu üçüncü kişinin tüm doğrudan ve dolaylı zararları ile masraflarını tazmin etmekle yükümlü olduğunu kabul eder.</p>
    <br />
    <p>8.2. Ziyaretçi, Boyner’in veya grup şirketlerinin mülkiyetine tabi fikri mülkiyet haklarını Boyner’in izni olmaksızın kullanamaz, paylaşamaz, dağıtamaz, sergileyemez, çoğaltamaz veya bunlardan türemiş çalışmalar yapamaz. Ayrıca, Ziyaretçi, Boyner’in ayni veya şahsi haklarını, fikri mülkiyet haklarını, malvarlığı haklarını veya mal veya hizmetlere ilişkin herhangi bir hakkını ihlal teşkil edecek şekilde, İnternet Sitesi dahilinde bulunan resimleri, metinleri, görsel ve işitsel imgeleri, dosyaları, yazıları, istatistikleri, bilgilendirmeleri, içerikleri, veri tabanlarını, katalogları ve listeleri çoğaltamaz, kopyalayamaz, yayamaz, dağıtamaz, aktarmaz veya işleyemez.</p>
    <br />
    <p>8.3. Ziyaretçi, İnternet Sitesi veya ona bağlı olarak geliştirilen sistem ve uygulamalarda yer alan hizmetleri kötüye kullanmayacağını ve bu İnternet Sitesi’ni kullanan diğer kişilerin haklarını ihlal eden nitelikte veya zarar veren hiçbir davranışta bulunmayacağını ve söz konusu kötüye kullanım neticesinde Boyner’in veya ilgili kişilerin uğrayacağı tüm zararlardan sorumluluğun tamamen kendisine ait olduğunu ve böyle bir kullanımın tespit edilmesi halinde Boyner’in bu İnternet Sitesi’ne erişimini geçici süreyle ya da süresiz olarak engelleme hakkının bulunduğunu kabul eder.</p>
    <br />
    <h2>Madde 9: Yürürlük ve Kullanım Koşulları Değişiklikleri</h2>
    <br />
    <p>9.1. İşbu Kullanım Koşulları, İnternet Sitesi’nde ilan edilir edilmez yürürlüğe girer. Boyner, ileride doğacak teknik zaruretler ve mevzuata uyum amacıyla yahut tamamen kendi takdirine bağlı ve tek taraflı olarak, uygun göreceği herhangi bir zamanda, işbu Kullanım Koşulları’nda değişiklik yapabilir veya yeni maddeler ilave edebilir.</p>
    <br />
    <p>9.2. Ziyaretçi, İnternet Sitesi’nde ilan edilen değişiklik ve güncellemeleri takip etmek zorundadır. </p>
    <br />
      </DialogDescription>
                  </DialogContent>
                </Dialog>
              ) : (
                <a
                  href={item.href}
                  className="text-sm leading-6 text-white hover:text-muted-foreground"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
