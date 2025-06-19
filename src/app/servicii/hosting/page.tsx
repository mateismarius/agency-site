// src/app/servicii/hosting/page.tsx - Pagina Hosting & Mentenanță
import { Metadata } from 'next'
import { Layout } from '@/components/layout'
import { Typography, Section } from '@/components/core'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    Server,
    Shield,
    Zap,
    Globe,
    CheckCircle,
    Star,
    ArrowRight,
    Eye,
    Settings,
    Database,
    Lock,
    Activity,
    MessageSquare,
    Phone,
    Mail,
    HardDrive,
    RefreshCw,
    CloudUpload,
    BarChart3,
    Users,
} from 'lucide-react'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Hosting & Mentenanță | Hosting SSD Premium, Administrare Site-uri | AgencyPro Brașov',
    description: 'Servicii complete hosting SSD ultra-rapid, mentenanță site-uri, backup automat, SSL gratuit, monitorizare 24/7. Hosting premium România cu suport dedicat.',
    keywords: 'hosting premium, hosting SSD, mentenanță site-uri, administrare WordPress, backup automat, SSL certificate, hosting România, suport tehnic 24/7',
    openGraph: {
        title: 'Hosting Premium & Mentenanță Site-uri | Performance Garantată',
        description: 'Hosting SSD ultra-rapid cu mentenanță proactivă. Backup automat, SSL gratuit, monitorizare 24/7 și suport expert.',
        type: 'website',
        locale: 'ro_RO',
    }
}

