<template>
  <div :class="`notification ${options.position}`">
    <NotificationItem
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
      }
    }
  },
  computed: {
    ...mapState({
      notifications: state => state.notification.notifications
    })
  },
  methods: {
    addNewNotification(id, title, body, dateTime, icon) {
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
