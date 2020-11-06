<template>
  <div class="notification-item" @click="handleClick">
    <div class="notification-icon"
         :class="{'no-circle' : notification.icon === null}"
         :style="`background-image: url(${icon});`">
    </div>
    <div class="notification-content">
      <div class="notification-title">
        <div class="notification-title-text">
          <h3 v-html="notification.title"></h3>
        </div>
      </div>
      <div class="notification-body">
        <div class="notification-body-text">
          <p class="no-margin">{{ notification.body }}</p>
        </div>
        <small class="notification-body-time">{{ notification.dateTime }}</small>
      </div>
    </div>
    <div class="notification-close-action">
      <span class="notification-close" @click="removeNotification">&times;</span>
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
    callback: {
      type: Function
    }
  },
  computed: {
    icon() {
      if (this.notification && this.notification.icon) {
        return this.notification.icon
      } else {
        return 'https://www.flaticon.com/svg/static/icons/svg/876/876183.svg'
      }
    }
  },
  methods: {
    handleClick () {
      if (this.callback) {
        this.callback()
      }
    },
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
