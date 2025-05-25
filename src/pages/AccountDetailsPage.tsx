import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Heart, BarChart2, DollarSign, Eye, Clock, ShieldCheck, ChevronRight, Info } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

// Combine all mock accounts from different categories
const allAccounts = [
  // Entertainment
  {
    id: 101,
    title: 'Premium Entertainment Channel',
    followers: '1.7M',
    likes: '36.2M',
    engagement: '8.4%',
    price: '$6,800',
    category: 'Entertainment',
    description: 'Popular entertainment account with a focus on music, dance, and celebrity content. High engagement rate with a diverse audience.',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    contentType: 'Music, Dance, Celebrity',
    audience: '18-34 years, 65% female',
    postFrequency: 'Daily (1-2 posts)',
    averageViews: '350K-500K',
    accountAge: '2.5 years',
    monetized: true,
    brandDeals: true,
    verifiedStatus: false,
  },
  // Gaming
  {
    id: 201,
    title: 'Professional Gaming Account',
    followers: '1.5M',
    likes: '32.7M',
    engagement: '8.6%',
    price: '$7,200',
    category: 'Gaming',
    description: 'Professional gaming account featuring gameplay, tips, and esports content across multiple popular games.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600',
    contentType: 'Gameplay, Tips, Esports',
    audience: '16-28 years, 80% male',
    postFrequency: 'Daily (2-3 posts)',
    averageViews: '400K-600K',
    accountAge: '3 years',
    monetized: true,
    brandDeals: true,
    verifiedStatus: true,
  },
  // Fashion
  {
    id: 301,
    title: 'Fashion Influencer Account',
    followers: '1.3M',
    likes: '31.5M',
    engagement: '8.2%',
    price: '$6,500',
    category: 'Fashion',
    description: 'Established fashion influencer account with brand partnerships and high-quality fashion content.',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600',
    contentType: 'Fashion, Style, Trends',
    audience: '18-35 years, 75% female',
    postFrequency: 'Daily (1-2 posts)',
    averageViews: '300K-450K',
    accountAge: '2 years',
    monetized: true,
    brandDeals: true,
    verifiedStatus: false,
  },
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
    contentType: 'Gaming, Tutorials, Reviews',
    audience: '16-30 years, 75% male',
    postFrequency: 'Daily (1-2 posts)',
    averageViews: '250K-400K',
    accountAge: '2 years',
    monetized: true,
    brandDeals: true,
    verifiedStatus: false,
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
    contentType: 'Fashion, Lifestyle, Beauty',
    audience: '18-35 years, 85% female',
    postFrequency: 'Daily (1 post)',
    averageViews: '150K-250K',
    accountAge: '1.5 years',
    monetized: true,
    brandDeals: true,
    verifiedStatus: false,
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
    contentType: 'Comedy, Skits, Parodies',
    audience: '18-40 years, 60% male, 40% female',
    postFrequency: 'Daily (2-3 posts)',
    averageViews: '500K-1M',
    accountAge: '3 years',
    monetized: true,
    brandDeals: true,
    verifiedStatus: true,
  },
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Related accounts based on category
const getRelatedAccounts = (currentAccount: any, limit = 3) => {
  return allAccounts
    .filter(account => 
      account.category === currentAccount.category && 
      account.id !== currentAccount.id
    )
    .slice(0, limit);
};

