// src/app/blog/categorie/[category]/page.tsx - FIXED VERSION
import { Metadata } from 'next'
import { notFound } from 'next/navigation' // ← IMPORT OBLIGATORIU
import { Layout } from '@/components/layout'
import { Typography, Section } from '@/components/core'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    ShoppingCart,
    TrendingUp,
    Palette,
    Target,
    Code2,
    Building,
    ArrowRight,
    Calendar,
    Clock,
    User
} from 'lucide-react'
import Link from 'next/link'

// Definește categoriile valide cu toate detaliile necesare
const validCategories = {
    'ecommerce': {
        name: 'E-commerce',
        description: 'Ghiduri și strategii pentru crearea și optimizarea magazinelor online de succes. De la alegerea platformei până la maximizarea conversiilor.',
        icon: ShoppingCart,
        color: 'success',
        bgColor: 'bg-success-light',
        iconBg: 'bg-success',
        iconColor: 'text-white'
    },
    'marketing-digital': {
        name: 'Marketing Digital',
        description: 'Strategii și tactici de marketing online pentru creșterea afacerii. Google Ads, Facebook Ads, email marketing și mult mai mult.',
        icon: TrendingUp,
        color: 'agency-accent',
        bgColor: 'bg-agency-accent-light',
        iconBg: 'bg-agency-accent',
        iconColor: 'text-agency-gray-dark'
    },
    'web-design': {
        name: 'Web Design',
        description: 'Tendințe și ghiduri pentru design web modern și funcțional. UI/UX, tipografie, culori și experiența utilizatorului.',
        icon: Palette,
        color: 'agency-blue',
        bgColor: 'bg-agency-blue-light',
        iconBg: 'bg-agency-blue',
        iconColor: 'text-white'
    },
    'seo-analytics': {
        name: 'SEO & Analytics',
        description: 'Optimizare pentru motoarele de căutare și analiză performanță. Strategii SEO, Google Analytics și instrumente de măsurare.',
        icon: Target,
        color: 'warning',
        bgColor: 'bg-warning-light',
        iconBg: 'bg-warning',
        iconColor: 'text-agency-gray-dark'
    },
    'dezvoltare-web': {
        name: 'Dezvoltare Web',
        description: 'Tips tehnice și best practices pentru dezvoltatori. WordPress, performance, securitate și tehnologii moderne.',
        icon: Code2,
        color: 'agency-gray',
        bgColor: 'bg-agency-gray-light',
        iconBg: 'bg-agency-gray',
        iconColor: 'text-white'
    },
    'business-digital': {
        name: 'Business Digital',
        description: 'Strategii pentru transformarea și creșterea business-ului digital. Automatizare, tools și procese optimizate.',
        icon: Building,
        color: 'error',
        bgColor: 'bg-error-light',
        iconBg: 'bg-error',
        iconColor: 'text-white'
    }
} as const

