<template>
    <b-dropdown right menu-class="dropdown-menu-lg p-0 dropdown-menu-end" toggle-class="header-item noti-icon" variant="black">
        <template v-slot:button-content>
            <i class="bx bx-book-bookmark" v-bind:class="[(total != 0 ? 'bx-tada' : '')]"></i>
            <span v-if="total != 0" class="badge bg-danger rounded-pill">{{total}}</span>
        </template>

        <div class="p-3">
            <div class="row align-items-center">
                <div class="col">
                    <h6 class="m-0">Document Notifications </h6>
                </div>
                <div class="col-auto" v-if="lists.length != 0">
                    <a href="#!" class="small" key="t-view-all"> View All ({{total}})</a>
                </div>
            </div>
        </div>
        <SimpleBar style="max-height: 230px;" v-if="lists.length != 0">
            <ul class="list-group">
                <li @click="view(list)" class="list-group-item" v-for="(list,index) in lists" v-bind:key="index" style="cursor: pointer;">
                    <div class="media">
                        <div class="avatar-xs me-3">
                            <span class="avatar-title rounded-circle" v-bind:class="[(list.action == 0 ? 'bg-warning' : 'bg-danger')]">
                                <i class='bx' v-bind:class="[(list.action == 0 ? 'bx-show' : 'bxs-comment-dots')]"></i>
                            </span>
                        </div>
                        <div class="media-body mb-n2">
                            <div class="float-end" style="margin-top: 5px;">
                                <p class="mb-0 font-size-10" style="margin-top: -5px;"><i class='bx bx-calendar me-1'></i>{{ list.created_at }}</p>
                            </div>
                            <h5 class="font-size-12 font-weight-bold mb-0">{{list.route_slip}}</h5>
                            <p class="font-size-11 text-muted mt-2">{{list.subject}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </SimpleBar>
        <div class="p-2 border-top d-grid " >
            <a class="btn btn-sm btn-link font-size-12 text-center" style="cursor: pointer;">
                <span key="t-view-more" v-if="lists.length == 0"> No notifications found. </span>
                <span @click.prevent="more()" @click.native.capture.stop v-else-if="page < last_page"> View More </span>
                <span v-else> Nothing to load </span>
            </a>
        </div>
    </b-dropdown>
</template>

<script>
    // import View from '../Modules/Document/Modals/View.vue';
    import { SimpleBar } from 'simplebar-vue3';
    export default {
        components : { SimpleBar },
        data(){
            return {
                currentUrl: window.location.origin,
                errors: [], 
                lists: [],
                links: {},
                total: 0,
                page: 1,
                last_page: ''
            }
        },

        created(){
            // this.fetch();
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
                axios.get(this.currentUrl + '/documents/notifications')
                .then(response => {
                    this.lists = response.data.data;
                    this.total = response.data.meta.total;
                    this.last_page = response.data.meta.last_page;
                })
                .catch(err => console.log(err));
            },

            more(){
                this.page = this.page + 1;
                let page_url = this.currentUrl +'/documents/notifications?page='+this.page;
                 axios.get(page_url)
                .then(response => {
                    this.lists.push(response.data.data[0]);
                    console.log(this.lists);
                })
                .catch(err => console.log(err));
            },

            view(list){
                axios.get(this.currentUrl + '/documents/'+list.id, { params: { action: list.actions }})
                .then(response => {
                    let index = this.lists.findIndex(l => l.id === list.id);
                    this.lists.splice(index, 1);
                    this.total = this.total - 1;
                    this.$refs.view.show(list);
                })
                .catch(err => console.log(err));
            }

        }
    }
</script>
