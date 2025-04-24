import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-zinc-800 font-overpass">
      <div className="mx-auto max-w-7xl px-9 xl:pl-28 pb-8 pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-20">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Sententia</h3>
            <p className="text-sm leading-6 text-gray-400">
              Share your thoughts, ideas, and stories with the world.
            </p>
            <div className="flex space-x-6">
              <a target="_blank" href="https://github.com/gaurav1452001/Sententia" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul  className="mt-6 space-y-4">
                  <li>
                    <Link to="/" className="text-sm leading-6 text-gray-400 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/write-blog" className="text-sm leading-6 text-gray-400 hover:text-white">
                      Write
                    </Link>
                  </li>
                  <li>
                    <Link to="/user-blog" className="text-sm leading-6 text-gray-400 hover:text-white">
                      My Blog
                    </Link>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-zinc-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; 2024 Sententia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;