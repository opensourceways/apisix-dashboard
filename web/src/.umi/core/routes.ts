// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'C:/workspace/ssignik/apisix-dashboard/web/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'C:/workspace/ssignik/apisix-dashboard/web/src/.umi/plugin-layout/Layout.tsx'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Dashboard' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Dashboard'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/dashboard",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Dashboard' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Dashboard'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/serverinfo",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ServerInfo' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/ServerInfo'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/routes/list",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Route__List' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Route/List'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/routes/create",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Route__Create' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Route/Create'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/routes/:rid/edit",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Route__Create' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Route/Create'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/routes/:rid/duplicate",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Route__Create' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Route/Create'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/ssl/:id/edit",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__SSL__Create' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/SSL/Create'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/ssl/list",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__SSL__List' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/SSL/List'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/ssl/create",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__SSL__Create' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/SSL/Create'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/upstream/list",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Upstream__List' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Upstream/List'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/upstream/create",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Upstream__Create' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Upstream/Create'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/upstream/:id/edit",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Upstream__Create' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Upstream/Create'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/consumer/list",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Consumer__List' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Consumer/List'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/consumer/create",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Consumer__Create' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Consumer/Create'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/consumer/:username/edit",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Consumer__Create' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Consumer/Create'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/plugin/list",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Plugin__List' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Plugin/List'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/plugin/market",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Plugin__PluginMarket' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Plugin/PluginMarket'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/service/list",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Service__List' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Service/List'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/service/create",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Service__Create' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Service/Create'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/service/:serviceId/edit",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Service__Create' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Service/Create'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/proto/list",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Proto__List' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Proto/List'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/settings",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Setting' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/Setting'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/plugin-template/list",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__PluginTemplate__List' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/PluginTemplate/List'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/plugin-template/create",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__PluginTemplate__Create' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/PluginTemplate/Create'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/plugin-template/:id/edit",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__PluginTemplate__Create' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/PluginTemplate/Create'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/user/login",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__User__Login' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/User/Login'), loading: LoadingComponent}),
        "layout": false,
        "exact": true
      },
      {
        "path": "/user/logout",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__User__Logout' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/User/Logout'), loading: LoadingComponent}),
        "layout": false,
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'C:/workspace/ssignik/apisix-dashboard/web/src/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
