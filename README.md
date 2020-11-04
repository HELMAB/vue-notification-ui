Vue Notification UI
------------------

![Alt](./src/assets/img/vue-packages.png)

A simple push the notification ui with Vuejs


## Usage

```javascript
import Vue from 'vue'
import notification from 'vue-notification-ui'

Vue.use(notification, {
  position: 'notification-bottom-left'
})


// call $notification api
this.$notification('Vue Notification UI', 'A simple push the notification ui with Vuejs')
```
