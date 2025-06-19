// src/lib/articleManager.ts - Sistem de management articole

import { BlogArticle } from '@/data/articles'

export class ArticleManager {
    // Generează slug din titlu
    generateSlug(title: string): string {
        return title
            .toLowerCase()
            .replace(/[âăîșț]/g, (match) => {
                const replacements: { [key: string]: string } = {
                    'â': 'a', 'ă': 'a', 'î': 'i', 'ș': 's', 'ț': 't'
                }
                return replacements[match] || match
            })
            .replace(/[^a-z0-9\s-]/g, '') // Elimină caractere speciale
            .replace(/\s+/g, '-') // Înlocuiește spații cu -
            .replace(/-+/g, '-') // Elimină - multiple
            .trim()
    }

    // Generează ID unic
    generateId(): string {
        return Date.now().toString()
    }

    // Template pentru articol nou
    createArticleTemplate(data: {
        title: string
        category: string
        author: string
        excerpt?: string
    }): BlogArticle {
        const slug = this.generateSlug(data.title)

        return {
            id: this.generateId(),
            title: data.title,
            slug: slug,
            excerpt: data.excerpt || `Scurtă descriere pentru ${data.title}`,
            content: `
        <p>Introducere pentru articolul ${data.title}...</p>
        
        <h2>1. Prima Secțiune</h2>
        <p>Conținutul primei secțiuni...</p>
        
        <h2>2. A Doua Secțiune</h2>
        <p>Conținutul celei de-a doua secțiuni...</p>
        
        <h2>Concluzie</h2>
        <p>Concluzia articolului...</p>
      `,
            category: data.category,
            author: {
                name: data.author,
                bio: `Expert în ${data.category}`,
                avatar: "bg-agency-blue",
                email: `${data.author.toLowerCase().replace(' ', '.')}@agencypro.ro`
            },
            publishDate: new Date().toISOString().split('T')[0], // Azi
            readTime: "5 min",
            tags: [data.category.charAt(0).toUpperCase() + data.category.slice(1)],
            featured: false,
            views: "0",
            imageColor: this.getColorByCategory(data.category),
            status: "draft" as const,
            seoKeywords: `${data.title.toLowerCase()}, ${data.category}`,
            metaDescription: data.excerpt || `${data.title} - Articol despre ${data.category}`
        }
    }

    // Culori pe categorii
    private getColorByCategory(category: string): string {
        const categoryColors: { [key: string]: string } = {
            'ecommerce': 'bg-gradient-to-br from-success to-success-light',
            'marketing-digital': 'bg-gradient-to-br from-agency-accent to-warning',
            'web-design': 'bg-gradient-to-br from-agency-blue to-agency-blue-light',
            'seo-analytics': 'bg-gradient-to-br from-warning to-warning-light',
            'dezvoltare-web': 'bg-gradient-to-br from-agency-gray to-agency-gray-light',
            'business-digital': 'bg-gradient-to-br from-error to-error-light'
        }
        return categoryColors[category] || 'bg-gradient-to-br from-gray-400 to-gray-500'
    }

    // Validează articolul
    validateArticle(article: Partial<BlogArticle>): { valid: boolean; errors: string[] } {
        const errors: string[] = []

        if (!article.title || article.title.length < 10) {
            errors.push('Titlul trebuie să aibă cel puțin 10 caractere')
        }

        if (!article.excerpt || article.excerpt.length < 50) {
            errors.push('Descrierea trebuie să aibă cel puțin 50 caractere')
        }

        if (!article.content || article.content.length < 200) {
            errors.push('Conținutul trebuie să aibă cel puțin 200 caractere')
        }

        if (!article.category) {
            errors.push('Categoria este obligatorie')
        }

        if (!article.author?.name) {
            errors.push('Autorul este obligatoriu')
        }

        return {
            valid: errors.length === 0,
            errors
        }
    }
}

