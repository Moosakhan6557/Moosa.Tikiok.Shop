import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, ShieldCheck, DollarSign, ChevronRight } from 'lucide-react';
import ThreeScene from '../components/3d/ThreeScene';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Fake testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Content Creator',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Sold my gaming account for 3x what I expected. The process was smooth and secure!',
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Digital Marketer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Bought a fashion account to expand my brand. The metrics were accurate and the transfer was seamless.',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Entrepreneur',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Found the perfect niche account for my business. Great service and support throughout the process.',
  },
];

// Featured account categories
const categories = [
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: '🎬',
    accounts: 156,
    description: 'Music, dance, and entertainment accounts with engaged followers',
  },
  {
    id: 'gaming',
    name: 'Gaming',
    icon: '🎮',
    accounts: 89,
    description: 'Gaming content creators from casual to professional esports',
  },
  {
    id: 'fashion',
    name: 'Fashion',
    icon: '👗',
    accounts: 124,
    description: 'Style, beauty, and fashion trend accounts with strong engagement',
  },
  {
    id: 'comedy',
    name: 'Comedy',
    icon: '😂',
    accounts: 178,
    description: 'Humor and comedy accounts with viral potential',
  },
  {
    id: 'education',
    name: 'Education',
    icon: '📚',
    accounts: 67,
    description: 'Educational content focused on learning and personal development',
  },
  {
    id: 'fitness',
    name: 'Fitness',
    icon: '💪',
    accounts: 93,
    description: 'Health, fitness, and wellness accounts with dedicated followers',
  },
];

// Featured accounts
const featuredAccounts = [
  {
    id: 1,
    title: 'Premium Gaming Account',
    followers: '1.2M',
    likes: '28.5M',
    engagement: '8.2%',
    price: '$5,800',
    category: 'Gaming',
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
    image: 'https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

const HomePage: React.FC = () => {
  // Update page title on component mount
  useEffect(() => {
    document.title = 'TikTrade | Buy & Sell TikTok Accounts';
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container-custom py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="z-10"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                The #1 TikTok Account Marketplace
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Buy & Sell <span className="text-primary">TikTok</span> Accounts With <span className="text-secondary">Confidence</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Premium marketplace for verified TikTok accounts across all niches. 
                Get fair prices, secure transfers, and complete peace of mind.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/buy" className="btn-primary">
                  Browse Accounts
                </Link>
                <Link to="/sell" className="btn-outline">
                  Sell Your Account
                </Link>
              </div>
              
              <div className="mt-10 flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {testimonials.map((testimonial) => (
                    <img 
                      key={testimonial.id}
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      <span className="font-bold">4.9/5</span> from 2,800+ reviews
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 h-[500px]">
                <ThreeScene height="500px" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl -z-10 transform translate-x-1/3 translate-y-1/3"></div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Safest Way to Buy & Sell TikTok Accounts
            </h2>
            <p className="text-lg text-gray-600">
              Our platform provides a secure, transparent, and efficient marketplace for TikTok account transactions.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="card p-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Transfers</h3>
              <p className="text-gray-600">
                Our escrow system ensures both buyers and sellers are protected throughout the transaction process.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="card p-8">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Metrics</h3>
              <p className="text-gray-600">
                All account metrics are verified and authenticated to ensure you get exactly what you pay for.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="card p-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fair Pricing</h3>
              <p className="text-gray-600">
                Our valuation algorithm ensures accounts are priced fairly based on followers, engagement, and niche.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="card p-8">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Our team of experts is available 24/7 to assist with any questions or issues during the process.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Browse by Category
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Discover Accounts by Niche
              </h2>
            </div>
            <Link to="/buy" className="group mt-4 md:mt-0 inline-flex items-center text-primary font-medium">
              View All Categories
              <ChevronRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {categories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <Link to={`/category/${category.id}`}>
                  <Card className="p-6 h-full">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-4xl mb-4 block">{category.icon}</span>
                        <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                        <p className="text-gray-600 mb-4">{category.description}</p>
                        <span className="text-primary font-medium">{category.accounts} accounts available</span>
                      </div>
                      <span className="text-gray-300 text-3xl font-bold">{categories.indexOf(category) + 1}</span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Featured Accounts Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
                Featured Listings
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Popular Accounts For Sale
              </h2>
            </div>
            <Link to="/buy" className="group mt-4 md:mt-0 inline-flex items-center text-primary font-medium">
              Browse All Accounts
              <ChevronRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {featuredAccounts.map((account) => (
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
                      <h3 className="text-xl font-bold mb-3">{account.title}</h3>
                      
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">Followers</p>
                          <p className="font-bold text-lg">{account.followers}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">Likes</p>
                          <p className="font-bold text-lg">{account.likes}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-500 text-sm">Engagement</p>
                          <p className="font-bold text-lg">{account.engagement}</p>
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
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of satisfied users who have successfully bought and sold TikTok accounts on our platform.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <Card className="p-8 h-full">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-700">{testimonial.content}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Buy or Sell a TikTok Account?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join our platform today and experience the safest and most efficient way to trade TikTok accounts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/buy" className="btn bg-white text-primary hover:bg-gray-100">
                Browse Accounts
              </Link>
              <Link to="/sell" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
                Sell Your Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;