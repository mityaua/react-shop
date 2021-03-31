import { routes } from '../routes';

const Menu = () => {
  return (
    <nav className="menu">
      <p>Menu</p>

      {routes.map(({ path, label }) => (
        <a href={path} key={label}>
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Menu;
