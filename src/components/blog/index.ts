// src/components/blog/index.ts - Blog components exports
export {
    RecentArticlesWidget,
    PopularArticlesWidget,
    CategoriesWidget,
    TagsWidget,
    NewsletterWidget,
    SocialShareWidget,
    AuthorWidget
} from './BlogWidgets/BlogWidgets'

// Blog Types
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
    }
    publishDate: string
    readTime: string
    tags: string[]
    featured: boolean
    views: string
    imageColor: string
    categoryColor: string
}

export interface BlogCategory {
    name: string
    slug: string
    description: string
    articleCount: number
    color: string
    bgColor: string
    iconColor: string
}

export interface BlogTag {
    name: string
    slug: string
    count: number
}

// Blog utilities
export const formatReadTime = (minutes: number): string => {
    return `${minutes} min citire`
}

export const formatPublishDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return new Date(date).toLocaleDateString('ro-RO', options)
}

export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...'
}

export const generateSlug = (title: string): string => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
}

// Blog constants
export const BLOG_CATEGORIES = [
    { name: "Web Design", slug: "web-design", color: "agency-blue" },
    { name: "Dezvoltare Web", slug: "dezvoltare-web", color: "success" },
    { name: "Marketing Digital", slug: "marketing-digital", color: "agency-accent" },
    { name: "SEO & Analytics", slug: "seo-analytics", color: "warning" },
    { name: "E-commerce", slug: "ecommerce", color: "success" },
    { name: "Business Digital", slug: "business-digital", color: "agency-gray" }
] as const

export const POPULAR_TAGS = [
    "WordPress", "E-commerce", "SEO", "Marketing", "Conversii", "Google Ads",
    "Facebook Ads", "Web Design", "UX/UI", "Analytics", "Email Marketing",
    "Content Strategy", "Social Media", "Branding", "Shopify", "WooCommerce"
] as const