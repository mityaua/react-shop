import { lazy } from 'react';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const Products = lazy(() =>
  import('../pages/Products' /* webpackChunkName: "Products" */),
);
const Contacts = lazy(() =>
  import('../pages/Contacts' /* webpackChunkName: "Contacts" */),
);
const Counters = lazy(() =>
  import('../pages/Counters' /* webpackChunkName: "Counters" */),
);
const LifeCycleTest = lazy(() =>
  import('../pages/LifeCycleTest' /* webpackChunkName: "LifeCycleTest" */),
);
const MovieSearch = lazy(() =>
  import('../pages/MovieSearch' /* webpackChunkName: "MovieSearch" */),
);
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails' /* webpackChunkName: "MovieDetails" */),
);
const Todos = lazy(() =>
  import('../pages/Todos' /* webpackChunkName: "Todos" */),
);
const LoginPage = lazy(() =>
  import('../pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);
const LogoutPage = lazy(() =>
  import('../pages/LogoutPage' /* webpackChunkName: "LogoutPage" */),
);

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
    exact: true,
    showInMenu: true,
    isProtected: false,
  },
  {
    path: '/products',
    label: 'Products',
    component: Products,
    showInMenu: true,
    isProtected: true,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    component: Contacts,
    showInMenu: true,
    isProtected: true,
  },
  {
    path: '/counters',
    label: 'Counters',
    component: Counters,
    showInMenu: true,
    isProtected: true,
  },
  {
    path: '/life-cycle-test',
    label: 'Life Cycle Test',
    component: LifeCycleTest,
    showInMenu: true,
    isProtected: true,
  },
  {
    path: '/movie-search',
    label: 'Movie Search',
    component: MovieSearch,
    exact: true,
    showInMenu: true,
    isProtected: true,
  },
  {
    path: '/movie-search/:movieId',
    label: 'Movie Details',
    component: MovieDetails,
    showInMenu: false,
    isProtected: true,
  },
  {
    path: '/todos',
    label: 'Todos',
    component: Todos,
    exact: true,
    showInMenu: true,
    isProtected: true,
  },
  {
    path: '/login',
    label: 'Login',
    component: LoginPage,
    exact: true,
    showInMenu: true,
    isProtected: false,
    isNotLoggedOn: true,
  },
  {
    path: '/logout',
    label: 'Logout',
    component: LogoutPage,
    exact: true,
    showInMenu: true,
    isProtected: true,
  },
];
