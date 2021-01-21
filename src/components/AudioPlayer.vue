<template>
  <div class="audio-player relative" v-if="sound && sound !== null">
    <audio ref="audioTag" :src="sound"></audio>
    <div
      class="player max-h-64 flex flex-col lg:flex-row items-center bg-white dark:bg-gray-900 mx-auto lg:mb-40 p-4 rounded shadow"
    >
      <Button @click="togglePlay" class="play-button">
        <div class="text-gray-600 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            v-if="isPlaying"
          >
            <path
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17h-3v-10h3v10zm5 0h-3v-10h3v10z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            v-else
          >
            <path
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"
            />
          </svg>
        </div>
      </Button>

      <span
        class="mt-4 mb-4 lg:ml-6 lg:mt-0 lg:mb-0 text-gray-500 dark:text-gray-400"
      >
        {{ soundInfo.name }}
      </span>

      <Button @click="launchUpload" class="upload-button ml-auto">
        <div class="text-gray-600 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M10 9h-6l8-9 8 9h-6v11h-4v-11zm11 11v2h-18v-2h-2v4h22v-4h-2z"
            />
          </svg>
        </div>
      </Button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

import Button from './Button.vue';
export default {
  name: 'AudioPlayer',
  props: {
    sound: {
      default: null,
    },
  },
  components: {
    Button,
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

      uploadAudioInput.click();
    };

    return {
      audioTag,
      togglePlay,
      isPlaying,
      soundInfo: computed(() => store.state.soundInfo),
      launchUpload,
    };
  },
};
</script>

<style lang="scss" scoped>
.audio-player {
  .player {
    max-width: 600px;

    svg {
      fill: currentColor;
    }

    .play-button {
      svg {
        width: 56px;
        height: 56px;
      }
    }
  }
}
</style>
