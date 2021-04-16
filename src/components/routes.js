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
  import('../pages/MovieDetails' /* webpackChunkName: "MovieSearch" */),
);

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/products',
    label: 'Products',
    component: Products,
    showInMenu: true,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    component: Contacts,
    showInMenu: true,
  },
  {
    path: '/counters',
    label: 'Counters',
    component: Counters,
    showInMenu: true,
  },
  {
    path: '/life-cycle-test',
    label: 'Life Cycle Test',
    component: LifeCycleTest,
    showInMenu: true,
  },
  {
    path: '/movie-search',
    label: 'Movie Search',
    component: MovieSearch,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/movie-search/:movieId',
    label: 'Movie Details',
    component: MovieDetails,
    showInMenu: false,
  },
];
