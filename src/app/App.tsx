import { useState, useEffect } from 'react';
import { Moon, Sun, Newspaper } from 'lucide-react';
import { NewsCard } from '@/app/components/NewsCard';
import { NewsArticle } from '@/app/types';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Fetch news articles
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);      
      // To use the real API, uncomment the lines below and replace YOUR_API_KEY_HERE with your actual News API key
      // You can get a free API key at https://newsapi.org/
      /*
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY_HERE');
      const data = await response.json();
      if (data.articles) {
        setArticles(data.articles);
      }
      */
      
      // Mock data for demonstration (remove this when using real API)
      setTimeout(() => {
        setArticles(mockArticles);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-10 ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border-b transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Newspaper className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                DevFeed
              </h1>
            </div>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin mx-auto mb-4"></div>
              <p>Loading news...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} darkMode={darkMode} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// Mock data matching News API structure
const mockArticles: NewsArticle[] = [
  {
    title: "React 19 Released with Major Performance Improvements",
    description: "The React team announces the stable release of React 19, featuring automatic batching, transitions, and improved server components.",
    url: "https://example.com/react-19",
    urlToImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    publishedAt: "2026-02-03T10:00:00Z",
    source: { name: "Tech News Daily" }
  },
  {
    title: "TypeScript 5.5 Introduces New Type System Features",
    description: "Microsoft releases TypeScript 5.5 with enhanced type inference, better error messages, and improved performance for large codebases.",
    url: "https://example.com/typescript-5-5",
    urlToImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
    publishedAt: "2026-02-02T15:30:00Z",
    source: { name: "Developer Weekly" }
  },
  {
    title: "AI-Powered Code Review Tools Gain Popularity",
    description: "New AI assistants are helping developers catch bugs and improve code quality through intelligent analysis and suggestions.",
    url: "https://example.com/ai-code-review",
    urlToImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    publishedAt: "2026-02-02T09:15:00Z",
    source: { name: "Code Today" }
  },
  {
    title: "WebAssembly 2.0 Specification Finalized",
    description: "The W3C announces the completion of WebAssembly 2.0, bringing new features like garbage collection and multi-threading support.",
    url: "https://example.com/wasm-2",
    urlToImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    publishedAt: "2026-02-01T14:20:00Z",
    source: { name: "Web Standards News" }
  },
  {
    title: "Node.js 22 LTS Released with Enhanced Security",
    description: "The latest Long Term Support version of Node.js includes built-in security features and performance optimizations.",
    url: "https://example.com/nodejs-22",
    urlToImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800",
    publishedAt: "2026-02-01T11:45:00Z",
    source: { name: "JavaScript Weekly" }
  },
  {
    title: "CSS Grid Level 3 Brings Masonry Layout Support",
    description: "Browser vendors agree on implementing masonry layouts natively in CSS Grid, eliminating the need for JavaScript libraries.",
    url: "https://example.com/css-grid-3",
    urlToImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800",
    publishedAt: "2026-01-31T16:00:00Z",
    source: { name: "Frontend Focus" }
  }
];