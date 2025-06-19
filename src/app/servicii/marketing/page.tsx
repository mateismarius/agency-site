// src/app/servicii/marketing/page.tsx - Pagina Marketing Digital
import { Metadata } from 'next'
import { Layout } from '@/components/layout'
import { Typography, Section } from '@/components/core'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    TrendingUp,
    Target,
    Users,
    BarChart3,
    Zap,
    MessageSquare,
    Mail,
    Search,
    Star,
    CheckCircle,
    ArrowRight,
    Clock,
    DollarSign,
    Eye,
    MousePointer,
    Share2,
    Camera,
    Settings,
    Award,
    Monitor,
    PlayCircle,
} from 'lucide-react'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Marketing Digital | Google Ads, Facebook, Instagram, TikTok | AgencyPro Brașov',
    description: 'Servicii complete de marketing digital: Google Ads, Facebook Ads, Instagram, TikTok, Email Marketing, SEO. Campanii care convertesc și generează ROI maxim.',
    keywords: 'marketing digital, Google Ads, Facebook Ads, Instagram marketing, TikTok ads, email marketing, PPC, social media marketing Brașov, campanii publicitare',
    openGraph: {
        title: 'Marketing Digital Performant | Campanii Google & Social Media',
        description: 'Generăm leads calificați și vânzări prin campanii optimizate pe Google, Facebook, Instagram și TikTok. ROI garantat.',
        type: 'website',
        locale: 'ro_RO',
    }
}

