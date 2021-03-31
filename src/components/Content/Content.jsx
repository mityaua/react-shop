import { routes } from '../routes';

const Content = () => {
  const { pathname } = window.location;

  return (
    <main className="content">
      {routes.map(({ path, label, component: Component }) =>
        pathname === path ? <Component key={label} /> : null,
      )}
    </main>
  );
};

export default Content;
