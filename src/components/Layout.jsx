import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/movies'}>Movies</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
