// src/app/servicii/seo/page.tsx - Pagina SEO & Consultanță
import { Metadata } from 'next'
import { Layout } from '@/components/layout'
import { Typography, Section } from '@/components/core'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    Search,
    TrendingUp,
    Target,
    BarChart3,
    Globe,
    Award,
    Lightbulb,
    CheckCircle,
    Star,
    ArrowRight,
    Clock,
    Eye,
    Link,
    FileText,
    Settings,
    Smartphone,
    Zap,
    Shield,
    Calendar,
    MapPin
} from 'lucide-react'

// SEO Metadata
export const metadata: Metadata = {
    title: 'SEO & Consultanță Digitală | Optimizare Google & Strategie Business | AgencyPro Brașov',
    description: 'Servicii complete SEO: audit tehnic, optimizare on-page, link building, consultanță business digitală. Creștere organică trafic și vânzări garantate.',
    keywords: 'SEO, optimizare Google, consultanță digitală, audit SEO, link building, optimizare site, pozitionare Google, SEO Brașov, consultanță business digital',
    openGraph: {
        title: 'SEO & Consultanță Digitală | Creștere Organică Garantată',
        description: 'Îmbunătățim pozițiile în Google și strategia digitală pentru creștere sustenabilă a afacerii tale.',
        type: 'website',
        locale: 'ro_RO',
    }
}

