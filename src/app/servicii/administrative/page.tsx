// src/app/servicii/administrative/page.tsx - Pagina Servicii Administrative
import { Metadata } from 'next'
import { Layout } from '@/components/layout'
import { Typography, Section } from '@/components/core'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    FileText,
    Building,
    Users,
    Award,
    ShieldCheck,
    Clock,
    CheckCircle,
    Star,
    ArrowRight,
    Target,
    Globe,
    Heart,
    Scale,
    MessageSquare,
    Phone,
    Zap,
    Settings,
    PenTool,
    Shield
} from 'lucide-react'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Servicii Administrative | Înființare Firme SRL/PFA, SEAP, Asociații | AgencyPro Brașov',
    description: 'Servicii complete administrative: înființare SRL/PFA, înregistrare SEAP, administrare profiluri, asociații sportive/culturale. Proceduri rapide și consultanță juridică.',
    keywords: 'înființare SRL, înființare PFA, SEAP înregistrare, servicii administrative Brașov, asociații sportive, proceduri administrative, consultanță juridică',
    openGraph: {
        title: 'Servicii Administrative Complete | Înființări & SEAP',
        description: 'De la înființarea firmei la administrarea SEAP - toate procedurile administrative într-un singur loc.',
        type: 'website',
        locale: 'ro_RO',
    }
}

export default function AdministrativePage() {
    return (
        <Layout>
            {/* Hero Section */}
            <Section spacing="xl" className="relative bg-gradient-to-br from-agency-blue via-agency-blue-light to-white overflow-hidden">
                <div className="absolute top-20 right-10 w-40 h-40 bg-agency-accent/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-20 w-32 h-32 bg-agency-blue/30 rounded-full blur-2xl animate-bounce"></div>

                <div className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-agency-blue text-white mb-6">
                            <FileText className="w-4 h-4 mr-2" />
                            Servicii Administrative Expert
                        </Badge>

                        <Typography variant="h1" className="text-white">
                            Proceduri Administrative
                            <span className="text-agency-accent"> Simplificate</span>
                        </Typography>

                        <Typography variant="lead" className="mt-6 text-white/90 max-w-3xl mx-auto">
                            De la înființarea firmei la administrarea SEAP și înregistrarea asociațiilor,
                            ne ocupăm de toate procedurile administrative pentru afacerea ta.
                        </Typography>

                        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                                <Clock className="w-5 h-5 text-agency-accent" />
                                <div className="text-left">
                                    <Typography variant="small" className="text-white/80">Înființare SRL</Typography>
                                    <Typography variant="body" className="font-semibold text-agency-accent">
                                        3-5 zile lucrătoare
                                    </Typography>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                                <Shield className="w-5 h-5 text-agency-accent" />
                                <div className="text-left">
                                    <Typography variant="small" className="text-white/80">Proceduri complete</Typography>
                                    <Typography variant="body" className="font-semibold text-agency-accent">
                                        100% legale
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
                                Vezi Serviciile
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
                        Servicii Administrative Complete
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Toate procedurile administrative de care ai nevoie pentru a-ți înființa
                        și administra afacerea în conformitate cu legislația română.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {administrativeServices.map((service, index) => (
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
                                        <div className="flex justify-between items-center mb-2">
                                            <Typography variant="small" className="text-agency-gray">
                                                Preț:
                                            </Typography>
                                            <Typography variant="body" className={`font-semibold ${service.priceColor}`}>
                                                {service.price}
                                            </Typography>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <Typography variant="small" className="text-agency-gray">
                                                Timp:
                                            </Typography>
                                            <Typography variant="small" className="font-medium text-agency-gray-dark">
                                                {service.duration}
                                            </Typography>
                                        </div>
                                    </div>

                                    <Button className={`w-full ${service.buttonColor}`}>
                                        Solicită Serviciul
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Process Section */}
            <Section spacing="lg" className="bg-agency-gray-light">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Procesul Nostru de Lucru
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        O abordare structurată și eficientă care îți garantează finalizarea
                        procedurilor în termenele stabilite.
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

            {/* Benefits Section */}
            <Section spacing="lg">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        De Ce Să Alegi AgencyPro?
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Experiența și profesionalismul nostru îți garantează proceduri
                        administrative fără greșeli și în termenele stabilite.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 border-0 shadow-md group">
                            <CardHeader>
                                <div className={`w-16 h-16 ${benefit.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
                                </div>
                                <CardTitle className="text-agency-blue-dark">{benefit.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Typography variant="body" className="text-agency-gray">
                                    {benefit.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Pricing Section */}
            <Section spacing="lg" className="bg-gradient-to-r from-agency-blue-light to-agency-accent-light">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Pachete Servicii Administrative
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Opțiuni flexibile pentru toate nevoile tale administrative,
                        cu prețuri transparente și fără costuri ascunse.
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

            {/* FAQ Section */}
            <Section spacing="lg">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Întrebări Frecvente
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Răspunsuri la cele mai comune întrebări despre serviciile noastre administrative.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {faqs.map((faq, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-agency-blue mt-1 flex-shrink-0" />
                                    <CardTitle className="text-agency-blue-dark text-lg">{faq.question}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Typography variant="body" className="text-agency-gray">
                                    {faq.answer}
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
                        Pregătit să îți înființezi afacerea?
                    </Typography>

                    <Typography variant="lead" className="mt-6 text-agency-gray max-w-2xl mx-auto">
                        Hai să discutăm despre nevoile tale și să ne ocupăm de toate
                        procedurile administrative pentru ca tu să te concentrezi pe business.
                    </Typography>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-agency-blue text-white hover:bg-agency-blue-dark">
                            <Phone className="mr-2 w-5 h-5" />
                            Sună pentru Consultație
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-agency-gray text-agency-gray-dark hover:bg-agency-gray-light"
                        >
                            Trimite Email
                        </Button>
                    </div>

                    <Typography variant="small" className="text-agency-gray mt-8">
                        💡 <strong>Bonus:</strong> Consultația inițială este gratuită și include analiza nevoilor tale
                    </Typography>
                </div>
            </Section>
        </Layout>
    )
}

// Data pentru servicii administrative
const administrativeServices = [
    {
        title: "Înființare SRL",
        description: "Procedura completă de înființare societate cu răspundere limitată",
        category: "Societăți",
        features: [
            "Rezervarea denumirii sociale",
            "Redactarea actului constitutiv",
            "Înregistrarea la Registrul Comerțului",
            "Înregistrarea fiscală (CIF)",
            "Deschiderea contului bancar asistat"
        ],
        price: "500 RON",
        duration: "3-5 zile",
        icon: Building,
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
        title: "Înființare PFA",
        description: "Procedura simplificată pentru persoane fizice autorizate",
        category: "PFA",
        features: [
            "Completarea cererii de autorizare",
            "Înregistrarea la ANAF",
            "Obținerea certificatului de înregistrare",
            "Consultanță regime fiscal optim",
            "Asistență deschidere cont bancar"
        ],
        price: "200 RON",
        duration: "1-2 zile",
        icon: Users,
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
        title: "Înregistrare SEAP",
        description: "Înregistrarea în Sistemul Electronic de Achiziții Publice",
        category: "Achiziții",
        features: [
            "Completarea dosarului SEAP",
            "Pregătirea documentelor necesare",
            "Înregistrarea în sistem",
            "Configurarea profilului complet",
            "Training utilizare platformă"
        ],
        price: "300 RON",
        duration: "2-3 zile",
        icon: Globe,
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
        title: "Administrare SEAP",
        description: "Administrarea lunară a profilului SEAP și participări licitații",
        category: "Management",
        features: [
            "Monitorizarea licitațiilor active",
            "Pregătirea documentațiilor oferte",
            "Depunerea ofertelor electronice",
            "Comunicarea cu achizitorii",
            "Raportare lunară activitate"
        ],
        price: "400 RON/lună",
        duration: "Ongoing",
        icon: Settings,
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
        title: "Asociații Sportive",
        description: "Înființarea asociațiilor sportive și culturale nonprofit",
        category: "Nonprofit",
        features: [
            "Redactarea statutului asociației",
            "Înregistrarea la Tribunalul Județean",
            "Obținerea CIF-ului nonprofit",
            "Înregistrarea la Direcția Județeană",
            "Consultanță legislație specifică"
        ],
        price: "400 RON",
        duration: "5-7 zile",
        icon: Heart,
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
        title: "Consultanță Juridică",
        description: "Consultanță specializată în dreptul afacerilor și proceduri",
        category: "Consultanță",
        features: [
            "Analiză situație juridică actuală",
            "Consultanță alegere formă juridică",
            "Optimizări fiscale legale",
            "Consultanță contracte comerciale",
            "Suport proceduri administrative"
        ],
        price: "150 RON/oră",
        duration: "La cerere",
        icon: Scale,
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

// Data pentru proces
const processSteps = [
    {
        title: "Consultația",
        description: "Analizăm nevoile și alegem soluția optimă",
        duration: "30 min",
        icon: MessageSquare,
        bgColor: "bg-agency-blue-light",
        iconColor: "text-agency-blue"
    },
    {
        title: "Documentația",
        description: "Colectăm documentele necesare",
        duration: "1 zi",
        icon: FileText,
        bgColor: "bg-success-light",
        iconColor: "text-success"
    },
    {
        title: "Pregătirea",
        description: "Pregătim toate formularele și cererile",
        duration: "1-2 zile",
        icon: PenTool,
        bgColor: "bg-agency-accent-light",
        iconColor: "text-agency-accent"
    },
    {
        title: "Depunerea",
        description: "Depunem documentația la autorități",
        duration: "1 zi",
        icon: Target,
        bgColor: "bg-warning-light",
        iconColor: "text-warning"
    },
    {
        title: "Finalizarea",
        description: "Obținem documentele oficiale",
        duration: "1-3 zile",
        icon: Award,
        bgColor: "bg-error-light",
        iconColor: "text-error"
    }
]

// Data pentru beneficii
const benefits = [
    {
        title: "Experiență 10+ Ani",
        description: "Peste un deceniu de experiență în proceduri administrative și legislația în vigoare",
        icon: Award,
        iconBg: "bg-agency-blue-light",
        iconColor: "text-agency-blue"
    },
    {
        title: "Proceduri 100% Legale",
        description: "Toate procedurile sunt efectuate conform legislației române în vigoare",
        icon: ShieldCheck,
        iconBg: "bg-success-light",
        iconColor: "text-success"
    },
    {
        title: "Rapiditate Garantată",
        description: "Finalizăm procedurile în termenele minime prevăzute de lege",
        icon: Zap,
        iconBg: "bg-agency-accent-light",
        iconColor: "text-agency-accent"
    },
    {
        title: "Suport Complet",
        description: "Asistență completă pe toată durata procedurilor și după finalizare",
        icon: Users,
        iconBg: "bg-warning-light",
        iconColor: "text-warning"
    }
]

// Data pentru prețuri
const pricingPlans = [
    {
        name: "Startup Basic",
        description: "Perfect pentru începătorii în afaceri",
        price: "500 RON",
        period: "serviciu complet",
        features: [
            "Înființare SRL sau PFA",
            "Toate taxele incluse",
            "Consultanță alegere formă juridică",
            "Asistență deschidere cont bancar",
            "Suport tehnic 30 zile",
            "Ghid complet obligații fiscale"
        ],
        cta: "Începe Afacerea",
        note: "Ideal pentru startup-uri",
        featured: false
    },
    {
        name: "Business Pro",
        description: "Soluția completă pentru afaceri serioase",
        price: "850 RON",
        period: "pachet complet",
        features: [
            "Înființare SRL + SEAP",
            "Toate taxele și timbrul incluse",
            "Consultanță juridică 2 ore",
            "Optimizare fiscală personalizată",
            "Training administrare SEAP",
            "Suport prioritar 90 zile",
            "Template contracte comerciale",
            "Consultanță strategică business"
        ],
        cta: "Pachetul Complet",
        note: "Cel mai popular pachet",
        featured: true
    },
    {
        name: "Enterprise Plus",
        description: "Pentru organizații complexe și asociații",
        price: "1.200 RON",
        period: "servicii complete",
        features: [
            "Toate tipurile de înființări",
            "Consultanță juridică nelimitată",
            "Administrare SEAP 6 luni gratuit",
            "Optimizări fiscale avansate",
            "Support manager dedicat",
            "Training echipă completă",
            "Monitorizare conformitate",
            "Rapoarte lunare personalizate"
        ],
        cta: "Soluție Enterprise",
        note: "Pentru organizații complexe",
        featured: false
    }
]

// Data pentru FAQ
const faqs = [
    {
        question: "Cât durează înființarea unei SRL?",
        answer: "Procesul de înființare SRL durează în medie 3-5 zile lucrătoare, în funcție de complexitatea dosarului și timpul de răspuns al autorităților. Includem toate etapele: rezervarea denumirii, redactarea actelor, înregistrarea și obținerea CIF-ului."
    },
    {
        question: "Ce documente sunt necesare pentru înființarea PFA?",
        answer: "Pentru PFA sunt necesare: cererea de autorizare completată, copia actului de identitate, certificatul de cazier fiscal, dovada domiciliului și taxa de înregistrare. Ne ocupăm de completarea și depunerea tuturor documentelor."
    },
    {
        question: "Care sunt avantajele înregistrării în SEAP?",
        answer: "SEAP îți permite să participi la licitațiile publice, să accesezi contracte cu instituțiile statului și să îți diversifici portofoliul de clienți. Este obligatoriu pentru contractele cu sectorul public peste anumite praguri."
    },
    {
        question: "Oferiți și administrarea continuă SEAP?",
        answer: "Da, oferim servicii complete de administrare SEAP: monitorizarea licitațiilor, pregătirea documentațiilor, depunerea ofertelor și comunicarea cu achizitorii. Prețul este de 400 RON/lună pentru administrare activă."
    },
    {
        question: "Cum funcționează consultanța juridică?",
        answer: "Consultanța juridică se desfășoară fie față în față la biroul nostru, fie online prin videoconferință. Tariful este de 150 RON/oră și acoperă toate aspectele legate de dreptul afacerilor și procedurile administrative."
    },
    {
        question: "Includ pachetele toate taxele de stat?",
        answer: "Da, toate pachetele noastre includ taxele de stat obligatorii, timbrele și onorariile pentru proceduri. Nu veți avea surprize cu costuri suplimentare - prețul afișat este final."
    }
]