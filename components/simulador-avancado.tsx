"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, Download, Share2, BarChart3 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SimuladorAvancado() {
  const [valorImovel, setValorImovel] = useState([800000])
  const [entrada, setEntrada] = useState([20])
  const [prazo, setPrazo] = useState([360])
  const [renda, setRenda] = useState([8000])

  const calcularFinanciamento = () => {
    const valor = valorImovel[0]
    const percentualEntrada = entrada[0]
    const meses = prazo[0]
    const rendaFamiliar = renda[0]

    const valorEntrada = (valor * percentualEntrada) / 100
    const valorFinanciado = valor - valorEntrada
    const taxa = 0.009 // 0.9% ao mês

    const prestacao = (valorFinanciado * taxa * Math.pow(1 + taxa, meses)) / (Math.pow(1 + taxa, meses) - 1)
    const comprometimentoRenda = (prestacao / rendaFamiliar) * 100

    return {
      valorEntrada,
      valorFinanciado,
      prestacao,
      totalPago: prestacao * meses + valorEntrada,
      comprometimentoRenda,
      aprovado: comprometimentoRenda <= 30,
    }
  }

  const calcularInvestimento = () => {
    const valor = valorImovel[0]
    const aluguelMensal = valor * 0.005 // 0.5% do valor do imóvel
    const rentabilidadeAnual = ((aluguelMensal * 12) / valor) * 100
    const valorizacaoAnual = 8 // 8% ao ano
    const retornoTotal = rentabilidadeAnual + valorizacaoAnual

    return {
      aluguelMensal,
      rentabilidadeAnual,
      valorizacaoAnual,
      retornoTotal,
      valorEm5Anos: valor * Math.pow(1.08, 5),
    }
  }

  const resultadoFinanciamento = calcularFinanciamento()
  const resultadoInvestimento = calcularInvestimento()

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-glow-xs">
            Simulador <span className="text-secondary">Avançado</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Faça simulações detalhadas e compare diferentes cenários de investimento
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          <Tabs defaultValue="financiamento" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-dark-800 border-dark-700">
              <TabsTrigger value="financiamento" className="data-[state=active]:bg-secondary">
                Financiamento
              </TabsTrigger>
              <TabsTrigger value="investimento" className="data-[state=active]:bg-secondary">
                Investimento
              </TabsTrigger>
            </TabsList>

            <TabsContent value="financiamento" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Controles */}
                <Card className="bg-dark-800/50 backdrop-blur-sm border-dark-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Calculator className="h-5 w-5 text-secondary" />
                      Simulação de Financiamento
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-3">
                        Valor do Imóvel: {formatCurrency(valorImovel[0])}
                      </label>
                      <Slider
                        value={valorImovel}
                        onValueChange={setValorImovel}
                        max={3000000}
                        min={200000}
                        step={50000}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-3">
                        Entrada: {entrada[0]}% ({formatCurrency((valorImovel[0] * entrada[0]) / 100)})
                      </label>
                      <Slider
                        value={entrada}
                        onValueChange={setEntrada}
                        max={50}
                        min={10}
                        step={5}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-3">
                        Prazo: {prazo[0]} meses ({Math.round(prazo[0] / 12)} anos)
                      </label>
                      <Slider value={prazo} onValueChange={setPrazo} max={420} min={120} step={12} className="w-full" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-3">
                        Renda Familiar: {formatCurrency(renda[0])}
                      </label>
                      <Slider
                        value={renda}
                        onValueChange={setRenda}
                        max={50000}
                        min={2000}
                        step={500}
                        className="w-full"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Resultados */}
                <div className="space-y-6">
                  <Card className="bg-dark-800/50 backdrop-blur-sm border-dark-700">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-white mb-4">Resumo do Financiamento</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-dark-400">Valor Financiado</span>
                          <span className="text-white font-medium">
                            {formatCurrency(resultadoFinanciamento.valorFinanciado)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dark-400">Prestação Mensal</span>
                          <span className="text-secondary font-bold text-lg">
                            {formatCurrency(resultadoFinanciamento.prestacao)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dark-400">Total a Pagar</span>
                          <span className="text-white font-medium">
                            {formatCurrency(resultadoFinanciamento.totalPago)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dark-400">Comprometimento da Renda</span>
                          <span
                            className={`font-bold ${resultadoFinanciamento.comprometimentoRenda <= 30 ? "text-green-500" : "text-red-500"}`}
                          >
                            {resultadoFinanciamento.comprometimentoRenda.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    className={`border-2 ${resultadoFinanciamento.aprovado ? "border-green-600 bg-green-600/10" : "border-red-600 bg-red-600/10"}`}
                  >
                    <CardContent className="p-6 text-center">
                      <h3
                        className={`text-lg font-bold mb-2 ${resultadoFinanciamento.aprovado ? "text-green-500" : "text-red-500"}`}
                      >
                        {resultadoFinanciamento.aprovado ? "Financiamento Aprovado!" : "Financiamento Negado"}
                      </h3>
                      <p className="text-dark-300 text-sm">
                        {resultadoFinanciamento.aprovado
                          ? "Sua renda é compatível com o financiamento solicitado."
                          : "O comprometimento da renda excede 30%. Considere aumentar a entrada ou diminuir o valor."}
                      </p>
                    </CardContent>
                  </Card>

                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1 border-dark-700 hover:border-dark-600">
                      <Download className="mr-2 h-4 w-4" />
                      Baixar Relatório
                    </Button>
                    <Button variant="outline" className="flex-1 border-dark-700 hover:border-dark-600">
                      <Share2 className="mr-2 h-4 w-4" />
                      Compartilhar
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="investimento" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Controles */}
                <Card className="bg-dark-800/50 backdrop-blur-sm border-dark-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <BarChart3 className="h-5 w-5 text-secondary" />
                      Simulação de Investimento
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-3">
                        Valor do Investimento: {formatCurrency(valorImovel[0])}
                      </label>
                      <Slider
                        value={valorImovel}
                        onValueChange={setValorImovel}
                        max={3000000}
                        min={200000}
                        step={50000}
                        className="w-full"
                      />
                    </div>

                    <div className="bg-dark-800/30 border border-dark-700 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-3">Premissas da Simulação:</h4>
                      <ul className="space-y-2 text-sm text-dark-300">
                        <li>• Aluguel: 0,5% do valor do imóvel/mês</li>
                        <li>• Valorização: 8% ao ano</li>
                        <li>• Vacância: Não considerada</li>
                        <li>• Impostos e taxas: Não incluídos</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Resultados */}
                <div className="space-y-6">
                  <Card className="bg-dark-800/50 backdrop-blur-sm border-dark-700">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-white mb-4">Projeção de Retorno</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-dark-400">Aluguel Mensal</span>
                          <span className="text-secondary font-bold">
                            {formatCurrency(resultadoInvestimento.aluguelMensal)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dark-400">Rentabilidade Anual</span>
                          <span className="text-white font-medium">
                            {resultadoInvestimento.rentabilidadeAnual.toFixed(2)}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dark-400">Valorização Anual</span>
                          <span className="text-white font-medium">{resultadoInvestimento.valorizacaoAnual}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dark-400">Retorno Total</span>
                          <span className="text-green-500 font-bold text-lg">
                            {resultadoInvestimento.retornoTotal.toFixed(2)}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dark-400">Valor em 5 anos</span>
                          <span className="text-secondary font-bold">
                            {formatCurrency(resultadoInvestimento.valorEm5Anos)}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-600 bg-green-600/10">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-bold text-green-500 mb-2">Excelente Oportunidade!</h3>
                      <p className="text-dark-300 text-sm">
                        Retorno superior à poupança e outros investimentos tradicionais.
                      </p>
                    </CardContent>
                  </Card>

                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1 border-dark-700 hover:border-dark-600">
                      <Download className="mr-2 h-4 w-4" />
                      Baixar Análise
                    </Button>
                    <Button variant="outline" className="flex-1 border-dark-700 hover:border-dark-600">
                      <Share2 className="mr-2 h-4 w-4" />
                      Compartilhar
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
