import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  // Update page title on component mount
  useEffect(() => {
    document.title = 'Page Not Found | TikTrade';
  }, []);
  
  return (
    <div className="pt-16">
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="container-custom py-16">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-8">
                <div className="text-8xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                  404
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Page Not Found
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/">
                  <Button 
                    variant="primary" 
                    leftIcon={<Home className="mr-1 h-5 w-5" />}
                  >
                    Back to Home
                  </Button>
                </Link>
                <Link to="/buy">
                  <Button 
                    variant="outline" 
                    leftIcon={<Search className="mr-1 h-5 w-5" />}
                  >
                    Browse Accounts
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;