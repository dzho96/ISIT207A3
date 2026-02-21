import React from "react";
import { useParams, Link } from "react-router-dom";
import { allArticles, videoArticles } from "./articlesData";
import "./ArticlePage.css";

const ArticlePage = ({ type }) => {
  const { id } = useParams();
  // Find the article by id and type
  let article = allArticles.find(
    (a) => a.id === id && a.id.startsWith(type)
  );

  // If it's a video article, get the video data
  let video = null;
  if (type === "video") {
    video = videoArticles.find((v) => v.id === id);
    article = video;
  }

  if (!article) {
    return <div className="article-page"><h2>Article not found</h2></div>;
  }

  return (
    <div className="article-page">
      <nav className="breadcrumb-nav">
        <Link to="/articles" className="breadcrumb-link">Articles</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-category">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{article.title}</span>
      </nav>
      <div className="article-container">
        <div className="article-header">
          <h1 className="article-title">{article.title}</h1>
          <div className="article-date">{article.date}</div>
        </div>
        {type === "video" && video ? (
          <div className="article-video-frame">
            <iframe
              width="100%"
              height="360"
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="article-image-large" style={{ backgroundImage: `url('${article.image}')` }}></div>
        )}
          <div className="article-body">
            <span>{article.body}</span>
          </div>
      </div>
    </div>
  );
};

export default ArticlePage;
