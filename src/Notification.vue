<template>
  <div :class="`notification ${options.position}`">
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
        duration: 2500
      },
      handleClick: null,
    }
  },
  computed: {
    ...mapState({
      notifications: state => state.notification.notifications
    })
  },
  methods: {
    handleClicked () {
      this.handleClick()
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
