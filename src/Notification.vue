<template>
  <div :class="`notification ${options.position}`">
    <NotificationItem
      @removeNotificationItem="removeNotificationItem"
      :key="key"
      :duration="options.duration"
      v-for="(notification, key) in notifications"
      :notification="notification"/>
  </div>
</template>

<script>

import NotificationItem from "@/plugins/notification-ui/src/components/NotificationItem"

export default {
  name: "Notification",
  components: {NotificationItem},
  data() {
    return {
      notifications: [],
      options: {
        position: 'notification-top-right',
        duration: 2500,
      }
    }
  },
  methods: {
    removeNotificationItem(notification) {
      this.notifications.splice(this.notifications.indexOf(notification), 1)
    }
  }
}
</script>

<style scoped>

</style>
