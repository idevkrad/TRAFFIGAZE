<template>
     <div>
        <Vertical v-if="layoutType === 'vertical'">
            <slot/>
        </Vertical>
        <Horizontal v-if="layoutType === 'horizontal'">
            <slot/>
        </Horizontal>
        <b-modal v-model="message" hide-footer hide-header no-close-on-backdrop centered>
            <div class="p-4">
                <div class="text-center">
                    <b-form>
                        <div class="avatar-md mx-auto">
                            <div class="avatar-title rounded-circle bg-light">
                                <i :class="'bx '+$page.props.flash.type+' h1 mb-0 text-success'"></i>
                            </div>
                        </div>
                        <div class="mt-4">
                            <p class="font-size-13 text-muted">{{$page.props.flash.message }}</p>
                            <div class="mt-2">
                                <button type="button" @click="check()" class="btn btn-sm btn-primary w-md">Okay</button>
                            </div>
                        </div>
                    </b-form>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import Vertical from "@/Shared/Layout/Vertical-Layout/Index.vue";
import Horizontal from "@/Shared/Layout/Horizontal-Layout/Index.vue";
export default {
    components: { Vertical, Horizontal },
    computed: {
        layoutType() {
            return this.$root.layout?.type;
        },
        message() {
            return (this.$page.props.flash.message) ?  true : false;
        }
    },

    methods: {
        check(){
            this.$page.props.flash.message = '';
            this.message = false;
        }
    }
}
</script>