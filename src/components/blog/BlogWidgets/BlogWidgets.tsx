// src/components/blog/BlogWidgets/BlogWidgets.tsx
import { Typography } from '@/components/core'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Calendar,
    Clock,
    TrendingUp,
    BookOpen,
    Star,
    ArrowRight,
    Tag,
    User,
    Eye,
    MessageSquare,
    Share2
} from 'lucide-react'
import Link from 'next/link'

// Recent Articles Widget
interface RecentArticle {
    title: string
    slug: string
    publishDate: string
    readTime: string
    category: string
    categoryColor: string
}

const recentArticles: RecentArticle[] = [
    {
        title: "Ghidul Complet: Cum să Creezi un Magazin Online de Succes în 2024",
        slug: "ghid-magazin-online-succes-2024",
        publishDate: "15 Dec 2024",
        readTime: "8 min",
        category: "E-commerce",
        categoryColor: "bg-success text-white"
    },
    {
        title: "10 Strategii de Marketing Digital Care Funcționează în România",
        slug: "strategii-marketing-digital-romania",
        publishDate: "12 Dec 2024",
        readTime: "6 min",
        category: "Marketing",
        categoryColor: "bg-agency-accent text-agency-gray-dark"
    },
    {
        title: "Cum să Optimizezi Site-ul pentru Core Web Vitals în 2024",
        slug: "optimizare-core-web-vitals-2024",
        publishDate: "10 Dec 2024",
        readTime: "5 min",
        category: "SEO",
        categoryColor: "bg-warning text-agency-gray-dark"
    },
    {
        title: "Facebook Ads vs Google Ads: Care Este Mai Eficient?",
        slug: "facebook-ads-vs-google-ads-comparatie",
        publishDate: "8 Dec 2024",
        readTime: "7 min",
        category: "Marketing",
        categoryColor: "bg-agency-accent text-agency-gray-dark"
    }
]

