"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, TrendingUp, Home, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function CalculadoraSection() {
  const [valorImovel, setValorImovel] = useState([800000])
  const [entrada, setEntrada] = useState([20])
  const [prazo, setPrazo] = useState([360])

  const calcularFinanciamento = () => {
    const valor = valorImovel[0]
    const percentualEntrada = entrada[0]
    const meses = prazo[0]

    const valorEntrada = (valor * percentualEntrada) / 100
    const valorFinanciado = valor - valorEntrada
    const taxa = 0.009 // 0.9% ao mês

    const prestacao = (valorFinanciado * taxa * Math.pow(1 + taxa, meses)) / (Math.pow(1 + taxa, meses) - 1)

    return {
      valorEntrada,
      valorFinanciado,
      prestacao,
      totalPago: prestacao * meses + valorEntrada,
    }
  }

  const resultado = calcularFinanciamento()

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
    <section className="section-padding-alt bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-glow-xs">
            Calculadora de <span className="text-secondary">Investimento</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Simule seu financiamento e descubra como realizar o sonho do seu imóvel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Calculadora */}
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <Card className="bg-dark-800/50 backdrop-blur-sm border-dark-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Calculator className="h-5 w-5 text-secondary" />
                  Simule seu Financiamento
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
                  <div className="flex justify-between text-xs text-dark-500 mt-1">
                    <span>R$ 200.000</span>
                    <span>R$ 3.000.000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-3">Entrada: {entrada[0]}%</label>
                  <Slider value={entrada} onValueChange={setEntrada} max={50} min={10} step={5} className="w-full" />
                  <div className="flex justify-between text-xs text-dark-500 mt-1">
                    <span>10%</span>
                    <span>50%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-3">
                    Prazo: {prazo[0]} meses ({Math.round(prazo[0] / 12)} anos)
                  </label>
                  <Slider value={prazo} onValueChange={setPrazo} max={420} min={120} step={12} className="w-full" />
                  <div className="flex justify-between text-xs text-dark-500 mt-1">
                    <span>10 anos</span>
                    <span>35 anos</span>
                  </div>
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90 shadow-glow-sm">
                  Falar com Especialista
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Resultados */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-dark-800/50 backdrop-blur-sm border-dark-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Valor da Entrada</h3>
                    <p className="text-2xl font-bold text-secondary">{formatCurrency(resultado.valorEntrada)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark-800/50 backdrop-blur-sm border-dark-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Home className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Valor Financiado</h3>
                    <p className="text-2xl font-bold text-secondary">{formatCurrency(resultado.valorFinanciado)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark-800/50 backdrop-blur-sm border-dark-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Prestação Mensal</h3>
                    <p className="text-2xl font-bold text-secondary">{formatCurrency(resultado.prestacao)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-dark-800/30 border border-dark-700 rounded-lg p-4">
              <p className="text-sm text-dark-400 text-center">
                * Simulação baseada em taxa de 0,9% a.m. Valores sujeitos à aprovação de crédito.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
