// src/components/articlesData.js


export const catArticles = [
  {
    id: "cat_article_1",
    title: "Cat Nutrition Basics",
    date: "10 February 2026",
    image: "/cat.jpg",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.",
    link: "/articles/cat/cat_article_1"
  },
  {
    id: "cat_article_2",
    title: "Litter Training Your Cat",
    date: "5 February 2026",
    image: "/cat.jpg",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.",
    link: "/articles/cat/cat_article_2"
  },
  {
    id: "cat_article_3",
    title: "Keeping Indoor Cats Active",
    date: "1 February 2026",
    image: "/cat.jpg",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.",
    link: "/articles/cat/cat_article_3"
  }
];

export const dogArticles = [
  {
    id: "dog_article_1",
    title: "How to Care for Your Dog",
    date: "12 February 2026",
    image: "/dog.jpg",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.",
    link: "/articles/dog/dog_article_1"
  },
  {
    id: "dog_article_2",
    title: "Dog Training 101",
    date: "7 February 2026",
    image: "/dog.jpg",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.",
    link: "/articles/dog/dog_article_2"
  },
  {
    id: "dog_article_3",
    title: "Best Toys for Dogs",
    date: "2 February 2026",
    image: "/dog.jpg",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.",
    link: "/articles/dog/dog_article_3"
  }
];

export const allArticles = [...catArticles, ...dogArticles];
