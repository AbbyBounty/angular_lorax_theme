import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'MENUITEMS.MAIN.TEXT',
    moduleName: '',
    icon: '',
    class: '',
    groupTitle: true,
    submenu: []
  },

  {
    path: 'devices',
    title: 'Devices',
    moduleName: 'devices',
    icon: 'fa fa-home',
    class: '',
    groupTitle: false,
    submenu: []
  },

  {
    path: 'profile',
    title: 'Profile',
    moduleName: 'profile',
    icon: 'fa fa-user',
    class: '',
    groupTitle: false,
    submenu: []
  },

  {
    path: 'website',
    title: 'Websites',
    moduleName: 'website',
    icon: 'fa fa-globe',
    class: '',
    groupTitle: false,
    submenu: []
  },

  {
    path: 'android',
    title: 'Android for Work (afw)',
    moduleName: 'android',
    icon: 'fa fa-suitcase',
    class: '',
    groupTitle: false,
    submenu: []
  },

  {
    path: 'enterprise',
    title: 'Enterprise App Store',
    moduleName: 'enterprise',
    icon: 'fa fa-archive',
    class: '',
    groupTitle: false,
    submenu: []
  },

  {
    path: 'config',
    title: 'Managed Configuration',
    moduleName: 'managed-config',
    icon: 'fa fa-th',
    class: '',
    groupTitle: false,
    submenu: []
  },

  {
    path: 'advanced',
    title: 'Advanced Restrictions',
    moduleName: 'advanced',
    icon: 'fa fa-lock',
    class: '',
    groupTitle: false,
    submenu: []
  },
];
