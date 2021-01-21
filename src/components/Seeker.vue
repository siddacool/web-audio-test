<template>
  <div
    class="seeker flex-1 w-full shadow lg:rounded-t lg:h-28 bg-gray-200 dark:bg-gray-600"
  >
    <div
      class="seek h-full bg-gray-300 dark:bg-gray-500"
      :style="`width: ${seekPosition}%`"
    ></div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Seeker',
  setup() {
    const store = useStore();

    return {
      seekPosition: computed(() => store.state.seekPosition),
    };
  },
});
</script>

<style lang="scss" scoped>
.seeker {
  // padding-right: 2px;
  overflow: hidden;
  .seek {
    transition: width 100ms;
  }
}
</style>
