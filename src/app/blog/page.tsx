// src/app/blog/page.tsx - Blog Index Updated
import { Layout } from '@/components/layout'
import { Typography, Section } from '@/components/core'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'
import {
    getFeaturedArticles,
    getRecentArticles,
    blogCategories
} from '@/data/articles'

export default function BlogPage() {
    // Obține articolele din baza de date
    const featuredArticles = getFeaturedArticles()
    const recentArticles = getRecentArticles(6)

    return (
        <Layout>
            {/* Hero Section */}
            <Section spacing="xl" className="bg-gradient-to-br from-agency-blue-light via-white to-agency-accent-light">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge className="bg-agency-blue text-white mb-6">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Blog & Resurse
                    </Badge>

                    <Typography variant="h1" className="text-agency-blue-dark">
                        Insights & Ghiduri
                        <span className="text-agency-accent"> Digitale</span>
                    </Typography>

                    <Typography variant="lead" className="mt-6 text-agency-gray max-w-3xl mx-auto">
                        Descoperă cele mai noi tendințe în web design, marketing digital și business online.
                        Învață din experiența noastră și aplică strategiile de succes în afacerea ta.
                    </Typography>
                </div>
            </Section>

            {/* Featured Articles */}
            <Section spacing="lg">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Articole Recomandate
                    </Typography>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {featuredArticles.map((article) => (
                        <Card key={article.id} className="hover:shadow-xl transition-all duration-500 border-0 shadow-md group">
                            <div className={`h-48 ${article.imageColor} relative overflow-hidden rounded-t-lg`}>
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-white/90 text-agency-gray-dark">
                                        {blogCategories.find(cat => cat.slug === article.category)?.name}
                                    </Badge>
                                </div>
                            </div>

                            <CardHeader>
                                <CardTitle className="text-agency-blue-dark group-hover:text-agency-blue transition-colors">
                                    <Link href={`/blog/${article.slug}`}>
                                        {article.title}
                                    </Link>
                                </CardTitle>
                                <Typography variant="body" className="text-agency-gray">
                                    {article.excerpt}
                                </Typography>
                            </CardHeader>

                            <CardContent>
                                <div className="flex items-center justify-between text-sm text-agency-gray mb-4">
                                    <span>{article.author.name}</span>
                                    <span>{new Date(article.publishDate).toLocaleDateString('ro-RO')}</span>
                                    <span>{article.readTime}</span>
                                </div>

                                <Link href={`/blog/${article.slug}`}>
                                    <Button className="w-full bg-agency-blue text-white hover:bg-agency-blue-dark">
                                        Citește Articolul
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Categories */}
            <Section spacing="lg" className="bg-agency-gray-light">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Categorii Blog
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogCategories.map((category, index) => (
                        <Link key={index} href={`/blog/categorie/${category.slug}`}>
                            <Card className="text-center hover:shadow-xl transition-all duration-500 border-0 shadow-md group h-full">
                                <CardHeader>
                                    <CardTitle className="text-agency-blue-dark group-hover:text-agency-blue transition-colors">
                                        {category.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between items-center">
                                        <Typography variant="small" className="text-agency-gray">
                                            {category.count} articole
                                        </Typography>
                                        <ArrowRight className="w-4 h-4 text-agency-accent group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Section>

            {/* Recent Articles */}
            <Section spacing="lg">
                <div className="text-center mb-16">
                    <Typography variant="h2" className="text-agency-blue-dark">
                        Articole Recente
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentArticles.map((article) => (
                        <Card key={article.id} className="hover:shadow-xl transition-all duration-500 border-0 shadow-md group">
                            <div className={`h-32 ${article.imageColor} relative overflow-hidden rounded-t-lg`}>
                                <div className="absolute top-3 left-3">
                                    <Badge variant="secondary">
                                        {blogCategories.find(cat => cat.slug === article.category)?.name}
                                    </Badge>
                                </div>
                            </div>

                            <CardHeader>
                                <CardTitle className="text-lg text-agency-blue-dark group-hover:text-agency-blue transition-colors line-clamp-2">
                                    <Link href={`/blog/${article.slug}`}>
                                        {article.title}
                                    </Link>
                                </CardTitle>
                                <Typography variant="body" className="text-agency-gray line-clamp-3">
                                    {article.excerpt}
                                </Typography>
                            </CardHeader>

                            <CardContent>
                                <div className="flex items-center justify-between text-sm text-agency-gray mb-4">
                                    <span>{new Date(article.publishDate).toLocaleDateString('ro-RO')}</span>
                                    <span>{article.readTime}</span>
                                </div>

                                <Link href={`/blog/${article.slug}`}>
                                    <Button variant="outline" className="w-full border-agency-blue text-agency-blue hover:bg-agency-blue hover:text-white">
                                        Citește
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>
        </Layout>
    )
}


