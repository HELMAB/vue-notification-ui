Vue Notification UI
------------------

![Alt](./src/assets/img/vue-packages.png)

A simple push the notification ui with Vuejs

## Installation

```
npm install vue-notification-ui --save
```

## Usage

```javascript
import Vue from 'vue'
import notification from 'vue-notification-ui'

Vue.use(notification, {
  position: 'notification-top-right', // top, bottom, left, right
  duration: 5000, // default
  left: 20, // default
  bottom: 20, // default
  top: 20, // default
  right: 40 // default
})


// call $notification api
this.$notification('Vue Notification UI', 'A simple push the notification ui with Vuejs', 'A minute ago', null, async () => {
  console.log('Clicked notification')
})
```
