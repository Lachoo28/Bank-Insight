import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, X, Menu } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleNavClick = (e, targetId) => {
        setIsMobileMenuOpen(false);

        if (location.pathname !== '/') {
            navigate('/');
            // Wait for home page to load before scrolling
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }, 300);
        } else {
            e.preventDefault();
            const element = document.getElementById(targetId);
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }
    };

    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center">
                        <div className="bg-indigo-600 text-white p-2 rounded-xl mr-3 shadow-lg shadow-indigo-600/20">
                            <Landmark className="h-6 w-6" />
                        </div>
                        <h1 className="text-xl font-bold text-slate-900 tracking-tight">BankInsight LK</h1>
                    </Link>
                    <nav className="hidden md:flex space-x-8">
                        <a href="/#products" onClick={(e) => handleNavClick(e, 'products')} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Compare</a>
                        <a href="/#banks" onClick={(e) => handleNavClick(e, 'banks')} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Banks</a>
                        <a href="/#education" onClick={(e) => handleNavClick(e, 'education')} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Learn</a>
                    </nav>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-slate-600 hover:text-indigo-600 p-2 focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden fixed inset-0 top-16 bg-black/50 z-40"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="md:hidden fixed top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-xl z-50"
                        >
                            <nav className="px-4 py-4 space-y-1">
                                <a href="/#products" onClick={(e) => handleNavClick(e, 'products')} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">Compare</a>
                                <a href="/#banks" onClick={(e) => handleNavClick(e, 'banks')} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">Banks</a>
                                <a href="/#education" onClick={(e) => handleNavClick(e, 'education')} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">Learn</a>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
