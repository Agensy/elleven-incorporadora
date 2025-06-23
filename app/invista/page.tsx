import Header from "@/components/header"
import InvistaHero from "@/components/invista-hero"
import InvestimentoOpcoes from "@/components/investimento-opcoes"
import SimuladorAvancado from "@/components/simulador-avancado"
import VantagensInvestimento from "@/components/vantagens-investimento"
import ProcessoInvestimento from "@/components/processo-investimento"
import Footer from "@/components/footer"

export default function InvistaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <InvistaHero />
      <InvestimentoOpcoes />
      <SimuladorAvancado />
      <VantagensInvestimento />
      <ProcessoInvestimento />
      <Footer />
    </main>
  )
}
