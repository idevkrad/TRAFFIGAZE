<template>
    <b-modal id="message" title="Update Status" hide-footer centered>
        {{ message }}
    </b-modal>
</template>

<script>
    export default {
       props: ['message']
    }
</script>
