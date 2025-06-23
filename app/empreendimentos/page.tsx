import Header from "@/components/header"
import EmpreendimentosHero from "@/components/empreendimentos-hero"
import EmpreendimentosListing from "@/components/empreendimentos-listing"
import Footer from "@/components/footer"

export default function EmpreendimentosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <EmpreendimentosHero />
      <EmpreendimentosListing />
      <Footer />
    </main>
  )
}
