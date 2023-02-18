<template>
    <b-modal v-model="showModal" id="verify" ok-title="Confirm" hide-footer title="User Verification" centered>
        <div class="p-2">
            <div class="text-center">
                <b-form class="customform">
                    <div v-if="!status">
                        <div class="avatar-md mx-auto">
                            <div class="avatar-title rounded-circle bg-light">
                                <i class="bx bxs-envelope h1 mb-0 text-primary"></i>
                            </div>
                        </div>
                        <div class="p-2 mt-2">
                            <h6>Send Verification Link</h6>
                            <p class="font-size-12 text-muted">
                                Send Verification link to 
                                <span class="fw-bold">{{ user.email }}</span> for activation.
                            </p>
                            <div class="mt-4">
                                <button type="button" :disabled="form.processing" @click="sendMail()" class="btn btn-success w-md">Send Mail</button>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="avatar-md mx-auto">
                            <div class="avatar-title rounded-circle bg-light">
                                <i class="bx bx-mail-send h1 mb-0 text-primary"></i>
                            </div>
                        </div>
                        <div class="p-2 mt-2">
                            <h5 class="text-success">Success!</h5>
                            <p class="font-size-12 text-muted">
                                Verification was sent to
                                <span class="fw-bold">{{ user.email }}</span> for activation.
                            </p>
                        </div>
                    </div>
                </b-form>
            </div>
        </div>
    </b-modal>
</template>

<script>
    export default {
        data() {
            return {
                currentUrl: window.location.origin,
                errors: [],
                user: {},
                status: false,
                showModal: false,
                form: this.$inertia.form({
                    id:  '',
                    editable: 'verify'
                })
            }
        },

        methods: {
            set(user) {
                this.user = user;
                this.showModal = true;
            },

            sendMail() {
                this.form.id = this.user.id;
                this.form.put('/employees/update',{
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
