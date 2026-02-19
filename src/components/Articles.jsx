import { catArticles, dogArticles } from "./articlesData";
import { Link } from "react-router-dom";

import "./Articles.css";

const Articles = () => {
    return (
        <div className="articles-page">
            <h1 className="articles-title">Pet Care Articles</h1>
            <div className="articles-section">
                <h2 className="articles-section-title">Dog Articles</h2>
                <div className="articles-cards-row">
                    {dogArticles.map(article => (
                        <Link to={article.link} className="article-card-link" key={article.id}>
                            <div className="article-card">
                                <div className="article-image" style={{ backgroundImage: `url('${article.image}')` }}></div>
                                <div className="article-info">
                                    <div className="article-date">{article.date}</div>
                                    <div className="article-title">{article.title}</div>
                                    <div className="article-extract">{article.summary}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="articles-section">
                <h2 className="articles-section-title">Cat Articles</h2>
                <div className="articles-cards-row">
                    {catArticles.map(article => (
                        <Link to={article.link} className="article-card-link" key={article.id}>
                            <div className="article-card">
                                <div className="article-image" style={{ backgroundImage: `url('${article.image}')` }}></div>
                                <div className="article-info">
                                    <div className="article-date">{article.date}</div>
                                    <div className="article-title">{article.title}</div>
                                    <div className="article-extract">{article.summary}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Articles;