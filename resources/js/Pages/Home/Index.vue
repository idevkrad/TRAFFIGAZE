<template>
    {{ auth}} s
</template>
<script>

export default {
    props: ['auth'],
    data(){
        return {
            currentUrl: window.location.origin,
            content: 'test'
        }
    },

    created(){
        this.listenForNewEvent();
    },

    methods : {
        listenForNewEvent(){
            Echo.join('posts')
                .listen('PostBroadcast', (data) => {
                    console.log(data.event);
                });
            },
    }
}
</script>