"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import Link from "next/link";
import Swal from "sweetalert2";
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
const handleSubmit = (e: any) => {
  e.preventDefault();
  let username = e.target.username.value;
  let phone = e.target.phone.value;
  let email = e.target.email.value;
  let privacyPolicy = e.target.privacyPolicy.checked;

  if (
    username === "" ||
    phone === "" ||
    email === "" ||
    privacyPolicy === false
  ) {
    alert("Lütfen tüm alanları doldurunuz.");
    return false;
  }

  const data: any = {
    name: username,
    phone,
    email,
    privacyPolicy,
  };

  fetch("/api/download", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      Swal.fire({
        title: "Başarılı!",
        text: "Form başarıyla gönderildi.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        e.target.username.value = "";
        e.target.phone.value = "";
        e.target.email.value = "";
        e.target.reset();
      });
    })
    .catch((err) => {
      alert("Form gönderilirken bir hata oluştu.");
    });
};
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
  // {
  //   id: "terms1",
  //   name: "memberAgreement",
  //   label: (
  //     <>
  //       <Dialog>
  //         <DialogTrigger>
  //           <a className="cursor-pointer underline">Üyelik Sözleşmesi</a>
  //         </DialogTrigger>
  //         <DialogContent className="h-full">
  //           <DialogHeader>
  //             <DialogTitle>Üyelik Sözleşmesi</DialogTitle>
  //           </DialogHeader>
  //           <DialogDescription className="overflow-auto">
  //             <b>
  //               Müşteri, Üye ve Ziyaretçi Kişisel Verilerinin Korunmasına
  //               ilişkin Aydınlatma Metni
  //             </b>
  //             <p className="mb-4">
  //               Müşteri, Üye ve Ziyaretçi Kişisel Verilerinin Korunmasına
  //               ilişkin Aydınlatma Metni Boyner Büyük Mağazacılık A.Ş.
  //             </p>

  //             <p className="mb-4">
  //               Müşteri, Üye ve Ziyaretçi Kişisel Verilerinin Korunmasına
  //               ilişkin Aydınlatma Metni Değerli Ziyaretçilerimiz,
  //               Müşterilerimiz ve Üyelerimiz,
  //             </p>
  //             <p className="mb-4">
  //               Kişisel verilerinizin işlenmesi ile ilgili uygulamalarımız ve
  //               6698 sayılı Kişisel Verilerin Korunması Kanunu ("Kanun")
  //               kapsamında “Veri Sorumlusu” sıfatıyla Boyner Büyük Mağazacılık
  //               A.Ş. (“Boyner”) olarak işlediğimiz kişisel verilerinize ilişkin
  //               sizleri bilgilendirmek istiyoruz.
  //             </p>
  //             <p className="mb-4">Bu metinde:</p>
  //             <ul>
  //               <li className="ml-8 list-disc">
  //                 Boyner mağazalarını ("Mağazalar") ziyaret etmeniz,
  //                 Mağazalar'dan alışveriş yapmanız
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Boyner Anahtar Kart programımıza üye olmanız ("Anahtar Kart
  //                 Üyesi")
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 www.boyner.com.tr internet sitesini ("Site") ziyaret etmeniz
  //                 veya cep telefonunuza indireceğiniz Boyner uygulamasını
  //                 ("Mobil Uygulama") kullanmanız, Site/Mobil Uygulama'dan
  //                 alışveriş yapmanız veya 3. kişiler tarafından yapılan
  //                 alışverişin tarafınıza gönderilmesi ya da Site'ye/Mobil
  //                 Uygulama'ya üye olmanız ("Site Üyesi")
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Ticari iletişim kanalları ile genel ve kişiye özel kampanya
  //                 bilgilendirmeleri yapılmasını kabul etmeniz
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 İletişim kanalları üzerinden karşılıklı olarak iletişime
  //                 geçmemiz
  //               </li>
  //               <li>
  //                 Kurumsal satış süreçlerine ilişkin olarak Boyner'le iletişime
  //                 geçmeniz ve/veya alışveriş yapmanız veya kurumsal satış
  //                 süreçlerine ilişkin olarak tarafınıza hediye, ürün vs.
  //                 gönderilmesi
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Boyner'ün düzenlemiş olduğu kampanya, yarışma, çekiliş ve
  //                 diğer etkinliklere katılmanız
  //               </li>
  //             </ul>

  //             <p className="mb-4">
  //               halinde kişisel verilerinizin kullanımına ilişkin aydınlatma
  //               metni yer almaktadır. Site ve Mobil Uygulama’da çerez vb.
  //               programlar kullanılmaktadır. Çerez politikamıza Site ve Mobil
  //               Uygulama üzerinden dilediğiniz zaman ulaşabilirsiniz.
  //             </p>
  //             <b className="mb-4">
  //               1. Kişisel Verilerinizi İşleme Amaçlarımız ve İşlediğimiz
  //               Kişisel Verileriniz Nedir?
  //             </b>
  //             <b className="">Mağaza Güvenliği</b>
  //             <p className="mb-4">
  //               Mağazalar’da gerçekleşmesi muhtemel mevzuata aykırı her türlü
  //               fiil, suç veya davranışa karşı siz, Boyner ve çalışanları ile
  //               diğer üçüncü kişilerin güvenliğini sağlamak ve adli makamlara
  //               karşı olan bilgi, belge verme ve ilgili sair yükümlülüklerimizi
  //               yerine getirmek amacıyla güvenlik kamerası görüntülerinizi
  //               işliyoruz.
  //             </p>
  //             <b>Mağaza Ziyaretleri</b>
  //             <p className="mb-4">
  //               İş süreçlerinin iyileştirilebilmesi kapsamında Mağazalar’daki
  //               ziyaretçi trafiğinin tespit edilebilmesi amacıyla kamerası
  //               görüntünüzü işlemekteyiz.
  //             </p>
  //             <b>Mağaza Alışverişleri ve Satış sonrası Süreçler</b>
  //             <ul>
  //               <li className="ml-8 list-disc">
  //                 Alışveriş işleminin gerçekleştirilmesi, sistemlerimizdeki size
  //                 ait kayıtların diğer müşterilere ilişkin kayıtlardan ayırt
  //                 edilebilmesi, fatura/fiş ibraz etmeksizin satış sonrası
  //                 operasyonel işlemlerden (tadilat, lostra, değişim, iade, ürün
  //                 incelemesi, eve teslimat vs.) faydalanabilmenizi sağlamak ve
  //                 bu operasyonel işlemlerin yerine getirilebilmesi,
  //                 alışverişinize ilişkin e-fatura/e-arşiv faturanın tarafınıza
  //                 gönderilebilmesi, mağazalarımızda bulunmayan ürünlerin tedarik
  //                 edilerek doğrudan size ulaştırılabilmesi amaçlarıyla kimlik
  //                 (ad soyad) ve iletişim bilgilerinizi (e-posta adresi, telefon
  //                 numarası) ve alışveriş (alışveriş tarihi, miktarı, alışveriş
  //                 içeriği, ödeme şekli ve ödeme detayları) bilgilerinizi, •
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Alışverişinizi havalimanı mağaza(lar)ımızdan yapmanız halinde
  //                 yasal yükümlülüklerimizi yerine getirmek için bunlara ek
  //                 olarak pasaport numarası, uyruk, doğum tarihi, cinsiyet, uçuş
  //                 bilgilerinizi,
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Gerekli olduğu hallerde iade süreçlerinde iadenin banka
  //                 hesabınıza yapılabilmesi için banka hesap bilgilerinizi,
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Fatura düzenlenebilmesi ve bazı durumlarda cari hesap ve
  //                 mutabakat işlemlerinin yapılabilmesi amacıyla kimlik, iletişim
  //                 ve fatura bilgilerinizi, ayrıca belirli bir tutarın üzerinde
  //                 veya hakkında açıkça bir düzenleme bulunan belirli bir ürün
  //                 veya hizmet satın almanız halinde ilgili mevzuat kapsamındaki
  //                 yükümlülüklerimizi yerine getirmek amacıyla T.C. kimlik/vergi
  //                 numarası, alışveriş (alışveriş tarihi, miktarı ve alışveriş
  //                 içeriği) bilgilerinizi ve vergi mükellefi iseniz ek bazı
  //                 fatura bilgilerinizi (T.C. kimlik/vergi numarası, şahıs
  //                 şirketi bilgileri),
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Ödemenizi kredi kartı ile yapmak istemeniz halinde ödemenin
  //                 alınabilmesi amacıyla kredi kartı bilgilerinizi (kredi kartı
  //                 bilgileri tarafımızca kaydedilmeden ödeme kuruluşuna
  //                 aktarılmaktadır.),
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Ödemenizi mail order ile yapmak istemeniz halinde ad soyad,
  //                 kredi kartı bilgileri, telefon numarası, ürün bilgisi, sipariş
  //                 tutarı, imza ve kimliğiniz ön yüz fotoğrafı bilgilerinizi,
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Tıkla & Gel sistemi ile Site veya Mobil Uygulama’dan
  //                 verdiğiniz siparişleri Mağazalar’dan teslim almak istemeniz
  //                 halinde kimlik (ad soyad) ve iletişim bilgilerinizi (telefon
  //                 numarası, adres) ve alışveriş (alışveriş tarihi, miktarı,
  //                 alışveriş içeriği, siparişin teslim alınma tarihi)
  //                 bilgilerinizi işliyoruz.
  //               </li>
  //             </ul>
  //             <b className="mb-4">Anahtar Kart Üyeliği</b>
  //             <ul>
  //               <li className="ml-8 list-disc">
  //                 Anahtar Kart üyelik işlemlerinizi gerçekleştirmek, Anahtar
  //                 Kart programı uyarınca yükümlülüklerimizi yerine getirmek,
  //                 kampanyalardan faydalanmanızı sağlamak, Anahtar Kart
  //                 programları arasında hangi programa dahil olabileceğinizi ve
  //                 diğer programa geçiş için yeterlilikleri sağlayıp
  //                 sağlayamadığınızı tespit edebilmek, üyelik bilgilendirmeleri
  //                 yapabilmek, tarafınızca kazanılan puanları, menfaatleri,
  //                 indirimleri kullanmanızı ve sorgulayabilmenizi sağlamak
  //                 amaçlarıyla kimlik (ad soyadı), üyelik numarası, iletişim
  //                 (telefon numarası, e-posta, adres) ve alışveriş bilgilerinizi
  //                 (alışverişlerinizin tarihi, miktarı, alışveriş içeriği,
  //                 kazanmış olduğunuz puanlar gibi Anahtar Kart üyeliklerine
  //                 ilişkin kampanyalardan yararlanmanızı sağlayan bilgiler),
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Genel veya size özel kişiselleştirilmiş kampanyalar,
  //                 avantajlar, promosyonlar, reklamların oluşturulması, kampanya,
  //                 yarışma, çekiliş ve diğer etkinliklerin düzenlenmesi,
  //                 segmentasyon, raporlama, profilleme, pazarlama ve analiz
  //                 çalışmalarının yapılması, dijital platformlar veya diğer 3.
  //                 taraf ortamlarda Boyner’e ait reklamların ve
  //                 pazarlama/iletişim faaliyetlerinin (kişiye özel teklifler,
  //                 genel/kişiselleştirilmiş reklam, arama, anket) yapılması
  //                 amaçlarıyla pazarlama bilgilerinizi (doğum tarihi, cinsiyet,
  //                 il, ilçe, demografik bilgiler, Boyner tarafından yapılan
  //                 bildirimlere/anketlere/tekliflere/kampanyalara karşı
  //                 yaklaşımlar, alışkanlıklar, favoriler, beğeniler, davranışlar,
  //                 tercihler, arama hareketleri, anket cevapları, segmentler,
  //                 geçmiş alışverişler, alışveriş tutarı, ödeme yöntemleri ve
  //                 tercihleri, ödeme kanalları, ödemenin gerçekleştiği banka
  //                 bilgisi, iletişim tercihleri), kimlik (ad soyadı) ve iletişim
  //                 (telefon numarası, e-posta, adres) bilgilerinizi ),
  //               </li>
  //             </ul>
  //             <p className="mb-4">işliyoruz.</p>
  //             <b>
  //               Site/Mobil Uygulama Ziyaretleri, Site/Mobil Uygulama Üyeliği ve
  //               Site/Mobil Uygulama Alışverişleri
  //             </b>
  //             <ul>
  //               <li className="ml-8 list-disc">
  //                 Alışveriş işleminin gerçekleştirilmesi, sipariş hazırlama,
  //                 paketleme, sevk irsaliyesi hazırlama, kargolama, teslimat
  //                 bilgilerinin güncellenmesi, siparişinizin size
  //                 ulaştırılabilmesi veya siparişinizi Tıkla&Gel ile
  //                 Mağazalar’dan teslim almak istemeniz halinde Mağazalar’da
  //                 uygun şekilde teslimatı sağlama, sistemimizde oluşturduğumuz
  //                 size ait kayıtların diğer müşterilere ilişkin kayıtlardan
  //                 ayırt edilebilmesi, satış sonrası operasyonel işlemlerin
  //                 (tadilat, değişim, iade, ürün incelemesi vs.) yerine
  //                 getirilebilmesi, alışverişinize ilişkin e-faturanın tarafınıza
  //                 gönderilebilmesi amaçlarıyla kimlik (ad soyad) ve iletişim
  //                 bilgilerinizi (e-posta adresi, telefon numarası, adres) ve
  //                 alışveriş (alışveriş tarihi, zamanı, miktarı, alışveriş
  //                 içeriği, ödeme şekli ve ödeme detayları) bilgilerinizi,
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Fatura düzenlenebilmesi amacıyla kimlik ve fatura
  //                 bilgilerinizi, ayrıca belirli bir tutarın üzerinde veya
  //                 hakkında açıkça bir düzenleme bulunan belirli bir ürün veya
  //                 hizmet satın almanız halinde ilgili mevzuat kapsamındaki
  //                 yükümlülüklerimizi yerine getirmek amacıyla T.C. kimlik/vergi
  //                 numarası, alışveriş (alışveriş tarihi, miktarı ve alışveriş
  //                 içeriği) bilgilerinizi ve vergi mükellefi iseniz ek bazı
  //                 fatura bilgilerinizi (T.C. Kimlik Numarası, vergi numarası,
  //                 şahıs şirketi bilgileri),
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Ödemenizi kredi kartı ile yapmak istemeniz halinde ödemenin
  //                 alınabilmesi amacıyla kredi kartı bilgileriniz (kredi kartı
  //                 bilgileri tarafımızca kaydedilmeden ödeme kuruluşuna
  //                 aktarılmaktadır.)ve işlem güvenliğinin sağlanabilmesi amacıyla
  //                 IP adresi bilginizi,
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 3. kişiler tarafından Site/Mobil Uygulama üzerinden tarafınıza
  //                 ürün gönderilmesi halinde ise siparişin tarafınıza
  //                 ulaştırılabilmesi amacıyla ad soyad, cep telefonu ve adres
  //                 bilgilerinizi,
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Site ve Mobil Uygulama’yı ziyaretiniz ve kullanımınız
  //                 sırasında karşılaşılan teknik/yazılımsal hataları,
  //                 eksiklikleri tespit edebilmek ve giderebilmek amacıyla Site ve
  //                 Mobil Uygulama’yı kullanım bilgilerinizi,
  //               </li>
  //             </ul>
  //             <p className="mb-4">işliyoruz.</p>
  //             <b>Site Üyeliği (Site/Mobil Uygulama)</b>
  //             <ul>
  //               <li className="ml-8 list-disc">
  //                 Üyelik işlemlerinin gerçekleştirilmesini sağlamak, sizinle
  //                 akdedeceğimiz üyelik sözleşmesinin gereğini yerine getirmek,
  //                 üye girişi yapabilmeniz, üyelik bilgilendirmesinin
  //                 yapılabilmesi amaçlarıyla kimlik (ad soyad), iletişim (e-posta
  //                 adresi, telefon numarası) ve gizlenmiş şekildeki parola
  //                 bilgilerinizi,
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Herhangi bir alışveriş kanalından alışveriş yapılmak
  //                 istendiğinde her alışveriş işleminde tekrar bilgi girilmesine
  //                 gerek kalmaksızın üye bilgilerinizi kullanarak alışveriş
  //                 yapmanızı sağlayabilmek amacıyla kimlik (ad soyad) ve iletişim
  //                 (telefon numarası, e-posta adresi, teslimat ve fatura adresi
  //                 bilgileri) bilgilerinizi,
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Üye olarak tarafınıza sipariş geçmişinizi görüntüleme hizmeti
  //                 verebilmek amacıyla alışveriş bilgilerinizi (alışveriş tarihi,
  //                 zamanı, miktarı, alışveriş içeriği, ödeme detayları),
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Üyelik programlarından faydalanabilmeniz, Boyner’in diğer
  //                 üyelik programlarından faydalanabilmeniz, Mağazalar ve
  //                 Site’den yapacağınız alışverişlere göre oluşturulacak size
  //                 özel imkan ve tekliflerden yararlanmanız, puan kazanabilmeniz
  //                 ve bu puanları kullanabilmeniz amacıyla Mağazalar ve Site’den
  //                 yapacağınız alışveriş bilgilerinizi, genel veya size özel
  //                 kişiselleştirilmiş kampanyalar, avantajlar, promosyonlar,
  //                 reklamların oluşturulması, kampanya, yarışma, çekiliş ve diğer
  //                 etkinliklerin düzenlenmesi, segmentasyon, raporlama,
  //                 profilleme, pazarlama ve analiz çalışmalarının yapılması,
  //                 Mobil Uygulama, Site, Boyner’e ait diğer dijtial platformlar
  //                 veya diğer 3. taraf ortamlarda Boyner’e ait reklamların ve
  //                 pazarlama/iletişim faaliyetlerinin (Mobil Uygulama ve
  //                 Site’deki bildirimler, pop-up gösterimi, kişiye özel
  //                 teklifler, kullanıcı ekranlarının özelleştirilmesi, reklam,
  //                 arama, anket vs.) yapılması, bluetooth özelliğinin açık olması
  //                 halinde beacon (yer belirleyici) cihazları aracılığıyla tespit
  //                 edilen lokasyon verilerinin kaydedilerek size en yakın ve
  //                 uygun tekliflerin oluşturulması ve size iletilmesi, Site ve
  //                 Mobil Uygulama üzerindeki kullanıcı deneyimini iyileştirmek
  //                 amaçlarıyla pazarlama bilgilerinizi (doğum tarihi, cinsiyet,
  //                 il, ilçe, demografik bilgiler, bluetooth özelliğinin açık
  //                 olması halinde beacon (yer belirleyici) cihazları aracılığıyla
  //                 tespit edilen lokasyon verileri, lokasyon verileri
  //                 kaydedilerek oluşturulacak teklifler, Mobil Uygulama kullanım
  //                 süresi, Mobil Uygulama versiyon bilgisi, cihaz ID, kullanılan
  //                 cihaza ilişkin marka, model, teknik özellik ve işletim sistemi
  //                 bilgileri, kullandığınız operatör bilgisi, çerez kayıtları,
  //                 çerez ve reklam tanıtıcısı/kimliği bilgileri, Site ve Mobil
  //                 Uygulama içi bildirimlere/anketlere/tekliflere/kampanyalara
  //                 karşı yaklaşımlar, alışkanlıklar, favoriler, beğeniler,
  //                 davranışlar, tercihler, arama hareketleri, anket cevapları,
  //                 segmentler, geçmiş alışverişler, alışveriş tutarı, , ödeme
  //                 yöntemleri ve tercihleri, ödeme kanalları, ödemenin
  //                 gerçekleştiği banka bilgisi, iletişim tercihleri), kimlik (ad
  //                 soyadı) ve iletişim (telefon numarası, e-posta, adres)
  //                 bilgilerinizi,
  //               </li>
  //             </ul>
  //             <p className="mb-4">işliyoruz.</p>
  //             <b>Ticari İletişim Süreçleri</b>
  //             <p className="mb-4 underline">
  //               Ticari iletişim izni/açık rızası vermeniz halinde, Anahtar Kart
  //               veya Site Üyeliği veya diğer üyelikleriniz kapsamında
  //               oluşturulan genel veya size özel kişiselleştirilmiş kampanyalar,
  //               avantajlar, promosyonlar, reklamlar, bilgilendirmeler, pazarlama
  //               faaliyetleri ile size yönelik ticari iletişim faaliyetlerinde
  //               (SMS, e-posta, arama vb.) bulunulabilmesi, ürün ve
  //               hizmetlerimizle ilgili müşteri memnuniyetine yönelik anketlerin,
  //               kampanya, yarışma, çekiliş, davet, açılış ve diğer etkinliklere
  //               ilişkin davetlerimizin iletilmesi amaçlarıyla kimlik (ad soyad)
  //               ve iletişim (telefon numarası, e-posta adresi) bilgilerinizi
  //               işliyoruz. Boyner Grubu şirketlerine vereceğiniz ticari iletişim
  //               iznine ilişkin aydınlatma metinlerine her bir şirketin
  //               websitesindeki aydınlatma metninden ulaşabilirsiniz. (Boyner
  //               Holding A.Ş. bünyesindeki Boyner Grubu Şirketleri; Boyner Büyük
  //               Mağazacılık A.Ş., Altınyıldız Tekstil ve Konfeksiyon A.Ş., BR
  //               Mağazacılık Ticaret A.Ş. ve BNR Teknoloji A.Ş. gibi Boyner
  //               Holding A.Ş.'ne bağlı şirketler ile mevcut - müstakbel diğer
  //               iştirakleridir.)
  //             </p>
  //             <b>Kurumsal Satış Süreçleri</b>
  //             <p className="mb-4">
  //               Kurumsal satış birimimiz ile iletişime geçmeniz halinde
  //               talebiniz üzere teklifinizin hazırlanması, tarafınıza
  //               iletilmesi, teklifi kabul etmeniz halinde bilgilerinizin ilgili
  //               mağazaya iletilmesi, ürünlerinizin tarafınıza gönderilmesi,
  //               gerekli durumlarda ve yeni sipariş süreçlerine ilişkin olarak
  //               iletişim kurulması amaçlarıyla kimlik (ad soyad), iletişim
  //               (e-posta, cep telefonu), müşteri işlem (teklif, sipariş, kargo
  //               bilgileri), fatura bilgilerinizi ve çalıştığınız kurum
  //               bilgilerini işliyoruz. (Siparişinize ilişkin işlenecek
  //               bilgileriniz yukarıda mağaza alışverişlerine ilişkin kısımda yer
  //               almaktadır.) 3. kişiler tarafından kurumsal satış süreçleri
  //               kapsamında tarafınıza hediye, ürün vs. gönderilmesi halinde ise
  //               siparişin tarafınıza ulaştırılabilmesi amacıyla ad soyad, cep
  //               telefonu, adres ve çalıştığınız kurum bilgilerini işliyoruz.
  //             </p>
  //             <b>Çağrı Merkezi/Müşteri İlişkileri Süreçleri</b>
  //             <p className="mb-4">
  //               İletişim kanallarımız (çağrı merkezi, e-posta, Site, Mobil
  //               Uygulama, sosyal medya vs.) üzerinden bizimle iletişime
  //               geçtiğiniz takdirde bize ilettiğiniz sorun ve şikayetlerinizi
  //               çözümlemek, gerektiğinde buna ilişkin olarak sizinle iletişime
  //               geçebilmek amacıyla kimlik (ad soyad, müşteri ID bilgileri) ,
  //               iletişim (adres, e-posta adresi, telefon numarası), müşteri
  //               işlem (talep ve şikayetleriniz, alışverişleriniz,
  //               hediye/indirim/fayda kullanımları) ve gerekli ise hukuki işlem
  //               bilgilerinizi; ayrıca müşteri memnuniyetine yönelik
  //               çalışmalarımız ve aramızda doğabilecek uyuşmazlıklarda delil
  //               olarak kullanılmak üzere çağrı merkezi ses kayıtlarını
  //               işliyoruz.
  //             </p>
  //             <b>Yasal Süreçler ve Kurum içi Faaliyetler</b>
  //             <p className="mb-4">
  //               Mevzuattan kaynaklanan yükümlülüklerimizi yerine getirmek,
  //               yetkili ve görevli kamu kurum ve kuruluşlarına karşı diğer
  //               hukuki yükümlüklerimizi yerine getirmek amaçlarıyla kimlik,
  //               iletişim, alışveriş, fatura ve işlem güvenliği (log kayıtları)
  //               bilgilerinizi işliyoruz.
  //             </p>
  //             <p className="mb-4">
  //               Doğacak uyuşmazlıklarda mahkeme, icra dairesi, hakem heyeti gibi
  //               resmi kurum ve kuruluşlara karşı her türlü dava, cevap ve itiraz
  //               hakkının kullanılması, uyuşmazlıklara ilişkin görüşme ve anlaşma
  //               süreçlerinin yürütülmesi, tarafımızdan bilgi talep etmeniz
  //               halinde gerekli bilgilerin tarafınıza ulaştırılabilmesi
  //               amaçlarıyla ve kurum içi denetim, iç kontrol ve raporlama, test,
  //               geliştirme ve iyileştirme çalışmaları kapsamında kimlik (ad
  //               soyadı, T.C. kimlik numarası), iletişim (telefon numarası,
  //               e-posta adresi, adres), alışveriş, fatura, kamera
  //               görüntüleriniz, işlem güvenliğine ilişkin bilgiler (Anahtar Kart
  //               üyeliği, Site üyeliği, Site/Mobil Uygulama alışverişleri, ticari
  //               iletişim kapsamında izin/açık rıza/sözleşme onayına ilişkin log
  //               kayıtları) ile hukuki işlem bilgilerinizi (uyuşmazlık
  //               süreçlerine ilişkin yazışma ve dosya bilgileri) işliyoruz. Mobil
  //               Uygulama, Site ve diğer Boyner sistemlerinin üyelik
  //               sözleşmeleri, mevzuat ve ahlaka aykırı şekilde kullanımını
  //               engellemek, şüpheli işlemlerin ve hukuka aykırı kullanımları
  //               tespit edebilmek, bloke etme ve bloke kaldırma işlemlerini
  //               yapabilmek için kimlik, iletişim, kredi kartı bilgileriniz
  //               (yalnızca ilk 6 ve son 4 hane bilgisi), alışveriş ve sipariş
  //               bilgileriniz ile işlem güvenliği bilgilerinizi işliyoruz.
  //             </p>

  //             <b>
  //               2. Kişisel Verilerinizi Kimlere ve Hangi Amaçla Aktarabiliriz ?
  //             </b>
  //             <p className="mb-4">Kişisel verilerinizi,</p>
  //             <ul>
  //               <li className="ml-8 list-disc">
  //                 Bilişim teknolojileri, pazarlama/reklam/analiz faaliyetleri,
  //                 lojistik hizmetleri, operasyonel hizmetler, ödeme hizmetleri
  //                 ya da uzmanlık gerektiren danışmanlık vb. konularda ürün ve
  //                 hizmet desteği almak amaçlarıyla şirketimizin yurtiçindeki
  //                 tedarikçiler, iş ortakları ve hizmet sağlayıcılarıyla (çağrı
  //                 merkezi, pazarlama/reklam/analiz hizmeti sağlayıcıları, veri
  //                 tabanı ve sunucu hizmeti sağlayıcıları, Site ve Mobil Uygulama
  //                 kullanımlarını izleme hizmeti sağlayanlar, e-posta sunucu
  //                 hizmeti sağlayıcıları, e-fatura ve e-arşiv fatura hizmeti
  //                 sağlayıcıları, elektronik ileti aracı hizmet sağlayıcıları,
  //                 kargo ve kurye firmaları, kuru temizleme firmaları,
  //                 terzi/tadilat/lostra hizmeti sağlayıcıları, depo hizmeti
  //                 sağlayıcısı, banka ve elektronik ödeme kuruluşları, hukuki ve
  //                 mali danışmanlık hizmeti verenler, bağımsız denetim hizmeti
  //                 sağlayıcıları, arşivleme hizmeti verenler ile);
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Yetkili kamu kurum ve kuruluşları ile adli makamlara karşı
  //                 olan bilgi, belge verme ve ilgili sair yükümlülüklerimizi
  //                 yerine getirmek ve dava ve cevap hakları gibi yasal
  //                 haklarımızı kullanabilmek amacıyla bizden istenen bilgileri
  //                 anılan bu kurum, kuruluş ve makamlara ayrıca yasal
  //                 yükümlülüklerimiz kapsamında ticari iletişime ilişkin
  //                 kayıtları İleti Yönetim Sistemi A.Ş. ile;
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Şüpheli işlemlerin takibi, tespiti ve hukuka aykırı işlemlerin
  //                 önlenmesi amaçlarıyla gerekli durumlarda danışmanlık hizmeti
  //                 aldığımız tedarikçilerimiz ve ilgili işleme ilişkin ödeme
  //                 kuruluşlarıyla,
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Gerekli durumlarda mağazalardaki güvenlik kamerası
  //                 görüntülerinizi mağazanın bulunduğu alışveriş merkezinin
  //                 güvenlik birimleriyle,
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Site ve Mobil Uygulama’daki ziyaret trafiğinin artırılmasına
  //                 ilişkin faaliyetler kapsamında iş ortaklarımızla,
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Bir birleşme, satış, yeniden yapılanma, yeniden organizasyon,
  //                 tasfiye veya Boyner’in varlıklarının bir kısmının veya
  //                 tamamının başka bir şekilde satılması veya devredilmesi
  //                 durumunda veya devam eden bir iş olarak veya iflas, tasfiye
  //                 veya benzeri bir parçası olarak Boyner’in sahip olduğu kişisel
  //                 verilerin transfer edilen varlıklar arasında yer aldığı işlem
  //                 halinde bir potansiyel alıcıya/alıcıya veya başka bir halefe;
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Açık rıza vermeniz halinde veri zenginleştirme/tekilleştirme
  //                 faaliyetlerinde bulunulması amaçlarıyla Boyner’in bağlı olduğu
  //                 grup şirketler bünyesindeki Altınyıldız Tekstil ve Konfeksiyon
  //                 A.Ş., BR Mağazacılık Ticaret A.Ş., BNR Teknoloji A.Ş., Boyner
  //                 Holding A.Ş. ile;
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Ortak müşteri yönetim sistemi kullandığımız Boyner
  //                 mağazalarını işleten bayiler ile,
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Yurt Dışına Aktarım: Bilişim teknolojileri,
  //                 pazarlama/reklam/analiz faaliyetleri, ya da uzmanlık
  //                 gerektiren danışmanlık vb. konularda ürün ve hizmet desteği
  //                 almak amaçlarıyla yurt dışında bulunan hizmet sağlayıcıları ve
  //                 iş ortaklarıyla (siber güvenlik kapsamında sigorta hizmeti,
  //                 sunucu/ bakım ve geliştirme hizmeti) ve bu suretle yurt
  //                 içindeki ve/veya yurt dışındaki ilgili tedarikçilerin
  //                 sunucularının yurtdışında olması sebebiyle kimlik, finans,
  //                 iletişim, pazarlama, müşteri işlem, hukuki işlem ve işlem
  //                 güvenliği verilerinizi yurtdışı ile
  //               </li>
  //             </ul>
  //             <p className="mb-4">paylaşmaktayız.</p>

  //             <b>
  //               3. Kişisel Verilerinizin Toplanma Yöntemi ve Hukuki Sebebi
  //               Nedir?
  //             </b>
  //             <p className="mb-4">
  //               Kişisel verilerinizi, Boyner veya Boyner bayileri, iştirakleri,
  //               tedarikçileri veya iş ortakları tarafından; Mağazalarda bulunan
  //               güvenlik kameraları ile, Mağazalarda sözlü olarak satış
  //               danışmanlara beyan ettiğiniz bilgilerin bu kişilerce
  //               sistemlerimize kaydedilmesi, Mağazalar, Site, Mobil Uygulama
  //               veya Boyner ya da iş ortaklarına ait fiziksel veya dijital
  //               ortamlarda sunulan üyelik imkanları üzerinden yaptığınız
  //               alışverişlerin veya üyelik işlemlerine ilişkin paylaştığınız
  //               bilgilerin sistemlerimize kaydedilmesi, sabit-mobil nitelikli
  //               internet ve iletişim cihazlarınızın ve/veya mobil uygulamaların
  //               muhtelif ortamlarda ve yerde kullanımlarından oluşan/edinilen
  //               verilerin sistemlerimize kaydedilmesi, Site Üyesi olmanız ve
  //               mobil cihazınızda bluetooth özelliğinin açık olması halinde
  //               Mağazalarımızda bulunan beacon cihazları tarafından lokasyon
  //               verinizin toplanması, çerez politikasında detaylı olarak
  //               açıklandığı üzere Site veya Mobil Uygulama’da çalışan çerez ve
  //               benzeri diğer teknolojilerle, Mağaza, Site ve Mobil Uygulama
  //               üzerindeki her türlü alışveriş, tahsilat, teslimat, işlem, anket
  //               doldurma, kayıt ve davranışsal işlemlerin sistemlerimize
  //               kaydedilmesi, iş ortaklarımızın internet sitelerinden Site ve
  //               Mobil Uygulama’ya yapılan yönlendirme işleminin kaydedilmesi,
  //               çağrı merkezi, Mobil Uygulama, Site, e-posta adreslerimiz,
  //               sosyal medya ve diğer iletişim kanalları üzerinden karşılıklı
  //               olarak iletişime geçilmesi sırasında bize iletmiş olduğunuz
  //               talep ve şikayetlerinizin kaydedilmesi, çağrı merkezi ile
  //               yaptığınız görüşmelerin kaydedilmesi, Site veya Anahtar Kart
  //               üyeliği kapsamında açık rıza vermeniz halinde grup şirketlerimiz
  //               olan Altınyıldız Tekstil ve Konfeksiyon A.Ş., BR Mağazacılık
  //               Ticaret A.Ş., BNR Teknoloji A.Ş., Boyner Holding A.Ş. ile
  //               paylaştığınız verilerinizin Boyner tarafında da güncellenmesi,
  //               zenginleştirilmesi gibi otomatik yöntemlerle veya resmi kurum,
  //               kuruluş ve adli/idari makamlardan gelen sizinle ilgili
  //               bilgi/belgelerin fiziksel ortamlara kaydedilmesi, mail order
  //               formlarınızın fiziksel ortamlara kaydedilmesi, iade
  //               süreçlerinize ilişkin kayıtların ilgili evrakların kaydedilmesi
  //               ile otomatik olmayan yöntemlerle toplamaktayız. Kişisel
  //               verilerinizi,
  //             </p>
  //             <ul>
  //               <li className="ml-8 list-disc">
  //                 Site, Mağazalar ve Mobil Uygulama üzerindeki satış süreçlerine
  //                 ilişkin olarak “bir sözleşmenin kurulması veya ifasıyla
  //                 doğrudan doğruya ilgili olması kaydıyla, sözleşmenin
  //                 taraflarına ait kişisel verilerin işlenmesinin gerekli olması”
  //                 ile “ilgili kişinin temel hak ve özgürlüklerine zarar vermemek
  //                 kaydıyla veri sorumlusunun meşru menfaatleri için veri
  //                 işlenmesinin zorunlu olması” hukuki sebeplerine;
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Mevzuattan kaynaklanan kişisel veri işleme ve saklama
  //                 yükümlülüklerimize ilişkin “kanunlarda açıkça öngörülme” ile
  //                 “veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi
  //                 için zorunlu olması” hukuki sebeplerine;
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Mağazalarda güvenlik kameraları ile kayıt yapılmasına ve
  //                 mağaza ziyaretlerine ilişkin olarak “ilgili kişinin temel hak
  //                 ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun
  //                 meşru menfaatleri için veri işlenmesinin zorunlu olması” ve
  //                 “bir hakkın tesisi, kullanılması veya korunması için veri
  //                 işlemenin zorunlu olması” hukuki sebeplerine;
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Site üzerindeki zorunlu, işlevsellik ve performans çerezlerine
  //                 ilişkin olarak “ilgili kişinin temel hak ve özgürlüklerine
  //                 zarar vermemek kaydıyla veri sorumlusunun meşru menfaatleri
  //                 için veri işlenmesinin zorunlu olması” hukuki sebebine ve
  //                 pazarlama/takip çerezlerine ilişkin olarak ise vereceğiniz
  //                 “açık rıza” hukuki sebebine;
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Site Üyeliği ve Anahtar Kart Üyeliği süreçlerine ilişkin
  //                 olarak ise; üyelik süreçleri kapsamında sözleşmenin kurulması
  //                 ve sözleşmeden kaynaklanan yükümlülüklerimizi yerine getirmek
  //                 için “bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya
  //                 ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel
  //                 verilerin işlenmesinin gerekli olması” hukuki sebebine; Site
  //                 Üyeliği ve Anahtar Kart Üyeliği kapsamındaki yukarıda
  //                 açıklanan pazarlama faaliyetlerine ilişkin olarak ise
  //                 vereceğiniz “açık rıza” hukuki sebebine;
  //               </li>
  //               <li className="ml-8 list-disc">
  //                 Ticari iletişim süreçlerinde ise vereceğiniz “açık rıza”ya
  //                 veya 1 Mayıs 2015 tarihinden önce Şirketimizden ürün teminine
  //                 ilişkin işlemler sırasında elektronik iletişim adresinizi
  //                 vermiş iseniz, Ticari İletişim ve Ticari Elektronik İletiler
  //                 Hakkında Yönetmelik Geçici Madde 1(2) uyarınca bu iletişim
  //                 bilgilerinizin onaylı sayılması nedeniyle bu kapsamda sayılan
  //                 ticari iletişimler ise “kanunlarda açıkça öngörülme” ve “açık
  //                 rıza” hukuki sebebine
  //               </li>
  //             </ul>
  //             <p className="mb-4">dayanarak topluyoruz.</p>
  //             <p className="mb-4">
  //               İstediğiniz her zaman ve hiçbir gerekçe göstermeksizin açık
  //               rızanızı geri çekerek açık rızaya dayanan kişisel veri işleme
  //               faaliyetlerine son verebilirsiniz.
  //             </p>

  //             <b>4. Haklarınız Nelerdir?</b>
  //             <p className="mb-4">
  //               Tarafımızca işlenen kişisel verilerinize ilişkin olarak her
  //               zaman Kanun’un 11. maddesinde yer alan haklarınıza ilişkin
  //               tarafımıza başvuruda bulunabilirsiniz. Başvurularınızı Veri
  //               Sorumlusu olarak Boyner Büyük Mağazacılık A.Ş.’ye aşağıda
  //               belirtilen adresimize yazılı başvuru yaparak veya sistemimizde
  //               kayıtlı bulanan e-posta adresinizden e-posta göndermek suretiyle
  //               iletebilirsiniz. (İlgili talebin Veri Sorumlusuna Başvuru Usul
  //               ve Esasları Hakkında Tebliğ’de yer alan şartlara uygun olması
  //               gerektiğini hatırlatmak isteriz.) Yazılı Başvuru: Lütfen
  //               başvurularınızda aşağıdaki ifadeyi zarfın üzerine/yazının
  //               başlığına aynen yazınız. “Boyner Büyük Mağazacılık A.Ş. (Boyner)
  //               Hukuk Departmanı dikkatine” Başvurularınızı aşağıdaki adrese
  //               gönderiniz: Maslak Mah. Büyükdere Cad. USO Center No:245 İç Kapı
  //               No.2 34396 Sarıyer/İstanbul E-Posta yoluyla başvuru: Lütfen
  //               başvurunuzun “Konu” kısmına aşağıdaki ibareyi aynen yazınız.
  //               “Boyner Büyük Mağazacılık A.Ş. (Boyner) Hukuk Departmanı
  //               dikkatine” Başvurularınızı aşağıdaki adrese gönderiniz:
  //               <Link
  //                 className="text-blue-600"
  //                 href="mailto:boynerkvkk@boyner.com.tr"
  //               >
  //                 boynerkvkk@boyner.com.tr
  //               </Link>
  //             </p>
  //           </DialogDescription>
  //         </DialogContent>
  //       </Dialog>
  //       &apos;ni okudum, onaylıyorum.
  //     </>
  //   ),
  // },
  // {
  //   id: "terms2",
  //   name: "termsOfService",
  //   label: (
  //     <>
  //       <Dialog>
  //         <DialogTrigger>
  //           <a className="cursor-pointer underline">Açık rıza Metni</a>
  //         </DialogTrigger>
  //         <DialogContent>
  //           <DialogHeader>
  //             <DialogTitle>Açık rıza Metni</DialogTitle>
  //           </DialogHeader>
  //           <DialogDescription>
  //             <p className="mb-4">
  //               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  //               Placeat, laudantium.
  //             </p>
  //           </DialogDescription>
  //         </DialogContent>
  //       </Dialog>
  //       &apos;ni okudum, onaylıyorum.
  //     </>
  //   ),
  // },
  {
    id: "terms3",
    name: "privacyPolicy",
    label: (
      <>
        <Dialog>
          <DialogTrigger>
            Tarafıma şirketiniz ve{" "}
            <a className="mr-1 cursor-pointer underline">
              Boyner Grubu Şirketleri
            </a>{" "}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Boyner Grubu Şirketleri</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <p className="mb-4">
                Boyner Grup Şirketleri; Boyner Büyük Mağazacılık A.Ş.,
                Altınyıldız Tekstil ve Konfeksiyon A.Ş., BR Mağazacılık Ticaret
                A.Ş. ve BNR Teknoloji A.Ş. gibi Boyner Holding A.Ş.’ne bağlı
                şirketler ile mevcut – müstakbel diğer iştirakleridir.
              </p>
            </DialogDescription>
          </DialogContent>
        </Dialog>
        ticari elektronik ileti gönderilmesi için
        <Dialog>
          <DialogTrigger>
            <a className="mx-1 cursor-pointer underline">
              burada da belirtilen iznim
            </a>{" "}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Boyner Grubu Şirketleri</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <p className="mb-4">
                Boyner Büyük Mağazacılık A.Ş. Ticari İletişime ve Kişisel
                Verilerin İşlenmesine İlişkin Açık Rıza/İzin Beyanı 6698 sayılı
                Kişisel Verilerin Korunması Kanunu kapsamında benimle
                paylaşılan,
                <Link
                  href={
                    "https://www.boyner.com.tr/content/kisisel-verilerin-korunmasina-iliskin-aydinlatma-metni"
                  }
                >
                  https://www.boyner.com.tr/content/kisisel-verilerin-korunmasina-iliskin-aydinlatma-metni
                </Link>
                bağlantısından veya Boyner mobil uygulaması üzerinden her zaman
                ulaşabileceğim ‘Boyner Müşteri, Üye ve Ziyaretçi Kişisel
                Verilerinin Korunmasına İlişkin Aydınlatma Metni’nde detaylı
                olarak açıklandığı şekilde, Boyner Büyük Mağazacılık A.Ş.,
                Boyner Grubu Şirketleri (Boyner Holding A.Ş. bünyesindeki Boyner
                Grubu Şirketleri; Altınyıldız Tekstil ve Konfeksiyon A.Ş., BR
                Mağazacılık Ticaret A.Ş., BNR Teknoloji A.Ş. ve Boyner Holding
                A.Ş.'ye bağlı diğer şirketleri ile mevcut-müstakbel
                iştirakleridir.) tarafından yürütülen; kampanyalar, avantajlar,
                ürün ve hizmet tanıtımları, anket çalışmaları, promosyonlar,
                reklamlar, yarışmalar, çekilişler, davet, açılış ve diğer
                etkinliklere ilişkin davetlerin iletilmesine, pazarlama
                faaliyetleri kapsamında güncel iletişim bilgilerim üzerinden
                bana yönelik ticari iletişim faaliyetlerinde bulunulmasına,
                tarafıma ticari ileti gönderilmesine, bu amaçlarla iletişim ve
                kimlik verilerimin işlenmesine, bu metinde ticari unvanları yer
                alan şirketlerle paylaşılmasına açık rıza veriyorum.
              </p>
            </DialogDescription>
          </DialogContent>
        </Dialog>
        vardır.
      </>
    ),
    isStart: true,
  },
];

function RenderCheckboxes() {
  return checkboxItems.map(({ id, label, isStart, name }) => (
    <div
      className={`flex items-${isStart ? "start" : "center"} space-x-2`}
      key={id}
    >
      <Checkbox id={id} className="bg-white" name={name} required />
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
            <div className=" flex flex-1 items-center justify-center px-2">
              <Image src={DiynamicFestLogo} alt="" width={400} height={400} />
            </div>
            <div className="flex flex-1 flex-col justify-center px-2 pt-2">
              <div className="flex flex-col justify-center">
                <Form {...form}>
                  <form
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                    className="mx-auto max-w-[400px] space-y-4 sm:space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              placeholder="Adın Soyadın"
                              {...field}
                              required
                              maxLength={40}
                            />
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
                            <Input
                              placeholder="Cep Telefonun"
                              {...field}
                              required
                              maxLength={13}
                            />
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
                            <Input
                              placeholder="E-posta Adresin"
                              {...field}
                              required
                            />
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
