"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
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
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const validateUsername = (value: string) => {
    if (value.length === 0) {
      setUsernameErrorMessage("Lütfen adınızı giriniz.");
    } else if (/[\d!@#$%^&*()\-=\[\]{};:'",.<>/?\\|_~`]/.test(value)) {
      setUsernameErrorMessage("Lütfen geçerli bir ad giriniz.");
    } else {
      setUsernameErrorMessage("");
    }
  };

  const validatePhone = (value: string) => {
    if (/[a-zA-Z]/.test(value) || value.length < 10) {
      setPhoneErrorMessage("Lütfen Geçerli bir Telefon Numarası Giriniz.");
    } else {
      setPhoneErrorMessage("");
    }
  };

  const emailSchema = z.string().email();

  const validateEmail = (value: string) => {
    const response = emailSchema.safeParse(value);
    if (!response.success) {
      setEmailErrorMessage("Geçerli Bir Email Giriniz");
    } else {
      setEmailErrorMessage("");
    }
  };

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
                              onChange={(e) => {
                                validateUsername(e.target.value);
                              }}
                              required
                              maxLength={40}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <span className="text-xs text-red-500">
                      {usernameErrorMessage}
                    </span>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              placeholder="Cep Telefonun"
                              {...field}
                              onBlur={(e) => {
                                validatePhone(e.target.value);
                              }}
                              onFocus={(e) => {
                                setPhoneErrorMessage("");
                              }}
                              required
                              maxLength={13}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <span className="text-xs text-red-500">
                      {phoneErrorMessage}
                    </span>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              placeholder="E-posta Adresin"
                              {...field}
                              onBlur={(e) => {
                                validateEmail(e.target.value);
                              }}
                              onFocus={(e) => {
                                setEmailErrorMessage("");
                              }}
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <span className="text-xs text-red-500">
                      {emailErrorMessage}
                    </span>
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
