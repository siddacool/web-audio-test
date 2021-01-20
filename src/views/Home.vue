<template>
  <div class="home bg-gray-100 flex flex-col justify-end lg:justify-center">
    <UploadAudio @change="fileUpload" :sound="sound" />
    <AudioPlayer :sound="sound" />
  </div>
</template>

<script>
import { ref } from 'vue';
import AudioPlayer from '../components/AudioPlayer.vue';
import UploadAudio from '../components/UploadAudio.vue';

export default {
  name: 'Home',
  components: {
    AudioPlayer,
    UploadAudio,
  },
  setup() {
    const sound = ref(null);

    const fileUpload = audio => {
      sound.value = audio;
    };

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
