"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import * as z from "zod";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import DiynamicFestLogo from "@/public/assets//kit/calisma-yuzeyi-12.png";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Adınız en az iki karakter olmalıdır.",
  }),
  phone: z
    .string()
    .optional()
    .refine(
      (value) =>
        value === undefined || value.length === 10 || value.length === 11,
      {
        message: "Lütfen Geçerli bir telefon numarası giriniz.",
      },
    ),
  email: z.string().email().min(2, {
    message: "Lütfen Geçerli bir mail adresi giriniz.",
  }),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phone: "",
      email: "",
    },
  });
}
// 2. Define a submit handler.
function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
}
function ShapeDividerTop() {
  return (
    <div className="custom-shape-divider-top-1693487583 border-0">
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
    <div className="custom-shape-divider-bottom-1693493170 border-0">
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

const checkboxItems = [
  {
    id: "terms1",
    label: (
      <>
        <Dialog>
          <DialogTrigger>
            <a className="cursor-pointer">Üyelik Sözleşmesi</a>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Üyelik Sözleşmesi</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat, laudantium.
              </p>
            </DialogDescription>
          </DialogContent>
        </Dialog>
        &apos;ni okudum, onaylıyorum.
      </>
    ),
  },
  {
    id: "terms2",
    label: (
      <>
        <Dialog>
          <DialogTrigger>
            <a className="cursor-pointer underline">Açık rıza Metni</a>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>BOYNER DYNAMIC FEST İNTERNET SİTESİ
KULLANIM KOŞULLARI 

İNTERNET SİTEMİZİ KULLANMAYA BAŞLAMADAN ÖNCE LÜTFEN AŞAĞIDAKİ KULLANIM KOŞULLARININ TAMAMINI DİKKATLİCE OKUYUNUZ. HABER BÜLTENİ İNTERNET SİTESİ KULLANIM KOŞULLARINA DİLEDİĞİNİZ ZAMAN ANA SAYFADAN ULAŞABİLİRSİNİZ. 

İNTERNET SİTEMİZE ERİŞİM VE KULLANIM, KULLANIM KOŞULLARINDA BELİRLENEN ŞARTLARA UYULMASINA BAĞLIDIR. KULLANIM KOŞULLARINDA BELİRTİLEN HERHANGİ BİR KOŞUL SİZİN İÇİN UYGUN DEĞİL İSE İNTERNET SİTEMİZE ERİŞİMİNİZİ SONLANDIRMANIZI RİCA EDERİZ

Madde 1: Kapsam

Bu metinde, Boyner Büyük Mağazacılık Anonim Şirketi’ne (“Şirket” veya “Boyner”) ait DYNAMIC FEST İnternet Sitesi’ni ziyaret eden Ziyaretçiler’imiz uyması gereken kullanım koşullarını (“Kullanım Koşulları”) bulunmaktadır.
Madde 2: Amaç

Kullanım Koşulları, Şirketimize ait DYNAMIC FEST İnternet Sitesi’ni ziyaret eden kişilerin uyması gereken şart ve koşulları belirlemek amacıyla hazırlanmıştır.

Madde 3: Tanımlar

İnternet Sitesi
Ziyaretçilerin dynamicfest.boyner.com.tr bağlantı adresi üzerinden erişebildiği, Boyner tarafından düzenlenen Boyner Dynamic Fest etkinliğine ilişkin yenilikler, güncel gelişmeler, tanıtımlara ilişkin bilgilerin ilgililerle paylaşılması amacıyla oluşturulmuş ve yayınlanmış olan internet sitesidir.  İnternet Sitesi, tüm alt bileşenleriyle ve alan adlarıyla birlikte bir bütün teşkil eder ve http, https, ftp, dns, veri tabanı, mobil, IOS, Android, e-posta, API ve benzeri tüm servisler ile İnternet Sitesi’ne Boyner tarafından yüklenen doküman, fotoğraf, video ve benzeri her türlü dosya fiziksel olarak nerede barındırıldığına bakılmaksızın işbu Kullanım Koşulları hükümlerine tabidir.


Ziyaretçi(ler)
İnternet Sitesi’ni ziyaret eden ve ticari amaç gütmeden tamamen şahsi kullanım amacıyla İnternet Sitesi’nde sunulan hizmetlerden yararlanan gerçek kişilerdir.


Madde 4: İnternet Sitesi’nin Kullanım Koşulları

Ziyaretçi, İnternet Sitesi’ni kullanmakla 18 yaşından büyük olduğunu kabul eder. Ziyaretçi’nin 18 yaşından küçük olması durumunda veli ve/veya vasisinden onay/izin aldığı varsayılacaktır.

Ziyaretçi, İnternet Sitesi’nde yaptığı işlemleri İnternet Sitesi’ne teknik olarak hiçbir surette zarar vermeyecek şekilde yürütmekle yükümlüdür. Ziyaretçi İnternet Sitesi’ne sağlayacağı tüm bilgi, içerik, materyal ve sair içeriğin sisteme zarar verecek her türlü program, virüs, yazılım, lisanssız ürün, truva atı vb. içermemesi için gerekli koruyucu yazılımları ve lisanslı ürünleri kullanmak da dâhil olmak üzere gerekli her türlü tedbiri alacaktır.

Ziyaretçi, yürürlükte bulunan mevzuat hükümleri ile internet kullanımına ilişkin düzenlemelere aykırı davranmak; İnternet Sitesi’ni kullanan üçüncü kişilerin bilgilerini hukuka aykırı olarak elde etmek veya elde etmeye teşebbüs etmek; Boyner tarafından yayınlanan bilgileri hukuka aykırı bir şekilde değiştirmek, kullanmak veya bu yönde girişimde bulunmak; Boyner ve/veya üçüncü bir kişinin kişilik ve fikri mülkiyet haklarını ihlal etmek, İnternet Sitesi ile ilişkilendirecek şekilde hukuka aykırı, müstehcen, başkalarının mahremiyetini ihlal eden, pornografik, çıplaklık içeren ya da tasvir eden herhangi bir içerik paylaşmak; Boyner ve/veya üçüncü bir kişinin itibarını zedeleyici veya Boyner’in faaliyetlerini engelleyici eylemlerde bulunmak; üçüncü kişilerin haklarını ihlal eden, haksız rekabet teşkil eden hukuka ve/veya ahlaka aykırı paylaşımda bulunmak; İnternet Sitesi’nin çalışmasını olumsuz yönde etkileyecek davranış ve faaliyetlerde bulunmak, güvenlik sistemlerini engellemek ve İnternet Sitesi’ni kullanılmaz hale getirmek veya bu yönde girişimde bulunmak dahil bunlarla sınırlı olmamak üzere hukuka ve ahlaka aykırı eylemlerde bulunmayacaktır.

Boyner, sunduğu hizmetin sürekliliğini, kalitesini, doğruluğunu, kesintiye uğramayacağını, hatasız olduğunu veya virüs içermediğini veya diğer zararlı bileşenleri veya kusurları içermediğini taahhüt etmez. İnternet Sitesi ve içeriği "olduğu gibi" sunulmaktadır. Bu madde kapsamında olası bir aykırılık nedeniyle doğan zararlardan Boyner’in herhangi bir sorumluluğu ve/veya tazminat yükümlülüğü bulunmamaktadır. 

İnternet Sitesi’ne ilişkin aşağıdaki durum ve koşulların oluşması halinde Boyner’in sorumluluğu ve/veya tazminat yükümlülüğü bulunmamaktadır:

Ziyaretçi’nin İnternet Sitesinin gereği gibi çalışması için gerekli güncellemeleri zamanında ve/veya doğru bir biçimde yapmaması ve bu nedenle doğrudan ve/veya dolaylı olarak zararın meydana gelmesi,
Ziyaretçi’nin İnternet Sitesi’ni hukuka aykırı bir amaç için kullanması ve bu nedenle doğrudan ve/veya dolaylı olarak zararın meydana gelmesi,
İnternet Sitesi’nin kullanımı sırasında veya sonrasında oluşabilecek performans kaybı, eksiklik, hata, kesinti, internet data paketi harcamaları, hat ve/veya sistem arızası sonucu ortaya çıkabilecek doğrudan ve/veya dolaylı zararların meydana gelmesi,
İnternet Sitesi’nin devre dışı bırakılması ya da yanlış kurulması nedeniyle doğrudan ve/veya dolaylı zararların meydana gelmesi,
Boyner’den kaynaklanmayan herhangi bir sebeple (altyapısal ve/veya donanımsal sebepler vb.) herhangi bir hata, ihmal, kesinti, silinme, bozulma, iletimde gecikme veya iletişim ağı başarısızlığı gibi teknik sorunlardan dolayı İnternet Sitesi ve Ziyaretçi arasındaki iletişimde kesinti olması nedeniyle doğrudan ve/veya dolaylı zararların meydana gelmesi,

İnternet Sitesi’nin izin ve yetki verilmeyen herhangi bir amaçla kullanılması ya da bu kapsamda sair bir tasarruf gerçekleştirilmesi amacıyla, Boyner’in yazılı izni alınmaksızın, herhangi bir robot, örümcek veya başka otomatik aletler ya da manuel süreçlerin kullanılması yasaktır.

Boyner, Ziyaretçi’nin bu Kullanım Koşulları’na aykırı davrandığını tespit eder yahut bu hususta makul bir şüphe ortaya çıkarsa veya Ziyaretçi’nin İnternet Sitesi’ni kullanma amacının hukuka ve ahlaka aykırı olduğunun anlaşılır ise Ziyaretçi’nin İnternet Sitesi’ne erişimini geçici süreyle ya da süresiz olarak engelleyebilir. Bu durumda Ziyaretçi, herhangi bir hak ve alacak talebinde bulunamaz, itiraz ileri süremez. Boyner’in kanundan doğan tazminat hakları saklıdır.

İşbu 4. maddede belirtilen koşullardan herhangi birine aykırılık halinde Boyner’in Sözleşme’den ve kanundan doğan tazminat hakları saklıdır. Bu ihlalden doğan/doğacak doğrudan veya dolaylı tüm zararlardan Ziyaretçi sorumlu olup, Boyner’in rücu hakkı saklıdır. Bunlara ek olarak, Boyner’in hukuki ve cezai yollara başvurma hakkı saklıdır.
Madde 5: Boyner’e Tanınan Yetkiler

Boyner, dilediği bir zamanda tek taraflı olarak ve herhangi bir bildirimde bulunmaksızın İnternet Sitesi üzerinden yeni hizmetler sunabilir, İnternet Sitesi’nin içeriğini kısmen veya tamamen değiştirebilir, İnternet Sitesi’nin çalışmasını ya da sunduğu hizmetleri geçici bir süre askıya alabilir, tamamen durdurabilir, kısmen veya tamamen değiştirebilir, İnternet Sitesi’ni yalnızca üye olanların kullanımına sunabilir yahut İnternet Sitesi’ni ücretli hale getirebilir.


Madde 6: Sağlanan İçerikler ve Diğer Site Linkleri

Boyner’in sunduğu içeriğin bazı bölümleri ve İnternet Sitesi’ndeki tanıtım içeriklerinin bir kısmı ya da tamamı, üçüncü kişiler tarafından sağlanabilir. İnternet Sitesi’nde belirtilen düşünce, tavsiye, hizmet, öneri ve diğer içeriğin yazarı veya sağlayıcısı üçüncü kişiler olduğu durumlarda, Boyner, 5651 sayılı İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun uyarınca "yer sağlayıcı" olması sebebiyle, bu bilgilerin bütünlüğünden, kullanışlılığından ve doğruluğundan, bu nedenle üçüncü kişiler tarafından yapılan fikri mülkiyet ihlallerinden sorumlu değildir. 

Boyner İnternet Sitesi üzerinden, üçüncü kişilerin sahip olduğu ve işlettiği başka web sitelerine ve/veya uygulamalara dosyalara veya içeriklere bağlantı (“link”) verebilir, yönlendirme yapabilir. Bu bağlantılar (“linkler”) /yönlendirmeler, web sitesini veya siteyi işleten kişinin desteklendiği ya da web sitesi veya içerdiği bilgilere yönelik herhangi bir türde bir beyan veya garanti niteliği taşımamaktadır. 

İnternet Sitesi üzerindeki bağlantılar (“linkler”) vasıtasıyla erişilen portallar, web siteleri, dosyalar ve içerikler, bu bağlantılar (“linkler”) vasıtasıyla erişilen portallar veya web sitelerinde sunulan hizmetler veya ürünler veya bunların içeriği ya da bunların ya da üçüncü kişilerin gizlilik politikaları ve uygulamalarından Boyner’in herhangi bir sorumluluğu ve/veya tazminat yükümlülüğü bulunmamaktadır.

Madde 7: Gizlilik ve Kişisel Verilerin Korunması

Ziyaretçi, kullandığı ve/veya Boyner’e aktardığı/açıkladığı her türlü veri, bilgi veya içeriğin üzerinde yasal olarak hak sahibi olduğunu, hakkı kullanmaya ve üzerinde tasarrufta bulunmaya hukuken yetkili olduğunu ve Kişisel Verilerin Korunması Kanunu veya ilgili ikincil mevzuatı ihlal etmediğini yahut Kişisel Verileri Koruma Kurulu tarafından yayınlanan kararlara aykırı hareket etmediğini ve herhangi bir kişiye veya şahsa zarar vermediğini kabul eder. Ziyaretçi, kullandığı her türlü veri, bilgi veya içeriği üzerinde yasal olarak hak sahibi olmaması nedeniyle hem Boyner’in hem de üçüncü kişilerin uğrayabileceği her türlü zararı tazminle yükümlüdür.

Madde 8: Fikri Mülkiyet Hakları

Boyner, İnternet Sitesi’nde kullanılan ürün ve/veya hizmetlerin, her türlü yazılım, tasarım, kaynak kod, objekt kod, dizin, görsel veya içeriğin projelerin, belgelerin, İnternet Sitesi’ne ilişkin veya İnternet Sitesi’nde yer alan görsellerin, metinlerin, bültenlerin, sloganların, videoların, tasarımların, know-how ve her türlü ticari bilginin, illüstrasyonların, veri tabanının, sistem akışına ilişkin herhangi bir verinin, her türlü logo, amblem ve verilerin, fikirlerin, Boyner ve/veya iş ortaklarına ait ticari markalar ve ticari görünümlerin, akışların, kaynak kodlarının, araştırmaların, kodların, tekniklerin, istatistiklerin ve mali ve manevi haklarına ilişkin tüm fikri hakların tek sahibidir ve bu içeriklere ilişkin Fikir ve Sanat Eserleri Kanunu ve mevzuattan kaynaklanan tüm hakları münhasıran haizdir. Bu kapsamda Ziyaretçi, hiçbir şekilde tersine mühendislik yapmayacağını ya da İnternet Sitesi’nin kaynak kodunu bulmak veya elde etmek amacına yönelik herhangi bir başka işlemde bulunmayacağını, herhangi bir bilgisayar şebekesinin güvenliğini ihlal etmeyeceğini, güvenlik şifreleme kodlarını kırmayacağını, SPAM e-posta veya zararlı yazılım girişiminde bulunmayacağını, üçüncü kişilerin veya Boyner’in fikri mülkiyet haklarını ihlal edecek şekilde davranması halinde, Ziyaretçi, Boyner’in ve/veya söz konusu üçüncü kişinin tüm doğrudan ve dolaylı zararları ile masraflarını tazmin etmekle yükümlü olduğunu kabul eder.

Ziyaretçi, Boyner’in veya grup şirketlerinin mülkiyetine tabi fikri mülkiyet haklarını Boyner’in izni olmaksızın kullanamaz, paylaşamaz, dağıtamaz, sergileyemez, çoğaltamaz veya bunlardan türemiş çalışmalar yapamaz. Ayrıca, Ziyaretçi, Boyner’in ayni veya şahsi haklarını, fikri mülkiyet haklarını, malvarlığı haklarını veya mal veya hizmetlere ilişkin herhangi bir hakkını ihlal teşkil edecek şekilde, İnternet Sitesi dahilinde bulunan resimleri, metinleri, görsel ve işitsel imgeleri, dosyaları, yazıları, istatistikleri, bilgilendirmeleri, içerikleri, veri tabanlarını, katalogları ve listeleri çoğaltamaz, kopyalayamaz, yayamaz, dağıtamaz, aktarmaz veya işleyemez.

 Ziyaretçi, İnternet Sitesi veya ona bağlı olarak geliştirilen sistem ve uygulamalarda yer alan hizmetleri kötüye kullanmayacağını ve bu İnternet Sitesi’ni kullanan diğer kişilerin haklarını ihlal eden nitelikte veya zarar veren hiçbir davranışta bulunmayacağını ve söz konusu kötüye kullanım neticesinde Boyner’in veya ilgili kişilerin uğrayacağı tüm zararlardan sorumluluğun tamamen kendisine ait olduğunu ve böyle bir kullanımın tespit edilmesi halinde Boyner’in bu İnternet Sitesi’ne erişimini geçici süreyle ya da süresiz olarak engelleme hakkının bulunduğunu kabul eder.

Madde 9: Yürürlük ve Kullanım Koşulları Değişiklikleri
İşbu Kullanım Koşulları, İnternet Sitesi’nde ilan edilir edilmez yürürlüğe girer. Boyner, ileride doğacak teknik zaruretler ve mevzuata uyum amacıyla yahut tamamen kendi takdirine bağlı ve tek taraflı olarak, uygun göreceği herhangi bir zamanda, işbu Kullanım Koşulları’nda değişiklik yapabilir veya yeni maddeler ilave edebilir. 

Ziyaretçi, İnternet Sitesi’nde ilan edilen değişiklik ve güncellemeleri takip etmek zorundadır. 
</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat, laudantium.
              </p>
            </DialogDescription>
          </DialogContent>
        </Dialog>
        &apos;ni okudum, onaylıyorum.
      </>
    ),
  },
  {
    id: "terms3",
    label: (
      <>
        Tarafıma şirketiniz ve{" "}
        <a href="#" className="underline">
          Boyner Grubu Şirketleri
        </a>{"Boyner Grup Şirketleri
Boyner Grup Şirketleri; Boyner Büyük Mağazacılık A.Ş., Altınyıldız Tekstil ve Konfeksiyon A.Ş., BR Mağazacılık Ticaret A.Ş. ve BNR Teknoloji A.Ş. gibi Boyner Holding A.Ş.’ne bağlı şirketler ile mevcut – müstakbel diğer iştirakleridir.


"}
        ticari elektronik ileti gönderilmesi için burada da belirtilen iznim
        vardır.
      </>
    ),
    isStart: true,
  },
];

function RenderCheckboxes() {
  return checkboxItems.map(({ id, label, isStart }) => (
    <div
      className={`flex items-${isStart ? "start" : "center"} space-x-2`}
      key={id}
    >
      <Checkbox id={id} className="bg-white" />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  ));
}
export function InputForm() {
  const form = useForm<z.infer<typeof formSchema>>();

  return (
    <section className="relative bg-boyner-about">
      <ShapeDividerTop />
      <div className="mx-auto max-w-7xl overflow-hidden py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="py-24 sm:py-32">
          <h1 className="text-center text-xl font-extrabold tracking-tight md:text-2xl lg:text-4xl">
            FESTİVALDEN HABERDAR OLMAK İÇİN ÜYE OL!
          </h1>
          <div className="mx-auto mt-20 flex flex-col sm:flex-col sm:space-x-4 md:flex-row">
            <div className="mb-6 flex flex-1 items-center justify-center px-2">
              <Image src={DiynamicFestLogo} alt="" width={400} height={400} />
            </div>
            <div className="flex-1 px-2 pt-2">
              <div className="flex flex-col justify-center">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mx-auto max-w-[400px] space-y-4 sm:space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input placeholder="Adın Soyadın" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input placeholder="Cep Telefonun" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input placeholder="E-posta Adresin" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <RenderCheckboxes />
                    <Button
                      type="submit"
                      aria-label="Gönder - Send the form"
                      className="w-full"
                      variant="secondary"
                    >
                      ÜYE OL
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShapeDividerBottom />
    </section>
  );
}

export default InputForm;
