<template>
  <div class="upload-audio">
    <input type="file" accept="audio/*" @change="fileUpload" />
    <audio ref="audioPlayer" controls></audio>
    {{ soundInfo }}
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'UploadAudio',
  setup() {
    const store = useStore();
    const audioPlayer = ref(null);

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

      audioPlayer.value.src = audioFile;
      audioPlayer.value.play();

      store.dispatch('fetchSoundInfo', {
        name,
        type,
      });
    };

    return {
      fileUpload,
      audioPlayer,
      soundInfo: computed(() => store.state.soundInfo),
    };
  },
};
</script>
