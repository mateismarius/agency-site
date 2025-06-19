// src/app/servicii/ecommerce/page.tsx - Pagina Site-uri E-commerce
import { Metadata } from 'next'
import { Layout } from '@/components/layout'
import { Typography, Section } from '@/components/core'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    ShoppingCart,
    CreditCard,
    Smartphone,
    BarChart3,
    Shield,
    Zap,
    Globe,
    CheckCircle,
    Star,
    ArrowRight,
    TrendingUp,
    Target,
    Clock,
    Package,
    Truck,
    Search,
    Settings,
    PieChart,
    MessageSquare
} from 'lucide-react'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Site-uri E-commerce | Magazine Online WordPress & Shopify | AgencyPro Brașov',
    description: 'Dezvoltare magazine online profesionale cu WordPress WooCommerce și Shopify. Sisteme de plată securizate, design responsive, optimizare conversii. Prețuri de la 2.500 RON.',
    keywords: 'magazin online, e-commerce, WooCommerce, Shopify, dezvoltare magazin online Brașov, site vanzari online, plăți online, magazin online România',
    openGraph: {
        title: 'Magazine Online Profesionale - WordPress & Shopify | AgencyPro',
        description: 'Creăm magazine online performante care convertesc vizitatori în clienți. Tehnologii moderne, design atractiv, integrări complete.',
        type: 'website',
        locale: 'ro_RO',
    }
}

