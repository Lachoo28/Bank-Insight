import React from 'react';
import { motion } from 'framer-motion';
import { Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white py-20 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-8"
                >
                    <motion.div transition={{ delay: 0.1 }}>
                        <div className="flex items-center mb-4">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-2.5 rounded-xl mr-3 shadow-lg shadow-indigo-500/30"
                            >
                                <Landmark className="h-6 w-6" />
                            </motion.div>
                            <h3 className="text-xl font-bold">BankInsight LK</h3>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Your trusted source for comparing Sri Lankan banking products.
                        </p>
                    </motion.div>

                    <motion.div transition={{ delay: 0.2 }}>
                        <h4 className="font-semibold mb-4 text-white">About</h4>
                        <ul className="space-y-3 text-slate-400">
                            {['How it works', 'Data sources', 'Methodology'].map((item, i) => (
                                <motion.li key={i} whileHover={{ x: 5 }}>
                                    <a href="#" className="hover:text-indigo-400 transition-colors inline-flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-400 mr-0 group-hover:mr-2 transition-all" />
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div transition={{ delay: 0.3 }}>
                        <h4 className="font-semibold mb-4 text-white">Legal</h4>
                        <ul className="space-y-3 text-slate-400">
                            {['Disclaimer', 'Privacy Policy', 'Terms of Use'].map((item, i) => (
                                <motion.li key={i} whileHover={{ x: 5 }}>
                                    <a href="#" className="hover:text-indigo-400 transition-colors inline-flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-400 mr-0 group-hover:mr-2 transition-all" />
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div transition={{ delay: 0.4 }}>
                        <h4 className="font-semibold mb-4 text-white">Contact</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse" />
                                97Things@gmail.com
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                                Kalmunai, Sri Lanka
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500"
                >
                    <p>&copy; 2026 97 Things. All rights reserved.</p>
                    <p className="mt-2 text-sm">This is an information-only platform. We are not affiliated with any bank.</p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
