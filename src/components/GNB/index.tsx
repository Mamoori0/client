'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { UserProfileImage } from '../UserProfileImage';

import { CloseMenuIcon, HamburgerMenuIcon } from './Icons';
import { MainLogo } from './MainLogo';
import { useChangeBgByScroll } from './useChangeBgByScroll';

const GNB_MENU = [
  { name: 'About us', link: '/about-us' },
  { name: 'Roadmap', link: '/roadmap' },
  { name: 'Community', link: '/community' },
];

const DefaultMenus = () => {
  const pathname = usePathname();

  const isActiveMenu = (link: string) => {
    return pathname.includes(link) ? true : false;
  };

  return (
    <div className={`hidden items-center sm:flex`}>
      {GNB_MENU.map(({ name, link }) => {
        const activeStyle = isActiveMenu(link)
          ? 'underline decoration-yellow-400 underline-offset-4 decoration-2'
          : '';

        return (
          <Link
            key={name}
            href={link}
            className={`mr-5 text-sm text-[#eaeaea] lg:text-base ${activeStyle} hover:text-white`}
            style={{ textShadow: '2px 2px 10px #413c3a' }}
          >
            {name}
          </Link>
        );
      })}
      <Link href="/my-page">
        <UserProfileImage />
      </Link>
    </div>
  );
};

const MobileMenus = () => {
  const pathname = usePathname();

  const isActiveMenu = (link: string) => {
    return pathname.includes(link) ? true : false;
  };

  return (
    <div className={`flex flex-col items-center`}>
      {GNB_MENU.map(({ name, link }) => {
        const activeStyle = isActiveMenu(link)
          ? 'underline decoration-yellow-400 underline-offset-4 decoration-2'
          : '';

        return (
          <Link
            key={name}
            href={link}
            className={`p-3 text-sm text-[#eaeaea] ${activeStyle} w-full hover:bg-brown-200 hover:text-white`}
            style={{ textShadow: '2px 2px 10px #413c3a' }}
          >
            {name}
          </Link>
        );
      })}
      <Link href="/my-page" className="p-3">
        <UserProfileImage />
      </Link>
    </div>
  );
};

export const GNB = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const { GNBBackground } = useChangeBgByScroll();

  return (
    <nav
      className="fixed z-10 w-full"
      style={{
        background: GNBBackground,
      }}
    >
      <div
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:py-3"
        style={{ background: menuToggle ? '#67615ed4' : '' }}
      >
        <MainLogo />
        <DefaultMenus />
        <div className="flex items-center sm:hidden">
          <button onClick={() => setMenuToggle(!menuToggle)}>
            {menuToggle ? <CloseMenuIcon /> : <HamburgerMenuIcon />}
          </button>
        </div>
      </div>
      <div className={classNames('sm:hidden bg-[#67615ed4]', { hidden: !menuToggle })}>
        <MobileMenus />
      </div>
    </nav>
  );
};
