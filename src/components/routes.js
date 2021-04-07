import Products from '../pages/Products';
import Contacts from '../pages/Contacts';
import Counters from '../pages/Counters';
import LifeCycleTest from '../pages/LifeCycleTest';

export const routes = [
  {
    path: '/products',
    label: 'Products',
    component: Products,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    component: Contacts,
  },
  {
    path: '/counters',
    label: 'Counters',
    component: Counters,
  },
  {
    path: '/life-cycle-test',
    label: 'Life Cycle Test',
    component: LifeCycleTest,
  },
];
