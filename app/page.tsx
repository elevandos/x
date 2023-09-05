import Hero from "@/components/hero";
import About from "@/components/about";
import Speakers from "@/components/speakers";
import Agenda from "@/components/agenda";
import Countdown from "@/components/countdown";
import Transportation from "@/components/transportation";
import Sponsor from "@/components/sponsor";
import Form from "@/components/form";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Countdown />
      <Agenda />
      <Speakers />
     {/*  <Sponsor />*/}
      {/* <Form /> */}
      <FAQ />
      <Transportation />
      <Footer />
    </main>
  );
}
