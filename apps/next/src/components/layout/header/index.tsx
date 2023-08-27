import ThemeSwitcher from '@/components/common/theme-switcher';

const Header = () => {
  return (
    <header className='container flex items-center justify-between p-4'>
      <div>Header</div>

      <ul>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </header>
  );
};

export default Header;
