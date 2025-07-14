import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import { blogArticles } from "@/data/blogArticles";

const BlogArticle = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentIndex = blogArticles.findIndex((article) => article.id === id);
  const article = blogArticles[currentIndex];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-centre">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Article Not Found
            </h1>
            <button
              onClick={() => navigate("/")}
              className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colours"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const previousArticle =
    currentIndex > 0 ? blogArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < blogArticles.length - 1
      ? blogArticles[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-centre gap-2 text-blue-800 hover:text-blue-600 mb-8 transition-colours"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        {/* Cover Image */}
        <div className="h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden mb-8">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-centre gap-6 text-gray-600">
            <div className="flex items-centre gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-centre gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
            <span>{article.date}</span>
          </div>
        </header>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none text-gray-700 mb-12"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <a
          href="https://share.google/SUTyWWduaIEwU25z7"
          className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colours"
        >
          Book an Appointment
        </a>

        {/* Navigation */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {previousArticle ? (
              <button
                onClick={() => navigate(`/blog/${previousArticle.id}`)}
                className="flex items-centre gap-2 text-blue-800 hover:text-blue-600 transition-colours p-4 border border-gray-200 rounded-lg hover:border-blue-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <div className="text-left">
                  <div className="text-sm text-gray-500">Previous Article</div>
                  <div className="font-semibold">{previousArticle.title}</div>
                </div>
              </button>
            ) : (
              <div></div>
            )}

            {nextArticle ? (
              <button
                onClick={() => navigate(`/blog/${nextArticle.id}`)}
                className="flex items-centre gap-2 text-blue-800 hover:text-blue-600 transition-colours p-4 border border-gray-200 rounded-lg hover:border-blue-300 md:text-right"
              >
                <div className="text-left md:text-right">
                  <div className="text-sm text-gray-500">Next Article</div>
                  <div className="font-semibold">{nextArticle.title}</div>
                </div>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogArticle;
