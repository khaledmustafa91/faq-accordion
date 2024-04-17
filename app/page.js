'use client';

import React from 'react';
import Image from 'next/image';
import BackgroundImage from '../public/images/background-pattern-desktop.svg';
import StarIcon from '../public/images/icon-star.svg';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { MinusIcon } from '@/public/images/icon-minus';
import { PlusIcon } from '../public/images/icon-plus.js';

export default function Home() {
  const itemClasses = {
    title: 'hover:text-[#612b69] font-semibold max-[640px]:text-sm',
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#f9f0ff]">
      <div
        className="bg-[#000] w-full min-h-80"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      >
        <Image
          src={BackgroundImage}
          alt="Cartoon graduates jump with happiness"
          quality="100"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="text-[#000] bg-[#fff] lg:w-1/2 z-0 m-auto p-12 rounded-2xl min-[320px]:w-4/5">
        {/* <div class="grid grid-cols-12 gap-1"> */}
        <p className="text-5xl font-bold">
          <Image
            src={StarIcon}
            style={{ display: 'inline', marginRight: '10px' }}
            alt="star icon"
          />
          FAQs
        </p>
        {/* </div> */}

        <div className="font-semibold">
          <Accordion itemClasses={itemClasses} defaultExpandedKeys={['1']}>
            <AccordionItem
              // base={{ 'data-hover': '' }}
              key="1"
              aria-label="Accordion 1"
              title="What is Frontend Mentor, and how will it help me?"
              indicator={({ isOpen }) =>
                isOpen ? <MinusIcon /> : <PlusIcon />
              }
            >
              <p className="text-gray-500 font-normal max-[640px]:text-sm">
                Frontend Mentor offers realistic coding challenges to help
                developers improve their frontend coding skills with projects in
                HTML, CSS, and JavaScript. It&apos;s suitable for all levels and
                ideal for portfolio building.
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="Is Frontend Mentor free?"
              indicator={({ isOpen }) =>
                isOpen ? <MinusIcon /> : <PlusIcon />
              }
            >
              <p className="text-gray-500 font-normal max-[640px]:text-sm">
                Yes, Frontend Mentor offers both free and premium coding
                challenges, with the free option providing access to a range of
                projects suitable for all skill levels.
              </p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="Can I use Frontend Mentor projects in my portfolio?"
              indicator={({ isOpen }) =>
                isOpen ? <MinusIcon /> : <PlusIcon />
              }
            >
              <p className="text-gray-500 font-normal max-[640px]:text-sm">
                Yes, you can use projects completed on Frontend Mentor in your
                portfolio. It&apos;s an excellent way to showcase your skills to
                potential employers!
              </p>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 4"
              title="How can I get help if I'm stuck on a Frontend Mentor challenge?"
              indicator={({ isOpen }) =>
                isOpen ? <MinusIcon /> : <PlusIcon />
              }
            >
              <p className="text-gray-500 font-normal max-[640px]:text-sm">
                The best place to get help is inside Frontend Mentor&apos;s
                Discord community. There&apos;s a help channel where you can ask
                questions and seek support from other community members.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
