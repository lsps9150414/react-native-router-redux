export const NAVIGATION_ACTIONS = {
  RESET: 'RESET',
  POP: 'POP',
  PUSH: 'PUSH',
  REPLACE: 'REPLACE',
  SELECT_TAB: 'SELECT_TAB',
};

const handleNavigation = (
  navAction, targetRouterKey, route = null, key = null, index = null
) => ({
  type: navAction,
  targetRouterKey,
  route,
  key,
  index,
});

let reduxStore = null;

export const connectStore = (store) => {
  reduxStore = store;
};

export const navigate = {
  reset: (targetRouterKey) => {
    reduxStore.dispatch(handleNavigation(NAVIGATION_ACTIONS.RESET, targetRouterKey));
  },
  pop: (targetRouterKey) => {
    reduxStore.dispatch(handleNavigation(NAVIGATION_ACTIONS.POP, targetRouterKey));
  },
  push: (targetRouterKey, route) => {
    reduxStore.dispatch(handleNavigation(NAVIGATION_ACTIONS.PUSH, targetRouterKey, route));
  },
  replace: (targetRouterKey, route, key) => {
    reduxStore.dispatch(handleNavigation(NAVIGATION_ACTIONS.REPLACE, targetRouterKey, route, key));
  },
  selectTab: (targetRouterKey, key) => {
    reduxStore.dispatch(handleNavigation(
      NAVIGATION_ACTIONS.SELECT_TAB, targetRouterKey, null, key
    ));
  },
};
