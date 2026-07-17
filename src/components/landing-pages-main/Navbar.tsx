'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useMediaQuery } from 'src/hooks/use-media-query';
import Link from 'next/link';

interface NavItem {
  name: string;
  current: boolean;
  children: { name: string; href: string }[];
}

const navigation: NavItem[] = [
  {
    name: 'About',
    current: false,
    children: [
      { name: 'My Story and Services', href: '#my-story' },
      {
        name: 'Wealth Management Global Investment Office',
        href: '#client-service-team',
      },
      { name: 'Thought Leadership', href: '#thought-list' },
    ],
  },
  {
    name: 'Contact Me',
    current: false,
    children: [
      { name: 'Start a Conversation', href: 'https://wa.me/14242793916' },
      { name: 'Location', href: '#location' },
    ],
  },
];

interface MobileMenuSlideProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MobileMenuSlide: React.FC<MobileMenuSlideProps> = ({ open, setOpen }) => {
  const isDesktop = useMediaQuery('(min-width:768px)');

  return (
    <Transition.Root show={open && !isDesktop} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-96">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-8 flex pt-4 pl-2 sm:-mr-10 sm:pl-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-hidden focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-full overflow-y-auto bg-white">
                    <div className="w-full">
                      <div className="w-full">
                        <Link href="/">
                          <img
                            className="md:ml-0 h-[29px] mx-auto my-[22px]"
                            src="/logo/logo.svg"
                            alt="logo"
                          />
                        </Link>

                        {navigation.map(({ name, children }) => (
                          <div key={name} className="border-t border-t-[#E9E9E9]">
                            <div className="py-[22px] px-5 text-xl font-bold cursor-pointer">
                              {name}
                            </div>
                            {children.length &&
                              children.map((link) => (
                                <ul key={link.name} className="pl-5">
                                  <li
                                    className="border-t border-t-[#E9E9E9] w-full pl-[25px] hover:bg-[#0000004c]"
                                    onClick={() => {
                                      setOpen(false);
                                    }}
                                  >
                                    <a
                                      href={link.href}
                                      className="text-base py-[25px] pr-[63px] block"
                                    >
                                      {link.name}
                                    </a>
                                  </li>
                                </ul>
                              ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    let lastScrollPosition = 0;
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (window.scrollY <= 80) {
        setScrolledDown(false);
        return;
      }

      if (currentScrollPosition > lastScrollPosition) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }

      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={
        'bg-white z-1000 transition-all duration-700' + (scrolledDown ? ' sticky top-0 ' : '')
      }
    >
      <div className="flex justify-between items-center container">
        <div className="flex">
          <button
            className="h-[24px] w-[24px] bg-[url(/img/menue-bar.svg)] bg-no-repeat bg-center self-center inline md:hidden"
            onClick={() => setOpen(true)}
            type="button"
            aria-label="Open menu"
          />
          <Link href="/">
            <img className="ml-4 md:ml-0 h-[29px] my-[20px]" src="/logo/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex text-black gap-4">
            <li className="after:content-[''] after:block after:w-0 after:h-[6px] w-fit after:transition-width after:bg-[#3182c1] after:duration-300 hover:after:w-full">
              <a
                href="#my-story"
                className="py-[25px] text-xl font-bold cursor-pointer block"
              >
                About
              </a>
            </li>
            <li className="after:content-[''] after:block after:w-0 after:h-[6px] w-fit after:transition-width after:bg-[#3182c1] after:duration-300 hover:after:w-full">
              <a
                href="https://wa.me/14242793916"
                target="_blank"
                rel="noreferrer"
                className="py-[25px] text-xl font-bold cursor-pointer block"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
      <MobileMenuSlide open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
