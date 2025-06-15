// src/components/layout/Header/Header.tsx
'use client'
import { useState, useEffect } from 'react'
import { Container } from '@/components/core'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { navigationItems } from '@/components/layout'

interface HeaderProps {
    className?: string
}

export function Header({ className }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border'
                    : 'bg-transparent',
                className
            )}
        >
            <Container>
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-agency-blue rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">A</span>
                        </div>
                        <span className="font-bold text-xl text-foreground">
              Agency<span className="text-agency-blue">Pro</span>
            </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {item.children ? (
                                    <button className="flex items-center space-x-1 text-foreground hover:text-agency-blue transition-colors duration-200">
                                        <span>{item.name}</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href || '#'}
                                        className="text-foreground hover:text-agency-blue transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                )}

                                {/* Dropdown Menu */}
                                {item.children && (
                                    <AnimatePresence>
                                        {activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg overflow-hidden"
                                            >
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-agency-blue transition-colors duration-200"
                                                    >
                                                        <div>
                                                            <div className="font-medium">{child.name}</div>
                                                            {child.description && (
                                                                <div className="text-xs text-muted-foreground mt-1">
                                                                    {child.description}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Button & Mobile Menu Toggle */}
                    <div className="flex items-center space-x-4">
                        <Button className="hidden lg:inline-flex bg-agency-blue hover:bg-agency-blue-dark">
                            Consultație Gratuită
                        </Button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-foreground hover:text-agency-blue transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
                        >
                            <nav className="py-4 space-y-2">
                                {navigationItems.map((item) => (
                                    <div key={item.name}>
                                        {item.children ? (
                                            <button
                                                onClick={() => setActiveDropdown(
                                                    activeDropdown === item.name ? null : item.name
                                                )}
                                                className="flex items-center justify-between w-full px-4 py-2 text-left text-foreground hover:text-agency-blue transition-colors"
                                            >
                                                <span>{item.name}</span>
                                                <ChevronDown
                                                    className={cn(
                                                        "w-4 h-4 transition-transform",
                                                        activeDropdown === item.name && "rotate-180"
                                                    )}
                                                />
                                            </button>
                                        ) : (
                                            <Link
                                                href={item.href || '#'}
                                                className="block px-4 py-2 text-foreground hover:text-agency-blue transition-colors"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        )}

                                        {/* Mobile Dropdown */}
                                        {item.children && activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="bg-muted/50"
                                            >
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className="block px-8 py-2 text-sm text-foreground hover:text-agency-blue transition-colors"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>
                                ))}

                                <div className="px-4 pt-4">
                                    <Button className="w-full bg-agency-blue hover:bg-agency-blue-dark">
                                        Consultație Gratuită
                                    </Button>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </motion.header>
    )
}