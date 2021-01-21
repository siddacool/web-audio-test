<template>
  <Button @click="handleLaunchUpload" class="upload-button ml-auto">
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
</template>

<script>
import { defineComponent } from 'vue';

import Button from './Button.vue';

export default defineComponent({
  name: 'LaunchUploadButton',
  emits: ['click'],
  components: {
    Button,
  },
  setup(props, context) {
    const handleLaunchUpload = () => {
      context.emit('click');
    };

    return {
      handleLaunchUpload,
    };
  },
});
</script>
