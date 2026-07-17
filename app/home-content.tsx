import React from 'react';

// Components
import Hero from 'src/components/landing-pages-main/Hero';
import Testimonials from 'src/components/landing-pages-main/Testimonials';
import AboutSection from 'src/components/landing-pages-main/AboutSection';
import Services, { PortfolioCTA } from 'src/components/landing-pages-main/Services';
import BlogList1 from 'src/components/landing-pages-main/BlogList1';
import MorganBlogs from 'src/components/landing-pages-main/MorganBlogs';
import CTAsection from 'src/components/landing-pages-main/CTAsection';
import FAQs from 'src/components/landing-pages-main/FAQs';
import Script from 'next/script';
import type { BlogArticle } from '@/lib/articles';

interface HomePageContentProps {
  initialArticles: BlogArticle[];
}

const HomePageContent: React.FC<HomePageContentProps> = ({ initialArticles }) => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <PortfolioCTA />
      <BlogList1 list={initialArticles} />
      <MorganBlogs />
      <CTAsection />
      <FAQs />
      <Testimonials />
      {/* easy_background.js cross-fades the Hero's #home backdrop. */}
      <Script id="easy-bg-init" strategy="lazyOnload">
        {`
          if (typeof easy_background !== 'undefined') {
            easy_background("#home",
              {
                slide: ["/assets/images/bg/1.jpg", "/assets/images/bg/2.jpg", "/assets/images/bg/3.jpg"],
                delay: [4000, 4000, 4000]
              }
            );
          }
        `}
      </Script>
    </>
  );
};

export default HomePageContent;
