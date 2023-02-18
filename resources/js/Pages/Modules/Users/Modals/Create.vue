<template>
    <b-modal v-model="showModal" @ok="create($event)" id="create" size="xl" title="Create Employee" no-close-on-backdrop centered>
        <div class="row" style="margin-right: 10px; margin-left: 10px;">
            <div class="col-md-3">
                <myUpload field="img" @crop-success="cropSuccess" v-model="photo.show" :width="500" :height="500"
                    :params="params" :headers="headers" lang-type="en" img-format="png">
                </myUpload>
                <div @click="toggleShow" class="fuzone" style="width: 225px; height: 210px;">
                    <div v-if="photo.url != ''">
                        <img :src="photo.url" style="width: 200px; height: 200x;">
                    </div>
                    <div v-else class="fu-text" @click="toggleShow">
                        <span>
                            <i class="fa fa-picture"></i> Click here to upload<br>
                            <!-- <span v-if="errors.avatar" style="color: red; font-size: 12px; margin-top: -20px;">({{ errors.avatar[0] }})</span> -->
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <b-form class="customform">
                    <div class="row mt-3">
                        <div class="col-md-4">
                            <div class="form-group mb-3">
                                <label>Lastname: <span v-if="form.errors" v-text="form.errors.lastname" class="haveerror"></span></label>
                                <input type="text" class="form-control" v-model="user.lastname" style="text-transform: capitalize;">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Firstname: <span v-if="form.errors" v-text="form.errors.firstname" class="haveerror"></span></label>
                                <input type="text" class="form-control" v-model="user.firstname" style="text-transform: capitalize;">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Middlename: <span v-if="form.errors" v-text="form.errors.middlename" class="haveerror"></span></label>
                                <!-- :class="[(form.errors != undefined) ? 'is-invalid' : '']" -->
                                <input type="text" class="form-control" v-model="user.middlename" style="text-transform: capitalize;"> 
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Email: <span v-if="form.errors" v-text="form.errors.email" class="haveerror"></span></label>
                                <input type="email" class="form-control" v-model="user.email" style="text-transform: lowercase;">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Mobile No.:  <span v-if="form.errors" v-text="form.errors.mobile" class="haveerror"></span></label>
                                <input type="text" class="form-control" v-model="user.mobile">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Birthday: <span v-if="form.errors" v-text="form.errors.birthday" class="haveerror"></span></label>
                                <date-picker
                                    v-model:value="user.birthday"
                                    type="date" format="YYYY-MM-DD"
                                    lang="en"
                                    placeholder="Select Date"
                                    :clearable="false"
                                    >
                                </date-picker>
                            </div>
                        </div>
                        <div class="col-md-6" style="margin-top: -8px; margin-bottom: -15px;">
                            <div class="row" style="margin-top: 20px;">
                                <div class="col-md-4">
                                    <div class="custom-control custom-radio mb-3">
                                        <input type="radio" id="customRadio1" class="custom-control-input me-2"  value="M" v-model="user.gender">
                                        <label class="custom-control-label" for="customRadio1">Male</label>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="custom-control custom-radio mb-3">
                                        <input type="radio" id="customRadio2" class="custom-control-input me-2" value="F" v-model="user.gender">
                                        <label class="custom-control-label" for="customRadio2">Female</label>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div class="col-md-12">
                            <hr class="mb-4">   
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Position: <span v-if="form.errors" v-text="form.errors.position_id" class="haveerror"></span></label>
                                <Multiselect 
                                v-model="user.position" 
                                :options="positions"
                                :allow-empty="false"
                                :show-labels="false"
                                label="name" track-by="id"
                                placeholder="Select Role"/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Status: <span v-if="form.errors" v-text="form.errors.status_id" class="haveerror"></span></label>
                                <Multiselect 
                                v-model="user.status" 
                                :options="statuses"
                                :allow-empty="false"
                                :show-labels="false"
                                label="name" track-by="id"
                                placeholder="Select Status"/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group" style="margin-top: 5px;">
                                <label>Department: <span v-if="form.errors" v-text="form.errors.department_id" class="haveerror"></span></label>
                                <Multiselect 
                                v-model="user.department" 
                                :options="departments"
                                :allow-empty="false"
                                :show-labels="false"
                                label="others" track-by="id"
                                placeholder="Select Department"/>
                            </div>
                        </div>
                         <div class="col-md-6">
                            <div class="form-group" style="margin-top: 5px;">
                                <label>Office: <span v-if="form.errors" v-text="form.errors.office_id" class="haveerror"></span></label>
                                <Multiselect 
                                v-model="user.office" 
                                :options="offices"
                                :allow-empty="false"
                                :show-labels="false"
                                label="name" track-by="id"
                                placeholder="Select Office"/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group" style="margin-top: 5px;">
                                <label>Educational Level: <span v-if="form.errors" v-text="form.errors.level_id" class="haveerror"></span></label>
                                <Multiselect 
                                v-model="user.level" 
                                :options="levels"
                                :allow-empty="false"
                                :show-labels="false"
                                label="name" track-by="id"
                                placeholder="Select Level"/>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group" style="margin-top: 5px;">
                                <label>Religion: <span v-if="form.errors" v-text="form.errors.religion_id" class="haveerror"></span></label>
                                <Multiselect 
                                v-model="user.religion" 
                                :options="religions"
                                :allow-empty="false"
                                :show-labels="false"
                                label="name" track-by="id"
                                placeholder="Select Level"/>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group" style="margin-top: 5px;">
                                <label>Bloodtype: <span v-if="form.errors" v-text="form.errors.blood_id" class="haveerror"></span></label>
                                <Multiselect 
                                v-model="user.bloodtype" 
                                :options="bloodtypes"
                                :allow-empty="false"
                                :show-labels="false"
                                label="name" track-by="id"
                                placeholder="Select Level"/>
                            </div>
                        </div>
                    </div>
                </b-form>
            </div>
        </div>
        <template v-slot:footer>
            <b-button @click="hide()" variant="secondary" block>Cancel</b-button>
            <b-button @click="create('ok')" variant="primary" :disabled="form.processing" block>Save</b-button>
        </template>
    </b-modal>
