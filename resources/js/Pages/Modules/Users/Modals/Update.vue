<template>
    <b-modal v-model="showModal" @ok="create($event)" id="update" ok-title="Confirm" title="Update Status" centered>
        <p v-if="this.user.is_active == 1">Are you sure you want to <span class="fw-bold text-danger">deactivate</span> {{user.firstname}} {{user.lastname}}?</p>
        <p v-else>Are you sure you want to <span class="fw-bold text-success">activate</span> {{user.firstname}} {{user.lastname}}?</p>
        <div v-if="this.user.is_active == 1" class="alert alert-warning" role="alert">
            This should blocked user from accessing the system.
        </div>
            <div v-else class="alert alert-warning" role="alert">
            This should allow user from accessing the system.
        </div>
    </b-modal>
</template>

<script>
    export default {
        data(){
            return {
                currentUrl: window.location.origin,
                errors: [], 
                user: {},
                showModal: false
            }
        },

        methods : {
            set(user){
                this.user = user;
                this.showModal = true;
            },

            create(){
                axios.put(this.currentUrl + '/employees/update', {
                    id: this.user.id,
                    is_active: (this.user.is_active == 1) ? 0 : 1
                })
                .then(response => {
                    this.$emit('info', response.data.data)
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        this.errors = error.response.data.errors;
                    }
                });
            },
        }
    }
</script>
