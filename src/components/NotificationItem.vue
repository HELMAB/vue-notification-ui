<template>
  <div class="notification-item">
    <div class="notification-icon"
         style="background-image: url('https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg')">
    </div>
    <div class="notification-content">
      <div class="notification-title">
        <div class="notification-title-text">
          <h3>{{ notification.title || 'Installed CLI Plugins' }}</h3>
        </div>
        <span class="notification-close" @click="removeNotification">&times;</span>
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
    },
    duration: {
      type: Number,
    },
    notificationIndex: {
      type: Number
    }
  },
  methods: {
    async removeNotification() {
      this.$store.commit('notification/remove', this.notification)
    }
  },
  async mounted() {
    const self = this
    const fadeNotification = () => {
      return new Promise(resolve => setTimeout(resolve, self.duration))
    }

    await fadeNotification().then(async () => {
      await this.removeNotification()
    })
  }
}
</script>

<style scoped>

</style>