// Simularea articolelor pentru fiecare categorie
const getArticlesForCategory = (category: string) => {
    const allArticles = {
        'ecommerce': [
            {
                id: "1",
                title: "Ghidul Complet: Cum să Creezi un Magazin Online de Succes în 2024",
                excerpt: "Descoperă pașii esențiali pentru a lansa un magazin online profitabil, de la alegerea platformei până la optimizarea conversiilor.",
                slug: "ghid-magazin-online-succes-2024",
                author: "Alex Popescu",
                publishDate: "2024-12-15",
                readTime: "8 min",
                tags: ["E-commerce", "Shopify", "WooCommerce"],
                featured: true,
                views: "2.4k",
                imageColor: "bg-gradient-to-br from-success to-success-light"
            },
            {
                id: "2",
                title: "Shopify vs WooCommerce: Care Este Cea Mai Bună Platformă?",
                excerpt: "Comparație detaliată între cele două platforme principale pentru e-commerce, cu avantaje și dezavantaje.",
                slug: "shopify-vs-woocommerce-comparatie",
                author: "Maria Ionescu",
                publishDate: "2024-12-12",
                readTime: "6 min",
                tags: ["Shopify", "WooCommerce", "Platforme"],
                featured: false,
                views: "1.8k",
                imageColor: "bg-gradient-to-br from-agency-blue to-agency-blue-light"
            }
        ],
        'marketing-digital': [
            {
                id: "3",
                title: "10 Strategii de Marketing Digital Care Funcționează în România",
                excerpt: "Strategii testate și optimizate specific pentru piața românească. Rezultate măsurabile garantate.",
                slug: "strategii-marketing-digital-romania",
                author: "Răzvan Dobre",
                publishDate: "2024-12-10",
                readTime: "7 min",
                tags: ["Marketing Digital", "Google Ads", "România"],
                featured: true,
                views: "3.2k",
                imageColor: "bg-gradient-to-br from-agency-accent to-warning"
            }
        ],
        'web-design': [
            {
                id: "4",
                title: "Tendințe Web Design 2024: Ce Trebuie Să Știi",
                excerpt: "Explorează cele mai importante tendințe în design web pentru 2024. De la minimalism la micro-interacțiuni.",
                slug: "tendinte-web-design-2024",
                author: "Diana Varga",
                publishDate: "2024-12-08",
                readTime: "5 min",
                tags: ["Web Design", "UI/UX", "Tendințe 2024"],
                featured: false,
                views: "1.5k",
                imageColor: "bg-gradient-to-br from-agency-blue to-agency-blue-light"
            }
        ],
        'seo-analytics': [],
        'dezvoltare-web': [],
        'business-digital': []
    }

    return allArticles[category as keyof typeof allArticles] || []
}

// Props pentru componenta de pagină
interface CategoryPageProps {
    params: {
        category: string
    }
    searchParams?: {
        page?: string
        sort?: string
    }
}

// Generare metadata dinamică
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const categoryData = validCategories[params.category as keyof typeof validCategories]

    if (!categoryData) {
        return {
            title: 'Categoria nu a fost găsită | AgencyPro Blog'
        }
    }

    return {
        title: `${categoryData.name} | AgencyPro Blog - Articole și Ghiduri`,
        description: categoryData.description,
        keywords: `${categoryData.name.toLowerCase()}, articole ${categoryData.name.toLowerCase()}, ghiduri, AgencyPro blog`,
        openGraph: {
            title: `Articole ${categoryData.name} | AgencyPro Blog`,
            description: categoryData.description,
            type: 'website',
            locale: 'ro_RO',
        }
    }
}

