import { createStore } from 'vuex';

import { getStorage } from '../helpers/storage';

const checkIfDarkTheme = () => {
  const { darkTheme = false } = getStorage();

  return darkTheme;
};

export default createStore({
  state: {
    soundInfo: {
      name: '',
      type: '',
      ext: '',
    },
    isDarkTheme: checkIfDarkTheme(),
  },
  mutations: {
    fetchSoundInfo(state, soundInfo) {
      state.soundInfo = soundInfo;
    },
    setTheme(state, isDarkTheme) {
      state.isDarkTheme = isDarkTheme;
    },
  },
  actions: {
    fetchSoundInfo({ commit }, { name = '', type = '' }) {
      const nameArr = name && name.trim() !== '' ? name.split('.') : '';
      const formattedName =
        nameArr && nameArr.length && nameArr[0] ? nameArr[0].slice(0, 50) : '';
      const ext =
        nameArr &&
        nameArr.length &&
        nameArr.length > 1 &&
        nameArr[nameArr.length - 1]
          ? nameArr[nameArr.length - 1]
          : '';

      commit('fetchSoundInfo', {
        name: formattedName,
        ext,
        type,
      });
    },
    setTheme({ commit }) {
      commit('setTheme', checkIfDarkTheme());
    },
  },
  modules: {},
});
