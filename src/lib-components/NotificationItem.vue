<template>
  <div :class="`notification-item animate__animated animate__${animatePosition} animate__faster ${icon}`">
    <template v-if="isNormalNotification">
      <div class="notification-icon">
        <i :class="`fa fa-${notificationIcon}`"></i>
      </div>
    </template>
    <template v-else>
      <div class="notification-icon"
           @click="handleClick"
           :class="{'no-circle' : notification.icon === null}"
           :style="`background-image: url(${icon});`">
      </div>
    </template>
    <div class="notification-content" @click="handleClick">
      <div class="notification-title">
        <div class="notification-title-text">
          <p v-html="notification.title"></p>
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
    },
    position: {
      type: String,
    }
  },
  computed: {
    animatePosition () {
      if (this.position.includes('right')) {
        return 'slideInRight'
      } else if (this.position.includes('left')) {
        return 'slideInLeft'
      } else {
        return null
      }
    },
    icon() {
      if (this.notification && this.notification.icon) {
        const isNormal = (['success', 'info', 'warning', 'danger']).includes(this.notification.icon)
        const isIcon = this.notification.icon.startsWith('http')
        if (isNormal || isIcon) {
          return this.notification.icon
        }
      }
      return 'default'
    },
    isNormalNotification() {
      if (this.icon && this.icon.startsWith('http')) {
        return false
      }
      return true
    },
    notificationIcon() {
      switch (this.icon) {
        case 'success':
          return 'check'
        case 'info':
          return 'info'
        case 'warning':
          return 'exclamation'
        case 'danger':
          return 'times'
        default:
          return 'bell'
      }
    }
  },
  methods: {
    handleClick() {
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
