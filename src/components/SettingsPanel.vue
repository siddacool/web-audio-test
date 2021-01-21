<template>
  <div class="settings-panel absolute top-0 right-0 p-2 z-50 lg:pr-8">
    <ThemeToggleButton />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import ThemeToggleButton from './ThemeToggleButton.vue';

export default defineComponent({
  name: 'SettingsPanel',
  components: { ThemeToggleButton },
});
</script>
