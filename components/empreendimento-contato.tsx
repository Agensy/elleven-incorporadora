"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface EmpreendimentoContatoProps {
  empreendimento: any
}

export default function EmpreendimentoContato({ empreendimento }: EmpreendimentoContatoProps) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log("Formulário enviado:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-glow-xs">
            Entre em <span className="text-secondary">Contato</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Fale com nossos especialistas e tire todas as suas dúvidas sobre o {empreendimento.nome}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <Card className="bg-dark-800/50 backdrop-blur-sm border-dark-700">
              <CardHeader>
                <CardTitle className="text-white">Solicite Informações</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">Nome Completo</label>
                    <Input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="bg-dark-800 border-dark-700 text-white placeholder:text-dark-400"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">E-mail</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-dark-800 border-dark-700 text-white placeholder:text-dark-400"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">Telefone</label>
                    <Input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="bg-dark-800 border-dark-700 text-white placeholder:text-dark-400"
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">Mensagem</label>
                    <Textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      className="bg-dark-800 border-dark-700 text-white placeholder:text-dark-400 min-h-[120px]"
                      placeholder="Conte-nos sobre seu interesse no empreendimento..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 shadow-glow-sm">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contato Direto */}
            <Card className="bg-dark-800/50 backdrop-blur-sm border-dark-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Contato Direto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-secondary" />
                    <div>
                      <div className="text-white font-medium">(21) 3333-4444</div>
                      <div className="text-sm text-dark-400">Plantão de Vendas</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-secondary" />
                    <div>
                      <div className="text-white font-medium">(21) 99999-9999</div>
                      <div className="text-sm text-dark-400">WhatsApp</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-secondary" />
                    <div>
                      <div className="text-white font-medium">vendas@elleven.com.br</div>
                      <div className="text-sm text-dark-400">E-mail</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Agendar Visita */}
            <Card className="bg-dark-800/50 backdrop-blur-sm border-dark-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-secondary" />
                  Agende sua Visita
                </h3>
                <p className="text-dark-300 mb-6">
                  Conheça pessoalmente o {empreendimento.nome} e todos os seus diferenciais.
                </p>
                <Button className="w-full bg-secondary hover:bg-secondary/90 shadow-glow-sm">Agendar Visita</Button>
              </CardContent>
            </Card>

            {/* Localização */}
            <Card className="bg-dark-800/50 backdrop-blur-sm border-dark-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  Estande de Vendas
                </h3>
                <div className="text-dark-300 mb-4">
                  <p>Av. Paulista, 1000</p>
                  <p>Bela Vista, São Paulo - SP</p>
                  <p>CEP: 01310-100</p>
                </div>
                <div className="text-sm text-dark-400">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábados e Domingos: 9h às 17h</p>
                </div>
              </CardContent>
            </Card>

            {/* CTAs Rápidos */}
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="border-dark-700 hover:border-dark-600 hover:bg-dark-800">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
              <Button variant="outline" className="border-dark-700 hover:border-dark-600 hover:bg-dark-800">
                <Phone className="mr-2 h-4 w-4" />
                Ligar
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
