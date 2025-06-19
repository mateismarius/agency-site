// src/app/servicii/prezentare/page.tsx - Pagina Site-uri de Prezentare
import { Metadata } from 'next'
import { Layout } from '@/components/layout'
import { Typography, Section } from '@/components/core'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    Globe,
    Palette,
    Smartphone,
    Zap,
    Search,
    Shield,
    Users,
    Award,
    CheckCircle,
    Star,
    ArrowRight,
    Target,
    Clock,
    Heart,
    Lightbulb,
    Code2,
    Camera,
    Mail,
    MessageSquare,
    BarChart3,
    Edit,
    MousePointer
} from 'lucide-react'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Site-uri de Prezentare | Web Design Profesional WordPress & Next.js | AgencyPro Brașov',
    description: 'Dezvoltare site-uri de prezentare moderne și responsive cu WordPress și Next.js. Design premium, SEO optimizat, performanță 95+. Prețuri de la 1.500 RON.',
    keywords: 'site prezentare, web design, WordPress, Next.js, site corporate Brașov, dezvoltare site web, design responsive, SEO, site firmă România',
    openGraph: {
        title: 'Site-uri de Prezentare Profesionale | WordPress & Next.js',
        description: 'Creăm site-uri corporate moderne care impresionează și convertesc. Design premium, tehnologii avansate, rezultate garantate.',
        type: 'website',
        locale: 'ro_RO',
    }
}

