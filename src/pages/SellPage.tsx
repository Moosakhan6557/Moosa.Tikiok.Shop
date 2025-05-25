import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, HelpCircle, ChevronRight, Briefcase, BarChart2, Users, CreditCard, Shield } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

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

// FAQ items
const faqItems = [
  {
    question: 'How much can I sell my TikTok account for?',
    answer: 'The value of your TikTok account depends on several factors including follower count, engagement rate, niche, content quality, and monetization potential. Our platform uses an advanced algorithm to provide a fair market valuation based on current trends and recent sales data. Accounts can range from a few hundred dollars to tens of thousands depending on these factors.'
  },
  {
    question: 'Is selling my TikTok account legal?',
    answer: 'While TikTok\'s Terms of Service technically prohibit account transfers, our platform ensures all transactions are conducted securely and discreetly. We\'ve facilitated thousands of successful account transfers without issues. We recommend consulting with a legal professional if you have specific concerns about your situation.'
  },
  {
    question: 'How does the payment process work?',
    answer: 'We use a secure escrow system to protect both buyers and sellers. When a buyer purchases your account, the payment is held in escrow. Once the account is successfully transferred to the buyer and they confirm everything is as described, the funds are released to you. This typically takes 1-3 business days after the transfer is complete.'
  },
  {
    question: 'What information do I need to provide to sell my account?',
    answer: 'You\'ll need to provide your account username, approximate follower count, content niche, engagement metrics, and any monetization details. For the actual transfer, you\'ll need access to the email associated with the account and any two-factor authentication methods. We\'ll guide you through the entire process step by step.'
  },
  {
    question: 'How long does it take to sell a TikTok account?',
    answer: 'The time to sell varies based on your account\'s metrics and market demand. Popular accounts in high-demand niches can sell within days, while others might take a few weeks. On average, accounts sell within 2-3 weeks of listing. Our marketplace attracts serious buyers looking for quality accounts daily.'
  },
];

// Process steps
const processSteps = [
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: 'Submit Your Account',
    description: 'Fill out our simple form with your account details and metrics. We\'ll review your submission within 24 hours.'
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-primary" />,
    title: 'Get a Valuation',
    description: 'Our experts will analyze your account and provide a competitive market valuation based on current trends.'
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Connect with Buyers',
    description: 'Once approved, your account will be listed on our marketplace where verified buyers can view and purchase it.'
  },
  {
    icon: <CreditCard className="h-6 w-6 text-primary" />,
    title: 'Secure Payment',
    description: 'When a buyer purchases your account, payment is secured in escrow while the transfer is completed.'
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Safe Transfer',
    description: 'Our team will guide you through the secure transfer process to ensure everything goes smoothly.'
  },
];

const SellPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    followers: '',
    category: '',
    description: '',
  });
  
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Sell Your TikTok Account | TikTrade';
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Your account has been submitted for review. We will contact you shortly!');
    // Reset form
    setFormData({
      username: '',
      email: '',
      followers: '',
      category: '',
      description: '',
    });
  };
  
  const toggleFaq = (index: number) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sell Your TikTok Account for Top Dollar
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Turn your hard work into cash. Get the best value for your TikTok account with our secure marketplace.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#sell-form" className="btn bg-white text-primary hover:bg-gray-100">
                Get Started
              </a>
              <a href="#how-it-works" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
                Learn More
              </a>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-white mr-2" />
                <span>Verified Buyers</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-white mr-2" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-white mr-2" />
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Why Sell With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Smartest Way to Sell Your TikTok Account
            </h2>
            <p className="text-lg text-gray-600">
              Our platform provides the highest valuations, most secure processes, and fastest sales in the industry.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <Card className="p-8 h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CreditCard className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Maximum Value</h3>
                <p className="text-gray-600">
                  Our valuation algorithm ensures you get the highest market rate for your account based on followers, engagement, and niche.
                </p>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="p-8 h-full">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Secure Process</h3>
                <p className="text-gray-600">
                  Our escrow system protects your payment, and our step-by-step transfer process ensures a smooth handover.
                </p>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="p-8 h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Verified Buyers</h3>
                <p className="text-gray-600">
                  We only work with verified buyers who have been thoroughly vetted, ensuring legitimate and serious inquiries.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How to Sell Your TikTok Account
            </h2>
            <p className="text-lg text-gray-600">
              Our streamlined process makes selling your account simple, secure, and rewarding.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Steps */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-5 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {processSteps.map((step, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 h-full relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                    <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -mt-0.5 z-0"></div>
          </div>
        </div>
      </section>
      
      {/* Sell Form Section */}
      <section id="sell-form" className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Submit Your TikTok Account
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form with your account details and our team will get back to you with a valuation within 24 hours.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Free Valuation</h3>
                    <p className="text-gray-600">Get a free, no-obligation valuation of your TikTok account.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Quick Response</h3>
                    <p className="text-gray-600">Our team will review your submission and respond within 24 hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Confidential Process</h3>
                    <p className="text-gray-600">Your information is kept strictly confidential throughout the process.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-lg mb-4">What Happens Next?</h3>
                <ol className="space-y-3 list-decimal pl-5">
                  <li className="text-gray-700">Our team reviews your account details</li>
                  <li className="text-gray-700">We provide a valuation based on market rates</li>
                  <li className="text-gray-700">You decide whether to list your account</li>
                  <li className="text-gray-700">Once listed, verified buyers can make offers</li>
                  <li className="text-gray-700">You accept an offer and complete the secure transfer</li>
                </ol>
              </div>
            </div>
            
            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Account Details</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                        TikTok Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="@yourusername"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="followers" className="block text-sm font-medium text-gray-700 mb-1">
                        Follower Count
                      </label>
                      <input
                        type="text"
                        id="followers"
                        name="followers"
                        value={formData.followers}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="e.g., 100K, 1.5M"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Account Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                        required
                      >
                        <option value="">Select a category</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Education">Education</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Travel">Travel</option>
                        <option value="Food">Food</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Business">Business</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Account Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Describe your account, content type, audience demographics, and any monetization"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        variant="primary" 
                        fullWidth
                        size="lg"
                      >
                        Submit Account for Valuation
                      </Button>
                      <p className="text-sm text-gray-500 mt-2 text-center">
                        By submitting, you agree to our Terms of Service and Privacy Policy
                      </p>
                    </div>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common Questions About Selling
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to the most common questions about selling your TikTok account.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-bold text-lg">{item.question}</span>
                    <ChevronRight 
                      className={`h-5 w-5 text-primary transition-transform ${expandedFaq === index ? 'transform rotate-90' : ''}`} 
                    />
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="mb-4 text-gray-600">
                Still have questions? We\'re here to help!
              </p>
              <Button variant="primary" rightIcon={<HelpCircle className="ml-1 h-5 w-5" />}>
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Turn Your TikTok Account Into Cash?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Don\'t wait any longer. Get a free valuation today and see how much your account is worth.
            </p>
            <a href="#sell-form" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellPage;