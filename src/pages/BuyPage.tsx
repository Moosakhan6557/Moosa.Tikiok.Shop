import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronDown, Users, Heart, BarChart2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Mock account data
const accounts = [
  {
    id: 1,
    title: 'Premium Gaming Account',
    followers: '1.2M',
    likes: '28.5M',
    engagement: '8.2%',
    price: '$5,800',
    category: 'Gaming',
    description: 'Established gaming account with strong engagement and loyal followers. Perfect for gaming companies or influencers.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: 'Fashion Influencer Account',
    followers: '845K',
    likes: '19.7M',
    engagement: '7.8%',
    price: '$4,200',
    category: 'Fashion',
    description: 'Popular fashion and lifestyle account with high engagement rate. Great for brands looking to enter the fashion space.',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: 'Comedy Content Creator',
    followers: '2.4M',
    likes: '56.3M',
    engagement: '9.4%',
    price: '$8,500',
    category: 'Comedy',
    description: 'Viral comedy account with massive engagement. Perfect for entertainment brands or comedy creators.',
    image: 'https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    title: 'Educational TikTok Channel',
    followers: '567K',
    likes: '12.8M',
    engagement: '6.9%',
    price: '$3,200',
    category: 'Education',
    description: 'Educational content with strong following among students and professionals. Great for educational brands.',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    title: 'Fitness & Wellness Account',
    followers: '932K',
    likes: '22.1M',
    engagement: '8.7%',
    price: '$4,900',
    category: 'Fitness',
    description: 'Fitness and wellness account with dedicated following. Ideal for fitness brands and health products.',
    image: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    title: 'Travel Content Creator',
    followers: '1.5M',
    likes: '36.2M',
    engagement: '8.1%',
    price: '$6,300',
    category: 'Travel',
    description: 'Popular travel account showcasing destinations worldwide. Perfect for travel brands and tourism boards.',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

// Categories for filtering
const categories = [
  'All Categories',
  'Gaming',
  'Fashion',
  'Comedy',
  'Education',
  'Fitness',
  'Travel',
  'Entertainment',
  'Business',
  'Food',
];

// Price ranges for filtering
const priceRanges = [
  'All Prices',
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $50,000',
  '$50,000+',
];

// Follower ranges for filtering
const followerRanges = [
  'All Followers',
  'Under 100K',
  '100K - 500K',
  '500K - 1M',
  '1M - 5M',
  '5M+',
];

// Sort options
const sortOptions = [
  'Newest',
  'Price: Low to High',
  'Price: High to Low',
  'Followers: Low to High',
  'Followers: High to Low',
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const BuyPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPrice, setSelectedPrice] = useState('All Prices');
  const [selectedFollowers, setSelectedFollowers] = useState('All Followers');
  const [sortBy, setSortBy] = useState('Newest');
  const [showFilters, setShowFilters] = useState(false);
  
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Buy TikTok Accounts | TikTrade';
  }, []);
  
  // Filter accounts based on search and filters
  const filteredAccounts = accounts.filter(account => {
    // Search filter
    if (searchTerm && !account.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (selectedCategory !== 'All Categories' && account.category !== selectedCategory) {
      return false;
    }
    
    return true;
  });
  
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container-custom">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Buy TikTok Accounts
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Browse our curated selection of verified TikTok accounts across various niches and follower ranges.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search & Filter Section */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search accounts by name, niche, or keywords..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter Button (Mobile) */}
            <div className="md:hidden">
              <Button 
                variant="outline" 
                fullWidth 
                onClick={() => setShowFilters(!showFilters)}
                rightIcon={<Filter className="h-5 w-5" />}
              >
                Filters
              </Button>
            </div>
            
            {/* Category Dropdown (Desktop) */}
            <div className="hidden md:block relative">
              <select
                className="appearance-none w-48 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            {/* Sort Dropdown (Desktop) */}
            <div className="hidden md:block relative">
              <select
                className="appearance-none w-48 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          
          {/* Mobile Filters (Collapsible) */}
          {showFilters && (
            <div className="mt-4 p-4 border border-gray-200 rounded-xl bg-gray-50 md:hidden">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price Range
                  </label>
                  <select
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                  >
                    {priceRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Followers
                  </label>
                  <select
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                    value={selectedFollowers}
                    onChange={(e) => setSelectedFollowers(e.target.value)}
                  >
                    {followerRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sort By
                  </label>
                  <select
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    {sortOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => {
                    setSelectedCategory('All Categories');
                    setSelectedPrice('All Prices');
                    setSelectedFollowers('All Followers');
                    setSortBy('Newest');
                  }}
                >
                  Reset Filters
                </Button>
                <Button 
                  variant="primary" 
                  size="sm" 
                  onClick={() => setShowFilters(false)}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Desktop Sidebar + Results Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar (Desktop) */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-32">
                <h3 className="text-lg font-bold mb-4">Filters</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Category</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <input
                            type="radio"
                            id={`category-${category}`}
                            name="category"
                            className="h-4 w-4 text-primary focus:ring-primary"
                            checked={selectedCategory === category}
                            onChange={() => setSelectedCategory(category)}
                          />
                          <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Price Range</h4>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <div key={range} className="flex items-center">
                          <input
                            type="radio"
                            id={`price-${range}`}
                            name="price"
                            className="h-4 w-4 text-primary focus:ring-primary"
                            checked={selectedPrice === range}
                            onChange={() => setSelectedPrice(range)}
                          />
                          <label htmlFor={`price-${range}`} className="ml-2 text-sm text-gray-700">
                            {range}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Followers</h4>
                    <div className="space-y-2">
                      {followerRanges.map((range) => (
                        <div key={range} className="flex items-center">
                          <input
                            type="radio"
                            id={`followers-${range}`}
                            name="followers"
                            className="h-4 w-4 text-primary focus:ring-primary"
                            checked={selectedFollowers === range}
                            onChange={() => setSelectedFollowers(range)}
                          />
                          <label htmlFor={`followers-${range}`} className="ml-2 text-sm text-gray-700">
                            {range}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    fullWidth
                    onClick={() => {
                      setSelectedCategory('All Categories');
                      setSelectedPrice('All Prices');
                      setSelectedFollowers('All Followers');
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Results */}
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">
                  {filteredAccounts.length} Accounts Available
                </h2>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredAccounts.map((account) => (
                  <motion.div key={account.id} variants={itemVariants}>
                    <Link to={`/account/${account.id}`}>
                      <Card className="h-full overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={account.image} 
                            alt={account.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                              {account.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">{account.title}</h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{account.description}</p>
                          
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="flex flex-col items-center">
                              <Users className="h-5 w-5 text-primary mb-1" />
                              <p className="font-bold">{account.followers}</p>
                              <p className="text-gray-500 text-xs">Followers</p>
                            </div>
                            <div className="flex flex-col items-center">
                              <Heart className="h-5 w-5 text-primary mb-1" />
                              <p className="font-bold">{account.likes}</p>
                              <p className="text-gray-500 text-xs">Likes</p>
                            </div>
                            <div className="flex flex-col items-center">
                              <BarChart2 className="h-5 w-5 text-primary mb-1" />
                              <p className="font-bold">{account.engagement}</p>
                              <p className="text-gray-500 text-xs">Engagement</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <span className="text-2xl font-bold text-primary">{account.price}</span>
                            <Button variant="outline" size="sm">View Details</Button>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              
              {filteredAccounts.length === 0 && (
                <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">No accounts found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your filters or search terms to find TikTok accounts.
                  </p>
                  <Button 
                    variant="primary"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All Categories');
                      setSelectedPrice('All Prices');
                      setSelectedFollowers('All Followers');
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyPage;