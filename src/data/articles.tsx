// src/data/articles.ts - Baza de date cu articole

export interface BlogArticle {
    id: string
    title: string
    slug: string
    excerpt: string
    content: string
    category: string
    author: {
        name: string
        bio: string
        avatar: string
        email?: string
    }
    publishDate: string
    readTime: string
    tags: string[]
    featured: boolean
    views: string
    imageColor: string
    status: 'published' | 'draft' | 'scheduled'
    seoKeywords?: string
    metaDescription?: string
}

// Baza de date cu toate articolele
export const articlesDatabase: BlogArticle[] = [
    // CATEGORIA E-COMMERCE
    {
        id: "1",
        title: "Ghidul Complet: Cum să Creezi un Magazin Online de Succes în 2024",
        slug: "ghid-magazin-online-succes-2024",
        excerpt: "Descoperă pașii esențiali pentru a lansa un magazin online profitabil, de la alegerea platformei până la optimizarea conversiilor.",
        content: `
      <p>Lansarea unui magazin online de succes în 2024 necesită o combinație de strategie, tehnologie și execuție impecabilă...</p>
      <h2>1. Planificarea și Cercetarea de Piață</h2>
      <p>Înainte de a începe dezvoltarea tehnică, este crucial să înțelegi piața și să îți definești strategia...</p>
      <h3>Analizează Concurența</h3>
      <ul>
        <li>Identifică competitorii direcți și indirecți</li>
        <li>Analizează prețurile, produsele și strategiile lor</li>
        <li>Găsește oportunități de diferențiere</li>
      </ul>
      <h2>2. Alegerea Platformei E-commerce</h2>
      <p>Alegerea platformei potrivite este fundamentală pentru succesul pe termen lung...</p>
    `,
        category: "ecommerce",
        author: {
            name: "Alex Popescu",
            bio: "Expert în dezvoltare e-commerce cu peste 8 ani de experiență în crearea magazinelor online de succes.",
            avatar: "bg-agency-blue",
            email: "alex@agencypro.ro"
        },
        publishDate: "2024-12-15",
        readTime: "8 min",
        tags: ["E-commerce", "Shopify", "WooCommerce", "Conversii", "Marketing Digital"],
        featured: true,
        views: "2.4k",
        imageColor: "bg-gradient-to-br from-success to-success-light",
        status: "published",
        seoKeywords: "magazin online, e-commerce, ghid magazin online, creare magazin online",
        metaDescription: "Ghid complet pentru crearea unui magazin online de succes în 2024. Pași esențiali, platforme recomandate și strategii de optimizare."
    },
    {
        id: "2",
        title: "Shopify vs WooCommerce: Care Este Cea Mai Bună Platformă în 2024?",
        slug: "shopify-vs-woocommerce-comparatie-2024",
        excerpt: "Comparație detaliată între cele două platforme principale pentru e-commerce, cu avantaje, dezavantaje și cazuri de utilizare pentru piața românească.",
        content: `
      <p>Alegerea platformei potrivite pentru magazinul online este una dintre cele mai importante decizii pe care le vei lua...</p>
      <h2>Shopify - Soluția All-in-One</h2>
      <h3>Avantaje Shopify:</h3>
      <ul>
        <li>Setup rapid și user-friendly</li>
        <li>Hosting și securitate incluse</li>
        <li>Suport 24/7 din partea Shopify</li>
        <li>App store bogat cu funcționalități</li>
      </ul>
      <h2>WooCommerce - Flexibilitatea WordPress</h2>
      <p>WooCommerce este plugin-ul de e-commerce pentru WordPress, oferind flexibilitate maximă...</p>
    `,
        category: "ecommerce",
        author: {
            name: "Maria Ionescu",
            bio: "Specialist în platforme e-commerce cu experiență în implementări Shopify și WooCommerce pentru piața românească.",
            avatar: "bg-success",
            email: "maria@agencypro.ro"
        },
        publishDate: "2024-12-12",
        readTime: "6 min",
        tags: ["Shopify", "WooCommerce", "Platforme E-commerce", "Comparație", "WordPress"],
        featured: false,
        views: "1.8k",
        imageColor: "bg-gradient-to-br from-agency-blue to-agency-blue-light",
        status: "published",
        seoKeywords: "Shopify vs WooCommerce, platforme e-commerce, comparație magazine online",
        metaDescription: "Comparație completă între Shopify și WooCommerce pentru magazine online în România. Avantaje, dezavantaje și recomandări pentru 2024."
    },

    // CATEGORIA MARKETING DIGITAL
    {
        id: "3",
        title: "10 Strategii de Marketing Digital Care Funcționează în România",
        slug: "strategii-marketing-digital-romania-2024",
        excerpt: "Strategii testate și optimizate specific pentru piața românească. Rezultate măsurabile garantate pentru creșterea afacerii online.",
        content: `
      <p>Marketing-ul digital în România are specificități unice pe care trebuie să le înțelegi pentru a avea succes...</p>
      <h2>1. Google Ads pentru Piața Locală</h2>
      <p>Campanii Google Ads optimizate pentru termeni de căutare în română și comportamentul utilizatorilor locali...</p>
      <h2>2. Facebook și Instagram Marketing</h2>
      <p>România are una dintre cele mai active comunități de pe Facebook din Europa...</p>
    `,
        category: "marketing-digital",
        author: {
            name: "Răzvan Dobre",
            bio: "Marketing strategist cu 6 ani de experiență în crearea campaniilor pentru piața românească.",
            avatar: "bg-agency-accent",
            email: "razvan@agencypro.ro"
        },
        publishDate: "2024-12-10",
        readTime: "7 min",
        tags: ["Marketing Digital", "Google Ads", "Facebook Ads", "România", "Strategii Locale"],
        featured: true,
        views: "3.2k",
        imageColor: "bg-gradient-to-br from-agency-accent to-warning",
        status: "published",
        seoKeywords: "marketing digital Romania, strategii marketing online, Google Ads Romania",
        metaDescription: "Top 10 strategii de marketing digital care funcționează în România. Ghid complet cu exemple practice și rezultate măsurabile."
    },

    // CATEGORIA WEB DESIGN
    {
        id: "4",
        title: "Tendințe Web Design 2024: Ce Trebuie Să Știi",
        slug: "tendinte-web-design-2024",
        excerpt: "Explorează cele mai importante tendințe în design web pentru 2024. De la minimalism la micro-interacțiuni și AI integration.",
        content: `
      <p>Anul 2024 aduce schimbări majore în design-ul web, influențate de tehnologii emergente și schimbarea comportamentului utilizatorilor...</p>
      <h2>1. Minimalism Avansat</h2>
      <p>Trend-ul către simplitate continuă, dar cu twist-uri inovatoare...</p>
      <h2>2. Micro-interacțiuni și Animații</h2>
      <p>Interacțiunile subtile devin din ce în ce mai importante pentru UX...</p>
    `,
        category: "web-design",
        author: {
            name: "Diana Varga",
            bio: "UX/UI Designer cu pasiune pentru tendințele moderne și design functional.",
            avatar: "bg-agency-blue",
            email: "diana@agencypro.ro"
        },
        publishDate: "2024-12-08",
        readTime: "5 min",
        tags: ["Web Design", "UI/UX", "Tendințe 2024", "Minimalism", "Animații"],
        featured: false,
        views: "1.5k",
        imageColor: "bg-gradient-to-br from-agency-blue to-agency-blue-light",
        status: "published",
        seoKeywords: "tendințe web design 2024, design modern, UI UX trends",
        metaDescription: "Descoperă tendințele principale în web design pentru 2024. Ghid complet cu exemple și recomandări pentru designeri."
    },

    // ARTICOL ÎN DRAFT (nu apare pe site)
    {
        id: "5",
        title: "Cum să Optimizezi Core Web Vitals pentru SEO în 2024",
        slug: "optimizare-core-web-vitals-seo-2024",
        excerpt: "Ghid tehnic pentru optimizarea Core Web Vitals și îmbunătățirea poziției în rezultatele Google.",
        content: `<p>Core Web Vitals sunt metrici esențiali pentru SEO...</p>`,
        category: "seo-analytics",
        author: {
            name: "Cristina Marin",
            bio: "SEO Specialist cu focus pe SEO tehnic și optimizarea performanței.",
            avatar: "bg-warning"
        },
        publishDate: "2024-12-20",
        readTime: "9 min",
        tags: ["SEO", "Core Web Vitals", "Performance", "Google"],
        featured: false,
        views: "0",
        imageColor: "bg-gradient-to-br from-warning to-warning-light",
        status: "draft", // NU VA APĂREA PE SITE
        seoKeywords: "core web vitals, seo tehnic, optimizare performanță",
        metaDescription: "Ghid complet pentru optimizarea Core Web Vitals și îmbunătățirea SEO. Instrumente și strategii practice."
    }
]

