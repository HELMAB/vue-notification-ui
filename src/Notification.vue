<template>
  <div :class="`notification ${options.position}`">
    <NotificationItem
      :key="key"
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
        position: 'notification-top-right'
      }
    }
  }
}
</script>

<style scoped>

</style>