export function RecentArticlesWidget() {
    return (
        <Card className="border-agency-blue-light">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-agency-blue" />
                    <CardTitle className="text-lg text-agency-blue-dark">
                        Articole Recente
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {recentArticles.map((article, index) => (
                    <div key={index} className="group">
                        <Link href={`/blog/${article.slug}`}>
                            <div className="space-y-2 p-3 rounded-lg hover:bg-agency-gray-light transition-colors">
                                <Badge variant="secondary" className={`${article.categoryColor} text-xs`}>
                                    {article.category}
                                </Badge>
                                <Typography variant="body" className="font-medium text-agency-blue-dark group-hover:text-agency-blue transition-colors line-clamp-2">
                                    {article.title}
                                </Typography>
                                <div className="flex items-center gap-3 text-xs text-agency-gray">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {article.publishDate}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {article.readTime}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}

                <div className="pt-4 border-t">
                    <Link href="/blog">
                        <Button variant="outline" className="w-full border-agency-blue text-agency-blue hover:bg-agency-blue hover:text-white">
                            Vezi Toate Articolele
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}

// Popular Articles Widget
interface PopularArticle {
    title: string
    slug: string
    views: string
    category: string
    categoryColor: string
    readTime: string
}

const popularArticles: PopularArticle[] = [
    {
        title: "Ghidul Complet: Cum să Creezi un Magazin Online de Succes în 2024",
        slug: "ghid-magazin-online-succes-2024",
        views: "2.4k",
        category: "E-commerce",
        categoryColor: "bg-success text-white",
        readTime: "8 min"
    },
    {
        title: "10 Strategii de Marketing Digital Care Funcționează în România",
        slug: "strategii-marketing-digital-romania",
        views: "1.8k",
        category: "Marketing",
        categoryColor: "bg-agency-accent text-agency-gray-dark",
        readTime: "6 min"
    },
    {
        title: "WordPress Security: Ghidul Complet pentru Începători",
        slug: "wordpress-security-ghid-incepatori",
        views: "1.5k",
        category: "Dezvoltare",
        categoryColor: "bg-agency-gray text-white",
        readTime: "9 min"
    }
]

export function PopularArticlesWidget() {
    return (
        <Card className="border-agency-accent-light">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-agency-accent" />
                    <CardTitle className="text-lg text-agency-blue-dark">
                        Cele Mai Populare
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {popularArticles.map((article, index) => (
                    <div key={index} className="group">
                        <Link href={`/blog/${article.slug}`}>
                            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-agency-gray-light transition-colors">
                                <div className="w-8 h-8 bg-agency-accent rounded-lg flex items-center justify-center flex-shrink-0 text-agency-gray-dark font-bold text-sm">
                                    {index + 1}
                                </div>
                                <div className="flex-1 space-y-2">
                                    <Badge variant="secondary" className={`${article.categoryColor} text-xs`}>
                                        {article.category}
                                    </Badge>
                                    <Typography variant="body" className="font-medium text-agency-blue-dark group-hover:text-agency-blue transition-colors line-clamp-2">
                                        {article.title}
                                    </Typography>
                                    <div className="flex items-center gap-3 text-xs text-agency-gray">
                                        <div className="flex items-center gap-1">
                                            <Eye className="w-3 h-3" />
                                            {article.views}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {article.readTime}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

// Categories Widget
interface BlogCategory {
    name: string
    slug: string
    count: number
    color: string
    bgColor: string
}

const blogCategories: BlogCategory[] = [
    { name: "E-commerce", slug: "ecommerce", count: 23, color: "text-success", bgColor: "bg-success-light" },
    { name: "Marketing Digital", slug: "marketing-digital", count: 20, color: "text-agency-accent", bgColor: "bg-agency-accent-light" },
    { name: "Web Design", slug: "web-design", count: 15, color: "text-agency-blue", bgColor: "bg-agency-blue-light" },
    { name: "SEO & Analytics", slug: "seo-analytics", count: 10, color: "text-warning", bgColor: "bg-warning-light" },
    { name: "Dezvoltare Web", slug: "dezvoltare-web", count: 12, color: "text-agency-gray", bgColor: "bg-agency-gray-light" },
    { name: "Business Digital", slug: "business-digital", count: 14, color: "text-error", bgColor: "bg-error-light" }
]

export function CategoriesWidget() {
    return (
        <Card className="border-warning-light">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Tag className="w-5 h-5 text-warning" />
                    <CardTitle className="text-lg text-agency-blue-dark">
                        Categorii
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                {blogCategories.map((category, index) => (
                    <Link key={index} href={`/blog/categorie/${category.slug}`}>
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-agency-gray-light transition-colors group">
                            <div className="flex items-center gap-3">
                                <div className={`w-3 h-3 ${category.bgColor} rounded-full`}></div>
                                <Typography variant="body" className={`font-medium ${category.color} group-hover:underline`}>
                                    {category.name}
                                </Typography>
                            </div>
                            <Badge variant="outline" className="text-xs">
                                {category.count}
                            </Badge>
                        </div>
                    </Link>
                ))}
            </CardContent>
        </Card>
    )
}

// Newsletter Widget
export function NewsletterWidget() {
    return (
        <Card className="bg-gradient-to-br from-agency-blue to-agency-blue-dark text-white border-0">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-agency-accent" />
                    <CardTitle className="text-lg text-white">
                        Newsletter
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <Typography variant="body" className="text-white/90">
                    Primește săptămânal cele mai noi articole și insights direct în inbox.
                </Typography>

                <div className="space-y-3">
                    <input
                        type="email"
                        placeholder="Email-ul tău"
                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-agency-accent"
                    />
                    <Button className="w-full bg-agency-accent text-agency-gray-dark hover:bg-agency-accent-dark">
                        Abonează-te
                    </Button>
                </div>

                <Typography variant="small" className="text-white/70 text-center">
                    📧 Fără spam. Dezabonare oricând.
                </Typography>
            </CardContent>
        </Card>
    )
}

// Tags Widget
const popularTags = [
    "WordPress", "E-commerce", "SEO", "Marketing", "Conversii", "Google Ads",
    "Facebook Ads", "Web Design", "UX/UI", "Analytics", "Email Marketing",
    "Content Strategy", "Social Media", "Branding", "Shopify", "WooCommerce"
]

export function TagsWidget() {
    return (
        <Card className="border-error-light">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-error" />
                    <CardTitle className="text-lg text-agency-blue-dark">
                        Tag-uri Populare
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                        <Link key={index} href={`/blog?tag=${tag.toLowerCase()}`}>
                            <Badge
                                variant="outline"
                                className="hover:bg-agency-blue hover:text-white transition-colors cursor-pointer text-xs"
                            >
                                {tag}
                            </Badge>
                        </Link>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

// Social Share Widget
export function SocialShareWidget() {
    return (
        <Card className="border-agency-accent-light">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-agency-accent" />
                    <CardTitle className="text-lg text-agency-blue-dark">
                        Urmărește-ne
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="border-[#1877f2] text-[#1877f2] hover:bg-[#1877f2] hover:text-white">
                        Facebook
                    </Button>
                    <Button variant="outline" className="border-[#E4405F] text-[#E4405F] hover:bg-[#E4405F] hover:text-white">
                        Instagram
                    </Button>
                    <Button variant="outline" className="border-[#0077b5] text-[#0077b5] hover:bg-[#0077b5] hover:text-white">
                        LinkedIn
                    </Button>
                    <Button variant="outline" className="border-[#1da1f2] text-[#1da1f2] hover:bg-[#1da1f2] hover:text-white">
                        Twitter
                    </Button>
                </div>

                <Typography variant="small" className="text-agency-gray text-center">
                    Conectează-te cu noi pentru cele mai noi updates!
                </Typography>
            </CardContent>
        </Card>
    )
}

// Author Bio Widget
interface AuthorInfo {
    name: string
    bio: string
    articles: number
    avatar: string
}

const author: AuthorInfo = {
    name: "Alex Popescu",
    bio: "Expert în dezvoltare e-commerce cu peste 8 ani de experiență în crearea magazinelor online de succes.",
    articles: 15,
    avatar: "bg-agency-blue"
}

export function AuthorWidget() {
    return (
        <Card className="border-success-light">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-success" />
                    <CardTitle className="text-lg text-agency-blue-dark">
                        Despre Autor
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 ${author.avatar} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <Typography variant="h6" className="text-agency-blue-dark mb-1">
                            {author.name}
                        </Typography>
                        <Typography variant="small" className="text-agency-gray">
                            {author.articles} articole publicate
                        </Typography>
                    </div>
                </div>

                <Typography variant="body" className="text-agency-gray">
                    {author.bio}
                </Typography>

                <Button variant="outline" className="w-full border-success text-success hover:bg-success hover:text-white">
                    Vezi Toate Articolele
                </Button>
            </CardContent>
        </Card>
    )
}