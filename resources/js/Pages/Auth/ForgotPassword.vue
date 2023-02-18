<template>

    <Head title="Forgot Password" />
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div class="">
            <div class="text-center mb-2 text-muted">
               <a to="/" class="d-block auth-logo">
                  <img src="/images/logo-dark.png" alt="" height="20" class="auth-logo-dark mx-auto" />
               </a>
               <p class="font-size-11 mt-3">Department of Science & Technology <br> Scholarship Information Management System</p>
            </div>
            <div class="card" style="width: 400px;">
                <div class="card-body pt-4">
                    <div class="p-2">
                        <form class="form-horizontal" @submit.prevent="submit">

                            <div class="mt-n3 mb-4">
                                <span class="fw-medium text-primary"> Reset Password</span>
                                <hr>
                                <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>
                            </div>

                            <div class="form-group mb-2">
                                <label for="email" style="margin-bottom: -5px;">Email</label>
                                <input type="email" placeholder="Enter email" class="form-control" v-model="form.email"
                                    required autocomplete="email" autofocus>
                            </div>

                            <div class="mt-3 d-grid">
                                <button class="btn btn-primary btn-block waves-effect waves-light" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                    type="submit">Email Password Reset Link</button>
                            </div>

                            <div class="mt-4 mb-n3 text-center">
                                <p class="font-size-11">
                                    Remember It ?
                                    <Link href="/login" class="fw-medium text-primary">Sign In here</Link>
                                </p>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
            <p class="text-center">© DOST-STSIMS <i class='bx bxs-heart text-danger'></i> 2021</p>
        </div>
    </div>
</template>
<script>
    export default {
        layout: null
    }

</script>
<script setup>
    import {
        useForm
    } from '@inertiajs/inertia-vue3';

    defineProps({
        status: String,
    });

    const form = useForm({
        email: '',
    });

    const submit = () => {
        form.post('/forgot-password');
    };

</script>
