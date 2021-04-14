import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Page404';

import { routes } from '../routes';

const Content = () => {
  return (
    <main className="content">
      <Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          {routes.map(({ path, exact, component: Component }) => (
            <Route key={path} path={path} exact={exact} component={Component} />
          ))}
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </main>
  );
};

export default Content;
