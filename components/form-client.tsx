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
              <DialogTitle>Açık rıza Metni</DialogTitle>
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
        </a>{"Ticari İletişim İzni
Boyner Büyük Mağazacılık A.Ş.
Ticari İletişime ve Kişisel Verilerin İşlenmesine İlişkin
Açık Rıza/İzin Beyanı
 
6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında benimle paylaşılan, https://www.boyner.com.tr/content/kisisel-verilerin-korunmasina-iliskin-aydinlatma-metni  bağlantısından veya Boyner mobil uygulaması üzerinden her zaman ulaşabileceğim ‘Boyner Müşteri, Üye ve Ziyaretçi Kişisel Verilerinin Korunmasına İlişkin Aydınlatma Metni’nde detaylı olarak açıklandığı şekilde,
 
Boyner Büyük Mağazacılık A.Ş., Boyner Grubu Şirketleri (Boyner Holding A.Ş. bünyesindeki Boyner Grubu Şirketleri; Altınyıldız Tekstil ve Konfeksiyon A.Ş., BR Mağazacılık Ticaret A.Ş., BNR Teknoloji A.Ş. ve Boyner Holding A.Ş.'ye bağlı diğer şirketleri ile mevcut-müstakbel iştirakleridir.) tarafından yürütülen; kampanyalar, avantajlar, ürün ve hizmet tanıtımları, anket çalışmaları, promosyonlar, reklamlar, yarışmalar, çekilişler, davet, açılış ve diğer etkinliklere ilişkin davetlerin iletilmesine, pazarlama faaliyetleri kapsamında güncel iletişim bilgilerim üzerinden bana yönelik ticari iletişim faaliyetlerinde bulunulmasına, tarafıma ticari ileti gönderilmesine, bu amaçlarla iletişim ve kimlik verilerimin işlenmesine, bu metinde ticari unvanları yer alan şirketlerle paylaşılmasına açık rıza veriyorum.

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
