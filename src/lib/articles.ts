/**
 * Article data source.
 *
 * This site is a static export, so articles are read from the bundled JSON at
 * build time. There is no live WordPress fetch — republish to update content.
 */

import localArticles from '@/data/articles.json';

// -----------------------------------------------------------------------

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

export interface ArticleIntro {
  title: string;
  exp: string;
  outlines: string[];
  moreLink: string;
}

export interface BlogArticle extends Article {
  status: string;
  type: string;
  intro: ArticleIntro;
}

const introData: ArticleIntro[] = [
  {
    title: 'Cryptocurrency',
    exp: 'Working with you to understand your life goals and develop a personalized wealth strategy. Today and for the years to come.',
    outlines: [
      '401(k) Rollovers',
      'Wealth Accumulation Plans',
      'Financial Independence',
      'Diversification',
      'Passive Income Generation',
      'Global Accessibility',
    ],
    moreLink: '#',
  },
  {
    title: 'Forex Trade',
    exp: 'Provides an opportunity to break free from the limitations of traditional employment and achieve financial independence.',
    outlines: [
      'Capital Growth',
      'Wealth Accumulation Plans',
      'Portfolio Diversification',
      'Passive Income Generation',
      'Global Market Exposure',
      'Lifestyle Flexibility',
    ],
    moreLink: '#',
  },
];

const articles: Article[] = localArticles as Article[];

// -----------------------------------------------------------------------
// Public API

/** Returns all articles for the home page blog list. */
export async function getBlogArticles(): Promise<BlogArticle[]> {
  return articles.map((a, i) => ({
    ...a,
    status: 'publish',
    type: 'post',
    intro: introData[i] || introData[0],
  }));
}

/** Returns a single article by slug. */
export async function getArticle(slug: string): Promise<Article | null> {
  return articles.find((a) => a.slug === slug) || null;
}

/** Returns slugs for generateStaticParams. */
export async function getArticleSlugs(): Promise<{ slug: string }[]> {
  return articles.map((a) => ({ slug: a.slug }));
}
