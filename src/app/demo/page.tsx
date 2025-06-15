// src/app/demo/page.tsx - Updated with color system
import { Typography, Section } from '@/components/core'
import { ColorPalette } from '@/components/core/ColorPalette/ColorPalette'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section with Gradient */}
            <Section spacing="xl" className="bg-gradient-to-br from-agency-blue via-agency-blue to-agency-blue-dark">
                <div className="text-center">
                    <Typography variant="h1" className="text-white">
                        Agenția Ta Digitală
                    </Typography>
                    <Typography variant="subtitle" className="mt-6 text-white/90">
                        Construim experiențe digitale de excepție pentru afacerea ta
                    </Typography>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-agency-accent text-agency-gray-dark hover:bg-agency-accent-dark">
                            Începe Proiectul
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                            Vezi Portofoliul
                        </Button>
                    </div>
                </div>
            </Section>

            {/* Color System Demo */}
            <Section spacing="lg" className="bg-agency-gray-light">
                <Typography variant="h2" align="center" className="mb-12 text-agency-blue-dark">
                    Sistemul de Culori
                </Typography>
                <ColorPalette />
            </Section>

            {/* Services Section with Color Categories */}
            <Section spacing="lg">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Serviciile Noastre
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Oferim soluții complete pentru prezența ta digitală, de la design la implementare și marketing
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
                            <CardHeader className={`${service.bgColor} rounded-t-lg`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <CardTitle className={`text-xl ${service.textColor}`}>{service.title}</CardTitle>
                                    <Badge variant="secondary" className={service.badgeColor}>{service.category}</Badge>
                                </div>
                                <CardDescription className={service.descColor}>{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className={`w-2 h-2 ${service.dotColor} rounded-full`}></div>
                                            <Typography variant="small" className="text-agency-gray-dark">{feature}</Typography>
                                        </li>
                                    ))}
                                </ul>
                                <Button className={`w-full mt-6 ${service.buttonColor}`} variant="outline">
                                    Află Mai Mult
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Status Demo Section */}
            <Section spacing="lg" className="bg-agency-gray-light">
                <Typography variant="h2" align="center" className="mb-12 text-agency-blue-dark">
                    Status & Feedback Colors
                </Typography>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <Card className="border-success bg-success-light">
                        <CardHeader>
                            <CardTitle className="text-success flex items-center gap-2">
                                <div className="w-3 h-3 bg-success rounded-full"></div>
                                Proiect Finalizat
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body" className="text-agency-gray-dark">
                                Site-ul a fost livrat cu succes și este live în producție.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className="border-warning bg-warning-light">
                        <CardHeader>
                            <CardTitle className="text-warning flex items-center gap-2">
                                <div className="w-3 h-3 bg-warning rounded-full"></div>
                                În Dezvoltare
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body" className="text-agency-gray-dark">
                                Proiectul este în curs de dezvoltare, estimăm finalizarea în 2 săptămâni.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className="border-error bg-error-light">
                        <CardHeader>
                            <CardTitle className="text-error flex items-center gap-2">
                                <div className="w-3 h-3 bg-error rounded-full"></div>
                                Necesită Atenție
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body" className="text-agency-gray-dark">
                                Sunt necesare modificări urgente pentru a continua proiectul.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </Section>

            {/* CTA Section with Accent */}
            <Section spacing="xl" className="bg-gradient-to-r from-agency-accent-light to-agency-accent">
                <div className="text-center max-w-3xl mx-auto">
                    <Typography variant="h2" className="text-agency-gray-dark">
                        Gata să îți transformi ideea în realitate?
                    </Typography>
                    <Typography variant="lead" className="mt-6 text-agency-gray">
                        Contactează-ne astăzi pentru o consultație gratuită și să discutăm despre proiectul tău
                    </Typography>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-agency-blue text-white hover:bg-agency-blue-dark">
                            Solicită Consultație
                        </Button>
                        <Button size="lg" variant="outline" className="border-agency-gray text-agency-gray-dark hover:bg-agency-gray-light">
                            Vezi Portofoliul
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
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
            "Integrare plăți",
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
            "Design responsive",
            "WordPress / Next.js",
            "SEO optimizat",
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
            "Google Ads",
            "Facebook & Instagram Ads",
            "TikTok Marketing",
            "Analiză ROI"
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
            "Optimizare on-page",
            "Consultanță strategică",
            "Analiză competitori"
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
            "Înființare firme",
            "Înregistrare SEAP",
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
            "Hosting performant",
            "Backup automat",
            "Mentenanță site-uri",
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