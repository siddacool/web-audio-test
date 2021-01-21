<template>
  <div
    class="home relative bg-gray-100 dark:bg-gray-800 flex flex-col justify-end lg:justify-center"
  >
    <SettingsPanel />
    <UploadAudio @change="fileUpload" :sound="sound" />
    <AudioPlayer :sound="sound" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import AudioPlayer from '../components/AudioPlayer.vue';
import UploadAudio from '../components/UploadAudio.vue';
import SettingsPanel from '../components/SettingsPanel.vue';
import { setThemeFromCookie } from '../helpers/theme';

export default {
  name: 'Home',
  components: {
    AudioPlayer,
    UploadAudio,
    SettingsPanel,
  },
  setup() {
    const sound = ref(null);

    const fileUpload = audio => {
      sound.value = audio;
    };

    onMounted(() => {
      setThemeFromCookie();
    });

    return {
      sound,
      fileUpload,
    };
  },
};
</script>

<style lang="scss">
.home {
  height: inherit;
}
</style>
