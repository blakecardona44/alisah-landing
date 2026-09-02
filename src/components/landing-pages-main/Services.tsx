'use client';

import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const TickerTape = dynamic(() => import('react-ts-tradingview-widgets').then((w) => w.TickerTape), {
  ssr: false,
});

const LocationMap = dynamic(() => import('./LocationMap'), { ssr: false });

interface Tab {
  name: string;
  hash: string;
}

const tabs: Tab[] = [
  { name: 'My Story and Services', hash: 'my-story' },
  { name: 'Client Service Team', hash: 'client-service-team' },
  { name: 'Location', hash: 'location' },
];

const services: string[] = [
  'Wealth Management',
  'Retirement Planning',
  'Business Planning',
  '401(k) Rollovers',
  'Trust Services',
  'Sustainable Investing',
  '529 Plans',
  'Corporate Retirement Plans',
];

const MyStory: React.FC = () => {
  const [more, setMore] = useState(false);

  return (
    <div className="w-full">
      <div className="md:flex mt-8">
        <div className="md:w-3/5 pl-3 pr-4">
          <h4 className="text-2xl font-bold mb-[14px] mt-5">My Story and Services</h4>
          <div className="relative pt-[56.25%]">
            <iframe
              allowFullScreen
              className="absolute top-0 left-0 h-full border-none w-full"
              allow="encrypted-media"
              src="https://players.brightcove.net/644391012001/OsECwOFeq_default/index.html?videoId=6040280424001"
              title="Video player"
            />
          </div>

          <p className="text-base mt-[14px]">
            My goal is to thoroughly understand your financial needs and align the right resources to
            help you meet — and exceed — them. Whether you are planning for retirement, growing a
            business, or building generational wealth, I am here to help you evaluate near-term
            priorities and design a long-term strategy that is uniquely yours.
            <br />
            {more && <br />}
            {more && (
              <span>
                <span className="font-semibold">Elizabeth Nora Jones: </span>
                &quot;I am Elizabeth Nora Jones (CRD#&nbsp;5934958), a General
                Securities Principal and General Securities Representative
                regulated by FINRA. I am currently registered with Ares
                Management Capital Markets LLC, located at 245 Park Avenue,
                44th Floor, New York, NY 10167, where I have been registered
                since January&nbsp;2,&nbsp;2026. I also serve as a Partner of
                Ares Management Corporation and Head of the Private Wealth
                Partnerships Team in our New York office. My practice is built
                on the belief that every client deserves a clear, personalized
                financial plan — not a one-size-fits-all approach. I work
                closely with individuals, families, and business owners to
                develop strategies across wealth management, retirement
                planning, portfolio construction, and estate planning. Ares
                Management Capital Markets LLC is a registered broker-dealer,
                and through this platform I am able to provide access to a
                full spectrum of investment products and advisory
                solutions.&quot;
              </span>
            )}
            <br />
            <span
              className="text-[#0F8EC7] hover:underline transition-all duration-500 flex gap-3 cursor-pointer"
              onClick={() => setMore((x) => !x)}
            >
              {!more ? 'About me — read more' : 'Show less'}
              {!more ? <ChevronDownIcon className="w-4" /> : <ChevronUpIcon className="w-4" />}
            </span>
          </p>
        </div>
        <div className="md:w-2/5 pl-4 pr-3">
          <h4 className="text-2xl font-bold mb-[14px]">Services Include</h4>
          <ul className="list-disc mt-4 pl-8">
            {services.map((service) => (
              <li key={service} className="text-base mb-[6px]">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ServiceTeam: React.FC = () => {
  return (
    <div className="p-7.5">
      <h4 className="text-2xl font-bold my-4 mt-3">The Service Team</h4>
      <h6 className="font-bold text-lg my-2">
        Elizabeth Nora Jones — General Securities Principal / Registered
        Representative
      </h6>
      <p className="mb-4">
        Elizabeth Nora Jones (CRD#: 5934958) is a General Securities Principal
        and General Securities Representative regulated by FINRA. She is
        currently registered with Ares Management Capital Markets LLC, a
        registered broker-dealer headquartered at 245 Park Avenue, 44th Floor,
        New York, NY 10167. She is also a Partner of Ares Management
        Corporation and leads the firm&apos;s Private Wealth Partnerships Team
        in New York. Her practice is centred on delivering thoughtful,
        personalised financial guidance to individuals, families, and business
        owners at every stage of their financial journey.
      </p>
      <p className="mb-6">
        Elizabeth has worked in the securities industry since 2012, including
        nearly a decade with UBS Financial Services Inc. as a broker and
        investment adviser before joining Ares in 2021. She holds Series 24,
        Series 7, Series 66, and SIE qualifications, is registered in 53 U.S.
        states and territories, and also serves as an independent trustee and
        trust director for two family trusts. Every engagement begins with
        listening — because the right strategy starts with truly understanding
        your goals, values, and timeline.
      </p>
      <div className="space-y-1">
        <p className="text-base">
          <span className="font-semibold">Firm:</span> Ares Management Capital
          Markets LLC
        </p>
        <p className="text-base">
          <span className="font-semibold">Registered Since:</span> January 2, 2026
        </p>
        <p className="text-base">
          <span className="font-semibold">State Licenses:</span> Registered in
          53 U.S. states and territories
        </p>
        <p className="text-base">
          <span className="font-semibold">SRO Registrations:</span> FINRA
        </p>
        <p className="text-base">
          <span className="font-semibold">Examinations Passed:</span> Series 24
          — General Securities Principal (Mar 2024); SIE (Oct 2018); Series 7 —
          General Securities Representative (Aug 2012); Series 66 — Uniform
          Combined State Law (Oct 2012)
        </p>
        <p className="text-base">
          <span className="font-semibold">Phone:</span> +1(949)297-6131
        </p>
        <p className="text-base">
          <span className="font-semibold">Email:</span> elizabethnorajones@gmail.com
        </p>
      </div>
    </div>
  );
};

const MyLocation: React.FC = () => {
  return (
    <div className="p-7.5">
      <div className="mt-10 md:flex md:pr-10">
        <div className="md:flex-1">
          <h4 className="text-2xl font-bold mb-[14px] mt-5">LOCATIONS</h4>
          <p className="text-base font-semibold mb-1">Main Office</p>
          <p className="text-base mb-4">
            245 Park Avenue, 44th Floor
            <br />
            New York, NY 10167, USA
            <br />
            Direct: +1(949)297-6131
          </p>
          <p className="text-base font-semibold mb-1">Firm</p>
          <p className="text-base">
            Ares Management Capital Markets LLC
          </p>
        </div>
        <div className="md:flex-1 overflow-hidden">
          <LocationMap />
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [selected, setSelected] = useState(tabs[0].name);

  // Handle hash-based tab selection
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const matchingTab = tabs.find((tab) => tab.hash === hash);
      if (matchingTab) {
        setSelected(matchingTab.name);
        // Scroll to the portfolio-details section
        const element = document.getElementById('portfolio-details');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Check hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabClick = (tab: Tab) => {
    setSelected(tab.name);
    // Update URL hash without triggering scroll
    window.history.replaceState(null, '', `#${tab.hash}`);
  };

  return (
    <div className="container translate-y-[-100px] flex py-6 gap-7 h-fit">
      <div id="portfolio-details" className="bg-white w-full p-4">
        <div className="border-b border-gray-200 max-w-fit">
          <div className="-mb-px flex overflow-x-auto" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab)}
                className={
                  (selected === tab.name
                    ? 'border-[#0F8EC7] '
                    : 'border-transparent hover:border-[#0F8EC7]') +
                  ' whitespace-nowrap text-[#002B51] py-3 px-[15px] border-b-4 text-base'
                }
                aria-current={selected === tab.name ? 'page' : undefined}
                type="button"
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
        {selected === tabs[0].name && <MyStory />}
        {selected === tabs[1].name && <ServiceTeam />}
        {selected === tabs[2].name && <MyLocation />}
      </div>
    </div>
  );
};

export default Services;

export const PortfolioCTA: React.FC = () => {
  return (
    <div className="mt-10 w-full">
      <TickerTape />
      <div className="bg-[#0F8EC7] py-[75px]">
        <div className="max-w-768 text-center text-white mx-auto">
          <h5 className="text-2xl mt-3">Wealth Management</h5>
          <h5 className="text-2xl mt-3">Global Investment Office</h5>
          <h6 className="my-[90px] font-inter text-[30px]">Portfolio Insights</h6>
          <a
            href="#faqs"
            className="py-[16px] px-[52px] rounded-full text-[19px] border-2 border-[rgba(255,255,255,0.5)] font-bold hover:bg-white hover:text-[#0F8EC7]"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
