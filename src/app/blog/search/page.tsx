// src/app/blog/search/page.tsx - Blog Search Results Page
import { Metadata } from 'next'
import { Layout } from '@/components/layout'
import { Typography, Section } from '@/components/core'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    Search,
    Filter,
    Calendar,
    Clock,
    User,
    ArrowRight,
    X,
    AlertCircle,
    Lightbulb,
    TrendingUp
} from 'lucide-react'
import Link from 'next/link'
import {
    PopularArticlesWidget,
    CategoriesWidget,
} from '@/components/blog/BlogWidgets/BlogWidgets'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Căutare Blog | AgencyPro - Găsește Articole despre Web Design & Marketing',
    description: 'Caută în colecția noastră de articole despre web design, marketing digital, e-commerce și business online. Găsește exact informațiile de care ai nevoie.',
    keywords: 'căutare blog, articole web design, căutare marketing digital, ghiduri e-commerce, search blog AgencyPro',
    openGraph: {
        title: 'Căutare Blog AgencyPro - Găsește Răspunsuri la Întrebările Tale',
        description: 'Explorează articolele noastre despre web design, marketing digital și business online.',
        type: 'website',
        locale: 'ro_RO',
    }
}

// Simularea rezultatelor căutării
const searchResults = [
    {
        title: "Cum să Creezi un Magazin Online de Succes în 2024",
        excerpt: "Ghid complet pentru lansarea unui magazin online profitabil. Descoperă pașii esențiali pentru a crea un business e-commerce de succes.",
        content: "Descoperă pașii esențiali pentru a lansa un magazin online profitabil, de la alegerea platformei până la optimizarea conversiilor...",
        category: "E-commerce",
        author: "Alex Popescu",
        publishDate: "15 Dec 2024",
        readTime: "8 min",
        slug: "ghid-magazin-online-succes-2024",
        tags: ["E-commerce", "Shopify", "WooCommerce", "Conversii"],
        views: "2.4k",
        relevanceScore: 95,
        imageColor: "bg-gradient-to-br from-success to-success-light",
        categoryColor: "bg-success text-white"
    },
    {
        title: "Shopify vs WooCommerce: Care Este Cea Mai Bună Platformă?",
        excerpt: "Comparație detaliată între cele două platforme principale pentru e-commerce, cu avantaje, dezavantaje și cazuri de utilizare.",
        content: "Alegerea platformei potrivite este crucială pentru succesul magazinului online. În acest articol comparam Shopify și WooCommerce...",
        category: "E-commerce",
        author: "Maria Ionescu",
        publishDate: "12 Dec 2024",
        readTime: "6 min",
        slug: "shopify-vs-woocommerce-comparatie",
        tags: ["Shopify", "WooCommerce", "Platforme E-commerce"],
        views: "1.8k",
        relevanceScore: 88,
        imageColor: "bg-gradient-to-br from-agency-blue to-agency-blue-light",
        categoryColor: "bg-success text-white"
    },
    {
        title: "10 Strategii de Marketing Digital Care Funcționează în România",
        excerpt: "Strategii testate și optimizate specific pentru piața românească. Rezultate măsurabile garantate pentru businessul tău.",
        content: "Marketing-ul digital în România are specificități unice. Descoperă strategiile care funcționează cel mai bine pe piața locală...",
        category: "Marketing Digital",
        author: "Răzvan Dobre",
        publishDate: "10 Dec 2024",
        readTime: "7 min",
        slug: "strategii-marketing-digital-romania",
        tags: ["Marketing Digital", "Google Ads", "Facebook Ads", "România"],
        views: "1.5k",
        relevanceScore: 82,
        imageColor: "bg-gradient-to-br from-agency-accent to-warning",
        categoryColor: "bg-agency-accent text-agency-gray-dark"
    },
    {
        title: "Email Marketing pentru E-commerce: Template-uri și Strategii",
        excerpt: "Cum să construiești campanii de email marketing automatizate care convertesc pentru magazinul online.",
        content: "Email marketing-ul rămâne unul dintre cele mai eficiente canale de marketing pentru e-commerce. Învață să creezi campanii...",
        category: "Marketing Digital",
        author: "Diana Popescu",
        publishDate: "8 Dec 2024",
        readTime: "9 min",
        slug: "email-marketing-ecommerce-template",
        tags: ["Email Marketing", "E-commerce", "Automatizare", "Templates"],
        views: "1.2k",
        relevanceScore: 79,
        imageColor: "bg-gradient-to-br from-error to-error-light",
        categoryColor: "bg-agency-accent text-agency-gray-dark"
    },
    {
        title: "SEO pentru Magazine Online: Ghidul Complet",
        excerpt: "Strategii SEO specifice pentru e-commerce: optimizarea produselor, categoriilor și structurii site-ului.",
        content: "SEO-ul pentru magazine online are specificități unice comparativ cu site-urile obișnuite. Descoperă tehnicile avansate...",
        category: "SEO",
        author: "Cristina Varga",
        publishDate: "5 Dec 2024",
        readTime: "11 min",
        slug: "seo-magazine-online-ghid",
        tags: ["SEO", "E-commerce", "Optimizare", "Google"],
        views: "980",
        relevanceScore: 75,
        imageColor: "bg-gradient-to-br from-warning to-warning-light",
        categoryColor: "bg-warning text-agency-gray-dark"
    }
]