export default function EcommercePage() {
    return (
        <Layout>
            {/* Hero Section */}
            <Section spacing="xl" className="relative bg-gradient-to-br from-agency-blue via-agency-blue-dark to-agency-blue overflow-hidden">
                <div className="absolute top-20 right-10 w-40 h-40 bg-agency-accent/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-bounce"></div>

                <div className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-agency-accent text-agency-gray-dark mb-6">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            E-commerce Expert
                        </Badge>

                        <Typography variant="h1" className="text-white">
                            Magazine Online Care
                            <span className="text-agency-accent"> Convertesc</span>
                        </Typography>

                        <Typography variant="lead" className="mt-6 text-white/90 max-w-3xl mx-auto">
                            Construim magazine online performante cu WordPress WooCommerce și Shopify,
                            optimizate pentru vânzări maxime și experiență utilizator superioară.
                        </Typography>

                        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                                <TrendingUp className="w-5 h-5 text-agency-accent" />
                                <div className="text-left">
                                    <Typography variant="small" className="text-white/80">Creștere vânzări</Typography>
                                    <Typography variant="body" className="font-semibold text-agency-accent">
                                        +300% average
                                    </Typography>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                                <Clock className="w-5 h-5 text-agency-accent" />
                                <div className="text-left">
                                    <Typography variant="small" className="text-white/80">Timp livrare</Typography>
                                    <Typography variant="body" className="font-semibold text-agency-accent">
                                        2-4 săptămâni
                                    </Typography>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-agency-accent text-agency-gray-dark hover:bg-agency-accent-dark">
                                <MessageSquare className="mr-2 w-5 h-5" />
                                Consultație Gratuită
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-transparent border-white/20 text-white hover:bg-white/10"
                            >
                                Vezi Portofoliul
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Platforms Section */}
            <Section spacing="lg">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Platforme E-commerce de Top
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Alegem tehnologia perfectă pentru nevoile tale: de la WordPress WooCommerce
                        pentru flexibilitate maximă la Shopify pentru simplitate și performanță.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {platforms.map((platform, index) => (
                        <Card key={index} className="hover:shadow-xl transition-all duration-500 border-0 shadow-md group">
                            <CardHeader className={`${platform.bgColor} rounded-t-lg relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-16 h-16 ${platform.iconBg} rounded-xl flex items-center justify-center`}>
                                            <platform.icon className={`w-8 h-8 ${platform.iconColor}`} />
                                        </div>
                                        <Badge className={platform.badgeColor}>
                                            {platform.popular && "Populară"}
                                            {platform.recommended && "Recomandată"}
                                        </Badge>
                                    </div>
                                    <CardTitle className={`text-2xl ${platform.textColor} mb-2`}>
                                        {platform.name}
                                    </CardTitle>
                                    <CardDescription className={platform.descColor}>
                                        {platform.description}
                                    </CardDescription>
                                </div>
                            </CardHeader>

                            <CardContent className="pt-6">
                                <div className="space-y-6">
                                    {/* Features */}
                                    <div>
                                        <Typography variant="h6" className="text-agency-blue-dark mb-3">
                                            Caracteristici Principale
                                        </Typography>
                                        <ul className="space-y-2">
                                            {platform.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-3">
                                                    <CheckCircle className={`w-4 h-4 ${platform.checkColor} flex-shrink-0`} />
                                                    <Typography variant="small" className="text-agency-gray-dark">
                                                        {feature}
                                                    </Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Price & Timeline */}
                                    <div className="bg-agency-gray-light rounded-lg p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <Typography variant="body" className="font-semibold text-agency-gray-dark">
                                                Preț de la:
                                            </Typography>
                                            <Typography variant="h6" className={platform.priceColor}>
                                                {platform.price}
                                            </Typography>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <Typography variant="small" className="text-agency-gray">
                                                Timp realizare:
                                            </Typography>
                                            <Typography variant="small" className="font-medium text-agency-gray-dark">
                                                {platform.timeline}
                                            </Typography>
                                        </div>
                                    </div>

                                    <Button className={`w-full ${platform.buttonColor}`}>
                                        Începe Proiectul
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Features Section */}
            <Section spacing="lg" className="bg-agency-gray-light">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Caracteristici Standard Incluse
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Fiecare magazin online pe care îl dezvoltăm include aceste funcționalități
                        esențiale pentru succesul afacerii tale online.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 border-0 shadow-md group">
                            <CardHeader>
                                <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                                </div>
                                <CardTitle className="text-agency-blue-dark">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Typography variant="body" className="text-agency-gray">
                                    {feature.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Process Section */}
            <Section spacing="lg">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Procesul Nostru de Dezvoltare
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        O metodologie testată în sute de proiecte e-commerce care garantează
                        succesul și satisfacția completă a clienților.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="text-center group">
                            <div className="relative mb-6">
                                <div className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                    <step.icon className={`w-10 h-10 ${step.iconColor}`} />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-agency-accent rounded-full flex items-center justify-center">
                                    <Typography variant="small" className="text-agency-gray-dark font-bold">
                                        {index + 1}
                                    </Typography>
                                </div>
                            </div>
                            <Typography variant="h5" className="text-agency-blue-dark mb-3">
                                {step.title}
                            </Typography>
                            <Typography variant="body" className="text-agency-gray">
                                {step.description}
                            </Typography>
                            <Typography variant="small" className="text-agency-accent font-medium mt-2">
                                {step.duration}
                            </Typography>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Pricing Section */}
            <Section spacing="lg" className="bg-gradient-to-r from-agency-blue-light to-agency-accent-light">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Pachete și Prețuri Transparente
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Alegem cele mai bune soluții pentru bugetul și nevoile tale, cu prețuri
                        clare și fără costuri ascunse.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <Card key={index} className={`relative hover:shadow-2xl transition-all duration-500 ${plan.featured ? 'border-2 border-agency-blue scale-105' : 'border-0 shadow-md'}`}>
                            {plan.featured && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <Badge className="bg-agency-blue text-white px-4 py-2">
                                        <Star className="w-4 h-4 mr-1" />
                                        Cel Mai Popular
                                    </Badge>
                                </div>
                            )}

                            <CardHeader className={`text-center ${plan.featured ? 'bg-agency-blue-light' : ''} rounded-t-lg`}>
                                <CardTitle className={`text-2xl ${plan.featured ? 'text-agency-blue-dark' : 'text-agency-gray-dark'}`}>
                                    {plan.name}
                                </CardTitle>
                                <CardDescription className="text-agency-gray">
                                    {plan.description}
                                </CardDescription>
                                <div className="mt-4">
                                    <Typography variant="h1" className={plan.featured ? 'text-agency-blue' : 'text-agency-gray-dark'}>
                                        {plan.price}
                                    </Typography>
                                    <Typography variant="small" className="text-agency-gray">
                                        {plan.period}
                                    </Typography>
                                </div>
                            </CardHeader>

                            <CardContent className="pt-6">
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <CheckCircle className={`w-4 h-4 ${plan.featured ? 'text-agency-blue' : 'text-success'} flex-shrink-0`} />
                                            <Typography variant="small" className="text-agency-gray-dark">
                                                {feature}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={`w-full ${plan.featured ? 'bg-agency-blue text-white hover:bg-agency-blue-dark' : 'bg-agency-gray text-white hover:bg-agency-gray-dark'}`}
                                >
                                    {plan.cta}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>

                                <Typography variant="small" className="text-center text-agency-gray mt-3">
                                    {plan.note}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section spacing="xl" className="bg-gradient-to-r from-agency-accent-light to-agency-accent">
                <div className="text-center max-w-4xl mx-auto">
                    <Typography variant="h2" className="text-agency-gray-dark">
                        Pregătit să îți lansezi magazinul online?
                    </Typography>

                    <Typography variant="lead" className="mt-6 text-agency-gray max-w-2xl mx-auto">
                        Hai să discutăm despre viziunea ta și să construim împreună un magazin online
                        care să îți depășească toate așteptările de vânzări.
                    </Typography>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-agency-blue text-white hover:bg-agency-blue-dark">
                            <MessageSquare className="mr-2 w-5 h-5" />
                            Consultație Gratuită
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-agency-gray text-agency-gray-dark hover:bg-agency-gray-light"
                        >
                            Sună Acum: +40 123 456 789
                        </Button>
                    </div>

                    <Typography variant="small" className="text-agency-gray mt-8">
                        💡 <strong>Bonus:</strong> Consultația include audit gratuit al businessului tău și strategie personalizată
                    </Typography>
                </div>
            </Section>
        </Layout>
    )
}

