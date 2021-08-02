
// Import vue components
// import * as components from '@/lib-components/index';

// // install function executed by Vue.use()
// const install = function installVueNotificationUi(Vue) {
//   Object.entries(components).forEach(([componentName, component]) => {
//     Vue.component(componentName, component);
//   });
// };

// // Create module definition for Vue.use()
// export default install;

// // To allow individual component use, export components
// // each can be registered via Vue.component()
// export * from '@/lib-components/index';

// eslint-disable-next-line no-unused-vars
// import './src/assets/css/notification.css'
// import './src/assets/css/animate.min.css'
// import 'font-awesome/css/font-awesome.min.css'
import Notification from "./lib-components/Notification.vue"
import store from "./store"

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    const NotificationWrapper = Vue.extend(Notification)
    const vm = new NotificationWrapper({
      store
    }).$mount()

    document.body.appendChild(vm.$el)

    if (options) {
      for (const [key, value] of Object.entries(options)) {
        vm.options[key] = value
      }
    }

    // eslint-disable-next-line no-unused-vars
    Vue.prototype.$notification = (title, body, icon = null, handleClick = null, dateTime = null) => {
      vm.addNewNotification(Math.random(), title, body, dateTime, icon, handleClick)
    }
  }
}
