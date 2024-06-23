import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { SideBar } from '../Sidebar';
import { useSelector } from 'react-redux';
import { selectorDarkMode } from '../../features/DarkMode/darkModeSlicer';
import './styles.css';

export const Layout = () => {
  const { isDarkMode } = useSelector(selectorDarkMode);

  return (
    <div className={isDarkMode ? 'page-container dark' : 'page-container'}>
      <SideBar />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
