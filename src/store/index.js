import { createStore } from 'vuex';

export default createStore({
  state: {
    soundInfo: {
      name: '',
      type: '',
      ext: '',
    },
  },
  mutations: {
    fetchSoundInfo(state, soundInfo) {
      state.soundInfo = soundInfo;
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
  },
  modules: {},
});
