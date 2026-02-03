import { ExternalLink, Calendar } from 'lucide-react';
import { NewsArticle } from '@/app/types';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface NewsCardProps {
  article: NewsArticle;
  darkMode: boolean;
}

export function NewsCard({ article, darkMode }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <article
      className={`rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
        darkMode
          ? 'bg-gray-800 hover:bg-gray-750 shadow-lg shadow-gray-900/50'
          : 'bg-white hover:shadow-xl shadow-md'
      }`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <ImageWithFallback
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Source and Date */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={`text-sm font-medium ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            {article.source.name}
          </span>
          <div className={`flex items-center gap-1 text-xs ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <Calendar className="w-3 h-3" />
            <span>{formatDate(article.publishedAt)}</span>
          </div>
        </div>

        {/* Title */}
        <h2
          className={`text-lg font-semibold mb-2 line-clamp-2 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          {article.title}
        </h2>

        {/* Description */}
        <p
          className={`text-sm mb-4 line-clamp-3 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {article.description}
        </p>

        {/* Read More Link */}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
            darkMode
              ? 'text-blue-400 hover:text-blue-300'
              : 'text-blue-600 hover:text-blue-700'
          }`}
        >
          Read more
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}
