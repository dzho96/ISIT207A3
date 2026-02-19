import React from "react";
import { useParams } from "react-router-dom";
import { allArticles } from "./articlesData";
import "./ArticlePage.css";

const ArticlePage = ({ type }) => {
  const { id } = useParams();
  // Find the article by id and type
  const article = allArticles.find(
    (a) => a.id === id && a.id.startsWith(type)
  );

  if (!article) {
    return <div className="article-page"><h2>Article not found</h2></div>;
  }

  return (
    <div className="article-page">
      <div className="article-header">
        <h1 className="article-title">{article.title}</h1>
        <div className="article-date">{article.date}</div>
      </div>
      <div className="article-image-large" style={{ backgroundImage: `url('${article.image}')` }}></div>
      <div className="article-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.</p>
        <p>Aliquam erat volutpat. Etiam ac mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Quisque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.</p>
        <p>Donec euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.</p>
      </div>
    </div>
  );
};

export default ArticlePage;
