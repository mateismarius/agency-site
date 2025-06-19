
// ==================================================
// src/app/blog/[slug]/page.tsx - FIXED VERSION
// ==================================================

import { Section, Typography } from '@/components/core'
import { Card, CardContent } from '@/components/ui/card'
import {Badge, Calendar, Clock, User} from 'lucide-react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from "next/link";
import {Layout} from "@/components/layout"; // ← IMPORT OBLIGATORIU
import { Button } from '@/components/ui/button'

// Simularea bazei de date cu articole
const articlesDB = {
    'ghid-magazin-online-succes-2024': {
        id: "1",
        title: "Ghidul Complet: Cum să Creezi un Magazin Online de Succes în 2024",
        excerpt: "Descoperă pașii esențiali pentru a lansa un magazin online profitabil, de la alegerea platformei până la optimizarea conversiilor.",
        content: `
      <p>Lansarea unui magazin online de succes în 2024 necesită o combinație de strategie, tehnologie și execuție impecabilă. În acest ghid complet, vom acoperi toate aspectele esențiale pentru a crea un business online profitabil.</p>
      
      <h2>1. Planificarea și Cercetarea de Piață</h2>
      <p>Înainte de a începe dezvoltarea tehnică, este crucial să înțelegi piața și să îți definești strategia:</p>
      
      <h3>Analizează Concurența</h3>
      <ul>
        <li>Identifică competitorii direcți și indirecți</li>
        <li>Analizează prețurile, produsele și strategiile lor</li>
        <li>Găsește oportunități de diferențiere</li>
      </ul>
      
      <h2>2. Alegerea Platformei E-commerce</h2>
      <p>Alegerea platformei potrivite este fundamentală pentru succesul pe termen lung. Principalele opțiuni sunt:</p>
      
      <h3>WordPress WooCommerce</h3>
      <p><strong>Avantaje:</strong> Flexibilitate maximă, costuri reduse, SEO excelent</p>
      <p><strong>Dezavantaje:</strong> Necesită mai multă mentenanță tehnică</p>
      
      <h3>Shopify</h3>
      <p><strong>Avantaje:</strong> Setup rapid, hosting inclus, suport 24/7</p>
      <p><strong>Dezavantaje:</strong> Costuri lunare, limitări în customizare</p>
      
      <h2>Concluzie</h2>
      <p>Crearea unui magazin online de succes necesită planificare atentă, tehnologie potrivită și optimizare continuă. Începe simplu și crește treptat bazându-te pe feedback-ul clienților.</p>
    `,
        category: "E-commerce",
        author: {
            name: "Alex Popescu",
            bio: "Expert în dezvoltare e-commerce cu peste 8 ani de experiență în crearea magazinelor online de succes.",
            avatar: "bg-agency-blue",
            email: "alex@agencypro.ro"
        },
        publishDate: "15 Decembrie 2024",
        readTime: "8 min citire",
        tags: ["E-commerce", "Shopify", "WooCommerce", "Marketing Digital"],
        views: "2.4k",
        featured: true
    },
    'strategii-marketing-digital-romania': {
        id: "3",
        title: "10 Strategii de Marketing Digital Care Funcționează în România",
        excerpt: "Strategii testate și optimizate specific pentru piața românească. Rezultate măsurabile garantate.",
        content: `
      <p>Marketing-ul digital în România are specificități unice pe care trebuie să le înțelegi pentru a avea succes. Iată strategiile care funcționează cel mai bine pe piața locală.</p>
      
      <h2>1. Google Ads pentru Piața Locală</h2>
      <p>Campanii Google Ads optimizate pentru termeni de căutare în română și comportamentul utilizatorilor locali...</p>
      
      <h2>2. Facebook și Instagram Marketing</h2>
      <p>România are una dintre cele mai active comunități de pe Facebook din Europa...</p>
    `,
        category: "Marketing Digital",
        author: {
            name: "Răzvan Dobre",
            bio: "Marketing strategist cu 6 ani de experiență în crearea campaniilor pentru piața românească.",
            avatar: "bg-agency-accent"
        },
        publishDate: "10 Decembrie 2024",
        readTime: "7 min citire",
        tags: ["Marketing Digital", "Google Ads", "Facebook Ads", "România"],
        views: "3.2k",
        featured: true
    }
}