export default function HostingPage() {
    return (
        <Layout>
            {/* Hero Section */}
            <Section spacing="xl" className="relative bg-gradient-to-br from-agency-gray via-agency-gray-light to-white overflow-hidden">
                <div className="absolute top-20 right-10 w-40 h-40 bg-agency-blue/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-20 w-32 h-32 bg-agency-gray/30 rounded-full blur-2xl animate-bounce"></div>

                <div className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-agency-gray text-white mb-6">
                            <Server className="w-4 h-4 mr-2" />
                            Hosting Premium Expert
                        </Badge>

                        <Typography variant="h1" className="text-agency-gray-dark">
                            Hosting Ultra-Rapid &
                            <span className="text-agency-blue"> Mentenanță 24/7</span>
                        </Typography>

                        <Typography variant="lead" className="mt-6 text-agency-gray max-w-3xl mx-auto">
                            Hosting SSD premium cu performanță garantată, backup automat zilnic,
                            SSL gratuit și mentenanță proactivă pentru site-uri sigure și rapide.
                        </Typography>

                        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-md">
                                <Zap className="w-5 h-5 text-agency-blue" />
                                <div className="text-left">
                                    <Typography variant="small" className="text-agency-gray">Timp încărcare</Typography>
                                    <Typography variant="body" className="font-semibold text-agency-blue">
                                        &lt; 2 secunde
                                    </Typography>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-md">
                                <Shield className="w-5 h-5 text-agency-blue" />
                                <div className="text-left">
                                    <Typography variant="small" className="text-agency-gray">Uptime garantat</Typography>
                                    <Typography variant="body" className="font-semibold text-agency-blue">
                                        99.9%
                                    </Typography>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-agency-blue text-white hover:bg-agency-blue-dark">
                                <MessageSquare className="mr-2 w-5 h-5" />
                                Test Gratuit 30 Zile
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-agency-gray text-agency-gray-dark hover:bg-agency-gray-light"
                            >
                                Vezi Specificațiile
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
                        Servicii Complete Hosting & Mentenanță
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Tot ce ai nevoie pentru un site rapid, sigur și mereu funcțional,
                        de la hosting premium la mentenanță proactivă.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hostingServices.map((service, index) => (
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
                                        Alege Serviciul
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
                        Caracteristici Premium Incluse
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Toate pachetele de hosting includ aceste funcționalități premium
                        pentru performanță și securitate maximă.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 border-0 shadow-md group">
                            <CardHeader>
                                <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                                </div>
                                <CardTitle className="text-agency-blue-dark text-base">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Typography variant="small" className="text-agency-gray">
                                    {feature.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Hosting Plans Section */}
            <Section spacing="lg">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Planuri de Hosting Premium
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Alegem resursele potrivite pentru nevoile tale, de la site-uri simple
                        la aplicații complexe cu trafic mare.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {hostingPlans.map((plan, index) => (
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
                                {/* Specs */}
                                <div className="bg-agency-gray-light rounded-lg p-4 mb-6">
                                    <Typography variant="h6" className="text-agency-blue-dark mb-3">Specificații:</Typography>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-agency-gray">Spațiu:</span>
                                            <span className="font-semibold text-agency-gray-dark">{plan.specs.storage}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-agency-gray">Bandwidth:</span>
                                            <span className="font-semibold text-agency-gray-dark">{plan.specs.bandwidth}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-agency-gray">Site-uri:</span>
                                            <span className="font-semibold text-agency-gray-dark">{plan.specs.websites}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-agency-gray">Email:</span>
                                            <span className="font-semibold text-agency-gray-dark">{plan.specs.emails}</span>
                                        </div>
                                    </div>
                                </div>

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

            {/* Maintenance Section */}
            <Section spacing="lg" className="bg-gradient-to-r from-agency-blue-light to-agency-gray-light">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Servicii de Mentenanță Proactivă
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Menținem site-ul tău actualizat, sigur și optimizat pentru performanță maximă,
                        astfel încât tu să te concentrezi pe business.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <Typography variant="h3" className="text-agency-blue-dark mb-6">
                            Ce Include Mentenanța
                        </Typography>
                        <div className="space-y-4">
                            {maintenanceFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                                    <div className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                        <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                                    </div>
                                    <div>
                                        <Typography variant="h6" className="text-agency-blue-dark mb-2">
                                            {feature.title}
                                        </Typography>
                                        <Typography variant="body" className="text-agency-gray">
                                            {feature.description}
                                        </Typography>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <Typography variant="h3" className="text-agency-blue-dark mb-6">
                            Planuri de Mentenanță
                        </Typography>
                        <div className="space-y-6">
                            {maintenancePlans.map((plan, index) => (
                                <Card key={index} className={`${plan.featured ? 'border-2 border-agency-blue' : 'border border-gray-200'}`}>
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardTitle className="text-agency-blue-dark">{plan.name}</CardTitle>
                                                <CardDescription className="text-agency-gray">{plan.description}</CardDescription>
                                            </div>
                                            <div className="text-right">
                                                <Typography variant="h4" className={plan.featured ? 'text-agency-blue' : 'text-agency-gray-dark'}>
                                                    {plan.price}
                                                </Typography>
                                                <Typography variant="small" className="text-agency-gray">
                                                    lunar
                                                </Typography>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {plan.features.map((feature, idx) => (
                                                <Badge key={idx} variant="secondary" className="text-xs">
                                                    {feature}
                                                </Badge>
                                            ))}
                                        </div>
                                        <Button
                                            className={`w-full mt-4 ${plan.featured ? 'bg-agency-blue text-white hover:bg-agency-blue-dark' : 'bg-agency-gray text-white hover:bg-agency-gray-dark'}`}
                                        >
                                            Alege Planul
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Support Section */}
            <Section spacing="lg">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Suport Tehnic 24/7
                    </Typography>
                    <Typography variant="lead" className="mt-4 max-w-3xl mx-auto text-agency-gray">
                        Echipa noastră de experți este disponibilă non-stop pentru a rezolva
                        orice problemă și pentru a răspunde la întrebările tale.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {supportChannels.map((channel, index) => (
                        <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 border-0 shadow-md group">
                            <CardHeader>
                                <div className={`w-16 h-16 ${channel.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <channel.icon className={`w-8 h-8 ${channel.iconColor}`} />
                                </div>
                                <CardTitle className="text-agency-blue-dark">{channel.title}</CardTitle>
                                <CardDescription className="text-agency-gray">
                                    {channel.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Typography variant="body" className="text-agency-gray-dark font-semibold mb-2">
                                    {channel.contact}
                                </Typography>
                                <Typography variant="small" className="text-agency-gray mb-4">
                                    Timp răspuns: {channel.responseTime}
                                </Typography>
                                <Badge className={channel.badgeColor}>
                                    {channel.availability}
                                </Badge>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section spacing="xl" className="bg-gradient-to-r from-agency-gray to-agency-gray-dark">
                <div className="text-center max-w-4xl mx-auto">
                    <Typography variant="h2" className="text-white">
                        Pregătit pentru hosting premium și mentenanță profesională?
                    </Typography>

                    <Typography variant="lead" className="mt-6 text-white/90 max-w-2xl mx-auto">
                        Hai să migrăm site-ul tău pe infrastructura noastră premium și să îți
                        garantăm performanță și securitate de top.
                    </Typography>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-agency-blue text-white hover:bg-agency-blue-dark">
                            <Server className="mr-2 w-5 h-5" />
                            Test Gratuit 30 Zile
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-transparent border-white/20 text-white hover:bg-white/10"
                        >
                            Migrare Gratuită
                        </Button>
                    </div>

                    <Typography variant="small" className="text-white/80 mt-8">
                        💡 <strong>Bonus:</strong> Migrarea completă este gratuită și include optimizări de performanță
                    </Typography>
                </div>
            </Section>
        </Layout>
    )
}

// Data pentru servicii hosting
const hostingServices = [
    {
        title: "Hosting SSD Premium",
        description: "Hosting ultra-rapid cu SSD NVMe și tehnologii de ultimă generație",
        category: "Hosting",
        features: [
            "SSD NVMe ultra-rapid",
            "Uptime garantat 99.9%",
            "CDN global inclus",
            "SSL certificate gratuite",
            "Backup automat zilnic"
        ],
        price: "25 RON/lună",
        icon: Server,
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
        title: "Mentenanță WordPress",
        description: "Administrarea completă și proactivă a site-urilor WordPress",
        category: "Mentenanță",
        features: [
            "Updates automate core/plugins",
            "Monitorizare securitate 24/7",
            "Optimizări performanță",
            "Rapoarte lunare detaliate",
            "Suport prioritar inclus"
        ],
        price: "150 RON/lună",
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
        title: "Monitorizare & Alertă",
        description: "Monitorizarea continuă și alertă instantanee pentru probleme",
        category: "Monitoring",
        features: [
            "Monitoring uptime 24/7",
            "Alertă instant SMS/email",
            "Rapoarte performanță",
            "Monitoring viteze încărcare",
            "Dashboard personalizat"
        ],
        price: "50 RON/lună",
        icon: Activity,
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
        title: "Backup & Recovery",
        description: "Soluții complete de backup automat și recovery rapid",
        category: "Backup",
        features: [
            "Backup automat zilnic",
            "Retenție 30 zile backup",
            "Recovery în 1-click",
            "Backup off-site securizat",
            "Testing backup lunar"
        ],
        price: "75 RON/lună",
        icon: Database,
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
        title: "Securitate Avansată",
        description: "Protecție completă împotriva malware și atacurilor",
        category: "Securitate",
        features: [
            "Firewall aplicație web",
            "Scanare malware zilnică",
            "Curățare infecții gratuit",
            "Monitorizare încercări hack",
            "Rapoarte securitate lunare"
        ],
        price: "100 RON/lună",
        icon: Shield,
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
        title: "Optimizare Performanță",
        description: "Servicii specializate pentru viteze de încărcare ultra-rapide",
        category: "Performance",
        features: [
            "Optimizare imagini automat",
            "Caching avansat multi-layer",
            "Minificare CSS/JS",
            "Lazy loading implementat",
            "Core Web Vitals optimization"
        ],
        price: "120 RON/lună",
        icon: Zap,
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

// Data pentru features
const features = [
    {
        title: "SSD NVMe",
        description: "Stocare ultra-rapidă pentru performanță maximă",
        icon: HardDrive,
        iconBg: "bg-agency-blue-light",
        iconColor: "text-agency-blue"
    },
    {
        title: "SSL Gratuit",
        description: "Certificate SSL Let's Encrypt gratuite și auto-renew",
        icon: Lock,
        iconBg: "bg-success-light",
        iconColor: "text-success"
    },
    {
        title: "CDN Global",
        description: "Rețea globală de distribuție pentru viteze rapide",
        icon: Globe,
        iconBg: "bg-agency-accent-light",
        iconColor: "text-agency-accent"
    },
    {
        title: "Backup Zilnic",
        description: "Backup automat cu retenție 30 zile",
        icon: CloudUpload,
        iconBg: "bg-warning-light",
        iconColor: "text-warning"
    },
    {
        title: "Monitoring 24/7",
        description: "Supraveghere continuă și alertă instantanee",
        icon: Eye,
        iconBg: "bg-error-light",
        iconColor: "text-error"
    },
    {
        title: "PHP 8.2+",
        description: "Ultimele versiuni PHP pentru securitate și performanță",
        icon: Settings,
        iconBg: "bg-agency-gray-light",
        iconColor: "text-agency-gray"
    },
    {
        title: "Email Inclus",
        description: "Conturi email profesionale cu antispam",
        icon: Mail,
        iconBg: "bg-agency-blue-light",
        iconColor: "text-agency-blue"
    },
    {
        title: "Suport Expert",
        description: "Suport tehnic de la experți WordPress",
        icon: Users,
        iconBg: "bg-success-light",
        iconColor: "text-success"
    }
]

// Data pentru planuri hosting
const hostingPlans = [
    {
        name: "Starter",
        description: "Perfect pentru site-uri mici și blog-uri",
        price: "25 RON",
        period: "lunar",
        specs: {
            storage: "10 GB SSD",
            bandwidth: "100 GB",
            websites: "1 site",
            emails: "5 conturi"
        },
        features: [
            "SSL certificate gratuit",
            "Backup automat zilnic",
            "cPanel inclus",
            "WordPress pre-instalat",
            "Suport email",
            "Uptime 99.9%"
        ],
        cta: "Începe Acum",
        note: "Ideal pentru începători",
        featured: false
    },
    {
        name: "Business",
        description: "Soluția completă pentru afaceri în creștere",
        price: "75 RON",
        period: "lunar",
        specs: {
            storage: "50 GB SSD",
            bandwidth: "Nelimitat",
            websites: "5 site-uri",
            emails: "25 conturi"
        },
        features: [
            "Toate din planul Starter",
            "CDN gratuit inclus",
            "Staging environment",
            "Daily malware scan",
            "Suport prioritar telefonic",
            "WordPress management",
            "Performance optimization",
            "Database optimization"
        ],
        cta: "Cea Mai Bună Alegere",
        note: "Cel mai popular plan",
        featured: true
    },
    {
        name: "Enterprise",
        description: "Pentru site-uri cu trafic mare și cerințe speciale",
        price: "200 RON",
        period: "lunar",
        specs: {
            storage: "200 GB SSD",
            bandwidth: "Nelimitat",
            websites: "Nelimitate",
            emails: "100 conturi"
        },
        features: [
            "Toate din planul Business",
            "Dedicated IP address",
            "Advanced security suite",
            "Custom PHP configurations",
            "Priority support 24/7",
            "White-label reseller",
            "Custom backup solutions",
            "Dedicated account manager"
        ],
        cta: "Soluție Enterprise",
        note: "Pentru volume mari de trafic",
        featured: false
    }
]

// Data pentru mentenanță
const maintenanceFeatures = [
    {
        title: "Updates Automate",
        description: "Actualizăm automat WordPress core, plugins și teme pentru securitate maximă",
        icon: RefreshCw,
        iconBg: "bg-agency-blue-light",
        iconColor: "text-agency-blue"
    },
    {
        title: "Monitorizare Securitate",
        description: "Scanare zilnică pentru malware și vulnerabilități cu remediere imediată",
        icon: Shield,
        iconBg: "bg-success-light",
        iconColor: "text-success"
    },
    {
        title: "Optimizări Performanță",
        description: "Optimizarea continuă pentru viteze de încărcare și experiență utilizator",
        icon: Zap,
        iconBg: "bg-warning-light",
        iconColor: "text-warning"
    },
    {
        title: "Rapoarte Lunare",
        description: "Rapoarte detaliate cu metrici de performanță și securitate",
        icon: BarChart3,
        iconBg: "bg-agency-accent-light",
        iconColor: "text-agency-accent"
    }
]

// Data pentru planuri mentenanță
const maintenancePlans = [
    {
        name: "Essential",
        description: "Mentenanță de bază pentru site-uri simple",
        price: "100 RON",
        features: ["Updates lunare", "Backup săptămânal", "Monitorizare uptime", "Suport email"],
        featured: false
    },
    {
        name: "Professional",
        description: "Mentenanță completă pentru afaceri",
        price: "200 RON",
        features: ["Updates automate", "Backup zilnic", "Scanare securitate", "Optimizări", "Suport prioritar", "Rapoarte lunare"],
        featured: true
    },
    {
        name: "Enterprise",
        description: "Servicii premium pentru site-uri critice",
        price: "400 RON",
        features: ["Toate din Professional", "Monitoring 24/7", "Dedicated manager", "Custom optimizations", "Emergency support"],
        featured: false
    }
]

// Data pentru suport
const supportChannels = [
    {
        title: "Email Support",
        description: "Suport detaliat prin email pentru toate problemele",
        contact: "support@agencypro.ro",
        responseTime: "< 2 ore",
        availability: "24/7",
        icon: Mail,
        iconBg: "bg-agency-blue-light",
        iconColor: "text-agency-blue",
        badgeColor: "bg-agency-blue text-white"
    },
    {
        title: "Telefon",
        description: "Suport telefonic direct pentru urgențe",
        contact: "+40 123 456 789",
        responseTime: "Imediat",
        availability: "Luni-Vineri 9-18",
        icon: Phone,
        iconBg: "bg-success-light",
        iconColor: "text-success",
        badgeColor: "bg-success text-white"
    },
    {
        title: "Chat Live",
        description: "Chat în timp real pentru rezolvări rapide",
        contact: "agencypro.ro/chat",
        responseTime: "< 5 minute",
        availability: "Luni-Vineri 9-18",
        icon: MessageSquare,
        iconBg: "bg-agency-accent-light",
        iconColor: "text-agency-accent",
        badgeColor: "bg-agency-accent text-agency-gray-dark"
    }
]