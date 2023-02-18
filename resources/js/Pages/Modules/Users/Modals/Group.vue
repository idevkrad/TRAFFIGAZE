<template>
    <b-modal @ok="create($event)" v-model="showModal" ok-title="Confirm" title="Employee Group" centered>
        <b-form class="customform">
            <div class="form-group mb-2 mt-2">
                <label>Groups:</label>
                <Multiselect 
                v-model="group" 
                :options="groups"
                :allow-empty="false"
                :show-labels="false"
                :multiple="true"
                label="acronym" track-by="id"
                placeholder="Select Group"/>
            </div>
        </b-form>
    </b-modal>
</template>

<script>
    import Multiselect from '@suadelabs/vue3-multiselect';
    export default {
        components : { Multiselect },
        props: ['groups'],
        data() {
            return {
                currentUrl: window.location.origin,
                errors: [],
                group: [],
                status: false,
                showModal: false,
                form: this.$inertia.form({
                    id:  '',
                    groups: []
                })
            }
        },

        methods: {
            set(groups,id) {
                this.form.id = id;
                this.group = groups;
                this.showModal = true;
            },

            create() {
                this.form.groups = this.group.map(function(a) {return a.id;});
                this.form.get('/employees/groups/edit',{
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
