import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Download from "@/components/download";
import Faq from "@/components/faq";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Features />
      <Download />
      <Faq />
      <Newsletter />
      <Footer />
    </main>
  );
}
