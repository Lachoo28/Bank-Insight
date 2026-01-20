import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Eye, CheckCircle, Plus, X, ChevronLeft } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const ExploreProducts = ({
    mockBanks,
    productCategories,
    mockProducts,
    selectedProducts,
    setSelectedProducts,
    addToComparison,
    removeFromComparison
}) => {
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get('category');

    const [selectedBankFilter, setSelectedBankFilter] = useState('All Banks');
    const [selectedTypeFilter, setSelectedTypeFilter] = useState(categoryId ? productCategories.find(c => c.id === parseInt(categoryId))?.name || 'All Types' : 'All Types');

    const filteredProducts = mockProducts.filter(product => {
        const bankMatch = selectedBankFilter === 'All Banks' || product.bankName === selectedBankFilter;
        const typeMatch = selectedTypeFilter === 'All Types' || product.type === selectedTypeFilter;
        return bankMatch && typeMatch;
    });

    return (
        <div className="py-12 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium mb-4">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-900">Explore Banking Products</h1>
                    <p className="text-slate-600 mt-2">Find and compare the best financial products for your needs.</p>
                </div>

                {/* Comparison Section (Sticky) */}
                <AnimatePresence>
                    {selectedProducts.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="mb-8"
                        >
                            <section className="bg-white rounded-2xl shadow-xl border border-indigo-100 overflow-hidden">
                                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                                    <h2 className="text-xl font-bold text-slate-900">Quick Comparison ({selectedProducts.length}/4)</h2>
                                    <button onClick={() => setSelectedProducts([])} className="text-red-600 hover:text-red-700 font-medium text-sm">Clear Comparison</button>
                                </div>
                                <div className="overflow-x-auto p-6">
                                    <table className="w-full">
                                        <thead>
                                            <tr>
                                                <th className="text-left pb-4 font-semibold text-slate-500 text-sm uppercase tracking-wider">Property</th>
                                                {selectedProducts.map(product => (
                                                    <th key={product.id} className="text-center pb-4 px-4 min-w-[200px]">
                                                        <div className="p-3 bg-slate-50 rounded-xl relative group">
                                                            <button
                                                                onClick={() => removeFromComparison(product.id)}
                                                                className="absolute -top-2 -right-2 bg-white text-red-500 rounded-full p-1 shadow-md hover:bg-red-50 transition-colors"
                                                            >
                                                                <X className="h-4 w-4" />
                                                            </button>
                                                            <img src={mockBanks.find(b => b.id === product.bankId)?.logo} className="h-10 w-10 mx-auto mb-2 rounded-lg" alt="" />
                                                            <div className="text-sm font-bold text-slate-900 truncate">{product.productName}</div>
                                                            <div className="text-xs text-slate-500">{product.bankName}</div>
                                                        </div>
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr>
                                                <td className="py-4 font-medium text-slate-700">Interest Rate</td>
                                                {selectedProducts.map(product => (
                                                    <td key={product.id} className="text-center py-4 font-mono font-bold text-emerald-600">{product.interestRate}%</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td className="py-4 font-medium text-slate-700">Tenure</td>
                                                {selectedProducts.map(product => (
                                                    <td key={product.id} className="text-center py-4 text-slate-900">{product.tenure}</td>
                                                ))}
                                            </tr>
                                            <tr>
                                                <td className="py-4 font-medium text-slate-700">Loan Amount</td>
                                                {selectedProducts.map(product => (
                                                    <td key={product.id} className="text-center py-4 text-slate-900">{product.loanAmount}</td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="lg:w-1/4">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-24">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-slate-900">Filters</h3>
                                <Filter className="h-5 w-5 text-indigo-600" />
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Selected Bank</label>
                                    <select
                                        value={selectedBankFilter}
                                        onChange={(e) => setSelectedBankFilter(e.target.value)}
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                                    >
                                        <option>All Banks</option>
                                        {mockBanks.map(bank => <option key={bank.id} value={bank.name}>{bank.name}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setSelectedTypeFilter('All Types')}
                                            className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${selectedTypeFilter === 'All Types' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                                        >
                                            All Types
                                        </button>
                                        {productCategories.map(cat => (
                                            <button
                                                key={cat.id}
                                                onClick={() => setSelectedTypeFilter(cat.name)}
                                                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${selectedTypeFilter === cat.name ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                                            >
                                                {cat.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <main className="lg:w-3/4">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredProducts.map((product) => (
                                    <motion.div
                                        key={product.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group flex flex-col"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center">
                                                <img src={mockBanks.find(b => b.id === product.bankId)?.logo} className="w-12 h-12 rounded-xl mr-4 object-contain shadow-sm" alt="" />
                                                <div>
                                                    <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">{product.productName}</h3>
                                                    <p className="text-sm text-slate-500">{product.bankName}</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => addToComparison(product)}
                                                disabled={selectedProducts.length >= 4 || selectedProducts.find(p => p.id === product.id)}
                                                className={`p-2 rounded-full transition-all ${selectedProducts.find(p => p.id === product.id)
                                                    ? 'bg-emerald-100 text-emerald-600'
                                                    : selectedProducts.length >= 4
                                                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                                        : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 hover:scale-110'
                                                    }`}
                                            >
                                                {selectedProducts.find(p => p.id === product.id) ? <CheckCircle className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                                            </button>
                                        </div>

                                        <div className="space-y-4 mb-6 flex-grow">
                                            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                                <span className="text-slate-500 text-sm font-medium">Interest Rate</span>
                                                <span className="font-mono font-bold text-emerald-600 text-lg">{product.interestRate}%</span>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="p-3 bg-slate-50 rounded-xl">
                                                    <div className="text-xs text-slate-400 mb-1">Tenure</div>
                                                    <div className="text-sm font-bold text-slate-700">{product.tenure}</div>
                                                </div>
                                                <div className="p-3 bg-slate-50 rounded-xl">
                                                    <div className="text-xs text-slate-400 mb-1">Max Amount</div>
                                                    <div className="text-sm font-bold text-slate-700 line-clamp-1">50M</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-xl text-sm font-bold transition-all shadow-lg shadow-indigo-100">
                                                View Details
                                            </button>
                                            <button className="p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                                                <Eye className="h-5 w-5 text-slate-500" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl p-20 text-center border-2 border-dashed border-slate-200">
                                <div className="text-slate-400 mb-4">No products matching your filters.</div>
                                <button onClick={() => { setSelectedBankFilter('All Banks'); setSelectedTypeFilter('All Types'); }} className="text-indigo-600 font-bold hover:underline">Reset Filters</button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ExploreProducts;