export default function SEOPage() {
    return (
        <Layout>
            {/* Hero Section */}
            <Section spacing="xl" className="relative bg-gradient-to-br from-warning via-warning-light to-white overflow-hidden">
                <div className="absolute top-20 right-10 w-40 h-40 bg-agency-blue/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-20 w-32 h-32 bg-warning/30 rounded-full blur-2xl animate-bounce"></div>

                <div className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-warning text-agency-gray-dark mb-6">
                            <Search className="w-4 h-4 mr-2" />
                            SEO & Consultanță Expert
                        </Badge>

                        <Typography variant="h1" className="text-agency-gray-dark">
                            Creștere Organică
                            <span className="text-warning"> Garantată</span>
                        </Typography>

                        <Typography variant="lead" className="mt-6 text-agency-gray max-w-3xl mx-auto">
                            Îmbunătățim pozițiile în Google și construim strategii digitale complete
                            pentru creșterea sustenabilă și profitabilitatea afacerii tale.
                        </Typography>

                        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-md">
                                <TrendingUp className="w-5 h-5 text-warning" />
                                <div className="text-left">
                                    <Typography variant="small" className="text-agency-gray">Creștere trafic mediu</Typography>
                                    <Typography variant="body" className="font-semibold text-warning">
                                        +250% în 6 luni
                                    </Typography>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-md">
                                <Clock className="w-5 h-5 text-warning" />
                                <div className="text-left">
                                    <Typography variant="small" className="text-agency-gray">Primele rezultate</Typography>
                                    <Typography variant="body" className="font-semibold text-warning">
                                        30-60 zile
                                    </Typography>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-warning text-agency-gray-dark hover:bg-warning/90">
                                <BarChart3 className="mr-2 w-5 h-5" />
                                Audit SEO Gratuit
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-agency-gray text-agency-gray-dark hover:bg-agency-gray-light"
                            >
                                Vezi Case Studies
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Services Section */}
            <Section spacing="lg">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Servicii Complete SEO & Consultanță
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        De la optimizarea tehnică la strategia de business, oferim soluții
                        integrate pentru succesul pe termen lung în mediul digital.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {seoServices.map((service, index) => (
                        <Card key={index} className="hover:shadow-xl transition-all duration-500 border-0 shadow-md group">
                            <CardHeader className={`${service.bgColor} rounded-t-lg relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center`}>
                                            <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                                        </div>
                                        <Badge className={service.badgeColor}>
                                            {service.category}
                                        </Badge>
                                    </div>
                                    <CardTitle className={`text-lg ${service.textColor} mb-2`}>
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className={service.descColor}>
                                        {service.description}
                                    </CardDescription>
                                </div>
                            </CardHeader>

                            <CardContent className="pt-6">
                                <div className="space-y-4">
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <CheckCircle className={`w-4 h-4 ${service.checkColor} flex-shrink-0`} />
                                                <Typography variant="small" className="text-agency-gray-dark">
                                                    {feature}
                                                </Typography>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="bg-agency-gray-light rounded-lg p-3">
                                        <div className="flex justify-between items-center">
                                            <Typography variant="small" className="text-agency-gray">
                                                De la:
                                            </Typography>
                                            <Typography variant="body" className={`font-semibold ${service.priceColor}`}>
                                                {service.price}
                                            </Typography>
                                        </div>
                                    </div>

                                    <Button className={`w-full ${service.buttonColor}`}>
                                        Află Mai Mult
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* SEO Process Section */}
            <Section spacing="lg" className="bg-agency-gray-light">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Procesul Nostru SEO
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        O abordare sistematică și bazată pe date care garantează
                        rezultate măsurabile și creștere susținută.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {seoProcess.map((step, index) => (
                        <div key={index} className="text-center group">
                            <div className="relative mb-6">
                                <div className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                    <step.icon className={`w-10 h-10 ${step.iconColor}`} />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-warning rounded-full flex items-center justify-center">
                                    <Typography variant="small" className="text-agency-gray-dark font-bold">
                                        {index + 1}
                                    </Typography>
                                </div>
                            </div>
                            <Typography variant="h5" className="text-agency-blue-dark mb-3">
                                {step.title}
                            </Typography>
                            <Typography variant="body" className="text-agency-gray mb-2">
                                {step.description}
                            </Typography>
                            <Typography variant="small" className="text-warning font-medium">
                                {step.duration}
                            </Typography>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Technical SEO Section */}
            <Section spacing="lg">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        SEO Tehnic Avansat
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Optimizări tehnice complete care îmbunătățesc performanța site-ului
                        și pozițiile în motoarele de căutare.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technicalSEO.map((item, index) => (
                        <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 border-0 shadow-md group">
                            <CardHeader>
                                <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                                </div>
                                <CardTitle className="text-agency-blue-dark">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Typography variant="body" className="text-agency-gray mb-4">
                                    {item.description}
                                </Typography>
                                <div className="space-y-2">
                                    {item.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-warning flex-shrink-0" />
                                            <Typography variant="small" className="text-agency-gray-dark">
                                                {benefit}
                                            </Typography>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Consultation Section */}
            <Section spacing="lg" className="bg-gradient-to-r from-agency-blue-light to-warning-light">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Consultanță Business Digitală
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Strategii complete de business digital care transformă provocările
                        în oportunități de creștere profitabilă.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <Typography variant="h3" className="text-agency-blue-dark mb-6">
                            Servicii de Consultanță
                        </Typography>
                        <div className="space-y-4">
                            {consultingServices.map((service, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                                    <div className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                        <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                                    </div>
                                    <div>
                                        <Typography variant="h6" className="text-agency-blue-dark mb-2">
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body" className="text-agency-gray">
                                            {service.description}
                                        </Typography>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <Typography variant="h3" className="text-agency-blue-dark mb-6">
                            Beneficii Consultanță
                        </Typography>
                        <Card className="border-warning">
                            <CardContent className="pt-6">
                                <div className="space-y-4">
                                    {consultingBenefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <Star className="w-5 h-5 text-warning flex-shrink-0" />
                                            <Typography variant="body" className="text-agency-gray-dark">
                                                {benefit}
                                            </Typography>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-warning/20">
                                    <Typography variant="body" className="text-center text-agency-gray mb-4">
                                        <strong>Sesiune de consultanță:</strong>
                                    </Typography>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-agency-gray">90 minute intensive</span>
                                        <span className="text-2xl font-bold text-warning">250 RON</span>
                                    </div>
                                    <Button className="w-full bg-warning text-agency-gray-dark hover:bg-warning/90">
                                        <Calendar className="mr-2 w-4 h-4" />
                                        Rezervă Consultația
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Pricing Section */}
            <Section spacing="lg">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Pachete SEO & Consultanță
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Soluții flexibile adaptate pentru orice tip de business,
                        de la startup-uri la companii enterprise.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <Card key={index} className={`relative hover:shadow-2xl transition-all duration-500 ${plan.featured ? 'border-2 border-warning scale-105' : 'border-0 shadow-md'}`}>
                            {plan.featured && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <Badge className="bg-warning text-agency-gray-dark px-4 py-2">
                                        <Star className="w-4 h-4 mr-1" />
                                        Recomandat
                                    </Badge>
                                </div>
                            )}

                            <CardHeader className={`text-center ${plan.featured ? 'bg-warning-light' : ''} rounded-t-lg`}>
                                <CardTitle className={`text-2xl ${plan.featured ? 'text-warning' : 'text-agency-gray-dark'}`}>
                                    {plan.name}
                                </CardTitle>
                                <CardDescription className="text-agency-gray">
                                    {plan.description}
                                </CardDescription>
                                <div className="mt-4">
                                    <Typography variant="h1" className={plan.featured ? 'text-warning' : 'text-agency-gray-dark'}>
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
                                            <CheckCircle className={`w-4 h-4 ${plan.featured ? 'text-warning' : 'text-agency-blue'} flex-shrink-0`} />
                                            <Typography variant="small" className="text-agency-gray-dark">
                                                {feature}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={`w-full ${plan.featured ? 'bg-warning text-agency-gray-dark hover:bg-warning/90' : 'bg-agency-blue text-white hover:bg-agency-blue-dark'}`}
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
            <Section spacing="xl" className="bg-gradient-to-r from-warning to-warning/80">
                <div className="text-center max-w-4xl mx-auto">
                    <Typography variant="h2" className="text-agency-gray-dark">
                        Pregătit să îți crești vizibilitatea online?
                    </Typography>

                    <Typography variant="lead" className="mt-6 text-agency-gray max-w-2xl mx-auto">
                        Hai să analizăm situația actuală a site-ului tău și să construim
                        o strategie SEO care să îți aducă trafic calificat și vânzări.
                    </Typography>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-agency-blue text-white hover:bg-agency-blue-dark">
                            <Search className="mr-2 w-5 h-5" />
                            Audit SEO Gratuit
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-transparent border-agency-gray text-agency-gray-dark hover:bg-white/20"
                        >
                            Consultanță Strategică
                        </Button>
                    </div>

                    <Typography variant="small" className="text-agency-gray mt-8">
                        💡 <strong>Bonus:</strong> Auditul include analiză competitori și plan de acțiune detaliat
                    </Typography>
                </div>
            </Section>
        </Layout>
    )
}

// Data pentru servicii SEO
const seoServices = [
    {
        title: "Audit SEO Complet",
        description: "Analiză tehnică detaliată și identificarea tuturor problemelor SEO",
        category: "Analiză",
        features: [
            "Audit tehnic 200+ puncte",
            "Analiză cuvinte cheie",
            "Analiza competitorilor",
            "Raport detaliat cu priorități",
            "Plan de acțiune personalizat"
        ],
        price: "500 RON",
        icon: Search,
        bgColor: "bg-warning-light",
        iconBg: "bg-warning",
        iconColor: "text-agency-gray-dark",
        textColor: "text-warning",
        descColor: "text-warning",
        checkColor: "text-warning",
        priceColor: "text-warning",
        buttonColor: "bg-warning text-agency-gray-dark hover:bg-warning/90",
        badgeColor: "bg-warning text-agency-gray-dark"
    },
    {
        title: "SEO On-Page",
        description: "Optimizarea conținutului și structurii interne pentru performanță maximă",
        category: "Optimizare",
        features: [
            "Optimizare meta tags",
            "Structură URL friendly",
            "Schema markup implementation",
            "Optimizare imagini și media",
            "Internal linking strategy"
        ],
        price: "800 RON/lună",
        icon: FileText,
        bgColor: "bg-agency-blue-light",
        iconBg: "bg-agency-blue",
        iconColor: "text-white",
        textColor: "text-agency-blue-dark",
        descColor: "text-agency-blue",
        checkColor: "text-agency-blue",
        priceColor: "text-agency-blue",
        buttonColor: "bg-agency-blue text-white hover:bg-agency-blue-dark",
        badgeColor: "bg-agency-blue text-white"
    },
    {
        title: "SEO Tehnic",
        description: "Optimizări avansate de performanță și structură tehnică",
        category: "Tehnic",
        features: [
            "Core Web Vitals optimization",
            "Site speed optimization",
            "Mobile-first indexing",
            "Crawlability improvements",
            "Technical fixes implementation"
        ],
        price: "1.200 RON",
        icon: Settings,
        bgColor: "bg-success-light",
        iconBg: "bg-success",
        iconColor: "text-white",
        textColor: "text-success",
        descColor: "text-success",
        checkColor: "text-success",
        priceColor: "text-success",
        buttonColor: "bg-success text-white hover:bg-success/90",
        badgeColor: "bg-success text-white"
    },
    {
        title: "Link Building",
        description: "Construirea autorității prin legături de calitate și relevante",
        category: "Autoritate",
        features: [
            "High-authority backlinks",
            "Guest posting campaigns",
            "Resource page outreach",
            "Broken link building",
            "Local citations building"
        ],
        price: "1.500 RON/lună",
        icon: Link,
        bgColor: "bg-agency-accent-light",
        iconBg: "bg-agency-accent",
        iconColor: "text-agency-gray-dark",
        textColor: "text-agency-accent-dark",
        descColor: "text-agency-accent-dark",
        checkColor: "text-agency-accent",
        priceColor: "text-agency-accent",
        buttonColor: "bg-agency-accent text-agency-gray-dark hover:bg-agency-accent-dark",
        badgeColor: "bg-agency-accent text-agency-gray-dark"
    },
    {
        title: "SEO Local",
        description: "Optimizare pentru căutări locale și Google My Business",
        category: "Local",
        features: [
            "Google My Business optimization",
            "Local keywords targeting",
            "Citations management",
            "Review management strategy",
            "Local schema markup"
        ],
        price: "600 RON/lună",
        icon: MapPin,
        bgColor: "bg-error-light",
        iconBg: "bg-error",
        iconColor: "text-white",
        textColor: "text-error",
        descColor: "text-error",
        checkColor: "text-error",
        priceColor: "text-error",
        buttonColor: "bg-error text-white hover:bg-error/90",
        badgeColor: "bg-error text-white"
    },
    {
        title: "Consultanță Strategică",
        description: "Sesiuni de consultanță pentru strategia completă de business digital",
        category: "Strategie",
        features: [
            "Digital strategy planning",
            "Competitor analysis deep-dive",
            "Growth opportunity identification",
            "ROI optimization consulting",
            "Long-term planning sessions"
        ],
        price: "250 RON/sesiune",
        icon: Lightbulb,
        bgColor: "bg-agency-gray-light",
        iconBg: "bg-agency-gray",
        iconColor: "text-white",
        textColor: "text-agency-gray-dark",
        descColor: "text-agency-gray",
        checkColor: "text-agency-gray",
        priceColor: "text-agency-gray",
        buttonColor: "bg-agency-gray text-white hover:bg-agency-gray-dark",
        badgeColor: "bg-agency-gray text-white"
    }
]

// Data pentru proces SEO
const seoProcess = [
    {
        title: "Audit & Analiză",
        description: "Evaluăm situația actuală și identificăm oportunitățile",
        duration: "5-7 zile",
        icon: Search,
        bgColor: "bg-warning-light",
        iconColor: "text-warning"
    },
    {
        title: "Strategie & Planning",
        description: "Dezvoltăm strategia personalizată și roadmap-ul",
        duration: "3-5 zile",
        icon: Target,
        bgColor: "bg-agency-blue-light",
        iconColor: "text-agency-blue"
    },
    {
        title: "Implementare",
        description: "Executăm optimizările tehnice și de conținut",
        duration: "2-4 săptămâni",
        icon: Settings,
        bgColor: "bg-success-light",
        iconColor: "text-success"
    },
    {
        title: "Monitorizare & Raportare",
        description: "Urmărim progresul și optimizăm continuu",
        duration: "Ongoing",
        icon: BarChart3,
        bgColor: "bg-agency-accent-light",
        iconColor: "text-agency-accent"
    }
]

// Data pentru SEO tehnic
const technicalSEO = [
    {
        title: "Performanță & Viteză",
        description: "Optimizări pentru încărcare rapidă și experiență utilizator superioară",
        benefits: ["Core Web Vitals 95+", "Timp încărcare <3s", "Mobile optimization"],
        icon: Zap,
        iconBg: "bg-warning-light",
        iconColor: "text-warning"
    },
    {
        title: "Structură & Crawling",
        description: "Îmbunătățirea modului în care motoarele de căutare înțeleg site-ul",
        benefits: ["XML sitemaps optimize", "Robots.txt configuration", "URL structure clean"],
        icon: Globe,
        iconBg: "bg-agency-blue-light",
        iconColor: "text-agency-blue"
    },
    {
        title: "Schema & Markup",
        description: "Implementarea marcajului structured data pentru rezultate îmbunătățite",
        benefits: ["Rich snippets enabled", "Local business schema", "Product markup"],
        icon: FileText,
        iconBg: "bg-success-light",
        iconColor: "text-success"
    },
    {
        title: "Mobile & Usability",
        description: "Optimizare completă pentru dispozitive mobile și experiența utilizatorului",
        benefits: ["Mobile-first design", "Touch-friendly interface", "Fast mobile loading"],
        icon: Smartphone,
        iconBg: "bg-agency-accent-light",
        iconColor: "text-agency-accent"
    },
    {
        title: "Securitate & SSL",
        description: "Implementarea măsurilor de securitate și certificate SSL",
        benefits: ["SSL certificates", "HTTPS enforcement", "Security headers"],
        icon: Shield,
        iconBg: "bg-error-light",
        iconColor: "text-error"
    },
    {
        title: "Analytics & Tracking",
        description: "Configurarea sistemelor de monitorizare și analiză a performanței",
        benefits: ["GA4 setup complete", "Search Console config", "Custom tracking events"],
        icon: BarChart3,
        iconBg: "bg-agency-gray-light",
        iconColor: "text-agency-gray"
    }
]

// Data pentru servicii de consultanță
const consultingServices = [
    {
        title: "Strategie Digitală",
        description: "Planificarea completă a prezenței online și strategiei de marketing digital",
        icon: Target,
        iconBg: "bg-agency-blue-light",
        iconColor: "text-agency-blue"
    },
    {
        title: "Analiza Competitorilor",
        description: "Identificarea oportunităților prin analiza detaliată a concurenței",
        icon: Eye,
        iconBg: "bg-warning-light",
        iconColor: "text-warning"
    },
    {
        title: "Optimizare Conversii",
        description: "Îmbunătățirea ratelor de conversie și performanței site-ului",
        icon: TrendingUp,
        iconBg: "bg-success-light",
        iconColor: "text-success"
    },
    {
        title: "Growth Planning",
        description: "Planificarea strategică pentru creșterea sustenabilă a afacerii",
        icon: Award,
        iconBg: "bg-agency-accent-light",
        iconColor: "text-agency-accent"
    }
]

// Data pentru beneficii consultanță
const consultingBenefits = [
    "Strategie personalizată pentru business-ul tău",
    "Identificarea oportunităților de creștere",
    "Planul de acțiune cu priorități clare",
    "Optimizarea bugetului de marketing",
    "Benchmarking față de competitori",
    "Recomandări bazate pe date concrete",
    "Follow-up și suport implementare"
]

// Data pentru prețuri
const pricingPlans = [
    {
        name: "SEO Starter",
        description: "Perfect pentru site-uri noi și afaceri mici",
        price: "800 RON",
        period: "lunar",
        features: [
            "Audit SEO de bază",
            "Optimizare on-page 10 pagini",
            "Research cuvinte cheie",
            "Optimizări tehnice esențiale",
            "Raport lunar de progres",
            "Suport email",
            "Google Analytics setup"
        ],
        cta: "Începe SEO",
        note: "Ideal pentru început",
        featured: false
    },
    {
        name: "SEO Professional",
        description: "Soluția completă pentru creștere accelerată",
        price: "1.500 RON",
        period: "lunar",
        features: [
            "Audit SEO complet avansat",
            "Optimizare on-page nelimitată",
            "SEO tehnic complet",
            "Link building 10 legături/lună",
            "Content strategy & optimizare",
            "Local SEO (dacă aplicabil)",
            "Rapoarte bi-săptămânale",
            "Suport prioritar telefonic",
            "Consultanță strategică inclusă"
        ],
        cta: "Cea Mai Bună Alegere",
        note: "ROI garantat în 6 luni",
        featured: true
    },
    {
        name: "SEO Enterprise",
        description: "Soluții complexe pentru companii mari",
        price: "3.500 RON",
        period: "lunar",
        features: [
            "SEO strategy enterprise-level",
            "Multi-site optimization",
            "Advanced technical SEO",
            "Link building premium 25+ links",
            "Content marketing integration",
            "International SEO support",
            "Custom analytics dashboards",
            "Dedicated account manager",
            "Consultanță strategică săptămânală",
            "Training echipă inclusă"
        ],
        cta: "Soluție Enterprise",
        note: "Pentru site-uri complexe și trafic mare",
        featured: false
    }
]