// Data pentru platforme
const platforms = [
    {
        name: "WordPress WooCommerce",
        description: "Soluția cea mai flexibilă și customizabilă pentru magazine online complexe",
        features: [
            "Personalizare completă design și funcționalități",
            "Sute de plugin-uri și extensii disponibile",
            "SEO avansat built-in",
            "Integrări nelimitate cu servicii terțe",
            "Control total asupra codului și datelor",
            "Scalabilitate enterprise-level"
        ],
        price: "2.500 RON",
        timeline: "3-4 săptămâni",
        icon: Package,
        bgColor: "bg-agency-blue-light",
        iconBg: "bg-agency-blue",
        iconColor: "text-white",
        textColor: "text-agency-blue-dark",
        descColor: "text-agency-blue",
        checkColor: "text-agency-blue",
        priceColor: "text-agency-blue",
        buttonColor: "bg-agency-blue text-white hover:bg-agency-blue-dark",
        badgeColor: "bg-agency-blue text-white",
        popular: true
    },
    {
        name: "Shopify Custom",
        description: "Platforma ideală pentru lansare rapidă și managementul simplificat",
        features: [
            "Setup rapid și user-friendly",
            "Hosting și securitate incluse",
            "App store cu mii de aplicații",
            "Plăți integrate și procesare automată",
            "Mobile-first și viteze excelente",
            "Suport 24/7 din partea Shopify"
        ],
        price: "3.500 RON",
        timeline: "2-3 săptămâni",
        icon: Zap,
        bgColor: "bg-success-light",
        iconBg: "bg-success",
        iconColor: "text-white",
        textColor: "text-success",
        descColor: "text-success",
        checkColor: "text-success",
        priceColor: "text-success",
        buttonColor: "bg-success text-white hover:bg-success-dark",
        badgeColor: "bg-success text-white",
        recommended: true
    }
]