export default function PrezentarePage() {
    return (
        <Layout>
            {/* Hero Section */}
        <Section spacing="xl" className="relative bg-gradient-to-br from-agency-accent via-agency-accent-light to-white overflow-hidden">
    <div className="absolute top-20 right-10 w-40 h-40 bg-agency-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-agency-accent/30 rounded-full blur-2xl animate-bounce"></div>

        <div className="relative z-10">
    <div className="max-w-4xl mx-auto text-center">
    <Badge className="bg-agency-blue text-white mb-6">
    <Globe className="w-4 h-4 mr-2" />
        Web Design Premium
    </Badge>

    <Typography variant="h1" className="text-agency-gray-dark">
        Site-uri Care
    <span className="text-agency-blue"> Impresionează</span>
        </Typography>

        <Typography variant="lead" className="mt-6 text-agency-gray max-w-3xl mx-auto">
        Construim site-uri de prezentare moderne și profesionale care reflectă
    perfect brandul tău și convertesc vizitatori în clienți fideli.
    </Typography>

    <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-md">
    <Zap className="w-5 h-5 text-agency-blue" />
    <div className="text-left">
    <Typography variant="small" className="text-agency-gray">Performance Score</Typography>
    <Typography variant="body" className="font-semibold text-agency-blue">
        95+ Google PageSpeed
    </Typography>
    </div>
    </div>

    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-md">
    <Clock className="w-5 h-5 text-agency-blue" />
    <div className="text-left">
    <Typography variant="small" className="text-agency-gray">Timp livrare</Typography>
    <Typography variant="body" className="font-semibold text-agency-blue">
        1-2 săptămâni
    </Typography>
    </div>
    </div>
    </div>

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
        Vezi Exemple Live
    <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        </div>
        </div>
        </div>
        </Section>

    {/* Technologies Section */}
    <Section spacing="lg">
    <div className="text-center mb-16">
    <Typography variant="h2" className="text-agency-blue-dark">
        Tehnologii Moderne și Performante
    </Typography>
    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
        Alegem tehnologia perfectă pentru proiectul tău: WordPress pentru flexibilitate
    sau Next.js pentru performanță maximă și experiențe interactive avansate.
    </Typography>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {technologies.map((tech, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-500 border-0 shadow-md group">
        <CardHeader className={`${tech.bgColor} rounded-t-lg relative overflow-hidden`}>
    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
        <div className="relative z-10">
    <div className="flex items-center justify-between mb-4">
    <div className={`w-16 h-16 ${tech.iconBg} rounded-xl flex items-center justify-center`}>
    <tech.icon className={`w-8 h-8 ${tech.iconColor}`} />
    </div>
    <Badge className={tech.badgeColor}>
        {tech.label}
        </Badge>
        </div>
        <CardTitle className={`text-2xl ${tech.textColor} mb-2`}>
    {tech.name}
    </CardTitle>
    <CardDescription className={tech.descColor}>
        {tech.description}
        </CardDescription>
        </div>
        </CardHeader>

        <CardContent className="pt-6">
    <div className="space-y-6">
    {/* Use Cases */}
    <div>
    <Typography variant="h6" className="text-agency-blue-dark mb-3">
        Ideal Pentru
    </Typography>
    <ul className="space-y-2">
        {tech.useCases.map((useCase, idx) => (
                <li key={idx} className="flex items-center gap-3">
            <CheckCircle className={`w-4 h-4 ${tech.checkColor} flex-shrink-0`} />
    <Typography variant="small" className="text-agency-gray-dark">
        {useCase}
        </Typography>
        </li>
))}
    </ul>
    </div>

    {/* Features */}
    <div>
        <Typography variant="h6" className="text-agency-blue-dark mb-3">
        Avantaje Tehnice
    </Typography>
    <ul className="space-y-2">
        {tech.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
            <Star className={`w-4 h-4 ${tech.starColor} flex-shrink-0`} />
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
        <Typography variant="h6" className={tech.priceColor}>
        {tech.price}
        </Typography>
        </div>
        <div className="flex justify-between items-center">
    <Typography variant="small" className="text-agency-gray">
        Timp realizare:
        </Typography>
        <Typography variant="small" className="font-medium text-agency-gray-dark">
        {tech.timeline}
        </Typography>
        </div>
        </div>

        <Button className={`w-full ${tech.buttonColor}`}>
    Alege {tech.name}
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
        Funcționalități Standard Incluse
    </Typography>
    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
        Fiecare site de prezentare pe care îl dezvoltăm include aceste caracteristici
    esențiale pentru succesul online al afacerii tale.
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
        Procesul Nostru de Creare
    </Typography>
    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
        O abordare sistematică și colaborativă care garantează un rezultat final
    care depășește așteptările tale.
    </Typography>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
        <Typography variant="h6" className="text-agency-blue-dark mb-2">
        {step.title}
        </Typography>
        <Typography variant="small" className="text-agency-gray">
        {step.description}
        </Typography>
        <Typography variant="small" className="text-agency-accent font-medium mt-2">
        {step.duration}
        </Typography>
        </div>
))}
    </div>
    </Section>

    {/* Types Section */}
    <Section spacing="lg" className="bg-gradient-to-r from-agency-blue-light to-agency-accent-light">
    <div className="text-center mb-16">
    <Typography variant="h2" className="text-agency-blue-dark">
        Tipuri de Site-uri de Prezentare
    </Typography>
    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
        Adaptăm designul și funcționalitățile la specificul industriei și
    obiectivelor tale de business.
    </Typography>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {siteTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-500 border-0 shadow-md group">
        <CardHeader className={`${type.bgColor} rounded-t-lg`}>
    <div className="flex items-center gap-3 mb-3">
    <div className={`w-12 h-12 ${type.iconBg} rounded-lg flex items-center justify-center`}>
    <type.icon className={`w-6 h-6 ${type.iconColor}`} />
    </div>
    <CardTitle className={type.textColor}>{type.name}</CardTitle>
        </div>
        <CardDescription className={type.descColor}>
        {type.description}
        </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
    <div className="space-y-4">
    <div>
        <Typography variant="small" className="font-semibold text-agency-gray-dark mb-2">
        Caracteristici Specifice:
        </Typography>
        <ul className="space-y-1">
        {type.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
            <CheckCircle className={`w-3 h-3 ${type.checkColor} flex-shrink-0`} />
    <Typography variant="small" className="text-agency-gray">
        {feature}
        </Typography>
        </li>
))}
    </ul>
    </div>

    <div className="flex justify-between items-center text-sm">
    <span className="text-agency-gray">De la:</span>
    <span className={`font-bold ${type.priceColor}`}>{type.price}</span>
    </div>
    </div>
    </CardContent>
    </Card>
))}
    </div>
    </Section>

    {/* Pricing Section */}
    <Section spacing="lg">
    <div className="text-center mb-16">
    <Typography variant="h2" className="text-agency-blue-dark">
        Pachete și Prețuri Transparente
    </Typography>
    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
        Opțiuni flexibile pentru orice buget, cu toate costurile incluse
    și fără surprize neplăcute.
    </Typography>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
                <Card key={index} className={`relative hover:shadow-2xl transition-all duration-500 ${plan.featured ? 'border-2 border-agency-blue scale-105' : 'border-0 shadow-md'}`}>
        {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-agency-blue text-white px-4 py-2">
                <Star className="w-4 h-4 mr-1" />
                    Recomandat
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
    <Section spacing="xl" className="bg-gradient-to-r from-agency-blue to-agency-blue-dark">
    <div className="text-center max-w-4xl mx-auto">
    <Typography variant="h2" className="text-white">
        Gata să îți creezi prezența online perfectă?
        </Typography>

        <Typography variant="lead" className="mt-6 text-white/90 max-w-2xl mx-auto">
        Hai să transformăm viziunea ta într-un site web care să îți reprezinte
    perfect afacerea și să atragă clienții ideali.
    </Typography>

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
        Vezi Portofoliul Complet
    </Button>
    </div>

    <Typography variant="small" className="text-white/80 mt-8">
                        💡 <strong>Bonus:</strong> Primești gratuit logo profesional în valoare de 500 RON
    </Typography>
    </div>
    </Section>
    </Layout>
)
}

