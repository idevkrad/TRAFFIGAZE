<template>
    <li class="list-inline-item d-none d-sm-inline-block font-size-12">
            {{(pagination.current_page == 1) ? '1' : ((pagination.current_page -1) * pagination.per_page) + 1 }}-{{(pagination.last_page == pagination.current_page) ? pagination.total : pagination.current_page * pagination.per_page }} of {{pagination.total}}
    </li>
    <li class="list-inline-item d-none d-sm-inline-block">
        <a class="btn nav-btn" v-bind:class="[{disabled: !links.prev}]" @click="fetch(links.prev)">
            <i class='bx bx-chevron-left h4 mb-n4 mt-1 me-n3'></i>
        </a>
    </li>
    <li class="list-inline-item d-none d-sm-inline-block">
        <a class="btn nav-btn" v-bind:class="[{disabled: !links.next}]" @click="fetch(links.next)">
            <i class='bx bx-chevron-right h4 ms-n3 mb-n4 mt-1 me-n4'></i>
        </a>
    </li>
</template>
<script>
    export default {
        props: ['pagination','links'], 
        methods: {
            fetch(data){
                this.$emit('fetch', data)
            }
        }
    }
</script>