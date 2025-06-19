// src/app/about/page.tsx - Optimizată pentru SEO
import { Metadata } from 'next'
import { Layout } from '@/components/layout'
import { Typography, Section, Container } from '@/components/core'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    ArrowRight,
    Heart,
    Target,
    Users,
    Award,
    Code2,
    Palette,
    TrendingUp,
    CheckCircle,
    Star,
    Coffee,
    Lightbulb,
    Shield,
    Zap,
    Rocket
} from 'lucide-react'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Despre Noi | AgencyPro Brașov - Servicii Complete Web, Marketing & Administrative',
    description: 'AgencyPro Brașov: dezvoltare web, e-commerce, marketing digital, SEO, înființare firme, administrare SEAP, hosting premium. Echipă cu experiență vastă în proiecte complexe.',
    keywords: 'agenție web Brașov, dezvoltare site-uri, marketing digital, SEO, e-commerce, înființare firme, SEAP, hosting, administrare site-uri, AgencyPro',
    openGraph: {
        title: 'AgencyPro Brașov - Servicii Complete Digitale & Administrative',
        description: 'De la dezvoltare web și marketing digital până la înființare firme și administrare SEAP. Descoperă echipa AgencyPro și serviciile noastre complete.',
        type: 'website',
        locale: 'ro_RO',
    }
}