// Data pentru tehnologii
const technologies = [
    {
        name: "WordPress Custom",
        description: "Soluția cea mai flexibilă și ușor de administrat pentru majoritatea afacerilor",
        useCases: [
            "Site-uri corporate și de servicii",
            "Portofolii și site-uri creative",
            "Blog-uri și site-uri de conținut",
            "Site-uri pentru profesioniști liberi"
        ],
        features: [
            "CMS user-friendly pentru administrare",
            "Mii de plugin-uri și teme disponibile",
            "SEO optim și performanță rapidă",
            "Backup automat și securitate avansată"
        ],
        price: "1.500 RON",
        timeline: "1-2 săptămâni",
        icon: Edit,
        bgColor: "bg-agency-blue-light",
        iconBg: "bg-agency-blue",
        iconColor: "text-white",
        textColor: "text-agency-blue-dark",
        descColor: "text-agency-blue",
        checkColor: "text-agency-blue",
        starColor: "text-agency-blue",
        priceColor: "text-agency-blue",
        buttonColor: "bg-agency-blue text-white hover:bg-agency-blue-dark",
        badgeColor: "bg-agency-blue text-white",
        label: "Cel mai popular"
    },
    {
        name: "Next.js Premium",
        description: "Tehnologie de ultimă generație pentru performanță maximă și experiențe interactive",
        useCases: [
            "Site-uri high-performance",
            "Aplicații web interactive",
            "Site-uri cu trafic mare",
            "Proiecte enterprise"
        ],
        features: [
            "Viteze de încărcare ultrarapide",
            "SEO avansat și performance 95+",
            "Experiențe interactive moderne",
            "Scalabilitate și securitate enterprise"
        ],
        price: "3.500 RON",
        timeline: "2-3 săptămâni",
        icon: Code2,
        bgColor: "bg-agency-accent-light",
        iconBg: "bg-agency-accent",
        iconColor: "text-agency-gray-dark",
        textColor: "text-agency-accent-dark",
        descColor: "text-agency-accent-dark",
        checkColor: "text-agency-accent",
        starColor: "text-agency-accent",
        priceColor: "text-agency-accent",
        buttonColor: "bg-agency-accent text-agency-gray-dark hover:bg-agency-accent-dark",
        badgeColor: "bg-agency-accent text-agency-gray-dark",
        label: "Premium Tech"
    }
]

