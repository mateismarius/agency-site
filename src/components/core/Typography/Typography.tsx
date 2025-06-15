// src/components/core/Typography/Typography.tsx
import {JSX, ReactNode} from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const typographyVariants = cva('', {
    variants: {
        variant: {
            h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
            h2: 'text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight',
            h3: 'text-2xl md:text-3xl font-semibold tracking-tight',
            h4: 'text-xl md:text-2xl font-semibold tracking-tight',
            h5: 'text-lg md:text-xl font-medium tracking-tight',
            h6: 'text-base md:text-lg font-medium tracking-tight',
            subtitle: 'text-lg md:text-xl text-muted-foreground',
            body: 'text-base leading-relaxed',
            small: 'text-sm text-muted-foreground',
            lead: 'text-xl text-muted-foreground leading-relaxed',
            muted: 'text-sm text-muted-foreground',
        },
        color: {
            default: 'text-foreground',
            muted: 'text-muted-foreground',
            primary: 'text-primary',
            secondary: 'text-secondary-foreground',
            accent: 'text-accent-foreground',
            destructive: 'text-destructive',
        },
        align: {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right',
        },
    },
    defaultVariants: {
        variant: 'body',
        color: 'default',
        align: 'left',
    },
})

interface TypographyProps extends VariantProps<typeof typographyVariants> {
    children: ReactNode
    className?: string
    as?: keyof JSX.IntrinsicElements
}

export function Typography({
                               children,
                               variant,
                               color,
                               align,
                               className,
                               as,
                               ...props
                           }: TypographyProps) {
    const Component = as || getDefaultElement(variant || 'body')

    return (
        <Component
            className={cn(typographyVariants({ variant, color, align }), className)}
            {...props}
        >
            {children}
        </Component>
    )
}

function getDefaultElement(variant: string): keyof JSX.IntrinsicElements {
    const elementMap: Record<string, keyof JSX.IntrinsicElements> = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle: 'p',
        body: 'p',
        small: 'small',
        lead: 'p',
        muted: 'p',
    }
    return elementMap[variant] || 'p'
}