<template>
    <Header :title="title" :content="title" :items="items" />
    <div class="col-12 mt-n3">
        <div class="card">
            <div class="card-body" :style="{ height: height + 'px' }">

            </div>
        </div>
    </div>
</template>
<script>
import Header from "@/Shared/Header.vue";
import _ from 'lodash';
export default {
    inject:['count', 'height'],
    components : { Header },
    data(){
        return {
            currentUrl: window.location.origin,
             title: "Users",
            items: [
                {text: "User", href: "/",},
                {text: "Lists",active: true,},
            ],
            lists: [],
            meta: {},
            links: {},
        }
    },

    created(){
        // this.fetch();
    },

    watch: {
        datares: {
            deep: true,
            handler(val = null) {
                if(val != null && val !== ''){
                    this.message(val);
                }
            },
        },
        keyword(newVal){
            this.checkSearchStr(newVal)
        }
    },

    computed: {
        datares() {
            return this.$page.props.flash.datares;
        },
        types : function() {
            return this.dropdowns.filter(x => x.type === 'Employment Status');
        },
        offices : function() {
            return this.dropdowns.filter(x => x.classification === 'Office');
        },
        departments : function() {
            return this.dropdowns.filter(x => x.type === 'Department');
        },
        positions : function() {
            return this.dropdowns.filter(x => x.classification === 'Office');
        },
    },

    methods : {
        checkSearchStr: _.debounce(function(string) {
            this.fetch();
        }, 300),

        fetch(page_url){
            page_url = page_url || '/employees';
            axios.get(page_url,{
                params : {
                    keyword : this.keyword,
                    office: this.office,
                    status: this.status,
                    department: this.department,
                    count: this.count,
                    type: 'lists'
                }
            })
            .then(response => {
                if(response){
                    this.lists = response.data.data;                    
                    this.meta = response.data.meta;
                    this.links = response.data.links;
                    this.page = this.meta.per_page*(this.meta.current_page - 1);
                }
            })
            .catch(err => console.log(err));
        },

        update(list){
            this.$refs.update.set(list);
            this.editable = true;
        },

        create(){
            this.$refs.create.show();
            this.editable = false;
        },

        edit(list){
            this.$refs.create.edit(list);
            this.editable = true;
        },

        group(groups,user){
            this.$refs.group.set(groups,user);
            this.editable = true;
        },

        role(roles,user){
            this.$refs.role.set(roles,user);
            this.editable = true;
        },

        verify(list){
            this.$refs.verify.set(list);
        },

        message(list){
            if(!this.editable){
                this.lists.unshift(list);
            }else{
                let index = this.lists.findIndex(u => u.id === list.id);
                this.lists[index] = list;
            }
        },
    }   
}
</script>