const appliedFilters = [
    { type: "category", value: "E-commerce", label: "E-commerce" },
    { type: "tag", value: "shopify", label: "Shopify" }
]

const suggestedSearches = [
    "marketing digital romania",
    "optimizare conversii",
    "google ads romania",
    "wordpress security",
    "facebook ads tips"
]

export default function BlogSearchPage() {
    const searchQuery = "magazin online" // În realitate ar veni din URL params
    const resultCount = searchResults.length
    const searchTime = "0.23"

    return (
        <Layout>
            {/* Search Header */}
            <Section spacing="lg" className="bg-gradient-to-r from-agency-blue-light to-white">
                <div className="max-w-6xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <div className="flex items-center space-x-2 text-sm">
                            <Link href="/" className="text-agency-gray hover:text-agency-blue">
                                Acasă
                            </Link>
                            <span className="text-agency-gray">/</span>
                            <Link href="/blog" className="text-agency-gray hover:text-agency-blue">
                                Blog
                            </Link>
                            <span className="text-agency-gray">/</span>
                            <span className="text-agency-blue">Căutare</span>
                        </div>
                    </nav>

                    {/* Search Form */}
                    <div className="mb-8">
                        <Typography variant="h2" className="text-agency-blue-dark mb-6">
                            Căutare în Blog
                        </Typography>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agency-gray w-5 h-5" />
                                <input
                                    type="text"
                                    defaultValue={searchQuery}
                                    placeholder="Caută articole, ghiduri, tips..."
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-agency-blue text-lg"
                                />
                            </div>
                            <Button className="bg-agency-blue text-white hover:bg-agency-blue-dark px-8">
                                <Search className="mr-2 w-5 h-5" />
                                Caută
                            </Button>
                        </div>
                    </div>

                    {/* Search Stats */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div>
                            <Typography variant="body" className="text-agency-gray">
                                <strong>{resultCount} rezultate</strong> găsite pentru "{searchQuery}" în {searchTime} secunde
                            </Typography>
                        </div>

                        <div className="flex items-center gap-3">
                            <Typography variant="small" className="text-agency-gray">
                                Sortează după:
                            </Typography>
                            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-agency-blue text-sm">
                                <option value="relevance">Relevanță</option>
                                <option value="newest">Cel mai recent</option>
                                <option value="oldest">Cel mai vechi</option>
                                <option value="popular">Popularitate</option>
                            </select>
                        </div>
                    </div>

                    {/* Applied Filters */}
                    {appliedFilters.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 mb-6">
                            <Typography variant="small" className="text-agency-gray">
                                Filtre aplicate:
                            </Typography>
                            {appliedFilters.map((filter, index) => (
                                <Badge key={index} variant="secondary" className="bg-agency-blue text-white pr-1">
                                    {filter.label}
                                    <button className="ml-2 hover:bg-white/20 rounded-full p-0.5">
                                        <X className="w-3 h-3" />
                                    </button>
                                </Badge>
                            ))}
                            <Button variant="outline" size="sm" className="text-agency-gray border-agency-gray hover:bg-agency-gray hover:text-white">
                                Șterge toate
                            </Button>
                        </div>
                    )}
                </div>
            </Section>

            {/* Search Results */}
            <Section spacing="lg">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Main Results */}
                        <div className="lg:col-span-3">
                            <div className="space-y-6">
                                {searchResults.map((article, index) => (
                                    <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                                            {/* Article Image */}
                                            <div className="md:col-span-1">
                                                <div className={`h-32 md:h-full ${article.imageColor} relative overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-t-none`}>
                                                    <div className="absolute top-3 left-3">
                                                        <Badge className={article.categoryColor}>
                                                            {article.category}
                                                        </Badge>
                                                    </div>
                                                    <div className="absolute bottom-3 right-3">
                                                        <div className="bg-white/90 px-2 py-1 rounded text-xs font-medium text-agency-gray-dark">
                                                            {article.relevanceScore}% relevant
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Article Content */}
                                            <div className="md:col-span-3 p-6">
                                                <div className="space-y-3">
                                                    {/* Tags */}
                                                    <div className="flex flex-wrap gap-1">
                                                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                                                            <Badge key={tagIndex} variant="outline" className="text-xs">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>

                                                    {/* Title */}
                                                    <Typography variant="h5" className="text-agency-blue-dark hover:text-agency-blue transition-colors">
                                                        <Link href={`/blog/${article.slug}`}>
                                                            {article.title}
                                                        </Link>
                                                    </Typography>

                                                    {/* Excerpt */}
                                                    <Typography variant="body" className="text-agency-gray line-clamp-2">
                                                        {article.excerpt}
                                                    </Typography>

                                                    {/* Meta Info */}
                                                    <div className="flex flex-wrap items-center gap-4 text-sm text-agency-gray">
                                                        <div className="flex items-center gap-1">
                                                            <User className="w-4 h-4" />
                                                            {article.author}
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="w-4 h-4" />
                                                            {article.publishDate}
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="w-4 h-4" />
                                                            {article.readTime}
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <TrendingUp className="w-4 h-4" />
                                                            {article.views} vizualizări
                                                        </div>
                                                    </div>

                                                    {/* Action */}
                                                    <Link href={`/blog/${article.slug}`}>
                                                        <Button variant="outline" className="border-agency-blue text-agency-blue hover:bg-agency-blue hover:text-white">
                                                            Citește Articolul
                                                            <ArrowRight className="ml-2 w-4 h-4" />
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            {/* Load More */}
                            <div className="text-center mt-12">
                                <Button size="lg" className="bg-agency-blue text-white hover:bg-agency-blue-dark">
                                    Încarcă Mai Multe Rezultate
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Search Filters */}
                            <Card className="border-agency-blue-light">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Filter className="w-5 h-5 text-agency-blue" />
                                        <CardTitle className="text-lg text-agency-blue-dark">
                                            Filtrează Rezultatele
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {/* Category Filter */}
                                    <div>
                                        <Typography variant="body" className="font-medium text-agency-gray-dark mb-2">
                                            Categorie
                                        </Typography>
                                        <div className="space-y-2">
                                            {["E-commerce", "Marketing Digital", "Web Design", "SEO", "Business"].map((category) => (
                                                <label key={category} className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        className="rounded border-gray-300 text-agency-blue focus:ring-agency-blue/20"
                                                        defaultChecked={category === "E-commerce"}
                                                    />
                                                    <Typography variant="small" className="text-agency-gray">
                                                        {category}
                                                    </Typography>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Date Range */}
                                    <div>
                                        <Typography variant="body" className="font-medium text-agency-gray-dark mb-2">
                                            Perioada
                                        </Typography>
                                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-agency-blue text-sm">
                                            <option value="all">Oricând</option>
                                            <option value="week">Ultima săptămână</option>
                                            <option value="month">Ultima lună</option>
                                            <option value="year">Ultimul an</option>
                                        </select>
                                    </div>

                                    {/* Reading Time */}
                                    <div>
                                        <Typography variant="body" className="font-medium text-agency-gray-dark mb-2">
                                            Timp de citire
                                        </Typography>
                                        <div className="space-y-2">
                                            {["Sub 5 min", "5-10 min", "Peste 10 min"].map((time) => (
                                                <label key={time} className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        className="rounded border-gray-300 text-agency-blue focus:ring-agency-blue/20"
                                                    />
                                                    <Typography variant="small" className="text-agency-gray">
                                                        {time}
                                                    </Typography>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <Button className="w-full bg-agency-blue text-white hover:bg-agency-blue-dark">
                                        Aplică Filtrele
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Suggested Searches */}
                            <Card className="border-agency-accent-light">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Lightbulb className="w-5 h-5 text-agency-accent" />
                                        <CardTitle className="text-lg text-agency-blue-dark">
                                            Căutări Sugerate
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {suggestedSearches.map((suggestion, index) => (
                                            <Button
                                                key={index}
                                                variant="outline"
                                                size="sm"
                                                className="w-full justify-start text-left border-agency-accent-light text-agency-accent hover:bg-agency-accent-light"
                                            >
                                                <Search className="mr-2 w-3 h-3" />
                                                {suggestion}
                                            </Button>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Popular Articles Widget */}
                            <PopularArticlesWidget />

                            {/* Categories Widget */}
                            <CategoriesWidget />
                        </div>
                    </div>
                </div>
            </Section>

            {/* No Results State (hidden when there are results) */}
            {resultCount === 0 && (
                <Section spacing="lg">
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="w-24 h-24 bg-agency-gray-light rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertCircle className="w-12 h-12 text-agency-gray" />
                        </div>

                        <Typography variant="h3" className="text-agency-blue-dark mb-4">
                            Nu am găsit rezultate pentru "{searchQuery}"
                        </Typography>

                        <Typography variant="body" className="text-agency-gray mb-8">
                            Încearcă să modifici termenii de căutare sau explorează categoriile noastre populare.
                        </Typography>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-agency-blue text-white hover:bg-agency-blue-dark">
                                Explorează Toate Articolele
                            </Button>
                            <Button variant="outline" className="border-agency-gray text-agency-gray hover:bg-agency-gray hover:text-white">
                                Vezi Categoriile
                            </Button>
                        </div>
                    </div>
                </Section>
            )}
        </Layout>
    )
}