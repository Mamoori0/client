import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import { GNB } from '@/components/GNB';
import { BANNER_DATA } from '@/constants/bannerData';

export default function Community() {
  return (
    <>
      <GNB />
      <main>
        <Banner bannerData={BANNER_DATA.community} />
      </main>
      <Footer />
    </>
  );
}
