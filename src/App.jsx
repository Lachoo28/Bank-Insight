import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {
  ChevronRight, Landmark, Home as HomeIcon, Car, GraduationCap,
  PiggyBank, Calendar, CheckCircle, AlertCircle,
  Eye, Filter, X, Plus, Menu, ArrowUp,
  Import
} from 'lucide-react';

import CB from './assets/CB.png';
import HNB from './assets/HNM.jpg';
import PB from './assets/PB.jpg';
import NTB from './assets/NTB.png';
import SB from './assets/SB.jpg';
import BOC from './assets/BOC.jpg'


// Components & Pages
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ExploreProducts from './pages/ExploreProducts';
import BankProducts from './pages/BankProducts';
import ArticlePage from './pages/ArticlePage';

// Mock data (Keep here for simplicity or move to a separate file)
const mockBanks = [
  { id: 1, name: 'Commercial Bank', logo: CB },
  { id: 2, name: 'Hatton National Bank', logo: HNB },
  { id: 3, name: 'Sampath Bank', logo: SB },
  { id: 4, name: 'Bank of Ceylon', logo: BOC },
  { id: 5, name: 'People\'s Bank', logo: PB },
  { id: 6, name: 'Nations Trust Bank', logo: NTB },
];

const productCategories = [
  { id: 1, name: 'Personal Loans', icon: Landmark, description: 'Flexible loans for personal needs' },
  { id: 2, name: 'Home Loans', icon: HomeIcon, description: 'Finance your dream home' },
  { id: 3, name: 'Vehicle Loans', icon: Car, description: 'New or used vehicle financing' },
  { id: 4, name: 'Education Loans', icon: GraduationCap, description: 'Fund your education journey' },
  { id: 5, name: 'Savings Accounts', icon: PiggyBank, description: 'Grow your savings safely' },
  { id: 6, name: 'Fixed Deposits', icon: Calendar, description: 'Secure fixed-term investments' },
];

const mockProducts = [
  { id: 1, bankId: 1, bankName: 'Commercial Bank', productName: 'Quick Cash Personal Loan', interestRate: 12.5, tenure: '1-5 years', loanAmount: 'LKR 50,000 - 5,000,000', type: 'Personal Loans' },
  { id: 2, bankId: 2, bankName: 'Hatton National Bank', productName: 'HNB Home Loan', interestRate: 9.8, tenure: '5-30 years', loanAmount: 'LKR 1,000,000 - 50,000,000', type: 'Home Loans' },
  { id: 3, bankId: 3, bankName: 'Sampath Bank', productName: 'Sampath Vehicle Loan', interestRate: 11.2, tenure: '1-7 years', loanAmount: 'LKR 100,000 - 10,000,000', type: 'Vehicle Loans' },
  { id: 4, bankId: 4, bankName: 'Bank of Ceylon', productName: 'BOC Education Loan', interestRate: 8.5, tenure: '1-10 years', loanAmount: 'LKR 50,000 - 2,000,000', type: 'Education Loans' },
  { id: 5, bankId: 1, bankName: 'Commercial Bank', productName: 'Dream Home Finance', interestRate: 10.2, tenure: '5-25 years', loanAmount: 'LKR 500,000 - 25,000,000', type: 'Home Loans' },
  { id: 6, bankId: 5, bankName: "People's Bank", productName: "People's Personal Loan", interestRate: 13.0, tenure: '1-6 years', loanAmount: 'LKR 100,000 - 3,000,000', type: 'Personal Loans' },
];

const mockArticles = [
  {
    id: 1,
    title: "Understanding Interest Rates in 2024",
    excerpt: "Everything you need to know about how interest rates affect your loans and savings.",
    content: `Interest rates are the heartbeat of the economy, influencing everything from the cost of your mortgage to the return on your savings account. In 2024, navigating the landscape of interest rates requires a keen understanding of global economic trends and local monetary policies.

    When the Central Bank adjusts its policy rates, commercial banks follow suit. This means that if rates go up, borrowing becomes more expensive, but your savings grow faster. Conversely, lower rates make loans cheaper but reduce the yield on deposits.

    For borrowers, this is the time to lock in fixed rates if you anticipate further hikes. For savers, exploring fixed deposits or high-yield savings accounts can maximize your returns. Understanding these dynamics is crucial for making informed financial decisions that align with your long-term goals.`,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000",
    date: "March 15, 2024",
    author: "Sarah Silva",
    category: "Finance Basics"
  },
  {
    id: 2,
    title: "Top 5 Savings Strategies for Students",
    excerpt: "Learn how to manage your finances effectively while studying.",
    content: `Being a student is an exciting phase of life, but it often comes with financial constraints. Managing your money effectively during these years can set the foundation for a secure financial future. Here are five strategies to help you save more.

    First, create a realistic budget. Track your income and expenses to understand where your money goes. Second, take advantage of student discounts—they are everywhere, from transportation to software subscriptions.

    Third, distinguish between needs and wants. It's okay to treat yourself occasionally, but consistent overspending on non-essentials can lead to debt. Fourth, consider a part-time job or freelance work to supplement your income. Finally, open a savings account and automate small transfers. Even a small amount saved regularly adds up over time.`,
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1000",
    date: "March 10, 2024",
    author: "Rahul Perera",
    category: "Student Life"
  }
];

// Scroll to top on route change component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const addToComparison = (product) => {
    if (selectedProducts.length < 4 && !selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const removeFromComparison = (productId) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <HomePage
                mockBanks={mockBanks}
                productCategories={productCategories}
                mockProducts={mockProducts}
                articles={mockArticles}
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
                setSelectedCategory={setSelectedCategory}
                addToComparison={addToComparison}
                removeFromComparison={removeFromComparison}
                containerVariants={containerVariants}
                itemVariants={itemVariants}
              />
            } />
            <Route path="/explore" element={
              <ExploreProducts
                mockBanks={mockBanks}
                productCategories={productCategories}
                mockProducts={mockProducts}
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
                addToComparison={addToComparison}
                removeFromComparison={removeFromComparison}
              />
            } />
            <Route path="/banks/:bankId" element={
              <BankProducts
                mockBanks={mockBanks}
                mockProducts={mockProducts}
                addToComparison={addToComparison}
                selectedProducts={selectedProducts}
              />
            } />
            <Route path="/article/:id" element={
              <ArticlePage articles={mockArticles} />
            } />
          </Routes>
        </main>

        <Footer />

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-indigo-600 text-white rounded-2xl shadow-2xl hover:bg-indigo-700 transition-all transform hover:scale-110 flex items-center justify-center group"
          >
            <ArrowUp className="h-6 w-6 group-hover:animate-bounce" />
          </button>
        )}
      </div>
    </Router>
  );
};

export default App;
