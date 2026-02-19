
import React, { useMemo } from 'react';
import "./Home.css";
import { Link } from "react-router-dom";

import { allArticles } from "./articlesData";

const Home = () => {

    // No transition or timer needed for a single image


    // Set the IDs of the featured articles here for easy change
    const FEATURED_ARTICLE_IDS = [
        "dog_article_1", // How to Care for Your Dog
        "cat_article_2", // Litter Training Your Cat
        "dog_article_2"  // Dog Training 101
    ];
    // You can change these IDs to any valid article id from allArticles

    // Find the articles by unique id
    const featuredArticles = FEATURED_ARTICLE_IDS.map(id =>
        allArticles.find(article => article.id === id)
    ).filter(Boolean);

    return (
        <div className="home-container">
            <div className="section hero-section">
                <div className="hero-bg-stack">
                    <div className="hero-bg"></div>
                    <div className="hero-content">
                        <h1>Welcome to Pet Haven</h1>
                        <p>
                            Pet Haven is dedicated to improving the lives of animals in our community. Discover resources, adoption opportunities, and support for pet owners and animal lovers.
                        </p>
                    </div>
                </div>
            </div>
            <hr className="section-divider" />
            <div className="section petcare-section">
                <h2 className="section-title">Pet Care</h2>
                <div className="article-cards">
                    {featuredArticles.map(article => (
                        <Link to={article.link} className="article-card-link" key={article.link} tabIndex={0} role="button">
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
                <Link to="/articles" className="view-all-link">View All</Link>
            </div>
            <hr className="section-divider" />
            <div className="section adopt-release-section">
                <div className="adopt-release-bg" style={{ '--house-bg': `url(/house.svg)` }}>
                    <div className="adopt-release-split adopt-split" onClick={() => window.location.href = '/adoption'} tabIndex={0} role="button">
                        <div className="adopt-hover-content">
                            <img className="adopt-pet face-opposite" src="/adopt.svg" alt="Adopt pet" />
                            <div className="adopt-info info-delayed">
                                <h3>Adopt a Pet</h3>
                                <p>Give a loving home to a pet in need. Click here to start the adoption process and welcome a new friend into your family!</p>
                            </div>
                        </div>
                    </div>
                    <div className="adopt-release-split release-split" onClick={() => window.location.href = '/release'} tabIndex={0} role="button">
                        <div className="release-hover-content">
                            <img className="release-pet face-opposite" src="/release.svg" alt="Release pet" />
                            <div className="release-info info-delayed">
                                <h3>Release a Pet</h3>
                                <p>If you can no longer care for your pet, we’re here to help. Click here to begin the safe release process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;