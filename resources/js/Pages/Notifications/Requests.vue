<template>
    <b-dropdown right menu-class="dropdown-menu-lg p-0 dropdown-menu-end" toggle-class="header-item noti-icon" variant="black">
        <template v-slot:button-content>
            <i class="bx bxs-notepad" v-bind:class="[(lists.length != 0 ? 'bx-tada' : '')]"></i>
            <span v-if="lists.length != 0" class="badge bg-danger rounded-pill">{{lists.length}}</span>
        </template>

        <div class="p-3">
            <div class="row align-items-center">
                <div class="col">
                    <h6 class="m-0">Request Notifications </h6>
                </div>
                <div class="col-auto" v-if="lists.length != 0">
                    <a href="#!" class="small" key="t-view-all"> View All (1)</a>
                </div>
            </div>
        </div>
        <SimpleBar style="max-height: 230px;" v-if="lists.length != 0">
            <ul class="list-group">
                <li @click="view(list)" class="list-group-item" v-for="(list,index) in lists" v-bind:key="index" style="cursor: pointer;">
                    <div class="media">
                        <div class="avatar-xs me-3">
                            <span class="avatar-title rounded-circle" v-bind:class="list.bg">
                                <i class="bx bx-badge-check"></i>
                            </span>
                        </div>
                        <div class="media-body">
                            <div class="float-end" style="margin-top: 5px;">
                                <p class="mb-0 font-size-10" style="margin-top: -5px;"><i class='bx bx-calendar me-1'></i>{{ list.created }}</p>
                            </div>
                            <h5 class="font-size-12 fw-bold mb-0">{{ list.code }}</h5>
                            <p class="font-size-11 mt-2 mb-0"><span class="text-info fw-bold">{{ list.profile.name }}</span> <span class="text-muted"> {{ list.action }}.</span></p>
                        </div>
                    </div>
                </li>
            </ul>
        </SimpleBar>
        <div class="p-2 border-top d-grid">
            <a class="btn btn-sm btn-link font-size-12 text-center" style="cursor: default;">
                <span key="t-view-more" v-if="lists.length == 0"> No notifications found. </span>
                <span key="t-view-more1" v-else> View More </span>
            </a>
        </div>
    </b-dropdown>
    <!-- <View :role="$page.props.auth.data.role" ref="view"/> -->
</template>

<script>
    // import View from '../Modules/Request/Modals/View.vue';
    import { SimpleBar } from 'simplebar-vue3';
    export default {
        components : { SimpleBar },
        data(){
            return {
                currentUrl: window.location.origin,
                errors: [], 
                lists: []
            }
        },
        
        created(){
            // this.fetch();
            // this.listenForNewEvent();
            // this.roles = this.profile.roles.map(function(a) {return a.name;});
        },

        methods : {
            listenForNewEvent(){
                Echo.join('public-channel')
                .listen('TravelEvent', (data) => {
                    let user =  this.profile.id;
                    var exists = data.event.users.some(function(field){
                        return field.user_id === user;
                    });
                    if(data.event.type != "new"){
                        if(data.event.type == "comments"){
                            if(data.event.comment_by != user){
                                if(this.roles.includes('Regional Director')){
                                    data.event.action = data.event.action2;
                                    this.seens.unshift(data.event);
                                }else{
                                    (exists) ? this.seens.unshift(data.event) : '';
                                }
                            }
                        }else{
                            (exists) ? this.seens.unshift(data.event) : '';
                        }
                    }else{
                        (this.roles.includes('Regional Director')) ? this.seens.unshift(data.event) : '';
                    }
                });
            },

            fetch() {
                axios.get(this.currentUrl + '/application/notifications',{
                    params : {seened: 0}
                })
                .then(response => {
                    this.lists = response.data.data;
                })
                .catch(err => console.log(err));
            },

            view(list){
                axios.get(this.currentUrl + '/application/'+list.id)
                .then(response => {
                    let index = this.lists.findIndex(l => l.id === list.id);
                    this.lists.splice(index, 1);
                    this.$refs.view.set(list);
                })
                .catch(err => console.log(err));
            }

        }
    }
</script>
