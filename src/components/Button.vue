<template>
  <button class="button focus:outline-none p-2"><slot /></button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
});
</script>
