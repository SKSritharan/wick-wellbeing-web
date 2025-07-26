import React from "react";
import { Clock, User } from "lucide-react";
import { BlogArticle } from "@/data/blogArticles";

interface BlogCardProps {
  article: BlogArticle;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ article, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={onClick}
    >
      <div className="h-48 bg-gray-200">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {article.title}
        </h3>
        <div
          className="text-gray-600 mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: article.excerpt }}
        />
        <div className="flex items-centre justify-between text-sm text-gray-500">
          <div className="flex items-centre gap-1">
            <User className="w-4 h-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-centre gap-1">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-500">{article.date}</div>
      </div>
    </div>
  );
};

export default BlogCard;