// Funcții helper pentru gestionarea articolelor
export const getArticlesByCategory = (category: string) => {
    return articlesDatabase.filter(article =>
        article.category === category && article.status === 'published'
    )
}

export const getFeaturedArticles = () => {
    return articlesDatabase.filter(article =>
        article.featured && article.status === 'published'
    )
}

export const getRecentArticles = (limit: number = 6) => {
    return articlesDatabase
        .filter(article => article.status === 'published')
        .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
        .slice(0, limit)
}

export const getArticleBySlug = (slug: string) => {
    return articlesDatabase.find(article =>
        article.slug === slug && article.status === 'published'
    )
}

export const searchArticles = (query: string) => {
    const searchTerm = query.toLowerCase()
    return articlesDatabase.filter(article =>
            article.status === 'published' && (
                article.title.toLowerCase().includes(searchTerm) ||
                article.excerpt.toLowerCase().includes(searchTerm) ||
                article.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
                article.content.toLowerCase().includes(searchTerm)
            )
    )
}

export const getPopularArticles = (limit: number = 5) => {
    return articlesDatabase
        .filter(article => article.status === 'published')
        .sort((a, b) => {
            const viewsA = parseInt(a.views.replace(/[^\d]/g, ''))
            const viewsB = parseInt(b.views.replace(/[^\d]/g, ''))
            return viewsB - viewsA
        })
        .slice(0, limit)
}

// Categorii disponibile
export const blogCategories = [
    { name: "E-commerce", slug: "ecommerce", count: getArticlesByCategory("ecommerce").length },
    { name: "Marketing Digital", slug: "marketing-digital", count: getArticlesByCategory("marketing-digital").length },
    { name: "Web Design", slug: "web-design", count: getArticlesByCategory("web-design").length },
    { name: "SEO & Analytics", slug: "seo-analytics", count: getArticlesByCategory("seo-analytics").length },
    { name: "Dezvoltare Web", slug: "dezvoltare-web", count: getArticlesByCategory("dezvoltare-web").length },
    { name: "Business Digital", slug: "business-digital", count: getArticlesByCategory("business-digital").length }
]