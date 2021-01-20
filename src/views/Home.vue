<template>
  <div class="home">
    <UploadAudio />
  </div>
</template>

<script>
import UploadAudio from '../components/UploadAudio.vue';

export default {
  name: 'Home',
  components: {
    UploadAudio,
  },
};
</script>
