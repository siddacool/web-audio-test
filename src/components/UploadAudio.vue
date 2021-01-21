<template>
  <div
    class="upload-audio w-full h-full absolute top-0 left-0"
    :class="sound && sound !== null ? 'z-m-10' : ''"
  >
    <div class="relative w-full h-full">
      <input
        type="file"
        accept="audio/*"
        @change="handleFileUpload"
        class="absolute z-10 top-0 left-0 opacity-0 flex w-full h-full cursor-pointer"
        id="upload-audio"
      />
      <div class="flex w-full h-full justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="90"
          viewBox="0 0 24 24"
          class="fill-current text-gray-600 dark:text-gray-400"
        >
          <path
            d="M10 9h-6l8-9 8 9h-6v11h-4v-11zm11 11v2h-18v-2h-2v4h22v-4h-2z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'UploadAudio',
  props: {
    sound: {
      default: null,
    },
  },
  emits: ['change'],
  setup(props, context) {
    const store = useStore();

    const handleFileUpload = e => {
      const file =
        e.target && e.target.files && e.target.files.length
          ? e.target.files[0]
          : null;

      const { name = '', type = '' } = file || {};

      if (file === null) {
        return;
      }

      store.dispatch('fetchSoundInfo', {
        name,
        type,
      });

      store.dispatch('setDuration', 0);
      store.dispatch('setSeekPosition', 0);

      context.emit('change', URL.createObjectURL(file));
    };

    return {
      handleFileUpload,
    };
  },
});
</script>
