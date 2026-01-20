// c:\Users\pulen\Downloads\Bank\sl-bank-compare\src\pages\ArticlePage.jsx

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

const ArticlePage = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id));

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Article not found</h2>
          <Link to="/" className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center text-slate-600 hover:text-indigo-600 mb-8 transition-colors font-medium">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <article className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
        <div className="h-64 sm:h-96 overflow-hidden relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white">
            <div className="flex items-center gap-4 mb-3 text-sm sm:text-base opacity-90">
              <span className="bg-indigo-600 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                {article.category}
              </span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {article.date}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold leading-tight text-white">
              {article.title}
            </h1>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-8">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-3">
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{article.author}</p>
                <p className="text-xs text-slate-500">Financial Contributor</p>
              </div>
            </div>
            <div className="flex items-center text-slate-500 text-sm font-medium">
              <Clock className="h-4 w-4 mr-1" />
              5 min read
            </div>
          </div>

          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;
