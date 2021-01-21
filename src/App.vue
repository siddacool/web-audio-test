<template>
  <HomeView />
</template>

<script>
import { defineComponent } from 'vue';

import HomeView from './views/Home.vue';

export default defineComponent({
  name: 'App',
  components: {
    HomeView,
  },
});
</script>

<style lang="scss">
body {
  height: 100vh;
}

#app {
  height: inherit;
}
</style>
