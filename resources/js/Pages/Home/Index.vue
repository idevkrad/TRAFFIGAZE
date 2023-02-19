<template>
    {{ auth}}
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

    mounted(){
        this.listenForNewEvent();
    },

    methods : {
        listenForNewEvent(){
            Echo.join('public-channel')
                .listen('PostBroadcast', (data) => {
                    console.log(data.event);
                });
            },
    }
}
</script>