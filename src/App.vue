<template>
  <HomeView />
</template>

<script>
import HomeView from './views/Home.vue';

export default {
  name: 'App',
  components: {
    HomeView,
  },
};
</script>

<style lang="scss">
body {
  height: 100vh;
}

#app {
  height: inherit;
}
</style>
