<template>
  <Button class="theme-toggle-button text-gray-600" @click="toggleTheme">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      class="fill-current"
    >
      <path
        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
      />
    </svg>
  </Button>
</template>

<script>
import Button from './Button.vue';
import { toggleTheme } from '../helpers/theme';

export default {
  name: 'ThemeToggleButton',
  components: {
    Button,
  },
  setup() {
    return {
      toggleTheme,
    };
  },
};
</script>
