<template>
  <Button
    class="theme-toggle-button text-gray-600 dark:text-gray-400"
    @click="handleThemeToggle"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      class="fill-current"
      v-if="isDarkTheme"
    >
      <circle cx="12" cy="12" r="12" />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      class="fill-current"
      v-else
    >
      <path
        d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.292 4.113-9.612 9.315-9.965-3.205 2.154-5.315 5.813-5.315 9.965s2.11 7.811 5.315 9.965c-5.202-.353-9.315-4.673-9.315-9.965z"
      />
    </svg>
  </Button>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Button from './Button.vue';
import { toggleTheme } from '../helpers/theme';

export default {
  name: 'ThemeToggleButton',
  components: {
    Button,
  },
  setup() {
    const store = useStore();

    const handleThemeToggle = () => {
      toggleTheme();
      store.dispatch('setTheme');
    };

    return {
      handleThemeToggle,
      isDarkTheme: computed(() => store.state.isDarkTheme),
    };
  },
};
</script>
