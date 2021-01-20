<template>
  <div class="upload-audio">
    <input type="file" accept="audio/*" @change="fileUpload" />
    <audio :src="sound" controls></audio>
    {{ soundInfo }}
  </div>
</template>

<script>
import { ref, onUnmounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'UploadAudio',
  setup() {
    const store = useStore();
    const sound = ref(null);

    const fileUpload = e => {
      const file =
        e.target && e.target.files && e.target.files.length
          ? e.target.files[0]
          : null;

      const { name = '', type = '' } = file || {};

      if (file === null || !type.startsWith('audio')) {
        return;
      }

      const audioFile = URL.createObjectURL(file);

      sound.value = audioFile;
      store.dispatch('fetchSoundInfo', {
        name,
        type,
      });
    };

    onUnmounted(() => {
      sound.value = null;
    });

    return {
      fileUpload,
      sound,
      soundInfo: computed(() => store.state.soundInfo),
    };
  },
};
</script>
