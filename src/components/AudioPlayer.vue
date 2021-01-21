<template>
  <div class="audio-player">
    <audio
      ref="audioTag"
      :src="sound"
      @loadedmetadata="handleAudioLoaded"
      @timeupdate="handleTimeUpdate"
    ></audio>
    <div class="player-container relative flex flex-col lg:block lg:mx-auto">
      <Seeker />
      <div
        class="player w-full max-h-64 flex flex-col lg:flex-row items-center bg-white dark:bg-gray-900 lg:mb-40 p-4 rounded-b shadow"
      >
        <span
          class="mt-4 mb-4 lg:ml-6 lg:mt-0 lg:mb-0 text-gray-500 dark:text-gray-400 lg:order-2"
        >
          {{ soundInfo.name }}
        </span>
        <PlayToggleButton
          @click="togglePlay"
          :isPlaying="isPlaying"
          class="lg:order-1"
        />

        <LaunchUploadButton @click="launchUpload" class="lg:order-3" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

import PlayToggleButton from './PlayToggleButton.vue';
import LaunchUploadButton from './LaunchUploadButton.vue';
import Seeker from './Seeker.vue';

export default defineComponent({
  name: 'AudioPlayer',
  props: {
    sound: {
      default: null,
    },
  },
  components: {
    PlayToggleButton,
    LaunchUploadButton,
    Seeker,
  },
  setup() {
    const store = useStore();
    const audioTag = ref(null);
    const isPlaying = ref(false);

    const togglePlay = () => {
      isPlaying.value = !isPlaying.value;

      if (isPlaying.value) {
        audioTag.value.play();
      } else {
        audioTag.value.pause();
      }
    };

    const launchUpload = () => {
      const uploadAudioInput = document.getElementById('upload-audio');

      if (!uploadAudioInput) {
        return;
      }

      audioTag.value.pause();
      isPlaying.value = false;

      store.dispatch('setDuration', 0);
      store.dispatch('setSeekPosition', 0);

      uploadAudioInput.click();
    };

    const handleAudioLoaded = e => {
      store.dispatch('setDuration', e.target.duration);
    };

    const handleTimeUpdate = e => {
      const currentTime = Math.floor(e.target.currentTime);
      const duration = Math.floor(e.target.duration);
      const seekPosition = ((currentTime * 100) / duration).toFixed(6);

      store.dispatch('setSeekPosition', seekPosition);

      if (e.target.currentTime >= e.target.duration) {
        isPlaying.value = false;

        audioTag.value.currentTime = 0;

        store.dispatch('setDuration', 0);
        store.dispatch('setSeekPosition', 0);
      }
    };

    return {
      audioTag,
      togglePlay,
      isPlaying,
      soundInfo: computed(() => store.state.soundInfo),
      launchUpload,
      handleAudioLoaded,
      handleTimeUpdate,
    };
  },
});
</script>

<style lang="scss" scoped>
.audio-player {
  .player-container {
    height: 100vh;

    @media (min-width: 1024px) {
      height: initial;
      max-width: 600px;
    }
  }
}
</style>
