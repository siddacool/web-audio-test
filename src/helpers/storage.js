const localStorageName = 'web-audio-test-local-cookie-001';

const getStorageMain = () => {
  let store = localStorage.getItem(localStorageName);

  if (!store || (store && store.trim() === '')) {
    localStorage.setItem(localStorageName, JSON.stringify({}));
    store = localStorage.getItem(localStorageName);
  }

  store = JSON.parse(store || '{}');

  return store;
};

export const getStorage = getStorageMain;

export const updateStorage = (items = {}) => {
  let store = getStorageMain();
  store = { ...store, ...items };

  localStorage.setItem(localStorageName, JSON.stringify(store || {}));
};
