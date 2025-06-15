// src/app/page.tsx - Homepage cu layout complet
'use client'
import { Layout } from '@/components/layout'
import { Typography, Section } from '@/components/core'
import {
  FadeIn,
  SlideUp,
  SlideIn,
  Scale,
  Stagger,
  StaggerItem,
  HoverScale,
  Floating
} from '@/components/motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Star, Users, Award, Clock } from 'lucide-react'

export default function HomePage() {
  return (
      <Layout>
        {/* Hero Section */}
        <Section spacing="xl" className="relative bg-gradient-to-br from-agency-blue via-agency-blue to-agency-blue-dark overflow-hidden">
          {/* Background floating elements */}
          <Floating distance={15} duration={4} className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
          <Floating distance={20} duration={6} className="absolute top-20 right-20 w-32 h-32 bg-agency-accent/20 rounded-full blur-xl" />
          <Floating distance={10} duration={5} className="absolute bottom-10 left-1/3 w-16 h-16 bg-white/5 rounded-full blur-xl" />

          <div className="relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <FadeIn delay={0.2}>
                <Typography variant="h1" className="text-white">
                  Transformăm Ideile în
                  <span className="text-agency-accent"> Experiențe Digitale</span>
                </Typography>
              </FadeIn>

              <SlideUp delay={0.4}>
                <Typography variant="lead" className="mt-6 text-white/90 max-w-3xl mx-auto">
                  Suntem o agenție digitală completă care construiește site-uri moderne,
                  magazine online performante și campanii de marketing care convertesc.
                </Typography>
              </SlideUp>

              <Scale delay={0.6} className="mt-10">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <HoverScale>
                    <Button size="lg" className="bg-agency-accent text-agency-gray-dark hover:bg-agency-accent-dark">
                      Începe Proiectul Tău
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </HoverScale>
                  <HoverScale>
                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-transparent border-white/20 text-white hover:bg-white/10"
                    >
                      Vezi Portofoliul
                    </Button>
                  </HoverScale>
                </div>
              </Scale>

              {/* Trust indicators */}
              <SlideUp delay={0.8} className="mt-12">
                <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-agency-accent fill-current" />
                    <span className="text-sm">4.9/5 Rating Clienți</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-agency-accent" />
                    <span className="text-sm">150+ Proiecte Finalizate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-agency-accent" />
                    <span className="text-sm">10+ Ani Experiență</span>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </Section>

        {/* Services Section */}
        <Section spacing="lg">
          <div className="text-center mb-16">
            <SlideIn direction="top">
              <Typography variant="h2" className="text-agency-blue-dark">
                Serviciile Noastre Complete
              </Typography>
            </SlideIn>
            <SlideUp delay={0.2}>
              <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                De la conceptualizare la implementare și promovare, oferim soluții integrate
                pentru succesul afacerii tale online.
              </Typography>
            </SlideUp>
          </div>

          <Stagger staggerDelay={0.1} delayChildren={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                  <StaggerItem key={index}>
                    <HoverScale className="h-full">
                      <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-md h-full group">
                        <CardHeader className={`${service.bgColor} rounded-t-lg relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                              <div className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center`}>
                                <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                              </div>
                              <Badge variant="secondary" className={service.badgeColor}>
                                {service.category}
                              </Badge>
                            </div>
                            <CardTitle className={`text-xl ${service.textColor}`}>
                              {service.title}
                            </CardTitle>
                            <CardDescription className={service.descColor}>
                              {service.description}
                            </CardDescription>
                          </div>
                        </CardHeader>

                        <CardContent className="pt-6 flex-1 flex flex-col">
                          <ul className="space-y-3 flex-1 mb-6">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                  <CheckCircle className={`w-4 h-4 ${service.checkColor} flex-shrink-0`} />
                                  <Typography variant="small" className="text-agency-gray-dark">
                                    {feature}
                                  </Typography>
                                </li>
                            ))}
                          </ul>

                          <Button
                              className={`w-full ${service.buttonColor} group-hover:shadow-lg transition-all duration-300`}
                              variant="outline"
                          >
                            Află Mai Mult
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </CardContent>
                      </Card>
                    </HoverScale>
                  </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* Why Choose Us Section */}
        <Section spacing="lg" className="bg-agency-gray-light">
          <div className="text-center mb-16">
            <FadeIn>
              <Typography variant="h2" className="text-agency-blue-dark">
                De Ce Să Ne Alegi Pe Noi?
              </Typography>
            </FadeIn>
            <SlideUp delay={0.2}>
              <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                Combinăm experiența, tehnologia modernă și pasiunea pentru a livra
                rezultate excepționale pentru fiecare client.
              </Typography>
            </SlideUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <SlideIn
                    key={index}
                    direction={index % 2 === 0 ? 'left' : 'right'}
                    delay={index * 0.1}
                >
                  <div className="text-center group">
                    <Scale delay={index * 0.1 + 0.3}>
                      <div className={`w-20 h-20 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className={`w-10 h-10 ${feature.iconColor}`} />
                      </div>
                    </Scale>
                    <Typography variant="h5" className="mb-3 text-agency-blue-dark">
                      {feature.title}
                    </Typography>
                    <Typography variant="body" className="text-agency-gray">
                      {feature.description}
                    </Typography>
                  </div>
                </SlideIn>
            ))}
          </div>
        </Section>

        {/* Stats Section */}
        <Section spacing="lg">
          <div className="text-center mb-16">
            <FadeIn>
              <Typography variant="h2" className="text-agency-blue-dark">
                Rezultatele Noastre Vorbesc
              </Typography>
            </FadeIn>
            <SlideUp delay={0.2}>
              <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                Peste un deceniu de experiență și sute de proiecte de succes ne-au învățat
                cum să livrăm rezultate care depășesc așteptările.
              </Typography>
            </SlideUp>
          </div>

          <Stagger staggerDelay={0.15}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                  <StaggerItem key={index}>
                    <HoverScale className="text-center">
                      <Scale delay={index * 0.1}>
                        <Typography variant="h1" className="text-agency-blue mb-2">
                          {stat.number}
                        </Typography>
                      </Scale>
                      <SlideUp delay={index * 0.1 + 0.2}>
                        <Typography variant="body" className="text-agency-gray font-medium">
                          {stat.label}
                        </Typography>
                      </SlideUp>
                      <FadeIn delay={index * 0.1 + 0.4}>
                        <Typography variant="small" className="text-muted-foreground mt-1">
                          {stat.description}
                        </Typography>
                      </FadeIn>
                    </HoverScale>
                  </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Section>

        {/* CTA Section */}
        <Section spacing="xl" className="bg-gradient-to-r from-agency-accent-light to-agency-accent relative overflow-hidden">
          <Floating distance={20} duration={8} className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <Floating distance={15} duration={6} className="absolute bottom-0 right-0 w-60 h-60 bg-agency-blue/10 rounded-full blur-3xl" />

          <div className="text-center max-w-4xl mx-auto relative z-10">
            <SlideIn direction="top">
              <Typography variant="h2" className="text-agency-gray-dark">
                Gata să îți transformi afacerea?
              </Typography>
            </SlideIn>

            <SlideUp delay={0.2}>
              <Typography variant="lead" className="mt-6 text-agency-gray max-w-2xl mx-auto">
                Hai să discutăm despre proiectul tău într-o consultație gratuită de 30 de minute.
                Îți vom arăta exact cum te putem ajuta să îți atingi obiectivele online.
              </Typography>
            </SlideUp>

            <Scale delay={0.4} className="mt-10">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <HoverScale>
                  <Button size="lg" className="bg-agency-blue text-white hover:bg-agency-blue-dark shadow-lg">
                    <Clock className="mr-2 w-5 h-5" />
                    Rezervă Consultația Gratuită
                  </Button>
                </HoverScale>
                <HoverScale>
                  <Button
                      size="lg"
                      variant="outline"
                      className="border-agency-gray text-agency-gray-dark hover:bg-agency-gray-light"
                  >
                    Sună Acum: +40 123 456 789
                  </Button>
                </HoverScale>
              </div>
            </Scale>

            <FadeIn delay={0.6} className="mt-8">
              <Typography variant="small" className="text-agency-gray">
                💡 <strong>Bonus:</strong> Primul proiect beneficiază de 15% reducere
              </Typography>
            </FadeIn>
          </div>
        </Section>
      </Layout>
  )
}

// Data pentru servicii
const services = [
  {
    title: "Site-uri E-commerce",
    category: "E-commerce",
    description: "Magazine online performante care convertesc vizitatori în clienți",
    features: [
      "WordPress + WooCommerce optimizat",
      "Shopify custom development",
      "Integrări plăți securizate",
      "Optimizare rata de conversie",
      "Mobile-first design"
    ],
    icon: Users,
    bgColor: "bg-agency-blue-light",
    textColor: "text-agency-blue-dark",
    descColor: "text-agency-blue",
    badgeColor: "bg-agency-blue text-white",
    iconBg: "bg-agency-blue",
    iconColor: "text-white",
    checkColor: "text-agency-blue",
    buttonColor: "border-agency-blue text-agency-blue hover:bg-agency-blue hover:text-white"
  },
  {
    title: "Site-uri de Prezentare",
    category: "Web Design",
    description: "Site-uri corporate moderne care impresionează și convertesc",
    features: [
      "Design responsive premium",
      "WordPress sau Next.js custom",
      "SEO on-page optimizat",
      "Performance Score 95+",
      "Integrări CRM/Analytics"
    ],
    icon: Award,
    bgColor: "bg-success-light",
    textColor: "text-success",
    descColor: "text-success",
    badgeColor: "bg-success text-white",
    iconBg: "bg-success",
    iconColor: "text-white",
    checkColor: "text-success",
    buttonColor: "border-success text-success hover:bg-success hover:text-white"
  },
  {
    title: "Marketing Digital",
    category: "Marketing",
    description: "Campanii complete care generează leads calificați și vânzări",
    features: [
      "Google Ads & Facebook Ads",
      "Instagram & TikTok Marketing",
      "Email Marketing Automation",
      "Analytics & Tracking avansat",
      "A/B Testing & Optimizare"
    ],
    icon: Star,
    bgColor: "bg-agency-accent-light",
    textColor: "text-agency-accent-dark",
    descColor: "text-agency-accent-dark",
    badgeColor: "bg-agency-accent text-agency-gray-dark",
    iconBg: "bg-agency-accent",
    iconColor: "text-agency-gray-dark",
    checkColor: "text-agency-accent",
    buttonColor: "border-agency-accent text-agency-accent-dark hover:bg-agency-accent hover:text-agency-gray-dark"
  },
  {
    title: "SEO & Consultanță",
    category: "Consultanță",
    description: "Strategie digitală completă pentru creștere sustenabilă",
    features: [
      "Audit SEO tehnic complet",
      "Strategie conținut SEO",
      "Link building de calitate",
      "Consultanță business digitală",
      "Monitorizare & raporting"
    ],
    icon: CheckCircle,
    bgColor: "bg-agency-gray-light",
    textColor: "text-agency-gray-dark",
    descColor: "text-agency-gray",
    badgeColor: "bg-agency-gray text-white",
    iconBg: "bg-agency-gray",
    iconColor: "text-white",
    checkColor: "text-agency-gray",
    buttonColor: "border-agency-gray text-agency-gray hover:bg-agency-gray hover:text-white"
  },
  {
    title: "Servicii Administrative",
    category: "Admin",
    description: "Suport complet pentru înființări și proceduri administrative",
    features: [
      "Înființare firme SRL/PFA",
      "Înregistrare în SEAP",
      "Asociații sportive/culturale",
      "Administrare profile SEAP",
      "Consultanță juridică de bază"
    ],
    icon: Users,
    bgColor: "bg-warning-light",
    textColor: "text-warning",
    descColor: "text-warning",
    badgeColor: "bg-warning text-agency-gray-dark",
    iconBg: "bg-warning",
    iconColor: "text-agency-gray-dark",
    checkColor: "text-warning",
    buttonColor: "border-warning text-warning hover:bg-warning hover:text-agency-gray-dark"
  },
  {
    title: "Hosting & Mentenanță",
    category: "Hosting",
    description: "Hosting premium și mentenanță proactivă pentru site-uri sigure",
    features: [
      "Hosting SSD ultra-rapid",
      "Backup automat zilnic",
      "SSL certificates gratuite",
      "Monitorizare 24/7",
      "Updates & patches automate"
    ],
    icon: Clock,
    bgColor: "bg-agency-blue-light",
    textColor: "text-agency-blue-dark",
    descColor: "text-agency-blue",
    badgeColor: "bg-agency-blue-dark text-white",
    iconBg: "bg-agency-blue-dark",
    iconColor: "text-white",
    checkColor: "text-agency-blue-dark",
    buttonColor: "border-agency-blue-dark text-agency-blue-dark hover:bg-agency-blue-dark hover:text-white"
  }
]

// Data pentru features
const features = [
  {
    title: "Experiență 10+ Ani",
    description: "Peste un deceniu de experiență în dezvoltarea soluțiilor digitale pentru toate industriile",
    icon: Award,
    iconBg: "bg-agency-blue-light",
    iconColor: "text-agency-blue"
  },
  {
    title: "Echipă Expertă",
    description: "Specialiști certificați în dezvoltare web, design, marketing digital și SEO",
    icon: Users,
    iconBg: "bg-success-light",
    iconColor: "text-success"
  },
  {
    title: "Suport Complet",
    description: "Asistență tehnică dedicată și răspuns rapid la orice întrebări sau probleme",
    icon: Clock,
    iconBg: "bg-agency-accent-light",
    iconColor: "text-agency-accent"
  },
  {
    title: "Rezultate Garantate",
    description: "Ne asumăm responsabilitatea pentru succesul proiectului și satisfacția ta",
    icon: CheckCircle,
    iconBg: "bg-warning-light",
    iconColor: "text-warning"
  }
]

// Data pentru statistici
const stats = [
  {
    number: "150+",
    label: "Proiecte Finalizate",
    description: "Site-uri și aplicații livrate cu succes"
  },
  {
    number: "98%",
    label: "Clienți Mulțumiți",
    description: "Rating bazat pe feedback real"
  },
  {
    number: "24/7",
    label: "Suport Tehnic",
    description: "Disponibilitate completă pentru clienți"
  },
  {
    number: "10+",
    label: "Ani Experiență",
    description: "Expertiza acumulată în timp"
  }
]