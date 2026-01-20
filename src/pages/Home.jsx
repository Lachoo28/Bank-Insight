import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronRight, Landmark, PiggyBank, Calendar, CheckCircle,
    Filter, Plus, Eye, AlertCircle, GraduationCap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = ({
    mockBanks,
    productCategories,
    mockProducts,
    selectedProducts,
    setSelectedProducts,
    setSelectedCategory,
    addToComparison,
    removeFromComparison,
    containerVariants,
    itemVariants
}) => {
    const navigate = useNavigate();

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
                {/* Animated background, orbs, rings, icons, etc. (Extracted from App.jsx) */}
                <motion.div
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
                            "radial-gradient(circle at 50% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
                        ]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                />

                {/* Orbs */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            x: [0, 80, 0],
                            y: [0, -40, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            x: [0, -60, 0],
                            y: [0, 50, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-br from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            x: [0, 40, 0],
                            y: [0, -30, 0],
                            scale: [1, 1.15, 1],
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-10 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-500/15 to-teal-600/15 rounded-full blur-3xl"
                    />
                </div>

                {/* Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/30 rounded-full"
                            style={{
                                left: `${15 + i * 15}%`,
                                top: `${20 + (i % 3) * 25}%`,
                            }}
                            animate={{
                                y: [-20, 20, -20],
                                opacity: [0.2, 0.6, 0.2],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.3,
                            }}
                        />
                    ))}
                </div>

                {/* Rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] border border-white/5 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] border border-indigo-500/10 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-cyan-500/10 rounded-full"
                    />
                </div>

                {/* Bank icons */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[
                        { icon: "🏦", x: "10%", y: "20%", delay: 0 },
                        { icon: "💰", x: "85%", y: "25%", delay: 0.5 },
                        { icon: "📊", x: "15%", y: "70%", delay: 1 },
                        { icon: "💳", x: "80%", y: "65%", delay: 1.5 },
                        { icon: "🏠", x: "5%", y: "45%", delay: 2 },
                        { icon: "🚗", x: "92%", y: "45%", delay: 2.5 },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-2xl md:text-3xl opacity-20"
                            style={{ left: item.x, top: item.y }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0.1, 0.3, 0.1],
                                y: [-10, 10, -10],
                                rotate: [-5, 5, -5],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: item.delay,
                            }}
                        >
                            {item.icon}
                        </motion.div>
                    ))}
                </div>

                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: -30, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8"
                        >
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="relative flex h-2 w-2"
                            >
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </motion.span>
                            <span className="text-sm font-medium text-indigo-200">Trusted by 100+ Sri Lankans</span>
                        </motion.div>

                        <div className="overflow-hidden">
                            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]">
                                <motion.span
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
                                    className="block text-white"
                                >
                                    Compare Bank Loans
                                </motion.span>
                                <motion.span
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
                                    className="block"
                                >
                                    <motion.span
                                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                        className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-[length:200%_auto] bg-clip-text text-transparent"
                                    >
                                        All in One Place
                                    </motion.span>
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.7 }}
                            className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                        >
                            Personal loans, home loans, savings & fixed deposits from all major Sri Lankan banks -
                            <span className="text-white font-medium"> simplified and transparent.</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.9 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <button
                                onClick={() => navigate('/explore')}
                                className="group relative bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-emerald-500/25 flex items-center justify-center transition-all duration-300 overflow-hidden"
                            >
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.5 }}
                                />
                                <span className="relative">Compare Loans Now</span>
                                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative" />
                            </button>
                            <button
                                onClick={() => navigate('/banks')}
                                className="bg-white/5 backdrop-blur-md border border-white/20 text-white hover:border-white/40 font-semibold py-4 px-8 rounded-2xl transition-all duration-300"
                            >
                                Browse All Banks
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative bg-white py-12 md:py-16 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { value: "15+", label: "Partner Banks", icon: Landmark, color: "from-indigo-500 to-indigo-600" },
                            { value: "100+", label: "Loan Products", icon: PiggyBank, color: "from-emerald-500 to-emerald-600" },
                            { value: "5%", label: "Lowest Rate", icon: Calendar, color: "from-cyan-500 to-cyan-600" },
                            { value: "24/7", label: "Always Updated", icon: CheckCircle, color: "from-purple-500 to-purple-600" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.15 }}
                                whileHover={{ y: -8, scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                                className="group bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:border-indigo-200 transition-all duration-300 text-center cursor-pointer"
                            >
                                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
                                    <stat.icon className="h-7 w-7 text-white" />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section id="products" className="py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Banking Products</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Compare Banking Products</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full mb-4" />
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">Find the best rates and terms across all major Sri Lankan banks</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {productCategories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)" }}
                                className="relative bg-white rounded-2xl p-8 border border-slate-100 hover:border-indigo-300 transition-all duration-300 cursor-pointer group overflow-hidden"
                                onClick={() => navigate(`/explore?category=${category.id}`)}
                            >
                                <div className="relative">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-4 rounded-xl mr-4 shadow-lg shadow-indigo-200 group-hover:shadow-indigo-300 transition-shadow">
                                            <category.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{category.name}</h3>
                                    </div>
                                    <p className="text-slate-600 mb-4">{category.description}</p>
                                    <div className="flex items-center text-indigo-600 font-medium">
                                        <span className="group-hover:opacity-100 opacity-0 transition-opacity">Explore</span>
                                        <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                                            <ChevronRight className="h-5 w-5 ml-1 group-hover:opacity-100 opacity-0 transition-opacity" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bank List */}
            <section id="banks" className="py-20 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-emerald-100 text-emerald-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Partner Banks</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">All Sri Lankan Banks</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-4" />
                        <p className="text-slate-600 text-lg">Compare products from every major bank in Sri Lanka</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {mockBanks.map((bank, index) => (
                            <motion.div
                                key={bank.id}
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.08 }}
                                whileHover={{ y: -8, scale: 1.05, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)" }}
                                className="bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-indigo-400 transition-all duration-300 text-center group cursor-pointer"
                                onClick={() => navigate(`/banks/${bank.id}`)}
                            >
                                <div className="relative">
                                    <img src={bank.logo} alt={bank.name} className="relative w-16 h-16 mx-auto mb-4 rounded-xl object-contain" />
                                </div>
                                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{bank.name}</h3>
                                <div className="text-indigo-600 group-hover:text-indigo-700 font-medium text-sm flex items-center justify-center mx-auto transition-colors">
                                    View Products
                                    <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                                        <ChevronRight className="ml-1 h-4 w-4" />
                                    </motion.span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison & Product Listing (Simplified for Home) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-8">Ready to find the best deal?</h2>
                    <button
                        onClick={() => navigate('/explore')}
                        className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all"
                    >
                        Go to Product Explorer
                    </button>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-purple-100 text-purple-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Learn & Grow</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Learn About Banking</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4" />
                        <p className="text-slate-600 text-lg">Understand banking terms in simple English</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { id: 1, title: 'What is Interest Rate?', icon: AlertCircle, color: 'from-blue-500 to-indigo-500', bg: 'bg-blue-50' },
                            { id: 2, title: 'Fixed vs Floating Rates', icon: Calendar, color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50' },
                            { id: 1, title: 'EMI Explained', icon: PiggyBank, color: 'from-amber-500 to-orange-500', bg: 'bg-amber-50' },
                            { id: 2, title: 'Banking Terms Guide', icon: GraduationCap, color: 'from-purple-500 to-pink-500', bg: 'bg-purple-50' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                                onClick={() => navigate(`/article/${item.id}`)}
                                className="relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-purple-200 transition-all duration-300 cursor-pointer group overflow-hidden"
                            >
                                <div className="relative">
                                    <div className={`${item.bg} p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}>
                                        <div className={`bg-gradient-to-br ${item.color} p-2 rounded-lg`}>
                                            <item.icon className="h-5 w-5 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">{item.title}</h3>
                                    <p className="text-slate-600 text-sm mb-3">Simple explanation of banking concepts</p>
                                    <div className="flex items-center text-purple-600 text-sm font-medium">
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">Read Article</span>
                                        <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                                            <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