const AccountDetailsPage: React.FC = () => {
  const { accountId } = useParams<{ accountId: string }>();
  const [account, setAccount] = useState<any>(null);
  const [relatedAccounts, setRelatedAccounts] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    if (accountId) {
      const foundAccount = allAccounts.find(acc => acc.id.toString() === accountId);
      if (foundAccount) {
        setAccount(foundAccount);
        setRelatedAccounts(getRelatedAccounts(foundAccount));
        
        // Update page title
        document.title = `${foundAccount.title} | TikTrade`;
      }
    }
  }, [accountId]);
  
  if (!account) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Account Not Found</h1>
            <p className="text-gray-600 mb-8">The account you're looking for doesn't exist or has been sold.</p>
            <Link to="/buy" className="btn-primary">
              Browse Available Accounts
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-16">
      {/* Header with Image */}
      <section className="bg-gradient-to-r from-primary to-secondary py-8">
        <div className="container-custom">
          <Link to={`/category/${account.category.toLowerCase()}`} className="inline-flex items-center text-white opacity-80 hover:opacity-100 mb-4">
            <ChevronRight className="mr-1 h-4 w-4 rotate-180" />
            Back to {account.category} Accounts
          </Link>
        </div>
      </section>
      
      {/* Account Details */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Image and Price */}
            <motion.div 
              className="lg:col-span-1"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <Card className="overflow-hidden">
                <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                  <img 
                    src={account.image} 
                    alt={account.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                      {account.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-primary">{account.price}</span>
                    <Button variant="primary" size="lg">
                      Buy Now
                    </Button>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>Listed 2 days ago</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Eye className="h-5 w-5 mr-2" />
                      <span>234 views</span>
                    </div>
                  </div>
                </div>
              </Card>
              
              <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <ShieldCheck className="h-5 w-5 text-primary mr-2" />
                  Secure Purchase
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Secure escrow payment system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Verified account metrics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Guided transfer process</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700">24/7 support during transfer</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  fullWidth
                  leftIcon={<Info className="h-5 w-5" />}
                >
                  Ask a Question
                </Button>
              </div>
            </motion.div>
            
            {/* Right Column - Details */}
            <motion.div 
              className="lg:col-span-2"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h1 className="text-3xl font-bold mb-2">
                  {account.title}
                </h1>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <span><span className="font-bold">{account.followers}</span> Followers</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Heart className="h-5 w-5 text-primary mr-2" />
                    <span><span className="font-bold">{account.likes}</span> Likes</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <BarChart2 className="h-5 w-5 text-primary mr-2" />
                    <span><span className="font-bold">{account.engagement}</span> Engagement</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className={`text-gray-700 ${!isExpanded && 'line-clamp-3'}`}>
                    {account.description}
                  </p>
                  {account.description.length > 150 && (
                    <button 
                      className="text-primary font-medium mt-2"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </div>
                
                {/* Tabs */}
                <div className="border-b border-gray-200 mb-6">
                  <div className="flex overflow-x-auto">
                    <button
                      className={`py-2 px-4 font-medium border-b-2 ${
                        activeTab === 'overview' 
                          ? 'border-primary text-primary' 
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveTab('overview')}
                    >
                      Overview
                    </button>
                    <button
                      className={`py-2 px-4 font-medium border-b-2 ${
                        activeTab === 'analytics' 
                          ? 'border-primary text-primary' 
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveTab('analytics')}
                    >
                      Analytics
                    </button>
                    <button
                      className={`py-2 px-4 font-medium border-b-2 ${
                        activeTab === 'purchase' 
                          ? 'border-primary text-primary' 
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActiveTab('purchase')}
                    >
                      Purchase Info
                    </button>
                  </div>
                </div>
                
                {/* Tab Content */}
                <div>
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-500 mb-1">Content Type</p>
                          <p className="font-medium">{account.contentType}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-500 mb-1">Audience</p>
                          <p className="font-medium">{account.audience}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-500 mb-1">Post Frequency</p>
                          <p className="font-medium">{account.postFrequency}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-500 mb-1">Average Views</p>
                          <p className="font-medium">{account.averageViews}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-500 mb-1">Account Age</p>
                          <p className="font-medium">{account.accountAge}</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-500 mb-1">Monetized</p>
                          <p className="font-medium">{account.monetized ? 'Yes' : 'No'}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold mb-3">Account Benefits</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-700">Established {account.category.toLowerCase()} presence with loyal followers</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-700">High engagement rate of {account.engagement}</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-700">{account.brandDeals ? 'Previous brand collaborations' : 'Great potential for brand collaborations'}</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-700">Consistent content style and posting schedule</span>
                          </li>
                          {account.verifiedStatus && (
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                              <span className="text-gray-700">Verified account status</span>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'analytics' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold mb-3">Audience Demographics</h3>
                        <div className="p-4 bg-gray-50 rounded-lg mb-4">
                          <p className="font-medium mb-2">Age Distribution</p>
                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-gray-600">13-17</span>
                                <span className="text-sm text-gray-600">15%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: '15%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-gray-600">18-24</span>
                                <span className="text-sm text-gray-600">40%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-gray-600">25-34</span>
                                <span className="text-sm text-gray-600">30%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: '30%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-gray-600">35+</span>
                                <span className="text-sm text-gray-600">15%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: '15%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <p className="font-medium mb-2">Gender</p>
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-4 mr-2">
                                <div className="bg-primary h-4 rounded-l-full" style={{ width: account.category === 'Gaming' ? '80%' : account.category === 'Fashion' ? '25%' : '60%' }}></div>
                              </div>
                              <span className="text-sm whitespace-nowrap">
                                {account.category === 'Gaming' ? '80% Male' : account.category === 'Fashion' ? '25% Male' : '60% Male'}
                              </span>
                            </div>
                            <div className="flex items-center mt-2">
                              <div className="w-full bg-gray-200 rounded-full h-4 mr-2">
                                <div className="bg-secondary h-4 rounded-l-full" style={{ width: account.category === 'Gaming' ? '20%' : account.category === 'Fashion' ? '75%' : '40%' }}></div>
                              </div>
                              <span className="text-sm whitespace-nowrap">
                                {account.category === 'Gaming' ? '20% Female' : account.category === 'Fashion' ? '75% Female' : '40% Female'}
                              </span>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <p className="font-medium mb-2">Top Locations</p>
                            <div className="space-y-2">
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm text-gray-600">United States</span>
                                  <span className="text-sm text-gray-600">45%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm text-gray-600">United Kingdom</span>
                                  <span className="text-sm text-gray-600">15%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div className="bg-primary h-2 rounded-full" style={{ width: '15%' }}></div>
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm text-gray-600">Canada</span>
                                  <span className="text-sm text-gray-600">10%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div className="bg-primary h-2 rounded-full" style={{ width: '10%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold mb-3">Growth Analytics</h3>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="font-medium mb-2">Monthly Growth (Last 6 Months)</p>
                          <div className="h-40 flex items-end justify-between">
                            {[15, 20, 18, 25, 30, 28].map((percentage, index) => (
                              <div key={index} className="w-1/6 px-1 flex flex-col items-center">
                                <div 
                                  className="w-full bg-primary rounded-t-sm" 
                                  style={{ height: `${percentage * 3}px` }}
                                ></div>
                                <span className="text-xs text-gray-600 mt-1">
                                  {['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'][index]}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'purchase' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold mb-3">Purchase Process</h3>
                        <ol className="space-y-4">
                          <li className="flex items-start">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold shrink-0 mt-0.5 mr-3">1</span>
                            <div>
                              <h4 className="font-bold">Make Your Purchase</h4>
                              <p className="text-gray-700">Click the "Buy Now" button and complete your payment. Your payment will be held in escrow until the transfer is complete.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold shrink-0 mt-0.5 mr-3">2</span>
                            <div>
                              <h4 className="font-bold">Connect with the Seller</h4>
                              <p className="text-gray-700">Our team will connect you with the seller and provide guidance throughout the transfer process.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold shrink-0 mt-0.5 mr-3">3</span>
                            <div>
                              <h4 className="font-bold">Secure Account Transfer</h4>
                              <p className="text-gray-700">Follow our secure transfer protocol to safely receive the account credentials and access.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold shrink-0 mt-0.5 mr-3">4</span>
                            <div>
                              <h4 className="font-bold">Verification Period</h4>
                              <p className="text-gray-700">You'll have 48 hours to verify that everything is as described and working properly.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm font-bold shrink-0 mt-0.5 mr-3">5</span>
                            <div>
                              <h4 className="font-bold">Payment Release</h4>
                              <p className="text-gray-700">Once you confirm everything is satisfactory, the payment will be released to the seller.</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      
                      <div className="p-6 bg-primary/10 rounded-xl">
                        <h3 className="text-lg font-bold mb-3 flex items-center">
                          <ShieldCheck className="h-5 w-5 text-primary mr-2" />
                          Buyer Protection
                        </h3>
                        <p className="text-gray-700 mb-4">
                          All purchases come with our comprehensive buyer protection:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-700">Secure escrow payment system</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-700">Verification period to ensure account quality</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-700">Dedicated support throughout the transfer process</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                            <span className="text-gray-700">Full refund if account metrics don't match description</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Similar {account.category} Accounts</h3>
                  <Link to={`/category/${account.category.toLowerCase()}`} className="text-primary font-medium">
                    View More
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedAccounts.map((relatedAccount) => (
                    <Link key={relatedAccount.id} to={`/account/${relatedAccount.id}`}>
                      <Card className="h-full overflow-hidden" animateHover={false}>
                        <div className="relative h-32 overflow-hidden">
                          <img 
                            src={relatedAccount.image} 
                            alt={relatedAccount.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-sm mb-1 line-clamp-1">{relatedAccount.title}</h4>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-600">{relatedAccount.followers} Followers</span>
                            <span className="font-bold text-primary">{relatedAccount.price}</span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Own This {account.category} Account?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Don't miss this opportunity to acquire a high-performing TikTok account with established followers and engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="primary" 
                size="lg"
                rightIcon={<DollarSign className="ml-1 h-5 w-5" />}
              >
                Buy for {account.price}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                leftIcon={<Info className="mr-1 h-5 w-5" />}
              >
                Ask a Question
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountDetailsPage;