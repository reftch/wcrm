
import {
  ViewComponents,
  ViewManagement,
  ViewClients,
  ViewLogin,
} from './views'

export const views = [
  {
    id: 'Login',
    instance: ViewLogin
  },
  {
    id: 'Components',
    instance: ViewComponents,
    icon: 'icon-click'
  },
  {
    id: 'Management',
    instance: ViewManagement,
    icon: 'icon-divider'
  },
  { id: '-' },
  {
    id: 'Clients',
    instance: ViewClients,
    icon: 'icon-adjust'
  },
];

const Views = {
  // eslint-disable-next-line
  install(Vue: any) {
    views.forEach((c) => {
      if (c.instance) {
        Vue.component(c.id, c.instance);
      }
    })
  }
};

export default Views;