export default function AboutPage() {
    return (
        <Layout>
            {/* Hero Section */}
            <Section spacing="xl" className="relative bg-gradient-to-br from-agency-blue-light via-white to-agency-accent-light overflow-hidden">
                {/* Floating elements cu CSS animations în loc de Framer Motion */}
                <div className="absolute top-10 right-20 w-32 h-32 bg-agency-blue/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-40 h-40 bg-agency-accent/10 rounded-full blur-3xl animate-bounce"></div>

                <div className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-agency-accent text-agency-gray-dark mb-6">
                            <Heart className="w-4 h-4 mr-2" />
                            Echipa AgencyPro
                        </Badge>

                        <Typography variant="h1" className="text-agency-blue-dark">
                            Pasionați de
                            <span className="text-agency-accent"> Excelență Digitală</span>
                        </Typography>

                        <Typography variant="lead" className="mt-6 text-agency-gray max-w-3xl mx-auto">
                            Suntem o echipă dedicată de specialiști din Brașov, care transformă viziunile
                            digitale în realitate prin tehnologie modernă, creativitate și atenție la detalii.
                        </Typography>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-agency-blue text-white hover:bg-agency-blue-dark">
                                <Users className="mr-2 w-5 h-5" />
                                Cunoaște Echipa
                            </Button>
                            <Button size="lg" variant="outline" className="border-agency-accent text-agency-accent hover:bg-agency-accent hover:text-agency-gray-dark">
                                Începe un Proiect
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Story Section */}
            <Section spacing="lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Typography variant="h2" className="text-agency-blue-dark mb-6">
                            Povestea Noastră
                        </Typography>
                        <Typography variant="body" className="text-agency-gray mb-6 leading-relaxed">
                            AgencyPro s-a născut din pasiunea pentru tehnologie și dorința de a ajuta
                            afacerile să prospere în era digitală. Începuturile noastre au fost marcate
                            de proiecte interne complexe care ne-au permis să ne perfecționăm skillurile
                            și să dezvoltăm o metodologie de lucru eficientă.
                        </Typography>
                        <Typography variant="body" className="text-agency-gray mb-6 leading-relaxed">
                            De-a lungul anilor, am lucrat la diverse proiecte interne care ne-au oferit
                            experiența necesară pentru a înțelege provocările reale ale business-urilor
                            moderne. Această experiență practică ne-a învățat să livrăm soluții robuste,
                            scalabile și orientate către rezultate.
                        </Typography>
                        <Typography variant="body" className="text-agency-gray leading-relaxed">
                            Astăzi, suntem pregătiți să aducem această experiență acumulată în serviciul
                            clienților noștri, oferind soluții digitale complete care fac diferența.
                        </Typography>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-agency-blue to-agency-blue-dark rounded-2xl p-8 text-white">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-agency-accent rounded-full flex items-center justify-center">
                                        <Lightbulb className="w-6 h-6 text-agency-gray-dark" />
                                    </div>
                                    <div>
                                        <Typography variant="h6" className="text-white">2020</Typography>
                                        <Typography variant="small" className="text-white/80">Începuturile</Typography>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-agency-accent rounded-full flex items-center justify-center">
                                        <Code2 className="w-6 h-6 text-agency-gray-dark" />
                                    </div>
                                    <div>
                                        <Typography variant="h6" className="text-white">2021-2023</Typography>
                                        <Typography variant="small" className="text-white/80">Dezvoltare Intensivă</Typography>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-agency-accent rounded-full flex items-center justify-center">
                                        <Rocket className="w-6 h-6 text-agency-gray-dark" />
                                    </div>
                                    <div>
                                        <Typography variant="h6" className="text-white">2024+</Typography>
                                        <Typography variant="small" className="text-white/80">Extindere Servicii Client</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Values Section */}
            <Section spacing="lg" className="bg-agency-gray-light">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Valorile Care Ne Ghidează
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Aceste principii fundamentale definesc modul în care abordăm fiecare proiect
                        și relația cu fiecare client.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 border-0 shadow-md h-full">
                            <CardHeader>
                                <div className={`w-16 h-16 ${value.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                                    <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                                </div>
                                <CardTitle className="text-agency-blue-dark">{value.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Typography variant="body" className="text-agency-gray leading-relaxed">
                                    {value.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Expertise Section */}
            <Section spacing="lg">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Serviciile Noastre Complete
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        De la dezvoltare web și marketing digital până la servicii administrative
                        și hosting - oferim soluții integrate pentru toate nevoile business-ului tău.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Technical Skills */}
                    <Card className="border-agency-blue-light">
                        <CardHeader className="bg-agency-blue-light rounded-t-lg">
                            <div className="flex items-center gap-3">
                                <Code2 className="w-6 h-6 text-agency-blue" />
                                <CardTitle className="text-agency-blue-dark">Dezvoltare & Tehnologie</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                {technicalSkills.map((skill, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-agency-blue flex-shrink-0" />
                                            <Typography variant="body" className="text-agency-gray-dark">
                                                {skill.name}
                                            </Typography>
                                        </div>
                                        <Badge variant="secondary" className="bg-agency-blue text-white">
                                            {skill.level}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Creative Skills */}
                    <Card className="border-agency-accent-light">
                        <CardHeader className="bg-agency-accent-light rounded-t-lg">
                            <div className="flex items-center gap-3">
                                <Palette className="w-6 h-6 text-agency-accent" />
                                <CardTitle className="text-agency-accent-dark">Design & Marketing</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                {creativeSkills.map((skill, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-agency-accent flex-shrink-0" />
                                            <Typography variant="body" className="text-agency-gray-dark">
                                                {skill.name}
                                            </Typography>
                                        </div>
                                        <Badge variant="secondary" className="bg-agency-accent text-agency-gray-dark">
                                            {skill.level}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Administrative & Hosting Services */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                    {/* Administrative Services */}
                    <Card className="border-success-light">
                        <CardHeader className="bg-success-light rounded-t-lg">
                            <div className="flex items-center gap-3">
                                <Award className="w-6 h-6 text-success" />
                                <CardTitle className="text-success">Servicii Administrative</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                {administrativeSkills.map((skill, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                                            <Typography variant="body" className="text-agency-gray-dark">
                                                {skill.name}
                                            </Typography>
                                        </div>
                                        <Badge variant="secondary" className="bg-success text-white">
                                            {skill.level}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Hosting & Maintenance */}
                    <Card className="border-warning-light">
                        <CardHeader className="bg-warning-light rounded-t-lg">
                            <div className="flex items-center gap-3">
                                <Shield className="w-6 h-6 text-warning" />
                                <CardTitle className="text-warning">Hosting & Administrare</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                {hostingSkills.map((skill, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-warning flex-shrink-0" />
                                            <Typography variant="body" className="text-agency-gray-dark">
                                                {skill.name}
                                            </Typography>
                                        </div>
                                        <Badge variant="secondary" className="bg-warning text-agency-gray-dark">
                                            {skill.level}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Section>

            {/* Process Section */}
            <Section spacing="lg" className="bg-gradient-to-r from-agency-blue to-agency-blue-dark">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-white">
                        Procesul Nostru de Lucru
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-white/90">
                        O metodologie testată și perfecționată prin experiența acumulată
                        în proiecte interne complexe.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 bg-agency-accent rounded-2xl flex items-center justify-center mx-auto">
                                    <step.icon className="w-10 h-10 text-agency-gray-dark" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <Typography variant="small" className="text-agency-blue font-bold">
                                        {index + 1}
                                    </Typography>
                                </div>
                            </div>
                            <Typography variant="h5" className="text-white mb-3">
                                {step.title}
                            </Typography>
                            <Typography variant="body" className="text-white/80">
                                {step.description}
                            </Typography>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Team Section */}
            <Section spacing="lg">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Echipa AgencyPro
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Profesionisti dedicati cu experienta diversificata in dezvoltare web,
                        design si marketing digital.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamStats.map((stat, index) => (
                        <Card key={index} className="text-center hover:shadow-xl transition-all duration-500">
                            <CardHeader>
                                <div className={`w-16 h-16 ${stat.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                                    <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                                </div>
                                <CardTitle className="text-agency-blue-dark">{stat.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Typography variant="body" className="text-agency-gray mb-4">
                                    {stat.description}
                                </Typography>
                                <div className="space-y-2">
                                    {stat.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <Star className="w-4 h-4 text-agency-accent fill-current" />
                                            <Typography variant="small" className="text-agency-gray">
                                                {highlight}
                                            </Typography>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section spacing="xl" className="bg-gradient-to-r from-agency-accent-light to-agency-accent">
                <Container className="text-center">
                    <Typography variant="h2" className="text-agency-gray-dark mb-6">
                        Pregătiți să Colaborăm?
                    </Typography>

                    <Typography variant="lead" className="text-agency-gray max-w-2xl mx-auto mb-10">
                        Hai să transformăm experiența noastră acumulată în succesul afacerii tale.
                        Începem cu o consultație gratuită pentru a înțelege nevoile tale.
                    </Typography>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-agency-blue text-white hover:bg-agency-blue-dark">
                            <Coffee className="mr-2 w-5 h-5" />
                            Consultație Gratuită
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-agency-gray text-agency-gray-dark hover:bg-agency-gray-light"
                        >
                            <Users className="mr-2 w-5 h-5" />
                            Cunoaște Echipa
                        </Button>
                    </div>
                </Container>
            </Section>
        </Layout>
    )
}

// Toate datele rămân la fel...
const values = [
    {
        title: "Excelență Tehnică",
        description: "Utilizăm cele mai noi tehnologii și best practices pentru a livra soluții robuste și performante.",
        icon: Code2,
        iconBg: "bg-agency-blue-light",
        iconColor: "text-agency-blue"
    },
    {
        title: "Transparență Totală",
        description: "Comunicare deschisă și onestă în toate etapele proiectului, fără surprize neplăcute.",
        icon: Shield,
        iconBg: "bg-success-light",
        iconColor: "text-success"
    },
    {
        title: "Rezultate Măsurabile",
        description: "Ne concentrăm pe metrici concrete și impact real asupra afacerii tale.",
        icon: TrendingUp,
        iconBg: "bg-agency-accent-light",
        iconColor: "text-agency-accent"
    },
    {
        title: "Inovație Continuă",
        description: "Căutăm constant modalități noi și creative de a rezolva provocările digitale.",
        icon: Lightbulb,
        iconBg: "bg-warning-light",
        iconColor: "text-warning"
    },
    {
        title: "Suport Dedicat",
        description: "Echipa noastră este mereu disponibilă pentru suport și mentenanță pe termen lung.",
        icon: Users,
        iconBg: "bg-agency-gray-light",
        iconColor: "text-agency-gray"
    },
    {
        title: "Livrare Rapidă",
        description: "Procese optimizate care ne permit să livrăm proiecte de calitate în timpi record.",
        icon: Zap,
        iconBg: "bg-error-light",
        iconColor: "text-error"
    }
]

const technicalSkills = [
    { name: "Next.js & React", level: "Expert" },
    { name: "WordPress & WooCommerce", level: "Expert" },
    { name: "Node.js & APIs", level: "Avansat" },
    { name: "Database Design", level: "Avansat" },
    { name: "DevOps & Hosting", level: "Avansat" },
    { name: "SEO Tehnic", level: "Expert" }
]

const creativeSkills = [
    { name: "UI/UX Design", level: "Expert" },
    { name: "Google Ads & Meta Ads", level: "Avansat" },
    { name: "Email Marketing", level: "Expert" },
    { name: "Analytics & Tracking", level: "Expert" },
    { name: "Content Strategy", level: "Avansat" },
    { name: "Conversion Optimization", level: "Expert" }
]

const administrativeSkills = [
    { name: "Înființare firme SRL/PFA", level: "Expert" },
    { name: "Înregistrare în SEAP", level: "Expert" },
    { name: "Administrare profile SEAP", level: "Expert" },
    { name: "Asociații sportive/culturale", level: "Avansat" },
    { name: "Consultanță juridică", level: "Avansat" },
    { name: "Proceduri administrative", level: "Expert" }
]

const hostingSkills = [
    { name: "Hosting SSD premium", level: "Expert" },
    { name: "Administrare site-uri", level: "Expert" },
    { name: "Backup & Recovery", level: "Expert" },
    { name: "SSL & Securitate", level: "Expert" },
    { name: "Monitorizare 24/7", level: "Expert" },
    { name: "Updates & Mentenanță", level: "Expert" }
]

const processSteps = [
    {
        title: "Analiza Detaliată",
        description: "Înțelegem pe deplin business-ul, obiectivele și provocările tale specifice.",
        icon: Target
    },
    {
        title: "Strategia Personalizată",
        description: "Dezvoltăm o strategie unică, adaptată perfect nevoilor și bugetului tău.",
        icon: Lightbulb
    },
    {
        title: "Implementarea Expertă",
        description: "Executăm planul cu atenție la detalii, folosind tehnologii moderne și eficiente.",
        icon: Code2
    },
    {
        title: "Optimizarea Continuă",
        description: "Monitorizăm, testăm și îmbunătățim constant pentru rezultate superioare.",
        icon: TrendingUp
    }
]

const teamStats = [
    {
        title: "Dezvoltare Web",
        description: "Specialiști în tehnologii moderne cu experiență în proiecte complexe de diverse scale.",
        highlights: [
            "Full-stack development",
            "E-commerce avansat",
            "Aplicații custom"
        ],
        icon: Code2,
        iconBg: "bg-agency-blue-light",
        iconColor: "text-agency-blue"
    },
    {
        title: "Design & Marketing",
        description: "Creativi care transformă ideile în experiențe digitale memorabile și funcționale.",
        highlights: [
            "Interface design modern",
            "Campanii PPC eficiente",
            "SEO & Content Strategy"
        ],
        icon: Palette,
        iconBg: "bg-agency-accent-light",
        iconColor: "text-agency-accent"
    },
    {
        title: "Servicii Administrative",
        description: "Experți în proceduri administrative și consultanță pentru înființarea și dezvoltarea afacerilor.",
        highlights: [
            "Înființare firme SRL/PFA",
            "Înregistrare & administrare SEAP",
            "Asociații & fundații"
        ],
        icon: Award,
        iconBg: "bg-success-light",
        iconColor: "text-success"
    },
    {
        title: "Hosting & Administrare",
        description: "Servicii complete de hosting premium și administrare proactivă pentru site-uri sigure.",
        highlights: [
            "Hosting SSD ultra-rapid",
            "Administrare site-uri",
            "Monitorizare & backup 24/7"
        ],
        icon: Shield,
        iconBg: "bg-warning-light",
        iconColor: "text-warning"
    }
]