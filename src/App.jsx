import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Sparkles, Star, Heart, Gift, TreePine, Building2, Home, Store, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, CheckCircle, Lightbulb, Shield, Users, Clock, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

// Import images
import heroImage from './assets/hero-shopping-mall.jpg'
import christmasTreeMall from './assets/christmas-tree-mall.jpg'
import mallDecoration from './assets/mall-decoration.jpg'
import christmasLights from './assets/christmas-lights.jpg'
import logoRudolph from './assets/logo-rudolph.webp'
import rudolphMascot from './assets/rudolph-mascot.png'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoCliente: '',
    mensagem: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Aqui você pode adicionar a lógica para enviar o formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
  }

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-red-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={logoRudolph} alt="Rudolph Shining Logo" className="h-12 w-auto" />
            </motion.div>
            
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'home', label: 'Início' },
                { id: 'about', label: 'Quem Somos' },
                { id: 'services', label: 'Serviços' },
                { id: 'differentials', label: 'Diferenciais' },
                { id: 'portfolio', label: 'Portfólio' },
                { id: 'contact', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Decoração de Natal em Shopping" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-green-900/30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 bg-clip-text text-transparent">
                Transforme Seu Espaço Neste Natal
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                A Rudolph Shining leva <span className="font-semibold text-red-600">magia</span> e 
                <span className="font-semibold text-green-600"> profissionalismo</span> para seu 
                condomínio, comércio ou empresa com projetos exclusivos e totalmente personalizados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg shadow-xl"
                  onClick={() => scrollToSection('contact')}
                >
                  <Gift className="mr-2 h-5 w-5" />
                  Solicite um Orçamento
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg"
                  onClick={() => scrollToSection('portfolio')}
                >
                  <Star className="mr-2 h-5 w-5" />
                  Conheça Nossos Projetos
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img 
                src={rudolphMascot} 
                alt="Rudolph Mascot" 
                className="w-80 h-80 object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Quem Somos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Na Rudolph Shining, somos movidos por uma paixão inabalável: transformar a atmosfera natalina 
              em uma experiência verdadeiramente mágica e inesquecível.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={christmasTreeMall} 
                alt="Árvore de Natal em Shopping" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart, title: 'Profissionalismo', desc: 'Ética e comprometimento em todas as etapas' },
                  { icon: Sparkles, title: 'Criatividade', desc: 'Soluções inovadoras e designs exclusivos' },
                  { icon: Star, title: 'Excelência', desc: 'Perfeição em cada detalhe do projeto' },
                  { icon: Gift, title: 'Compromisso', desc: 'Dedicação integral à satisfação do cliente' }
                ].map((value, index) => (
                  <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
                    <value.icon className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800 mb-1">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.desc}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-red-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas para um Natal brilhante em cada segmento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Home,
                title: 'Condomínios',
                description: 'Iluminação interna e externa que valoriza o espaço com charme e segurança',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Building2,
                title: 'Corporativo',
                description: 'Valorização visual e experiencial do imóvel ou comércio',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Store,
                title: 'Comércio',
                description: 'Fortalecimento do espírito natalino e integração entre moradores e colaboradores',
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: TreePine,
                title: 'Shoppings',
                description: 'Economia de tempo e recursos com fornecedores experientes',
                color: 'from-green-500 to-green-600'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="differentials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Diferenciais Rudolph Shining
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O que nos torna únicos no mercado de decoração natalina
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: 'Projetos Exclusivos',
                description: 'Projetos exclusivos e totalmente personalizados para cada cliente'
              },
              {
                icon: Lightbulb,
                title: 'Iluminação LED Eficiente',
                description: 'Iluminação LED de alta eficiência e materiais sustentáveis'
              },
              {
                icon: Users,
                title: 'Rede de Fornecedores',
                description: 'Rede confiável de fornecedores selecionados a dedo'
              },
              {
                icon: Heart,
                title: 'Atendimento Consultivo',
                description: 'Atendimento consultivo, flexível e focado nas necessidades do cliente'
              },
              {
                icon: Shield,
                title: 'Segurança e Sustentabilidade',
                description: 'Compromisso com segurança elétrica e sustentabilidade ambiental'
              },
              {
                icon: Clock,
                title: 'Execução Pontual',
                description: 'Planejamento detalhado e execução pontual, sem contratempos'
              }
            ].map((differential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center p-6">
                  <differential.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <CardTitle className="text-lg font-bold text-gray-800 mb-3">{differential.title}</CardTitle>
                  <p className="text-gray-600">{differential.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-red-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Nosso Portfólio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Projetos conceituais que ilustram nossa capacidade de criar experiências mágicas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: heroImage,
                title: 'Shopping Center Premium',
                description: 'Decoração grandiosa com árvore central e iluminação espetacular',
                category: 'Shopping'
              },
              {
                image: christmasTreeMall,
                title: 'Árvore Majestosa',
                description: 'Árvore de Natal de grande porte com decoração sofisticada',
                category: 'Shopping'
              },
              {
                image: mallDecoration,
                title: 'Ambiente Corporativo',
                description: 'Decoração elegante para espaços empresariais',
                category: 'Corporativo'
              },
              {
                image: christmasLights,
                title: 'Iluminação Externa',
                description: 'Projeto de iluminação para fachadas e áreas externas',
                category: 'Comércio'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-red-600 text-white">
                      {project.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quer transformar seu espaço neste Natal?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Solicite um orçamento personalizado e descubra como a Rudolph Shining pode 
              levar magia e profissionalismo para seu condomínio, comércio ou empresa.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl"
              onClick={() => scrollToSection('contact')}
            >
              <Gift className="mr-2 h-5 w-5" />
              Solicitar Orçamento Agora
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Fale Conosco
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entre em contato e solicite um orçamento personalizado para seu projeto
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Solicite seu Orçamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome Completo</label>
                      <Input
                        value={formData.nome}
                        onChange={(e) => handleInputChange('nome', e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">E-mail</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Telefone</label>
                      <Input
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange('telefone', e.target.value)}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Tipo de Cliente</label>
                      <Select onValueChange={(value) => handleInputChange('tipoCliente', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="condominio">Condomínio</SelectItem>
                          <SelectItem value="corporativo">Corporativo</SelectItem>
                          <SelectItem value="comercio">Comércio</SelectItem>
                          <SelectItem value="shopping">Shopping</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Mensagem</label>
                      <Textarea
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange('mensagem', e.target.value)}
                        placeholder="Conte-nos sobre seu projeto..."
                        rows={4}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="p-6 bg-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl mb-4">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-red-600" />
                    <span>contato@rudolphshining.com.br</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Instagram className="h-5 w-5 text-red-600" />
                    <span>@rudolphshining</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl mb-4">Conecte-se Conosco</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="hover:bg-red-50 hover:border-red-300"
                      onClick={() => window.open('https://www.instagram.com/rudolphshining', '_blank')}
                    >
                      <Instagram className="h-5 w-5 text-red-600" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-red-50 hover:border-red-300">
                      <Facebook className="h-5 w-5 text-red-600" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-red-50 hover:border-red-300">
                      <Linkedin className="h-5 w-5 text-red-600" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <img 
                  src={logoRudolph} 
                  alt="Rudolph Shining Logo" 
                  className="h-24 w-auto mx-auto mb-4"
                />
                <p className="text-2xl font-bold text-red-600 mb-2">Obrigado!</p>
                <p className="text-gray-600">
                  Aguardamos seu contato para transformar seu Natal em algo mágico!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src={logoRudolph} alt="Rudolph Shining Logo" className="h-12 w-auto filter brightness-0 invert" />
            </div>
            <p className="text-gray-400 mb-4">
              A Magia do Natal que Ilumina Seu Negócio
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Rudolph Shining. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
