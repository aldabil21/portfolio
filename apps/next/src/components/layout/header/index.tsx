import ThemeSwitcher from '@/components/common/theme-switcher';
import Link from 'next/link';
import LogoFace from './logo';

type Props = {
  lang: string;
};

const Header = ({ lang }: Props) => {
  return (
    <header className='container flex items-center justify-between p-4'>
      <Link href={`/${lang}`}>
        <LogoFace />
      </Link>

      <ul>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </header>
  );
};

export default Header;