// Data pentru funcționalități
const features = [
    {
        title: "Design Responsive",
        description: "Aspectul perfect pe orice dispozitiv: desktop, tabletă, mobile. Design modern și funcțional",
        icon: Smartphone,
        iconBg: "bg-agency-blue-light",
        iconColor: "text-agency-blue"
    },
    {
        title: "SEO Optimizat",
        description: "Structură tehnică perfectă pentru Google, meta tags complete și optimizări on-page avansate",
        icon: Search,
        iconBg: "bg-success-light",
        iconColor: "text-success"
    },
    {
        title: "Performanță Rapidă",
        description: "Timp de încărcare sub 3 secunde, optimizări de performanță și score Google PageSpeed 95+",
        icon: Zap,
        iconBg: "bg-warning-light",
        iconColor: "text-warning"
    },
    {
        title: "Securitate SSL",
        description: "Certificate SSL gratuite, backup automat zilnic, protecție malware și monitorizare 24/7",
        icon: Shield,
        iconBg: "bg-error-light",
        iconColor: "text-error"
    },
    {
        title: "Formulare Contact",
        description: "Formulare de contact personalizate, integrări email și notificări automate pentru leads",
        icon: Mail,
        iconBg: "bg-agency-accent-light",
        iconColor: "text-agency-accent"
    },
    {
        title: "Analytics Integrat",
        description: "Google Analytics configurat, tracking conversii și rapoarte detaliate de trafic și comportament",
        icon: BarChart3,
        iconBg: "bg-agency-gray-light",
        iconColor: "text-agency-gray"
    }
]

// Data pentru proces
const processSteps = [
    {
        title: "Descoperire",
        description: "Analizăm afacerea și definim obiectivele",
        duration: "1-2 zile",
        icon: Lightbulb,
        bgColor: "bg-agency-blue-light",
        iconColor: "text-agency-blue"
    },
    {
        title: "Strategie",
        description: "Planificăm structura și funcționalitățile",
        duration: "1 zi",
        icon: Target,
        bgColor: "bg-agency-accent-light",
        iconColor: "text-agency-accent"
    },
    {
        title: "Design",
        description: "Creăm mockup-uri și prototypuri",
        duration: "3-5 zile",
        icon: Palette,
        bgColor: "bg-success-light",
        iconColor: "text-success"
    },
    {
        title: "Dezvoltare",
        description: "Codificăm și integrăm toate funcțiile",
        duration: "5-8 zile",
        icon: Code2,
        bgColor: "bg-warning-light",
        iconColor: "text-warning"
    },
    {
        title: "Lansare",
        description: "Testăm, optimizăm și lansăm live",
        duration: "1-2 zile",
        icon: Globe,
        bgColor: "bg-error-light",
        iconColor: "text-error"
    }
]