// Data pentru funcționalități
const features = [
    {
        title: "Design Responsive",
        description: "Optimizat perfect pentru desktop, tabletă și mobile cu experiență seamless pe toate dispozitivele",
        icon: Smartphone,
        iconBg: "bg-agency-blue-light",
        iconColor: "text-agency-blue"
    },
    {
        title: "Plăți Securizate",
        description: "Integrări cu toate procesatorii majori: card, PayPal, transfer bancar, plată la livrare",
        icon: CreditCard,
        iconBg: "bg-success-light",
        iconColor: "text-success"
    },
    {
        title: "Gestionare Stoc",
        description: "Sistem automatizat de tracking stoc, notificări, variante produse și managementul comenzilor",
        icon: BarChart3,
        iconBg: "bg-warning-light",
        iconColor: "text-warning"
    },
    {
        title: "SEO Optimizat",
        description: "Structura tehnică perfectă pentru Google, meta tags, schema markup și viteze de încărcare rapide",
        icon: Search,
        iconBg: "bg-agency-accent-light",
        iconColor: "text-agency-accent"
    },
    {
        title: "Securitate SSL",
        description: "Certificate SSL gratuite, backup automatic, protecție malware și monitorizare 24/7",
        icon: Shield,
        iconBg: "bg-error-light",
        iconColor: "text-error"
    },
    {
        title: "Analytics Integrat",
        description: "Google Analytics, Facebook Pixel, tracking conversii și rapoarte detaliate de performanță",
        icon: PieChart,
        iconBg: "bg-agency-gray-light",
        iconColor: "text-agency-gray"
    }
]

// Data pentru proces
const processSteps = [
    {
        title: "Cercetare & Strategie",
        description: "Analizăm concurența, definim buyer personas și strategia de marketing",
        duration: "3-5 zile",
        icon: Target,
        bgColor: "bg-agency-blue-light",
        iconColor: "text-agency-blue"
    },
    {
        title: "Design & UX",
        description: "Creăm wireframes, mockups și prototipuri interactive pentru validare",
        duration: "5-7 zile",
        icon: Settings,
        bgColor: "bg-agency-accent-light",
        iconColor: "text-agency-accent"
    },
    {
        title: "Dezvoltare & Testing",
        description: "Codificăm magazinul, integrăm plățile și testăm toate funcționalitățile",
        duration: "10-14 zile",
        icon: Globe,
        bgColor: "bg-success-light",
        iconColor: "text-success"
    },
    {
        title: "Lansare & Optimizare",
        description: "Lansăm site-ul, configurăm analytics și oferim training complet",
        duration: "2-3 zile",
        icon: Truck,
        bgColor: "bg-warning-light",
        iconColor: "text-warning"
    }
]

// Data pentru prețuri
const pricingPlans = [
    {
        name: "Starter",
        description: "Perfect pentru afaceri mici care încep",
        price: "2.500 RON",
        period: "proiect complet",
        features: [
            "Până la 100 produse",
            "Design custom responsive",
            "Plăți card + PayPal",
            "SSL certificate inclus",
            "Training administrare",
            "Suport tehnic 3 luni",
            "Optimizări SEO de bază"
        ],
        cta: "Începe Acum",
        note: "Ideal pentru produse simple",
        featured: false
    },
    {
        name: "Professional",
        description: "Pentru magazine online în creștere",
        price: "4.500 RON",
        period: "proiect complet",
        features: [
            "Produse nelimitate",
            "Design premium custom",
            "Toate metodele de plată",
            "Integrări transport",
            "Email marketing setup",
            "Analytics avansat",
            "SEO complet optimizat",
            "Suport tehnic 6 luni"
        ],
        cta: "Cea Mai Bună Alegere",
        note: "Magazinele noastre cele mai populare",
        featured: true
    },
    {
        name: "Enterprise",
        description: "Soluții avansate pentru volume mari",
        price: "8.500 RON",
        period: "proiect complet",
        features: [
            "Arhitectură enterprise",
            "Integrări ERP/CRM",
            "Multi-warehouse",
            "B2B functionality",
            "API-uri custom",
            "Performance optimization",
            "Suport prioritar 12 luni",
            "Consultanță strategică"
        ],
        cta: "Consultație Personalizată",
        note: "Pentru afaceri cu volume mari",
        featured: false
    }
]