export default function MarketingPage() {
    return (
        <Layout>
            {/* Hero Section */}
        <Section spacing="xl" className="relative bg-gradient-to-br from-success via-success-light to-white overflow-hidden">
    <div className="absolute top-20 right-10 w-40 h-40 bg-agency-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-success/30 rounded-full blur-2xl animate-bounce"></div>

        <div className="relative z-10">
    <div className="max-w-4xl mx-auto text-center">
    <Badge className="bg-success text-white mb-6">
    <TrendingUp className="w-4 h-4 mr-2" />
        Marketing ROI Maxim
    </Badge>

    <Typography variant="h1" className="text-agency-gray-dark">
        Campanii Care
    <span className="text-success"> Convertesc</span>
        </Typography>

        <Typography variant="lead" className="mt-6 text-agency-gray max-w-3xl mx-auto">
        Generăm leads calificați și vânzări reale prin campanii optimizate pe Google Ads,
        Facebook, Instagram, TikTok și email marketing automatizat.
    </Typography>

    <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-md">
    <Target className="w-5 h-5 text-success" />
    <div className="text-left">
    <Typography variant="small" className="text-agency-gray">ROI Mediu</Typography>
    <Typography variant="body" className="font-semibold text-success">
        400% - 800%
        </Typography>
        </div>
        </div>

        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-md">
    <Clock className="w-5 h-5 text-success" />
    <div className="text-left">
    <Typography variant="small" className="text-agency-gray">Primele rezultate</Typography>
    <Typography variant="body" className="font-semibold text-success">
        7-14 zile
    </Typography>
    </div>
    </div>
    </div>

    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
    <Button size="lg" className="bg-success text-white hover:bg-success/90">
    <MessageSquare className="mr-2 w-5 h-5" />
        Audit Gratuit Marketing
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
        Servicii Complete de Marketing Digital
    </Typography>
    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
        De la strategia inițială la implementare și optimizare continuă,
        acoperim toate aspectele marketingului digital modern.
    </Typography>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {marketingServices.map((service, index) => (
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

    {/* Platforms Section */}
    <Section spacing="lg" className="bg-agency-gray-light">
    <div className="text-center mb-16">
    <Typography variant="h2" className="text-agency-blue-dark">
        Platforme și Canale de Marketing
    </Typography>
    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
        Alegem cele mai potrivite platforme pentru audiența ta și optimizăm
    campanii pe fiecare canal pentru rezultate maxime.
    </Typography>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {platforms.map((platform, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 border-0 shadow-md group">
        <CardHeader>
            <div className={`w-16 h-16 ${platform.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
    <platform.icon className={`w-8 h-8 ${platform.iconColor}`} />
    </div>
    <CardTitle className="text-agency-blue-dark">{platform.name}</CardTitle>
    </CardHeader>
    <CardContent>
    <Typography variant="small" className="text-agency-gray mb-3">
        {platform.description}
        </Typography>
        <Badge className={platform.badgeColor}>
        {platform.specialty}
        </Badge>
        </CardContent>
        </Card>
))}
    </div>
    </Section>

    {/* Process Section */}
    <Section spacing="lg">
    <div className="text-center mb-16">
    <Typography variant="h2" className="text-agency-blue-dark">
        Procesul Nostru de Marketing
    </Typography>
    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
        O metodologie testată care garantează rezultate măsurabile și
    creștere constantă a performanței campaniilor.
    </Typography>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
    {processSteps.map((step, index) => (
            <div key={index} className="text-center group">
        <div className="relative mb-6">
        <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
    <step.icon className={`w-8 h-8 ${step.iconColor}`} />
    </div>
    <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
    <Typography variant="small" className="text-white font-bold text-xs">
        {index + 1}
        </Typography>
        </div>
        </div>
        <Typography variant="h6" className="text-agency-blue-dark mb-2 text-sm">
        {step.title}
        </Typography>
        <Typography variant="small" className="text-agency-gray text-xs">
        {step.description}
        </Typography>
        </div>
))}
    </div>
    </Section>

    {/* Results Section */}
    <Section spacing="lg" className="bg-gradient-to-r from-success-light to-agency-blue-light">
    <div className="text-center mb-16">
    <Typography variant="h2" className="text-agency-blue-dark">
        Rezultate Reale pentru Clienții Noștri
    </Typography>
    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
        Datele și cifrele concrete care demonstrează eficiența strategiilor
    noastre de marketing digital.
    </Typography>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {results.map((result, index) => (
            <div key={index} className="text-center">
        <div className={`w-16 h-16 ${result.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
    <result.icon className={`w-8 h-8 ${result.iconColor}`} />
    </div>
    <Typography variant="h2" className={result.numberColor}>
        {result.number}
        </Typography>
        <Typography variant="body" className="text-agency-gray font-medium">
        {result.label}
        </Typography>
        <Typography variant="small" className="text-agency-gray mt-1">
        {result.description}
        </Typography>
        </div>
))}
    </div>
    </Section>

    {/* Pricing Section */}
    <Section spacing="lg">
    <div className="text-center mb-16">
    <Typography variant="h2" className="text-agency-blue-dark">
        Pachete Marketing Flexibile
    </Typography>
    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
        Opțiuni adaptate pentru orice buget și obiectiv, cu focus pe
    rezultate măsurabile și ROI pozitiv.
    </Typography>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
                <Card key={index} className={`relative hover:shadow-2xl transition-all duration-500 ${plan.featured ? 'border-2 border-success scale-105' : 'border-0 shadow-md'}`}>
        {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-success text-white px-4 py-2">
                <Star className="w-4 h-4 mr-1" />
                    Cel Mai Popular
                </Badge>
                </div>
)}

    <CardHeader className={`text-center ${plan.featured ? 'bg-success-light' : ''} rounded-t-lg`}>
    <CardTitle className={`text-2xl ${plan.featured ? 'text-success' : 'text-agency-gray-dark'}`}>
    {plan.name}
    </CardTitle>
    <CardDescription className="text-agency-gray">
        {plan.description}
        </CardDescription>
        <div className="mt-4">
    <Typography variant="h1" className={plan.featured ? 'text-success' : 'text-agency-gray-dark'}>
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
            <CheckCircle className={`w-4 h-4 ${plan.featured ? 'text-success' : 'text-agency-blue'} flex-shrink-0`} />
    <Typography variant="small" className="text-agency-gray-dark">
        {feature}
        </Typography>
        </li>
))}
    </ul>

    <Button
    className={`w-full ${plan.featured ? 'bg-success text-white hover:bg-success/90' : 'bg-agency-blue text-white hover:bg-agency-blue-dark'}`}
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
    <Section spacing="xl" className="bg-gradient-to-r from-success to-success/80">
    <div className="text-center max-w-4xl mx-auto">
    <Typography variant="h2" className="text-white">
        Pregătit să îți crești afacerea cu marketing digital?
        </Typography>

        <Typography variant="lead" className="mt-6 text-white/90 max-w-2xl mx-auto">
        Hai să analizăm situația actuală și să construim o strategie de marketing
    care să îți aducă clienți noi și să îți crească vânzările.
    </Typography>

    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
    <Button size="lg" className="bg-white text-success hover:bg-white/90">
    <BarChart3 className="mr-2 w-5 h-5" />
        Audit Marketing Gratuit
    </Button>
    <Button
    size="lg"
    variant="outline"
    className="bg-transparent border-white/20 text-white hover:bg-white/10"
        >
        Programează Consultația
    </Button>
    </div>

    <Typography variant="small" className="text-white/80 mt-8">
                        💡 <strong>Bonus:</strong> Primi 30 de zile include optimizări gratuite și raport detaliat
    </Typography>
    </div>
    </Section>
    </Layout>
)
}

// Data pentru servicii marketing
const marketingServices = [
    {
        title: "Google Ads (PPC)",
        description: "Campanii de căutare și display optimizate pentru conversii maxime",
        category: "Paid Search",
        features: [
            "Keyword research avansat",
            "Campanii Search & Display",
            "Shopping Ads pentru e-commerce",
            "Landing page optimization",
            "Bid management automatizat"
        ],
        price: "1.500 RON/lună",
        icon: Search,
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
        title: "Facebook & Instagram Ads",
        description: "Campanii sociale performante pentru awareness și conversii",
        category: "Social Media",
        features: [
            "Targeting avansat de audiență",
            "Creative testing A/B",
            "Retargeting strategii",
            "Instagram Shopping integration",
            "Video ads & Stories"
        ],
        price: "1.200 RON/lună",
        icon: Users,
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
        title: "TikTok Marketing",
        description: "Strategii moderne pentru audiențe tinere și engagement viral",
        category: "Social Video",
        features: [
            "Content strategy viral",
            "TikTok Ads campaigns",
            "Influencer partnerships",
            "Trend analysis & implementation",
            "Cross-platform content"
        ],
        price: "800 RON/lună",
        icon: PlayCircle,
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
        title: "Email Marketing",
        description: "Automatizări și campanii email cu rate de conversie ridicate",
        category: "Automation",
        features: [
            "Email automation workflows",
            "Segmentare avansată",
            "A/B testing template-uri",
            "Lead nurturing sequences",
            "Analytics & reporting"
        ],
        price: "600 RON/lună",
        icon: Mail,
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
        title: "Social Media Management",
        description: "Gestionare completă a prezenței pe rețelele sociale",
        category: "Organic Social",
        features: [
            "Content calendar planning",
            "Daily posting & engagement",
            "Community management",
            "Stories & Reels creation",
            "Monthly analytics reports"
        ],
        price: "900 RON/lună",
        icon: Share2,
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
        title: "Marketing Analytics",
        description: "Tracking avansat și rapoarte detaliate de performanță",
        category: "Analytics",
        features: [
            "Google Analytics 4 setup",
            "Conversion tracking complet",
            "Custom dashboards",
            "ROI analysis & reporting",
            "Data-driven optimizations"
        ],
        price: "500 RON/lună",
        icon: BarChart3,
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

// Data pentru platforme
const platforms = [
    {
        name: "Google Ads",
        description: "Search, Display, YouTube",
        specialty: "High Intent Traffic",
        icon: Search,
        iconBg: "bg-agency-blue-light",
        iconColor: "text-agency-blue",
        badgeColor: "bg-agency-blue text-white"
    },
    {
        name: "Facebook",
        description: "Targeting avansat demografic",
        specialty: "Precise Targeting",
        icon: Users,
        iconBg: "bg-agency-accent-light",
        iconColor: "text-agency-accent",
        badgeColor: "bg-agency-accent text-agency-gray-dark"
    },
    {
        name: "Instagram",
        description: "Visual storytelling",
        specialty: "Visual Content",
        icon: Camera,
        iconBg: "bg-error-light",
        iconColor: "text-error",
        badgeColor: "bg-error text-white"
    },
    {
        name: "TikTok",
        description: "Audiențe tinere, viral",
        specialty: "Gen Z & Millennials",
        icon: PlayCircle,
        iconBg: "bg-success-light",
        iconColor: "text-success",
        badgeColor: "bg-success text-white"
    },
    {
        name: "LinkedIn",
        description: "Marketing B2B profesional",
        specialty: "B2B Focus",
        icon: Award,
        iconBg: "bg-warning-light",
        iconColor: "text-warning",
        badgeColor: "bg-warning text-agency-gray-dark"
    },
    {
        name: "YouTube",
        description: "Video marketing & ads",
        specialty: "Video Content",
        icon: Monitor,
        iconBg: "bg-agency-gray-light",
        iconColor: "text-agency-gray",
        badgeColor: "bg-agency-gray text-white"
    },
    {
        name: "Email",
        description: "Direct communication",
        specialty: "High ROI",
        icon: Mail,
        iconBg: "bg-agency-blue-light",
        iconColor: "text-agency-blue",
        badgeColor: "bg-agency-blue text-white"
    },
    {
        name: "WhatsApp",
        description: "Marketing personal",
        specialty: "Direct Messaging",
        icon: MessageSquare,
        iconBg: "bg-success-light",
        iconColor: "text-success",
        badgeColor: "bg-success text-white"
    }
]

// Data pentru proces
const processSteps = [
    {
        title: "Audit",
        description: "Analizăm situația actuală",
        icon: Search,
        bgColor: "bg-agency-blue-light",
        iconColor: "text-agency-blue"
    },
    {
        title: "Strategie",
        description: "Planificăm abordarea",
        icon: Target,
        bgColor: "bg-agency-accent-light",
        iconColor: "text-agency-accent"
    },
    {
        title: "Setup",
        description: "Configurăm campaniile",
        icon: Settings,
        bgColor: "bg-success-light",
        iconColor: "text-success"
    },
    {
        title: "Lansare",
        description: "Activăm campaniile",
        icon: Zap,
        bgColor: "bg-warning-light",
        iconColor: "text-warning"
    },
    {
        title: "Monitor",
        description: "Urmărim performanța",
        icon: Eye,
        bgColor: "bg-error-light",
        iconColor: "text-error"
    },
    {
        title: "Optimizare",
        description: "Îmbunătățim continuu",
        icon: TrendingUp,
        bgColor: "bg-agency-gray-light",
        iconColor: "text-agency-gray"
    }
]

// Data pentru rezultate
const results = [
    {
        number: "450%",
        label: "ROI Mediu",
        description: "Return on investment",
        icon: TrendingUp,
        iconBg: "bg-success-light",
        iconColor: "text-success",
        numberColor: "text-success"
    },
    {
        number: "2.3x",
        label: "Creștere Trafic",
        description: "Aumentarea vizitatorilor",
        icon: Users,
        iconBg: "bg-agency-blue-light",
        iconColor: "text-agency-blue",
        numberColor: "text-agency-blue"
    },
    {
        number: "65%",
        label: "Reducere CPA",
        description: "Cost per acquisition",
        icon: DollarSign,
        iconBg: "bg-warning-light",
        iconColor: "text-warning",
        numberColor: "text-warning"
    },
    {
        number: "8.2%",
        label: "CTR Mediu",
        description: "Click-through rate",
        icon: MousePointer,
        iconBg: "bg-error-light",
        iconColor: "text-error",
        numberColor: "text-error"
    }
]

// Data pentru prețuri
const pricingPlans = [
    {
        name: "Starter",
        description: "Perfect pentru afaceri mici care încep",
        price: "1.500 RON",
        period: "lunar + buget ads",
        features: [
            "Google Ads sau Facebook Ads",
            "1-2 campanii active",
            "Landing page optimization",
            "Raportare săptămânală",
            "Suport email și telefon",
            "Setup și training inclus"
        ],
        cta: "Începe Marketing",
        note: "Minim 6 luni contract",
        featured: false
    },
    {
        name: "Growth",
        description: "Soluția completă pentru creștere accelerată",
        price: "2.800 RON",
        period: "lunar + buget ads",
        features: [
            "Google + Facebook + Instagram",
            "Campanii multiple optimizate",
            "Email marketing automation",
            "A/B testing continuu",
            "Analytics și rapoarte detaliate",
            "Consultanță strategică lunară",
            "Suport prioritar",
            "Creative design inclus"
        ],
        cta: "Cel Mai Popular",
        note: "ROI garantat în 90 zile",
        featured: true
    },
    {
        name: "Enterprise",
        description: "Marketing complex pentru companii mari",
        price: "5.500 RON",
        period: "lunar + buget ads",
        features: [
            "Toate platformele disponibile",
            "Marketing automation complet",
            "Influencer marketing",
            "Video production inclus",
            "Dedicated account manager",
            "Custom analytics dashboard",
            "Consultanță strategică săptămânală",
            "Priority support 24/7"
        ],
        cta: "Soluție Enterprise",
        note: "Pentru afaceri cu buget 10k+ RON/lună",
        featured: false
    }
]