// Data pentru tipuri de site-uri
const siteTypes = [
    {
        name: "Corporate",
        description: "Site-uri profesionale pentru companii și servicii",
        features: ["Secțiuni multiple", "Echipa & istoric", "Testimoniale", "Formular contact"],
        price: "1.500 RON",
        icon: Users,
        bgColor: "bg-agency-blue-light",
        iconBg: "bg-agency-blue",
        iconColor: "text-white",
        textColor: "text-agency-blue-dark",
        descColor: "text-agency-blue",
        checkColor: "text-agency-blue",
        priceColor: "text-agency-blue"
    },
    {
        name: "Portofoliu",
        description: "Showcase pentru creativi și profesioniști",
        features: ["Galerie foto/video", "Proiecte showcase", "CV downloadabil", "Contact direct"],
        price: "2.000 RON",
        icon: Camera,
        bgColor: "bg-agency-accent-light",
        iconBg: "bg-agency-accent",
        iconColor: "text-agency-gray-dark",
        textColor: "text-agency-accent-dark",
        descColor: "text-agency-accent-dark",
        checkColor: "text-agency-accent",
        priceColor: "text-agency-accent"
    },
    {
        name: "Landing Page",
        description: "Pagini optimizate pentru conversii specifice",
        features: ["Focus pe acțiune", "A/B testing ready", "Integrări marketing", "Analytics avansat"],
        price: "1.200 RON",
        icon: MousePointer,
        bgColor: "bg-success-light",
        iconBg: "bg-success",
        iconColor: "text-white",
        textColor: "text-success",
        descColor: "text-success",
        checkColor: "text-success",
        priceColor: "text-success"
    },
    {
        name: "Blog/Conținut",
        description: "Platforme pentru publishing și content marketing",
        features: ["CMS avansat", "Categorii & tags", "SEO optim", "Social sharing"],
        price: "1.800 RON",
        icon: Edit,
        bgColor: "bg-warning-light",
        iconBg: "bg-warning",
        iconColor: "text-agency-gray-dark",
        textColor: "text-warning",
        descColor: "text-warning",
        checkColor: "text-warning",
        priceColor: "text-warning"
    },
    {
        name: "Restaurant/Local",
        description: "Site-uri pentru business-uri locale",
        features: ["Meniu digital", "Rezervări online", "Hartă & contact", "Review-uri"],
        price: "2.200 RON",
        icon: Heart,
        bgColor: "bg-error-light",
        iconBg: "bg-error",
        iconColor: "text-white",
        textColor: "text-error",
        descColor: "text-error",
        checkColor: "text-error",
        priceColor: "text-error"
    },
    {
        name: "Nonprofit",
        description: "Site-uri pentru organizații și cauze sociale",
        features: ["Donații online", "Voluntariat", "Evenimente", "Transparență"],
        price: "1.800 RON",
        icon: Award,
        bgColor: "bg-agency-gray-light",
        iconBg: "bg-agency-gray",
        iconColor: "text-white",
        textColor: "text-agency-gray-dark",
        descColor: "text-agency-gray",
        checkColor: "text-agency-gray",
        priceColor: "text-agency-gray"
    }
]

// Data pentru prețuri
const pricingPlans = [
    {
        name: "Essential",
        description: "Perfect pentru afaceri mici și startup-uri",
        price: "1.500 RON",
        period: "proiect complet",
        features: [
            "Design responsive custom",
            "Până la 5 pagini",
            "Formular de contact",
            "SEO de bază",
            "SSL certificate inclus",
            "Hosting gratuit 6 luni",
            "Suport tehnic 3 luni"
        ],
        cta: "Începe Simplu",
        note: "Ideal pentru prezență online de bază",
        featured: false
    },
    {
        name: "Professional",
        description: "Soluția completă pentru afaceri în creștere",
        price: "2.800 RON",
        period: "proiect complet",
        features: [
            "Design premium personalizat",
            "Până la 10 pagini",
            "Blog integrat",
            "SEO avansat complet",
            "Google Analytics",
            "Integrări social media",
            "Training administrare",
            "Suport tehnic 6 luni"
        ],
        cta: "Alegerea Potrivită",
        note: "Cel mai popular pachet",
        featured: true
    },
    {
        name: "Enterprise",
        description: "Soluții avansate pentru companii mari",
        price: "5.500 RON",
        period: "proiect complet",
        features: [
            "Design și funcționalități custom",
            "Pagini nelimitate",
            "Integrări API complexe",
            "Sistem de management conținut",
            "Multi-limbă support",
            "Performance optimization",
            "Suport prioritar 12 luni",
            "Consultanță strategică"
        ],
        cta: "Soluție Enterprise",
        note: "Pentru proiecte complexe",
        featured: false
    }
]