// Componenta principală - TREBUIE să fie export default
export default function CategoryPage({ params }: CategoryPageProps) {
    // Verifică dacă categoria există
    const categoryData = validCategories[params.category as keyof typeof validCategories]

    if (!categoryData) {
        notFound() // Acum funcționează corect
    }

    // Obține articolele pentru categoria respectivă
    const categoryArticles = getArticlesForCategory(params.category)

    return (
        <Layout>
            {/* Header Categorie */}
            <Section spacing="lg" className={`relative ${categoryData.bgColor} overflow-hidden`}>
                <div className="absolute top-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-bounce"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <div className="flex items-center justify-center space-x-2 text-sm">
                            <Link href="/" className="text-agency-gray hover:text-agency-blue-dark">
                                Acasă
                            </Link>
                            <span className="text-agency-gray">/</span>
                            <Link href="/blog" className="text-agency-gray hover:text-agency-blue-dark">
                                Blog
                            </Link>
                            <span className="text-agency-gray">/</span>
                            <span className="text-agency-gray-dark font-medium">{categoryData.name}</span>
                        </div>
                    </nav>

                    {/* Info Categorie */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className={`w-16 h-16 ${categoryData.iconBg} rounded-2xl flex items-center justify-center`}>
                            <categoryData.icon className={`w-8 h-8 ${categoryData.iconColor}`} />
                        </div>
                        <div className="text-left">
                            <Typography variant="h1" className="text-agency-gray-dark">
                                {categoryData.name}
                            </Typography>
                            <Typography variant="body" className="text-agency-gray">
                                {categoryArticles.length} articole
                            </Typography>
                        </div>
                    </div>

                    <Typography variant="lead" className="text-agency-gray max-w-3xl mx-auto">
                        {categoryData.description}
                    </Typography>
                </div>
            </Section>

            {/* Articole din Categorie */}
            <Section spacing="lg">
                {categoryArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categoryArticles.map((article) => (
                            <Card key={article.id} className="hover:shadow-xl transition-all duration-500 border-0 shadow-md group">
                                <div className={`h-32 ${article.imageColor} relative overflow-hidden rounded-t-lg`}>
                                    <div className="absolute top-3 left-3">
                                        <Badge className={`bg-${categoryData.color} text-white`}>
                                            {categoryData.name}
                                        </Badge>
                                    </div>
                                    {article.featured && (
                                        <div className="absolute top-3 right-3">
                                            <Badge className="bg-white/90 text-agency-gray-dark">
                                                Recomandat
                                            </Badge>
                                        </div>
                                    )}
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-lg text-agency-blue-dark group-hover:text-agency-blue transition-colors">
                                        <Link href={`/blog/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                    </CardTitle>
                                    <Typography variant="body" className="text-agency-gray line-clamp-3">
                                        {article.excerpt}
                                    </Typography>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {article.tags.slice(0, 2).map((tag, index) => (
                                            <Badge key={index} className="text-xs border border-gray-300 bg-white text-agency-gray-dark">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between text-sm text-agency-gray mb-4">
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {article.author}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(article.publishDate).toLocaleDateString('ro-RO')}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {article.readTime}
                                        </div>
                                    </div>

                                    <Link href={`/blog/${article.slug}`}>
                                        <Button className={`w-full bg-${categoryData.color} text-white hover:bg-${categoryData.color}/90`}>
                                            Citește Articolul
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    // Empty State când nu sunt articole
                    <div className="text-center py-16">
                        <div className={`w-24 h-24 ${categoryData.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                            <categoryData.icon className={`w-12 h-12 ${categoryData.iconColor}`} />
                        </div>

                        <Typography variant="h3" className="text-agency-blue-dark mb-4">
                            În Curând Articole {categoryData.name}
                        </Typography>

                        <Typography variant="body" className="text-agency-gray mb-8 max-w-2xl mx-auto">
                            Această categorie este în dezvoltare. Urmărește blog-ul pentru a fi primul care citește
                            noile articole despre {categoryData.name.toLowerCase()}.
                        </Typography>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/blog">
                                <Button className="bg-agency-blue text-white hover:bg-agency-blue-dark">
                                    Explorează Toate Articolele
                                </Button>
                            </Link>
                            <Button
                                variant="outline"
                                className="border-agency-gray text-agency-gray hover:bg-agency-gray hover:text-white"
                            >
                                Abonează-te la Newsletter
                            </Button>
                        </div>
                    </div>
                )}
            </Section>

            {/* Newsletter CTA */}
            <Section spacing="lg" className={`bg-gradient-to-r from-${categoryData.color} to-${categoryData.color}/80`}>
                <div className="text-center max-w-4xl mx-auto">
                    <Typography variant="h2" className="text-white">
                        Rămâi la curent cu noutățile {categoryData.name}
                    </Typography>

                    <Typography variant="lead" className="mt-6 text-white/90 max-w-2xl mx-auto">
                        Primești săptămânal cele mai noi strategii și insights pentru {categoryData.name.toLowerCase()}.
                        Fii primul care află despre tendințele din domeniu.
                    </Typography>

                    <div className="mt-10 max-w-md mx-auto">
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Email-ul tău"
                                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                            <Button className="bg-white text-agency-gray-dark hover:bg-white/90">
                                Abonează-te
                            </Button>
                        </div>
                        <Typography variant="small" className="text-white/80 mt-3">
                            📧 Tips exclusivi pentru {categoryData.name.toLowerCase()}. Fără spam. Dezabonare oricând.
                        </Typography>
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

// Generare rute statice pentru categorii (opțional, pentru performanță)
export async function generateStaticParams() {
    return Object.keys(validCategories).map((category) => ({
        category: category,
    }))
}