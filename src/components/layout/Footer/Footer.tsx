// src/components/layout/Footer/Footer.tsx
import { Container, Typography } from '@/components/core'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Mail, Phone, MapPin} from 'lucide-react'
import {footerCompany, footerServices, socialLinks} from "@/components/layout";

export function Footer() {
    return (
        <footer className="bg-agency-gray-dark text-white">
            {/* Main Footer */}
            <Container>
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-8 h-8 bg-agency-blue rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">A</span>
                                </div>
                                <span className="font-bold text-xl">
                  Agency<span className="text-agency-accent">Pro</span>
                </span>
                            </div>
                            <Typography variant="body" className="text-gray-300 mb-6">
                                Construim experiențe digitale de excepție pentru afaceri moderne.
                                De la concept la implementare, suntem partenerii tăi în transformarea digitală.
                            </Typography>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        className="w-10 h-10 bg-agency-gray rounded-lg flex items-center justify-center hover:bg-agency-blue transition-colors duration-200"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <Typography variant="h6" className="mb-6">Servicii</Typography>
                            <ul className="space-y-3">
                                {footerServices.map((service) => (
                                    <li key={service.name}>
                                        <Link
                                            href={service.href}
                                            className="text-gray-300 hover:text-agency-accent transition-colors duration-200"
                                        >
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <Typography variant="h6" className="mb-6">Companie</Typography>
                            <ul className="space-y-3">
                                {footerCompany.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-gray-300 hover:text-agency-accent transition-colors duration-200"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <Typography variant="h6" className="mb-6">Contact</Typography>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 text-agency-accent mt-0.5 flex-shrink-0" />
                                    <div className="text-gray-300">
                                        <div>Strada Exemplu, Nr. 123</div>
                                        <div>Brașov, România</div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-agency-accent flex-shrink-0" />
                                    <Link
                                        href="tel:+40123456789"
                                        className="text-gray-300 hover:text-agency-accent transition-colors"
                                    >
                                        +40 123 456 789
                                    </Link>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-agency-accent flex-shrink-0" />
                                    <Link
                                        href="mailto:contact@agencypro.ro"
                                        className="text-gray-300 hover:text-agency-accent transition-colors"
                                    >
                                        contact@agencypro.ro
                                    </Link>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="mt-6">
                                <Typography variant="small" className="text-gray-300 mb-3">
                                    Abonează-te pentru noutăți
                                </Typography>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Email-ul tău"
                                        className="flex-1 px-3 py-2 bg-agency-gray border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-agency-blue"
                                    />
                                    <Button className="bg-agency-blue hover:bg-agency-blue-dark rounded-l-none">
                                        Abonează-te
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <Container>
                    <div className="py-6 flex flex-col md:flex-row justify-between items-center">
                        <Typography variant="small" className="text-gray-400">
                            © 2024 AgencyPro. Toate drepturile rezervate.
                        </Typography>

                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/privacy" className="text-gray-400 hover:text-agency-accent transition-colors text-sm">
                                Politica de Confidențialitate
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-agency-accent transition-colors text-sm">
                                Termeni și Condiții
                            </Link>
                            <Link href="/cookies" className="text-gray-400 hover:text-agency-accent transition-colors text-sm">
                                Politica Cookies
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    )
}