</template>

<script>
    import DatePicker from 'vue-datepicker-next';
    import 'vue-datepicker-next/index.css';
    import myUpload from 'vue-image-crop-upload/upload-3.vue';
    import Multiselect from '@suadelabs/vue3-multiselect';
    export default {
        props: ['dropdowns', 'positions'],
        components: { myUpload , Multiselect, DatePicker },
        data() {
            return {
                currentUrl: window.location.origin,
                roles: ['Super Administrator','Regional Director', 'Accountant', 'Scholarship Coordinator', 'Scholarship Staff'],
                user: {
                    id: '',
                    email: '',
                    firstname: '',
                    lastname: '',
                    middlename: '',
                    birthday: '',
                    gender: '',
                    mobile: '',
                    avatar: 'avatar.jpg',
                    img: '',
                    profile_id: '',
                    status: '',
                    position: '',
                    department: '',
                    office: '',
                    level: '',
                    religion: '',
                    bloodtype: ''
                },
                form: {},
                editable: false,
                showModal: false,
                photo: {
                    show: false,
                    url: '',
                    signature: ''
                },
                params: {
                    token: '123456798',
                    name: 'avatar'
                },
                headers: {
                    smail: '*_~'
                },
            }
        },
        watch: {
            datares: {
                deep: true,
                handler(val = null) {
                    if(val != null && val !== ''){
                        this.$emit('info', val.data);
                    }
                },
            },
        },
        computed: {
            statuses : function() {
                return this.dropdowns.filter(x => x.type === 'Employment Status');
            },
            departments : function() {
                return this.dropdowns.filter(x => x.type === 'Department');
            },
            offices : function() {
                return this.dropdowns.filter(x => x.classification === 'Office');
            },
            levels : function() {
                return this.dropdowns.filter(x => x.classification === 'Educational Level');
            },
            religions : function() {
                return this.dropdowns.filter(x => x.classification === 'Religion');
            },
            bloodtypes : function() {
                return this.dropdowns.filter(x => x.classification === 'Bloodtype');
            },
            datares() {
                return this.$page.props.flash.datares;
            },
        },
        methods: {
            show() {
                this.showModal = true;
            },

            edit(list){
                this.user = list;
                this.user.birthday = new Date(list.birthday);
                this.showModal = true;
                this.editable = true;
            },

            create() {
                this.form = this.$inertia.form({
                    id: this.user.id,
                    firstname: this.user.firstname,
                    lastname: this.user.lastname,
                    middlename: this.user.middlename,
                    email: this.user.email,
                    mobile: this.user.mobile,
                    birthday: (this.user.birthday != '') ? new Date(this.user.birthday).toLocaleDateString("af-ZA") : '',
                    gender: this.user.gender,
                    avatar: this.user.avatar ,
                    position_id: this.user.position.id,
                    department_id: this.user.department.id,
                    status_id: this.user.status.id,
                    office_id: this.user.office.id,
                    profile_id: this.user.profile_id,
                    level_id: this.user.level_id,
                    religion_id: this.user.religion_id,
                    blood_id: this.user.blood_id,
                    img: this.user.img,
                    editable: this.editable
                })

                if(!this.editable){
                    this.form.post('/employees',{
                        preserveScroll: true,
                        onSuccess: (response) => {
                            this.hide();
                        }
                    });
                }else{
                    this.form.put('/employees/update',{
                        preserveScroll: true,
                        onSuccess: (response) => {
                            this.hide();
                        }
                    });
                }
            },

            hide(){
                (this.form.hasOwnProperty('reset') ) ? this.form.reset().clearErrors() : this.user = {};
                this.showModal = false;
            },

            toggleShow() {
                this.photo.show = !this.photo.show;
            },

            cropSuccess(imgDataUrl, field) {
                this.photo.url = imgDataUrl;
                this.user.img = imgDataUrl;
            }
        }
    }
</script>
