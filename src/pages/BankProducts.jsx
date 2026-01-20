import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Landmark, CheckCircle, Plus, Eye } from 'lucide-react';

const BankProducts = ({ mockBanks, mockProducts, addToComparison, selectedProducts }) => {
    const { bankId } = useParams();
    const bank = mockBanks.find(b => b.id === parseInt(bankId));
    const bankProducts = mockProducts.filter(p => p.bankId === parseInt(bankId));

    if (!bank) return <div className="py-20 text-center">Bank not found.</div>;

    return (
        <div className="py-12 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium mb-4">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Back to Home
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-center gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                        <div className="bg-slate-50 p-4 rounded-2xl shadow-inner flex items-center justify-center">
                            <img src={bank.logo} alt={bank.name} className="w-24 h-24 object-contain" />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-indigo-100 text-indigo-700 p-1.5 rounded-lg">
                                    <Landmark className="h-5 w-5" />
                                </div>
                                <h1 className="text-3xl font-bold text-slate-900">{bank.name}</h1>
                            </div>
                            <p className="text-slate-600 max-w-xl">
                                Explore all financial products and services offered by {bank.name}.
                                Compare interest rates, tenures, and benefits to find the best fit for your goals.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Available Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bankProducts.length > 0 ? (
                            bankProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold px-2 py-1 rounded-md mb-2">{product.type}</span>
                                            <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{product.productName}</h3>
                                        </div>
                                        <button
                                            onClick={() => addToComparison(product)}
                                            disabled={selectedProducts.length >= 4 || selectedProducts.find(p => p.id === product.id)}
                                            className={`p-2.5 rounded-xl transition-all ${selectedProducts.find(p => p.id === product.id)
                                                ? 'bg-emerald-100 text-emerald-600'
                                                : selectedProducts.length >= 4
                                                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                                                }`}
                                        >
                                            {selectedProducts.find(p => p.id === product.id) ? <CheckCircle className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                                        </button>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-500 text-sm">Target Rate</span>
                                            <span className="font-mono font-bold text-emerald-600">{product.interestRate}%</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-500">Loan Tenure</span>
                                            <span className="text-slate-900 font-medium">{product.tenure}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 pt-4 border-t border-slate-50">
                                        <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-xl text-sm font-bold transition-all">
                                            Apply Now
                                        </button>
                                        <button className="p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                                            <Eye className="h-5 w-5 text-slate-500" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-16 text-center bg-white rounded-2xl border-2 border-dashed border-slate-200 text-slate-400">
                                No products listed for this bank yet.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankProducts;
