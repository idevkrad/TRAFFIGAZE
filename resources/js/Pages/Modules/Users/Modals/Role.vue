<template>
    <b-modal @ok="create($event)" v-model="showModal" ok-title="Confirm" title="Employee Roles" centered>
        <b-form class="customform">
            <div class="form-group mb-2 mt-2">
                <label>Roles:</label>
                <Multiselect 
                v-model="role" 
                :options="roles"
                :allow-empty="true"
                :show-labels="false"
                :multiple="true"
                label="name" track-by="id"
                placeholder="Select Role"/>
            </div>
        </b-form>
    </b-modal>
</template>

<script>
    import Multiselect from '@suadelabs/vue3-multiselect';
    export default {
        components : { Multiselect },
        props: ['roles'],
        data() {
            return {
                currentUrl: window.location.origin,
                errors: [],
                user: {},
                role: [],
                status: false,
                showModal: false,
                form: this.$inertia.form({
                    id:  '',
                    roles: []
                })
            }
        },

        methods: {
            set(roles,id) {
                this.form.id = id;
                this.role = roles;
                this.showModal = true;
            },

            create() {
                this.form.roles = this.role.map(function(a) {return a.id;});
                this.form.get('/employees/roles/edit',{
                    preserveScroll: true,
                    onSuccess: (response) => {
                        this.showModal = false;
                        this.form.editable = true;
                    }
                });
            }
        }
    }

</script>
