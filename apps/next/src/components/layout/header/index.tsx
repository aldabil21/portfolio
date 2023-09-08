import Link from 'next/link';
import LogoFace from './logo';
import ThemeSwitcher from '@/components/common/theme-switcher';
import LangSwitcher from '@/components/common/lang-switcher';

type Props = {
  lang: Languages;
};

const Header = ({ lang }: Props) => {
  return (
    <header className='container flex items-center justify-between p-4'>
      <Link href={`/${lang}`}>
        <LogoFace />
      </Link>

      <ul className='flex items-center gap-4'>
        <li>
          <LangSwitcher lang={lang} />
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </header>
  );
};

export default Header;
