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
      <Sponsor />
<<<<<<< HEAD
      {/* <Form /> */}
=======
      <Form />
>>>>>>> e568b7eaa0a5b1f9597298167b5d205614a3041f
      <FAQ />
      <Transportation />
      <Footer />
    </main>
  );
}
