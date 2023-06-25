import { Link } from 'react-router-dom';
import { Page } from '../components/layout/Page';

const Home = () => {
  return (
    <Page title={'Home'}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-orange-500 text-white">
        <div className="p-8 rounded-lg shadow-lg bg-pink-400 text-center">
          <h1 className="text-6xl mb-8">Welcome to Riley's Portfolio</h1>
          <p className="mb-8 text-lg">
            Discover my work, skills, and professional experience
          </p>
        </div>

        <div className="p-8 mt-8 rounded-lg shadow-lg bg-orange-400 text-center">
          <h2 className="text-4xl mb-8">My Work</h2>
          <p className="mb-8 text-lg">
            Explore my projects and experience in the portfolio
          </p>
          <Link
            to="/shop"
            className="px-4 py-2 bg-white text-orange-500 rounded hover:bg-orange-300 transition-colors"
          >
            Go to Portfolio
          </Link>
        </div>

        <div className="p-8 mt-8 rounded-lg shadow-lg bg-orange-400 text-center">
          <h2 className="text-4xl mb-8">Contact Me</h2>
          <p className="mb-8 text-lg">
            Get in touch for collaborations or any inquiries
          </p>
          <Link
            to="/contact"
            className="px-4 py-2 bg-white text-orange-500 rounded hover:bg-orange-300 transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="absolute bottom-0 p-4">
          <p>Coming Soon in 2024</p>
        </div>
      </div>
    </Page>
  );
};

export default Home;