interface ArticlePageProps {
    params: {
        slug: string
    }
}

// Generare metadata pentru SEO
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const article = articlesDB[params.slug as keyof typeof articlesDB]

    if (!article) {
        return {
            title: 'Articolul nu a fost găsit | AgencyPro Blog'
        }
    }

    return {
        title: `${article.title} | AgencyPro Blog`,
        description: article.excerpt,
        keywords: article.tags.join(', '),
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: 'article',
            locale: 'ro_RO',
        }
    }
}

// Componenta principală pentru articol individual
export default function ArticlePage({ params }: ArticlePageProps) {
    // Găsește articolul după slug
    const article = articlesDB[params.slug as keyof typeof articlesDB]

    if (!article) {
        notFound() // Acum funcționează corect
    }

    return (
        <Layout>
            {/* Header Articol */}
            <Section spacing="lg" className="bg-gradient-to-br from-agency-blue-light via-white to-agency-accent-light">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <div className="flex items-center space-x-2 text-sm">
                            <Link href="/" className="text-agency-gray hover:text-agency-blue">Acasă</Link>
                            <span className="text-agency-gray">/</span>
                            <Link href="/blog" className="text-agency-gray hover:text-agency-blue">Blog</Link>
                            <span className="text-agency-gray">/</span>
                            <span className="text-agency-blue">{article.category}</span>
                        </div>
                    </nav>

                    {/* Meta Articol */}
                    <div className="mb-6">
                        <Badge className="bg-success text-white mb-4">
                            {article.category}
                        </Badge>

                        <Typography variant="h1" className="text-agency-blue-dark mb-6">
                            {article.title}
                        </Typography>

                        <Typography variant="lead" className="text-agency-gray mb-8">
                            {article.excerpt}
                        </Typography>

                        {/* Info Meta */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-agency-gray">
                            <div className="flex items-center gap-2">
                                <div className={`w-10 h-10 ${article.author.avatar} rounded-full flex items-center justify-center`}>
                                    <User className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="font-medium text-agency-gray-dark">{article.author.name}</div>
                                </div>
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
                                <User className="w-4 h-4" />
                                {article.views} vizualizări
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Conținut Articol */}
            <Section spacing="lg">
                <div className="max-w-4xl mx-auto">
                    {/* Conținutul articolului */}
                    <div
                        className="prose prose-lg max-w-none prose-headings:text-agency-blue-dark prose-p:text-agency-gray prose-p:leading-relaxed prose-a:text-agency-blue prose-strong:text-agency-gray-dark prose-ul:text-agency-gray"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* Tags */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <Typography variant="body" className="font-medium text-agency-gray-dark mb-3">
                            Tag-uri:
                        </Typography>
                        <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag, index) => (
                                <Badge key={index} className="bg-agency-blue-light text-agency-blue">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Author Bio */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <Card className="bg-agency-gray-light border-0">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4">
                                    <div className={`w-16 h-16 ${article.author.avatar} rounded-full flex items-center justify-center flex-shrink-0`}>
                                        <User className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <Typography variant="h6" className="text-agency-blue-dark mb-2">
                                            {article.author.name}
                                        </Typography>
                                        <Typography variant="body" className="text-agency-gray">
                                            {article.author.bio}
                                        </Typography>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Navigare */}
            <Section spacing="md" className="border-t border-gray-200">
                <div className="flex justify-between items-center">
                    <Link href="/blog">
                        <Button variant="outline" className="border-agency-gray text-agency-gray hover:bg-agency-gray hover:text-white">
                            ← Înapoi la Blog
                        </Button>
                    </Link>

                    <Button className="bg-agency-blue text-white hover:bg-agency-blue-dark">
                        Distribuie Articolul
                    </Button>
                </div>
            </Section>
        </Layout>
    )
}

// Generare pagini statice pentru articole (opțional)
export async function generateStaticParams() {
    return Object.keys(articlesDB).map((slug) => ({
        slug: slug,
    }))
}