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
    }
}
</script>