<template>
  <div :class="`notification ${options.position}`" :style="classPosition">
    <NotificationItem
      :callback="handleClicked"
      :position="options.position"
      :key="key"
      :duration="options.duration"
      v-for="(notification, key) in notifications"
      :notification="notification"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotificationItem from "./NotificationItem";

export default {
  name: "Notification",
  components: { NotificationItem },
  data() {
    return {
      options: {
        position: "notification-top-right",
        duration: 2500,
        top: 20,
        bottom: 20,
        left: 20,
        right: 40,
      },
      handleClick: null,
    };
  },
  computed: {
    ...mapState({
      notifications: (state) => state.notification.notifications,
    }),
    classPosition() {
      let styles = "";
      const positions = this.options.position.split("-");
      if (positions[1] === "top") {
        styles += `top: ${this.options.top}px;`;
      } else {
        styles += `bottom: ${this.options.bottom}px;`;
      }

      if (positions[2] === "left") {
        styles += `left: ${this.options.left}px;`;
      } else {
        styles += `right: ${this.options.right}px;`;
      }

      return styles;
    },
  },
  methods: {
    handleClicked() {
      if (this.handleClick) {
        this.handleClick();
      }
    },
    addNewNotification(id, title, body, dateTime, icon, handleClick) {
      this.handleClick = handleClick;
      this.$store.commit("notification/add", {
        id: id,
        title: title,
        body: body,
        dateTime: dateTime,
        icon: icon,
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Battambang:wght@400;700&family=Dangrek&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import "./../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
@import "./../assets/css/animate.min.css";
@import "./../assets/css/notification.css";
</style>
