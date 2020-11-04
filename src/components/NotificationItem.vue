<template>
  <div class="notification-item fadeOut"
       v-if="show">
    <div class="notification-icon"
         style="background-image: url('https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg')">
    </div>
    <div class="notification-content">
      <div class="notification-title">
        <div class="notification-title-text">
          <h3>{{ notification.title || 'Installed CLI Plugins' }}</h3>
        </div>
        <span class="notification-close" @click="onClose">&times;</span>
      </div>
      <div class="notification-body">
        <div class="notification-body-text">
          <p>{{ notification.body || 'Welcome to Your Vue.js App' }}</p>
        </div>
        <small class="notification-body-time">A minutes ago</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationItem",
  props: {
    notification: {
      type: Object,
    }
  },
  data () {
    return {
      show: true,
    }
  },
  methods: {
    onClose() {
      this.show = false
    }
  }
}
</script>

<style scoped>

</style>
