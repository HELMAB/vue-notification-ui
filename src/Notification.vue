<template>
  <div :class="`notification ${options.position}`"
       :style="classPosition">
    <NotificationItem
      :callback="handleClicked"
      :key="key"
      :duration="options.duration"
      v-for="(notification, key) in notifications"
      :notification="notification"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import NotificationItem from "./components/NotificationItem"

export default {
  name: "Notification",
  components: {NotificationItem},
  data() {
    return {
      options: {
        position: 'notification-top-right',
        duration: 2500,
        top: 20,
        bottom: 20,
        left: 20,
        right: 40,
      },
      handleClick: null,
    }
  },
  computed: {
    ...mapState({
      notifications: state => state.notification.notifications
    }),
    classPosition() {
      let styles = ''
      const positions = this.options.position.split('-')
      if (positions[1] === 'top') {
        styles += `top: ${this.options.top}px;`
      } else {
        styles += `bottom: ${this.options. bottom}px;`
      }

      if (positions[2] === 'left') {
        styles += `left: ${this.options.left}px;`
      } else {
        styles += `right: ${this.options.right}px;`
      }

      return styles
    }
  },
  methods: {
    handleClicked() {
      if (this.handleClick) {
        this.handleClick()
      }
    },
    addNewNotification(id, title, body, dateTime, icon, handleClick) {
      this.handleClick = handleClick
      this.$store.commit('notification/add', {
        id: id,
        title: title,
        body: body,
        dateTime: dateTime,
        icon: icon
      })
    }
  }
}
</script>

<style scoped>

</style>
