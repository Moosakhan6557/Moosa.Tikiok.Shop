import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Heart, BarChart2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Mock category data
const categoryData = {
  entertainment: {
    name: 'Entertainment',
    icon: '🎬',
    description: 'Entertainment accounts focused on music, dance, and general entertainment content.',
    accounts: 156,
    headerImage: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  gaming: {
    name: 'Gaming',
    icon: '🎮',
    description: 'Gaming content creators ranging from casual gaming to professional esports.',
    accounts: 89,
    headerImage: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  fashion: {
    name: 'Fashion',
    icon: '👗',
    description: 'Fashion influencers and style content creators with strong engagement.',
    accounts: 124,
    headerImage: 'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  comedy: {
    name: 'Comedy',
    icon: '😂',
    description: 'Humor and comedy accounts creating viral entertaining content.',
    accounts: 178,
    headerImage: 'https://images.pexels.com/photos/7956842/pexels-photo-7956842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  education: {
    name: 'Education',
    icon: '📚',
    description: 'Educational content focused on learning, knowledge sharing, and personal development.',
    accounts: 67,
    headerImage: 'https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  fitness: {
    name: 'Fitness',
    icon: '💪',
    description: 'Health, fitness, and wellness accounts with dedicated followers.',
    accounts: 93,
    headerImage: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
};

// Mock accounts data for each category
const accountsByCategory = {
  entertainment: [
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
    },
    {
      id: 102,
      title: 'Music & Dance Creator',
      followers: '950K',
      likes: '22.3M',
      engagement: '7.8%',
      price: '$4,500',
      category: 'Entertainment',
      description: 'Music and dance-focused account with viral dance challenges and trending music content.',
      image: 'https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 103,
      title: 'Celebrity News Channel',
      followers: '1.2M',
      likes: '27.8M',
      engagement: '7.5%',
      price: '$5,200',
      category: 'Entertainment',
      description: 'Celebrity news and entertainment updates with exclusive content and high engagement.',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  gaming: [
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
    },
    {
      id: 202,
      title: 'Mobile Gaming Creator',
      followers: '780K',
      likes: '18.4M',
      engagement: '7.5%',
      price: '$3,800',
      category: 'Gaming',
      description: 'Mobile gaming content creator with tutorials, gameplay, and mobile esports coverage.',
      image: 'https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 203,
      title: 'Gaming Memes Channel',
      followers: '1.1M',
      likes: '29.3M',
      engagement: '8.9%',
      price: '$5,500',
      category: 'Gaming',
      description: 'Gaming memes and humor account with viral content and strong engagement from the gaming community.',
      image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  fashion: [
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
    },
    {
      id: 302,
      title: 'Streetwear Fashion Creator',
      followers: '920K',
      likes: '21.6M',
      engagement: '7.8%',
      price: '$4,800',
      category: 'Fashion',
      description: 'Streetwear and urban fashion account with lookbooks, style tips, and trend forecasting.',
      image: 'https://images.pexels.com/photos/2728263/pexels-photo-2728263.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 303,
      title: 'Luxury Fashion Channel',
      followers: '750K',
      likes: '17.8M',
      engagement: '7.4%',
      price: '$4,200',
      category: 'Fashion',
      description: 'Luxury fashion content featuring high-end brands, runway coverage, and fashion week events.',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  comedy: [
    {
      id: 401,
      title: 'Comedy Creator Account',
      followers: '2.1M',
      likes: '48.5M',
      engagement: '9.2%',
      price: '$8,800',
      category: 'Comedy',
      description: 'Viral comedy account with original skits, parodies, and humorous content. Consistently high engagement.',
      image: 'https://images.pexels.com/photos/7956842/pexels-photo-7956842.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 402,
      title: 'Standup Comedy Channel',
      followers: '1.4M',
      likes: '33.7M',
      engagement: '8.6%',
      price: '$6,700',
      category: 'Comedy',
      description: 'Standup comedy clips and original comedic content with a growing and engaged audience.',
      image: 'https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 403,
      title: 'Comedy Sketch Creator',
      followers: '1.8M',
      likes: '42.3M',
      engagement: '8.9%',
      price: '$7,900',
      category: 'Comedy',
      description: 'Comedy sketch account with professionally produced humorous videos and character-based content.',
      image: 'https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  education: [
    {
      id: 501,
      title: 'Educational Content Creator',
      followers: '980K',
      likes: '23.6M',
      engagement: '7.9%',
      price: '$5,100',
      category: 'Education',
      description: 'Educational content covering various subjects with engaging and informative videos for learners of all ages.',
      image: 'https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 502,
      title: 'Science Explainer Channel',
      followers: '720K',
      likes: '17.2M',
      engagement: '7.6%',
      price: '$3,900',
      category: 'Education',
      description: 'Science and technology explainer account with simplified concepts and engaging demonstrations.',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 503,
      title: 'Language Learning Creator',
      followers: '650K',
      likes: '15.5M',
      engagement: '7.8%',
      price: '$3,500',
      category: 'Education',
      description: 'Language learning content with lessons, tips, and cultural insights for language enthusiasts.',
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
  fitness: [
    {
      id: 601,
      title: 'Fitness Trainer Account',
      followers: '1.6M',
      likes: '38.2M',
      engagement: '8.7%',
      price: '$7,500',
      category: 'Fitness',
      description: 'Professional fitness trainer account with workout routines, nutrition advice, and fitness challenges.',
      image: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 602,
      title: 'Yoga & Wellness Creator',
      followers: '890K',
      likes: '21.3M',
      engagement: '8.1%',
      price: '$4,600',
      category: 'Fitness',
      description: 'Yoga, meditation, and wellness content with a focus on holistic health and mindfulness practices.',
      image: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 603,
      title: 'Nutrition & Diet Channel',
      followers: '780K',
      likes: '18.7M',
      engagement: '7.9%',
      price: '$4,200',
      category: 'Fitness',
      description: 'Nutrition, healthy recipes, and diet advice from a certified nutritionist with strong audience engagement.',
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ],
};

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

const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [category, setCategory] = useState<any>(null);
  const [accounts, setAccounts] = useState<any[]>([]);
  
  useEffect(() => {
    if (categorySlug && categoryData[categorySlug as keyof typeof categoryData]) {
      setCategory(categoryData[categorySlug as keyof typeof categoryData]);
      setAccounts(accountsByCategory[categorySlug as keyof typeof accountsByCategory] || []);
      
      // Update page title
      document.title = `${categoryData[categorySlug as keyof typeof categoryData].name} TikTok Accounts | TikTrade`;
    }
  }, [categorySlug]);
  
  if (!category) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-8">The category you're looking for doesn't exist or has been removed.</p>
            <Link to="/buy" className="btn-primary">
              Browse All Categories
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section 
        className="relative h-80 flex items-center bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${category.headerImage})` }}
      >
        <div className="absolute inset-0 bg-dark-900/60"></div>
        <div className="container-custom relative z-10 text-white">
          <span className="text-5xl mb-4 block">{category.icon}</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {category.name} TikTok Accounts
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            {category.description}
          </p>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-8 bg-white shadow-md relative z-10">
        <div className="container-custom">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-primary mr-2">{category.accounts}</span>
              <span className="text-gray-600">Available Accounts</span>
            </div>
            
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/buy" className="btn-outline">
                All Categories
              </Link>
              <Link to="/sell" className="btn-primary">
                Sell Your Account
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Accounts Grid Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Available {category.name} Accounts
          </h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {accounts.map((account) => (
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
          
          {accounts.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <h3 className="text-xl font-bold mb-2">No accounts available</h3>
              <p className="text-gray-600 mb-4">
                There are currently no {category.name} accounts available for sale.
              </p>
              <Link to="/buy" className="btn-primary">
                Browse Other Categories
              </Link>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Looking for a {category.name} TikTok Account?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find what you're looking for? Submit a request and we'll notify you when matching accounts become available.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary">
                Submit Request
              </Button>
              <Link to="/sell" className="btn-outline">
                Sell Your Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;