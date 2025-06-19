// src/app/contact/page.tsx - Pagina Contact
import { Metadata } from 'next'
import { Layout } from '@/components/layout'
import { Typography, Section} from '@/components/core'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    Calendar,
    CheckCircle,
    ArrowRight,
    Zap,
    Shield,
    Coffee,
    Users,
    Globe,
    Smartphone
} from 'lucide-react'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Contact | AgencyPro Brașov - Consultație Gratuită & Oferte Personalizate',
    description: 'Contactează AgencyPro din Brașov pentru consultație gratuită. Dezvoltare web, marketing digital, servicii administrative și hosting. ☎️ +40 123 456 789',
    keywords: 'contact AgencyPro Brașov, consultație gratuită, oferte web design, dezvoltare site-uri Brașov, marketing digital contact',
    openGraph: {
        title: 'Contactează AgencyPro Brașov - Consultație Gratuită',
        description: 'Hai să discutăm despre proiectul tău! Consultație gratuită de 30 min, oferte personalizate și răspuns în 24h.',
        type: 'website',
        locale: 'ro_RO',
    }
}

export default function ContactPage() {
    return (
        <Layout>
            {/* Hero Section */}
            <Section spacing="xl" className="relative bg-gradient-to-br from-agency-accent-light via-white to-agency-blue-light overflow-hidden">
                <div className="absolute top-20 right-10 w-40 h-40 bg-agency-blue/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-20 w-32 h-32 bg-agency-accent/10 rounded-full blur-2xl animate-bounce"></div>

                <div className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-agency-blue text-white mb-6">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Hai să vorbim!
                        </Badge>

                        <Typography variant="h1" className="text-agency-blue-dark">
                            Pregătit să îți
                            <span className="text-agency-accent"> Transformi Afacerea</span>?
                        </Typography>

                        <Typography variant="lead" className="mt-6 text-agency-gray max-w-3xl mx-auto">
                            Începem cu o consultație gratuită de 30 de minute pentru a înțelege
                            obiectivele tale și să îți propunem cea mai bună soluție.
                        </Typography>

                        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-3 shadow-md">
                                <Phone className="w-5 h-5 text-agency-blue" />
                                <div className="text-left">
                                    <Typography variant="small" className="text-agency-gray">Sună direct</Typography>
                                    <Typography variant="body" className="font-semibold text-agency-blue-dark">
                                        +40 123 456 789
                                    </Typography>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white rounded-lg px-6 py-3 shadow-md">
                                <Clock className="w-5 h-5 text-agency-accent" />
                                <div className="text-left">
                                    <Typography variant="small" className="text-agency-gray">Răspuns în</Typography>
                                    <Typography variant="body" className="font-semibold text-agency-accent-dark">
                                        max 24 ore
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Contact Methods */}
            <Section spacing="lg">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Modalități de Contact
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Alege modalitatea care ți se potrivește cel mai bine. Suntem aici să te ajutăm
                        să îți atingi obiectivele digitale.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactMethods.map((method, index) => (
                        <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 border-0 shadow-md group">
                            <CardHeader>
                                <div className={`w-16 h-16 ${method.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <method.icon className={`w-8 h-8 ${method.iconColor}`} />
                                </div>
                                <CardTitle className="text-agency-blue-dark">{method.title}</CardTitle>
                                <CardDescription className="text-agency-gray">
                                    {method.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Typography variant="body" className="font-semibold text-agency-blue mb-3">
                                    {method.contact}
                                </Typography>
                                <Typography variant="small" className="text-agency-gray mb-4">
                                    {method.details}
                                </Typography>
                                <Button
                                    className={`w-full ${method.buttonClass}`}
                                    variant="outline"
                                >
                                    {method.action}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Contact Form & Info */}
            <Section spacing="lg" className="bg-agency-gray-light">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <div className="mb-8">
                            <Typography variant="h2" className="text-agency-blue-dark mb-4">
                                Trimite-ne un Mesaj
                            </Typography>
                            <Typography variant="body" className="text-agency-gray">
                                Completează formularul de mai jos și îți vom răspunde în maximum 24 de ore
                                cu o propunere personalizată pentru proiectul tău.
                            </Typography>
                        </div>

                        <Card className="border-0 shadow-lg">
                            <CardContent className="p-8">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-agency-gray-dark mb-2">
                                                Nume *
                                            </label>
                                            <Input
                                                placeholder="Numele tău"
                                                required
                                                className="focus:border-agency-blue focus:ring-agency-blue/20"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-agency-gray-dark mb-2">
                                                Prenume *
                                            </label>
                                            <Input
                                                placeholder="Prenumele tău"
                                                required
                                                className="focus:border-agency-blue focus:ring-agency-blue/20"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-agency-gray-dark mb-2">
                                                Email *
                                            </label>
                                            <Input
                                                type="email"
                                                placeholder="email@exemplu.ro"
                                                required
                                                className="focus:border-agency-blue focus:ring-agency-blue/20"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-agency-gray-dark mb-2">
                                                Telefon
                                            </label>
                                            <Input
                                                type="tel"
                                                placeholder="+40 xxx xxx xxx"
                                                className="focus:border-agency-blue focus:ring-agency-blue/20"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-agency-gray-dark mb-2">
                                            Tipul proiectului *
                                        </label>
                                        <select className="w-full px-3 py-2 border border-input rounded-md focus:border-agency-blue focus:ring-agency-blue/20 focus:outline-none bg-background">
                                            <option value="">Selectează tipul proiectului...</option>
                                            <option value="website">Site de prezentare</option>
                                            <option value="ecommerce">Magazin online</option>
                                            <option value="marketing">Marketing digital</option>
                                            <option value="seo">SEO & Consultanță</option>
                                            <option value="administrative">Servicii administrative</option>
                                            <option value="hosting">Hosting & Mentenanță</option>
                                            <option value="other">Altceva</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-agency-gray-dark mb-2">
                                            Buget estimativ
                                        </label>
                                        <select className="w-full px-3 py-2 border border-input rounded-md focus:border-agency-blue focus:ring-agency-blue/20 focus:outline-none bg-background">
                                            <option value="">Selectează bugetul...</option>
                                            <option value="1000-3000">1.000 - 3.000 RON</option>
                                            <option value="3000-5000">3.000 - 5.000 RON</option>
                                            <option value="5000-10000">5.000 - 10.000 RON</option>
                                            <option value="10000+">10.000+ RON</option>
                                            <option value="discutam">Să discutăm</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-agency-gray-dark mb-2">
                                            Detalii despre proiect *
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Spune-ne mai multe despre proiectul tău, obiectivele și nevoile specifice..."
                                            required
                                            className="w-full px-3 py-2 border border-input rounded-md focus:border-agency-blue focus:ring-agency-blue/20 focus:outline-none bg-background resize-vertical min-h-[100px]"
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            required
                                            className="mt-1 rounded border-gray-300 text-agency-blue focus:ring-agency-blue/20"
                                        />
                                        <Typography variant="small" className="text-agency-gray">
                                            Sunt de acord cu prelucrarea datelor personale în conformitate cu
                                            <a href="/privacy" className="text-agency-blue hover:underline ml-1">
                                                Politica de Confidențialitate
                                            </a>
                                            .
                                        </Typography>
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-agency-blue text-white hover:bg-agency-blue-dark"
                                    >
                                        <Send className="mr-2 w-5 h-5" />
                                        Trimite Mesajul
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <div className="mb-8">
                            <Typography variant="h2" className="text-agency-blue-dark mb-4">
                                Informații de Contact
                            </Typography>
                            <Typography variant="body" className="text-agency-gray">
                                Suntem localizați în Brașov și oferim servicii complete în toată România.
                                Vino să ne cunoști sau contactează-ne în orice mod preferat.
                            </Typography>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <Card key={index} className="border-l-4 border-l-agency-blue">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                                <info.icon className={`w-6 h-6 ${info.iconColor}`} />
                                            </div>
                                            <div className="flex-1">
                                                <Typography variant="h6" className="text-agency-blue-dark mb-2">
                                                    {info.title}
                                                </Typography>
                                                <Typography variant="body" className="text-agency-gray mb-1">
                                                    {info.main}
                                                </Typography>
                                                <Typography variant="small" className="text-agency-gray">
                                                    {info.secondary}
                                                </Typography>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Business Hours */}
                        <Card className="bg-gradient-to-r from-agency-blue to-agency-blue-dark text-white">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-6 h-6" />
                                    <CardTitle className="text-white">Program de Lucru</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Luni - Vineri:</span>
                                        <span className="font-semibold">09:00 - 18:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sâmbătă:</span>
                                        <span className="font-semibold">10:00 - 14:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Duminică:</span>
                                        <span className="text-white/80">Închis</span>
                                    </div>
                                    <div className="pt-3 mt-3 border-t border-white/20">
                                        <div className="flex items-center gap-2">
                                            <Zap className="w-4 h-4 text-agency-accent" />
                                            <Typography variant="small" className="text-white/90">
                                                Urgențe: disponibili 24/7 pentru clienții cu contract de mentenanță
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Map Section */}
            <Section spacing="lg">
                <div className="text-center mb-12">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Locația Noastră
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Suntem situați în inima Brașovului, cu acces facil și parcare disponibilă.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <Card className="overflow-hidden">
                            <div className="w-full h-[400px] bg-agency-gray-light flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-16 h-16 text-agency-blue mx-auto mb-4" />
                                    <Typography variant="h6" className="text-agency-blue-dark mb-2">
                                        Hartă Interactivă
                                    </Typography>
                                    <Typography variant="body" className="text-agency-gray max-w-md">
                                        Aici va fi integrată harta Google Maps cu locația exactă a birourilor AgencyPro.
                                    </Typography>
                                    <Button className="mt-4 bg-agency-blue text-white hover:bg-agency-blue-dark">
                                        <Globe className="mr-2 w-4 h-4" />
                                        Deschide în Google Maps
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-agency-blue-dark">Cum Ajungi la Noi</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-agency-blue mt-0.5 flex-shrink-0" />
                                    <div>
                                        <Typography variant="body" className="font-semibold text-agency-gray-dark">
                                            Adresa Completă
                                        </Typography>
                                        <Typography variant="small" className="text-agency-gray">
                                            Strada Exemplu, Nr. 123<br />
                                            Brașov, BV 500001<br />
                                            România
                                        </Typography>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Car className="w-5 h-5 text-agency-accent mt-0.5 flex-shrink-0" />
                                    <div>
                                        <Typography variant="body" className="font-semibold text-agency-gray-dark">
                                            Cu Mașina
                                        </Typography>
                                        <Typography variant="small" className="text-agency-gray">
                                            Parcare gratuită disponibilă<br />
                                            Acces facil din centrul orașului
                                        </Typography>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Users className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                                    <div>
                                        <Typography variant="body" className="font-semibold text-agency-gray-dark">
                                            Transport Public
                                        </Typography>
                                        <Typography variant="small" className="text-agency-gray">
                                            Stația de autobuz la 2 minute<br />
                                            Liniile 12, 15, 23
                                        </Typography>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-agency-accent-light border-agency-accent">
                            <CardContent className="p-6 text-center">
                                <Coffee className="w-12 h-12 text-agency-accent mx-auto mb-4" />
                                <Typography variant="h6" className="text-agency-accent-dark mb-2">
                                    Programează o Întâlnire
                                </Typography>
                                <Typography variant="small" className="text-agency-gray mb-4">
                                    Hai să luăm o cafea și să discutăm despre proiectul tău!
                                </Typography>
                                <Button className="bg-agency-accent text-agency-gray-dark hover:bg-agency-accent-dark">
                                    <Calendar className="mr-2 w-4 h-4" />
                                    Rezervă Întâlnirea
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* FAQ Quick */}
            <Section spacing="lg" className="bg-gradient-to-r from-agency-blue-light to-agency-accent-light">
                <div className="text-center mb-12">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Întrebări Frecvente
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Răspunsuri rapide la cele mai comune întrebări despre serviciile noastre.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <div className="text-center mt-12">
                    <Typography variant="body" className="text-agency-gray mb-4">
                        Nu găsești răspunsul la întrebarea ta?
                    </Typography>
                    <Button className="bg-agency-blue text-white hover:bg-agency-blue-dark">
                        <MessageSquare className="mr-2 w-4 h-4" />
                        Contactează-ne Direct
                    </Button>
                </div>
            </Section>
        </Layout>
    )
}

// Data pentru metodele de contact
const contactMethods = [
    {
        title: "Telefon Direct",
        description: "Sună pentru răspunsuri imediate",
        contact: "+40 123 456 789",
        details: "Luni-Vineri: 09:00-18:00",
        action: "Sună Acum",
        icon: Phone,
        bgColor: "bg-agency-blue-light",
        iconColor: "text-agency-blue",
        buttonClass: "border-agency-blue text-agency-blue hover:bg-agency-blue hover:text-white"
    },
    {
        title: "Email",
        description: "Trimite detalii despre proiect",
        contact: "contact@agencypro.ro",
        details: "Răspuns în max 24h",
        action: "Trimite Email",
        icon: Mail,
        bgColor: "bg-agency-accent-light",
        iconColor: "text-agency-accent",
        buttonClass: "border-agency-accent text-agency-accent hover:bg-agency-accent hover:text-agency-gray-dark"
    },
    {
        title: "WhatsApp",
        description: "Mesaje rapide și fișiere",
        contact: "+40 123 456 789",
        details: "Răspuns în câteva minute",
        action: "Deschide WhatsApp",
        icon: Smartphone,
        bgColor: "bg-success-light",
        iconColor: "text-success",
        buttonClass: "border-success text-success hover:bg-success hover:text-white"
    },
    {
        title: "Consultație Online",
        description: "Întâlnire video programată",
        contact: "30 min gratuit",
        details: "Google Meet sau Zoom",
        action: "Programează",
        icon: Calendar,
        bgColor: "bg-warning-light",
        iconColor: "text-warning",
        buttonClass: "border-warning text-warning hover:bg-warning hover:text-agency-gray-dark"
    }
]

// Data pentru informațiile de contact
const contactInfo = [
    {
        title: "Adresa Biroului",
        main: "Strada Exemplu, Nr. 123",
        secondary: "Brașov, BV 500001, România",
        icon: MapPin,
        bgColor: "bg-agency-blue-light",
        iconColor: "text-agency-blue"
    },
    {
        title: "Date de Contact",
        main: "+40 123 456 789",
        secondary: "contact@agencypro.ro",
        icon: Phone,
        bgColor: "bg-agency-accent-light",
        iconColor: "text-agency-accent"
    },
    {
        title: "Suport Tehnic",
        main: "support@agencypro.ro",
        secondary: "Pentru clienții existenți",
        icon: Shield,
        bgColor: "bg-success-light",
        iconColor: "text-success"
    }
]

// Import pentru iconița mașină
import { Car } from 'lucide-react'

// Data pentru FAQ
const faqs = [
    {
        question: "Cât durează un proiect de site web?",
        answer: "Depinde de complexitate: site de prezentare 1-2 săptămâni, magazin online 3-4 săptămâni, aplicații custom 6-8 săptămâni."
    },
    {
        question: "Oferiți și servicii de mentenanță?",
        answer: "Da, oferim pachete complete de mentenanță, hosting premium și suport tehnic 24/7 pentru toate site-urile create."
    },
    {
        question: "Lucrați cu clienți din afara Brașovului?",
        answer: "Absolut! Lucrăm cu clienți din toată România. Majoritatea comunicării se face online, dar putem programa întâlniri și în deplasare."
    },
    {
        question: "Care sunt costurile pentru serviciile administrative?",
        answer: "Variază în funcție de serviciu: înființare SRL de la 500 RON, înregistrare SEAP de la 300 RON. Oferim pachete complete cu reduceri."
    }
]