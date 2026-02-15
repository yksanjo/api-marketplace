'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Store, CreditCard, Shield, Zap, Star, ExternalLink, Check } from 'lucide-react';

const sampleApis = [
  {
    id: '1',
    name: 'OpenWeather',
    description: 'Weather data API with forecasts, historical data, and more',
    category: 'Weather',
    pricing: 'Freemium',
    price: '$0',
    rating: 4.7,
    reviews: 1250,
    subscribers: '50K+',
  },
  {
    id: '2',
    name: 'Stripe',
    description: 'Payment processing API for web and mobile applications',
    category: 'Payments',
    pricing: 'Pay-as-you-go',
    price: '2.9% + 30¢',
    rating: 4.9,
    reviews: 3400,
    subscribers: '1M+',
  },
  {
    id: '3',
    name: 'Twilio',
    description: ' communications APIs for SMS, voice, and video',
    category: 'Communications',
    pricing: 'Pay-as-you-go',
    price: '$0.007',
    rating: 4.6,
    reviews: 2100,
    subscribers: '500K+',
  },
  {
    id: '4',
    name: 'SendGrid',
    description: 'Email delivery and marketing API',
    category: 'Email',
    pricing: 'Freemium',
    price: '$0',
    rating: 4.5,
    reviews: 890,
    subscribers: '100K+',
  },
  {
    id: '5',
    name: 'Auth0',
    description: 'Authentication and authorization as a service',
    category: 'Security',
    pricing: 'Freemium',
    price: '$0',
    rating: 4.8,
    reviews: 1800,
    subscribers: '200K+',
  },
  {
    id: '6',
    name: 'Cloudinary',
    description: 'Image and video management API',
    category: 'Media',
    pricing: 'Freemium',
    price: '$0',
    rating: 4.7,
    reviews: 950,
    subscribers: '80K+',
  },
];

const categories = ['All', 'Weather', 'Payments', 'Communications', 'Email', 'Security', 'Media'];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredApis = sampleApis.filter(api => {
    const matchesSearch = !searchQuery || 
      api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || api.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Store className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">API Marketplace</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Browse</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Developers</a>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover & Subscribe to
              <span className="text-blue-600"> Premium APIs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The marketplace for developers to find, compare, and integrate powerful APIs into their applications
            </p>
            
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search APIs..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Secure Payments</h3>
                <p className="text-sm text-gray-600">Secure subscription management with Stripe</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Instant Access</h3>
                <p className="text-sm text-gray-600">Get API keys immediately after subscription</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Flexible Pricing</h3>
                <p className="text-sm text-gray-600">Choose from freemium to enterprise plans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-sm text-gray-500 mb-6">
          Showing {filteredApis.length} APIs
        </p>

        {/* API Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApis.map((api, index) => (
            <motion.div
              key={api.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{api.name}</h3>
                  <span className="text-xs text-gray-500">{api.category}</span>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  api.pricing === 'Freemium' 
                    ? 'bg-green-100 text-green-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {api.pricing}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{api.description}</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>{api.rating}</span>
                  <span>({api.reviews})</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>{api.subscribers}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-lg font-bold text-gray-900">{api.price}</span>
                <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Store className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">API Marketplace</span>
            </div>
            <p className="text-sm">© 2026 API Marketplace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
