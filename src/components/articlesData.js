// src/components/articlesData.js


export const catArticles = [
  {
    id: "cat_article_1",
    title: "Cat Nutrition Tips",
    date: "10 February 2026",
    image: "/cat.jpg",
    summary: "Read on for important nutrition tips to help keep your feline friend healthy.",
    body: "Nutrients are substances obtained from food and used by an animal as a source of energy and as part of the metabolic machinery necessary for maintenance and growth. Barring any special needs, illness-related deficiencies or instructions from your vet, your pets should be able to get all the nutrients they need from high-quality commercial pet foods, which are formulated with these special standards in mind. Here are the six essential classes of nutrients fundamental for healthy living.",
    link: "/articles/cat/cat_article_1"
  },
  {
    id: "cat_article_2",
    title: "Cat Grooming Tips",
    date: "5 February 2026",
    image: "/cat_2.jpg",
    summary: "Read on to find out how to keep your kitty’s eyes, ears, teeth, skin and fur healthy and clean.",
    body: "If your cat fights the grooming process, and there is some potential that injury could occur to your cat or yourself, please make an appointment with a professional groomer or a veterinarian to have your cat groomed.",
    link: "/articles/cat/cat_article_2"
  },
  {
    id: "cat_article_3",
    title: "Common Cat Diseases",
    date: "1 February 2026",
    image: "/cat_3.jpg",
    summary: "Read on for information about diseases and other medical inflictions that frequently impact cats.",
    body: "Cats can be susceptible to various diseases, including feline leukemia, feline immunodeficiency virus, and upper respiratory infections. Regular veterinary check-ups, vaccinations, and a healthy diet are essential for preventing these diseases and ensuring your cat's well-being.",
    link: "/articles/cat/cat_article_3"
  }
];

export const dogArticles = [
  {
    id: "dog_article_1",
    title: "General Dog Care",
    date: "12 February 2026",
    image: "/dog.jpg",
    summary: "If you're considering bringing home a new dog, please make adoption your first option.",
    body: "A dog can be a wonderful addition to any home, but whether you're an experienced pet parent or a first-time adopter, it's important to keep your canine companion's health and happiness a top priority.",
    link: "/articles/dog/dog_article_1"
  },
  {
    id: "dog_article_2",
    title: "Dog Grooming Tips",
    date: "7 February 2026",
    image: "/dog_2.jpg",
    summary: "Read on for ways to keep your dog’s fur, skin, nails, teeth, ears and paws healthy and clean.",
    body: "Have you ever watched your dog roll on the ground, lick her coat or chew at her fur? These are her ways of keeping clean. Sometimes, though, she’ll need a little help from you to look and smell her best. But don’t worry, we’re here to help.",
    link: "/articles/dog/dog_article_2"
  },
  {
    id: "dog_article_3",
    title: "Common Dog Behavior Issues",
    date: "2 February 2026",
    image: "/dog_3.jpg",
    summary: "Find out more here about common dog behavior issues to help you and your pup address some of our canine friends' behaviors and habits.",
    body: "If you're looking for help treating your dog’s behavior issue, or just curious about why your dog does what he does, you've come to the right place.",
    link: "/articles/dog/dog_article_3"
  }
];

export const videoArticles = [
  {
    id: "video_article_1",
    title: "How to Bathe A Dog",
    date: "15 February 2026",
    image: "https://img.youtube.com/vi/WRcCPAgmqnI/hqdefault.jpg",
    summary: "How to Bathe a Dog: Step-by-Step Instructions",
    body: "We're here to show you how to wash a dog step by step—plus, tips for how to prepare, the supplies you’ll need, how often to bathe a dog, and how to keep your pup calm during the bath.",
    link: "/articles/video/video_article_1",
    youtubeId: "WRcCPAgmqnI"
  },
  {
    id: "video_article_2",
    title: "How to Litter Train a Kitten",
    date: "14 February 2026",
    image: "https://img.youtube.com/vi/uxVizBoF3qQ/hqdefault.jpg",
    summary: "Get step-by-step advice for how to train your kitten to use the litter box",
    body: "Unlike puppies who require ongoing house training, most kittens have an innate desire to cover their waste and will seek out loose material—like dirt or scoopable litter—on their own. Still, a gentle nudge in the right direction can make a big difference when it comes to litter training kittens.",
    link: "/articles/video/video_article_2",
    youtubeId: "uxVizBoF3qQ"
  },
  {
    id: "video_article_3",
    title: "How to Trim a Cat's Nails",
    date: "13 February 2026",
    image: "https://img.youtube.com/vi/Hr6zY0Yt6wE/hqdefault.jpg",
    summary: "How to Trim Cat Nails: A Step-by-Step Guide",
    body: "When it comes to grooming, cats like to do things on their own terms—and that can make trimming their nails a daunting prospect. But it doesn’t have to be! In fact, most cats can learn to tolerate nail clipping with a bit of practice and plenty of treats. So, are you ready to learn how to cut cat nails?  ",
    link: "/articles/video/video_article_3",
    youtubeId: "Hr6zY0Yt6wE"
  }
];

export const allArticles = [...catArticles, ...dogArticles, ...videoArticles];
