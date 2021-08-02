<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VueNotificationUiSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  VueNotificationUiSample,
  // }
});
</script>

<template>
  <div id="app">
    <vue-notification-ui-sample />
  </div>
</template>
