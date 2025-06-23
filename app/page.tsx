import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import BannerSlider from "@/components/banner-slider"
import QuemSomosSection from "@/components/quem-somos-section"
import EmpreendimentosSection from "@/components/empreendimentos-section"
import ServicosSection from "@/components/servicos-section"
import DiferenciaisSection from "@/components/diferenciais-section"
import InvestimentoSection from "@/components/investimento-section"
import ParceirosGrid from "@/components/parceiros-grid"
import SobreSection from "@/components/sobre-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <QuemSomosSection />
      <BannerSlider />
      <EmpreendimentosSection />
      <DiferenciaisSection />
      <ServicosSection />
      <InvestimentoSection />
      <ParceirosGrid />
      <SobreSection />
      <Footer />
    </main>
  )
}
