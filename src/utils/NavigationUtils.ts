import {
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

type params = {[key: string]: any};

export function getCurrentRouteName(): string {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute()?.name ?? '';
  }
  return '';
}

export function getPreviousRouteName(): string {
  if (navigationRef.isReady()) {
    const routes = navigationRef.current?.getState()?.routes;
    if (routes && routes.length - 2 >= 0) {
      return routes[routes.length - 2]?.name;
    }
  }
  return '';
}

export function getCurrentRouteParams() {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute()?.params;
  }
  return undefined;
}

export function isRoot(): boolean {
  if (navigationRef.isReady()) {
    return navigationRef.current?.getState()?.index === 0;
  }
  return false;
}

export function getState() {
  if (navigationRef.isReady()) {
    return navigationRef.current?.getState();
  }
  return false;
}

export function navigate(name: string, params?: params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function jump(name: string, params?: params) {
  navigate(name, params);
}

export function push(name: string, params?: params | {type?: string}) {
  if (navigationRef.isReady()) {
    if (params && 'type' in params && params?.type === 'reset') {
      reset(name, params);
      return;
    }
    navigationRef.navigate(name, params);
  }
}

export function forcePush(name: string, params?: params | {type?: string}) {
  if (navigationRef.isReady()) {
    if (params?.type === 'reset') {
      reset(name, params);
      return;
    }
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

export function replace(name: string, params?: params) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

export function popWithCount(count: number) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count));
  }
}

export function pop() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function refresh(params?: params) {
  if (navigationRef.isReady() && params !== undefined) {
    navigationRef.setParams(params as never);
  }
}

export function reset(sceneKey: string, params?: params) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [
        {
          name: sceneKey,
          params: params,
        },
      ],
    });
  }
}

export function resetWithPreviousRoute(
  sceneKey: string,
  prevScene: string,
  params?: params,
  prevParams?: params,
) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [
        {
          name: prevScene,
          params: prevParams,
        },
        {
          name: sceneKey,
          params: params,
        },
      ],
    });
  }
}
