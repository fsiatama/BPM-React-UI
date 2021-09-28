export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name: 'os',
    icon: 'table',
    path: '/os',
    routes: [
      {
        path: '/os/instance-list',
        name: 'instance-list',
        icon: 'smile',
        component: './OsList',
        access: 'canAdmin',
      },
      {
        path: '/os/task-list',
        name: 'task-list',
        icon: 'smile',
        component: './OsTaskList',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
