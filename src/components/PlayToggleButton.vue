<template>
  <Button @click="handleTogglePlay" class="play-button">
    <div class="text-gray-600 dark:text-gray-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 24 24"
        class="fill-current"
        v-if="isPlaying"
      >
        <path
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17h-3v-10h3v10zm5 0h-3v-10h3v10z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 24 24"
        class="fill-current"
        v-else
      >
        <path
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"
        />
      </svg>
    </div>
  </Button>
</template>

<script>
import { defineComponent } from 'vue';

import Button from './Button.vue';

export default defineComponent({
  name: 'PlayToggleButton',
  props: {
    isPlaying: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  components: {
    Button,
  },
  setup(props, context) {
    const handleTogglePlay = () => {
      context.emit('click');
    };

    return {
      handleTogglePlay,
    };
  },
});
</script>
