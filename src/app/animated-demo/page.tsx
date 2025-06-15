// src/app/animated-demo/page.tsx
'use client'
import { Typography, Section } from '@/components/core'
import {
    FadeIn,
    SlideUp,
    SlideIn,
    Scale,
    Stagger,
    StaggerItem,
    HoverScale,
    Floating,
    PageTransition
} from '@/components/motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AnimatedDemoPage() {
    return (
        <PageTransition>
            <div className="min-h-screen bg-background">
                {/* Animated Hero Section */}
                <Section spacing="xl" className="bg-gradient-to-br from-agency-blue via-agency-blue to-agency-blue-dark overflow-hidden">
                    <div className="text-center relative">
                        {/* Floating background elements */}
                        <Floating distance={15} duration={4} className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
                        <Floating distance={20} duration={6} className="absolute top-20 right-20 w-32 h-32 bg-agency-accent/20 rounded-full blur-xl" />
                        <Floating distance={10} duration={5} className="absolute bottom-10 left-1/3 w-16 h-16 bg-white/5 rounded-full blur-xl" />

                        <FadeIn delay={0.2}>
                            <Typography variant="h1" className="text-white">
                                Agenția Ta Digitală
                            </Typography>
                        </FadeIn>

                        <SlideUp delay={0.4}>
                            <Typography variant="subtitle" className="mt-6 text-white/90 max-w-3xl mx-auto">
                                Construim experiențe digitale de excepție pentru afacerea ta cu tehnologii moderne și design inovator
                            </Typography>
                        </SlideUp>

                        <Scale delay={0.6} className="mt-8">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <HoverScale>
                                    <Button size="lg" className="bg-agency-accent text-agency-gray-dark hover:bg-agency-accent-dark">
                                        Începe Proiectul
                                    </Button>
                                </HoverScale>
                                <HoverScale>
                                    <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                                        Vezi Portofoliul
                                    </Button>
                                </HoverScale>
                            </div>
                        </Scale>
                    </div>
                </Section>

                {/* Animated Services Section */}
                <Section spacing="lg">
                    <div className="text-center mb-16">
                        <SlideIn direction="top">
                            <Typography variant="h2" className="text-agency-blue-dark">
                                Serviciile Noastre
                            </Typography>
                        </SlideIn>
                        <SlideUp delay={0.2}>
                            <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                                Oferim soluții complete pentru prezența ta digitală, de la design la implementare și marketing
                            </Typography>
                        </SlideUp>
                    </div>

                    {/* Staggered Services Grid */}
                    <Stagger staggerDelay={0.1} delayChildren={0.3}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <StaggerItem key={index}>
                                    <HoverScale className="h-full">
                                        <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-md h-full">
                                            <CardHeader className={`${service.bgColor} rounded-t-lg`}>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <CardTitle className={`text-xl ${service.textColor}`}>{service.title}</CardTitle>
                                                    <Scale delay={index * 0.1 + 0.5}>
                                                        <Badge variant="secondary" className={service.badgeColor}>{service.category}</Badge>
                                                    </Scale>
                                                </div>
                                                <CardDescription className={service.descColor}>{service.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="pt-6 flex-1 flex flex-col">
                                                <ul className="space-y-3 flex-1">
                                                    {service.features.map((feature, idx) => (
                                                        <FadeIn key={idx} delay={index * 0.1 + idx * 0.05 + 0.7}>
                                                            <li className="flex items-center gap-3">
                                                                <div className={`w-2 h-2 ${service.dotColor} rounded-full`}></div>
                                                                <Typography variant="small" className="text-agency-gray-dark">{feature}</Typography>
                                                            </li>
                                                        </FadeIn>
                                                    ))}
                                                </ul>
                                                <SlideUp delay={index * 0.1 + 1}>
                                                    <Button className={`w-full mt-6 ${service.buttonColor}`} variant="outline">
                                                        Află Mai Mult
                                                    </Button>
                                                </SlideUp>
                                            </CardContent>
                                        </Card>
                                    </HoverScale>
                                </StaggerItem>
                            ))}
                        </div>
                    </Stagger>
                </Section>

                {/* Animated Features Section */}
                <Section spacing="lg" className="bg-agency-gray-light">
                    <FadeIn>
                        <Typography variant="h2" align="center" className="mb-16 text-agency-blue-dark">
                            De Ce Să Ne Alegi Pe Noi?
                        </Typography>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <SlideIn
                                key={index}
                                direction={index % 2 === 0 ? 'left' : 'right'}
                                delay={index * 0.1}
                            >
                                <div className="text-center">
                                    <Scale delay={index * 0.1 + 0.3}>
                                        <div className={`w-16 h-16 ${feature.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                            <div className={`w-8 h-8 ${feature.iconColor} rounded`}></div>
                                        </div>
                                    </Scale>
                                    <Typography variant="h5" className="mb-2 text-agency-blue-dark">
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

                {/* Animated Stats Section */}
                <Section spacing="lg">
                    <FadeIn>
                        <Typography variant="h2" align="center" className="mb-16 text-agency-blue-dark">
                            Rezultatele Noastre Vorbesc
                        </Typography>
                    </FadeIn>

                    <Stagger staggerDelay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                            {stats.map((stat, index) => (
                                <StaggerItem key={index}>
                                    <HoverScale>
                                        <div>
                                            <Scale delay={index * 0.1}>
                                                <Typography variant="h1" className="text-agency-blue">
                                                    {stat.number}
                                                </Typography>
                                            </Scale>
                                            <SlideUp delay={index * 0.1 + 0.2}>
                                                <Typography variant="lead" className="text-agency-gray">
                                                    {stat.label}
                                                </Typography>
                                            </SlideUp>
                                        </div>
                                    </HoverScale>
                                </StaggerItem>
                            ))}
                        </div>
                    </Stagger>
                </Section>

                {/* Animated CTA Section */}
                <Section spacing="xl" className="bg-gradient-to-r from-agency-accent-light to-agency-accent relative overflow-hidden">
                    {/* Floating background elements */}
                    <Floating distance={20} duration={8} className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                    <Floating distance={15} duration={6} className="absolute bottom-0 right-0 w-60 h-60 bg-agency-blue/10 rounded-full blur-3xl" />

                    <div className="text-center max-w-3xl mx-auto relative z-10">
                        <SlideIn direction="top">
                            <Typography variant="h2" className="text-agency-gray-dark">
                                Gata să îți transformi ideea în realitate?
                            </Typography>
                        </SlideIn>

                        <SlideUp delay={0.2}>
                            <Typography variant="lead" className="mt-6 text-agency-gray">
                                Contactează-ne astăzi pentru o consultație gratuită și să discutăm despre proiectul tău
                            </Typography>
                        </SlideUp>

                        <Scale delay={0.4} className="mt-8">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <HoverScale>
                                    <Button size="lg" className="bg-agency-blue text-white hover:bg-agency-blue-dark">
                                        Solicită Consultație Gratuită
                                    </Button>
                                </HoverScale>
                                <HoverScale>
                                    <Button size="lg" variant="outline" className="border-agency-gray text-agency-gray-dark hover:bg-agency-gray-light">
                                        Vezi Portofoliul Complet
                                    </Button>
                                </HoverScale>
                            </div>
                        </Scale>
                    </div>
                </Section>
            </div>
        </PageTransition>
    )
}

const services = [
    {
        title: "Site-uri E-commerce",
        category: "E-commerce",
        description: "Magazine online performante cu WordPress și Shopify",
        features: [
            "WordPress + WooCommerce",
            "Shopify customizat",
            "Integrare plăți securizate",
            "Optimizare conversii"
        ],
        bgColor: "bg-agency-blue-light",
        textColor: "text-agency-blue-dark",
        descColor: "text-agency-blue",
        badgeColor: "bg-agency-blue text-white",
        dotColor: "bg-agency-blue",
        buttonColor: "border-agency-blue text-agency-blue hover:bg-agency-blue hover:text-white"
    },
    {
        title: "Site-uri de Prezentare",
        category: "Web Design",
        description: "Site-uri corporate și de servicii responsive și moderne",
        features: [
            "Design responsive modern",
            "WordPress / Next.js",
            "SEO optimizat complet",
            "Performance îmbunătățit"
        ],
        bgColor: "bg-success-light",
        textColor: "text-success",
        descColor: "text-success",
        badgeColor: "bg-success text-white",
        dotColor: "bg-success",
        buttonColor: "border-success text-success hover:bg-success hover:text-white"
    },
    {
        title: "Marketing Digital",
        category: "Marketing",
        description: "Campanii complete pe Google Ads, Facebook, Instagram, TikTok",
        features: [
            "Google Ads Expert",
            "Facebook & Instagram Ads",
            "TikTok Marketing Pro",
            "Analiză ROI detaliată"
        ],
        bgColor: "bg-agency-accent-light",
        textColor: "text-agency-accent-dark",
        descColor: "text-agency-accent-dark",
        badgeColor: "bg-agency-accent text-agency-gray-dark",
        dotColor: "bg-agency-accent",
        buttonColor: "border-agency-accent text-agency-accent-dark hover:bg-agency-accent hover:text-agency-gray-dark"
    },
    {
        title: "SEO & Consultanță",
        category: "Consultanță",
        description: "Optimizare pentru motoarele de căutare și consultanță business",
        features: [
            "Audit SEO complet",
            "Optimizare on-page avansată",
            "Consultanță strategică",
            "Analiză competitori detaliată"
        ],
        bgColor: "bg-agency-gray-light",
        textColor: "text-agency-gray-dark",
        descColor: "text-agency-gray",
        badgeColor: "bg-agency-gray text-white",
        dotColor: "bg-agency-gray",
        buttonColor: "border-agency-gray text-agency-gray hover:bg-agency-gray hover:text-white"
    },
    {
        title: "Servicii Administrative",
        category: "Admin",
        description: "Înființări firme, SEAP, asociații sportive",
        features: [
            "Înființare firme rapidă",
            "Înregistrare SEAP completă",
            "Asociații sportive",
            "Administrare profile"
        ],
        bgColor: "bg-warning-light",
        textColor: "text-warning",
        descColor: "text-warning",
        badgeColor: "bg-warning text-agency-gray-dark",
        dotColor: "bg-warning",
        buttonColor: "border-warning text-warning hover:bg-warning hover:text-agency-gray-dark"
    },
    {
        title: "Hosting & Mentenanță",
        category: "Hosting",
        description: "Servicii de hosting și administrare site-uri",
        features: [
            "Hosting performant SSD",
            "Backup automat zilnic",
            "Mentenanță site-uri pro",
            "Suport tehnic 24/7"
        ],
        bgColor: "bg-agency-blue-light",
        textColor: "text-agency-blue-dark",
        descColor: "text-agency-blue",
        badgeColor: "bg-agency-blue-dark text-white",
        dotColor: "bg-agency-blue-dark",
        buttonColor: "border-agency-blue-dark text-agency-blue-dark hover:bg-agency-blue-dark hover:text-white"
    }
]

const features = [
    {
        title: "Experiență 10+ Ani",
        description: "Peste un deceniu de experiență în dezvoltarea digitală",
        iconBg: "bg-agency-blue-light",
        iconColor: "bg-agency-blue"
    },
    {
        title: "Echipă Expertă",
        description: "Specialiști certificați în toate tehnologiile moderne",
        iconBg: "bg-success-light",
        iconColor: "bg-success"
    },
    {
        title: "Suport 24/7",
        description: "Asistență tehnică completă în orice moment",
        iconBg: "bg-agency-accent-light",
        iconColor: "bg-agency-accent"
    },
    {
        title: "Rezultate Garantate",
        description: "Ne asumăm responsabilitatea pentru succesul proiectului",
        iconBg: "bg-warning-light",
        iconColor: "bg-warning"
    }
]

const stats = [
    {
        number: "150+",
        label: "Proiecte Finalizate"
    },
    {
        number: "98%",
        label: "Clienți Mulțumiți"
    },
    {
        number: "24/7",
        label: "Suport Tehnic"
    },
    {
        number: "10+",
        label: "Ani Experiență"
    } ]