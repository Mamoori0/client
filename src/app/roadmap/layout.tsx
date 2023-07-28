'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import { GNB } from '@/components/GNB';
import { BANNER_DATA } from '@/constants/bannerData';
import { useActiveMenu } from '@/hooks/useActiveMenu';

const ROADMAP_MENU = [
  { name: 'Handbook', link: '/roadmap/handbook' },
  { name: 'Will', link: '/roadmap/will' },
  { name: 'Checklist', link: '/roadmap/checklist' },
];

const RoadmapMenu = () => {
  const { isActiveMenu } = useActiveMenu(true);

  return (
    <div className="mx-auto flex w-full justify-center bg-stone-300 p-3 text-stone-500">
      <div className="flex w-full max-w-3xl items-center justify-around">
        <Link href="/roadmap">
          <Image src="/assets/roadmap/roadmap.png" width={30} height={30} alt="roadmap home" />
        </Link>
        {ROADMAP_MENU.map(({ name, link }) => {
          const activeStyle = isActiveMenu(link)
            ? 'underline decoration-wavy decoration-yellow-700 underline-offset-4 decoration-2 text-stone-800 font-bold'
            : '';

          return (
            <Link key={name} href={link} className={`${activeStyle}`}>
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default function RoadmapLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GNB />
      <main className="flex flex-col items-center">
        <Banner bannerData={BANNER_DATA.roadmap} />
        <RoadmapMenu />
        <div className="m-6 max-w-4xl lg:m-12">{children}</div>
      </main>
      <Footer />
    </>
  );
}