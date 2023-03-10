import _ from 'lodash';
window._ = _;

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
import axios from 'axios';
window.axios = axios;

import 'vue-toast-notification/dist/theme-sugar.css';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     // forceTLS: true,
//     encrypted: true,
//     wsHost: window.location.hostname,
//     wsPort: 6001,
//     wssPort: 6001,
//     disableStats: true,
//     enabledTransport: ['ws','wss']
// });