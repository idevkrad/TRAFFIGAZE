
<template>
    <div class="vertical-menu">
        <SimpleBar
        v-if="!isCondensed"
        :settings="settings"
        class="h-100"
        ref="currentMenu"
        id="my-element"
        >
        <SideNav/>
        </SimpleBar>

        <SimpleBar v-else class="h-100">
        <SideNav/>
        </SimpleBar>
    </div>
</template>

<script>
import { SimpleBar } from 'simplebar-vue3';
import SideNav from "./SideItem.vue";

/**
 * Sidebar component
 */
export default {
  components: { SimpleBar, SideNav },
  props: {
    isCondensed: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object
    }
  },
  data() {
    return {
      settings: {
        minScrollbarLength: 60,
      },
    };
  },
  methods: {
    onRoutechange() {
      setTimeout(() => {
        if(document.getElementsByClassName("mm-active").length > 0) {
        const currentPosition = document.getElementsByClassName("mm-active")[0].offsetTop;
        if (currentPosition > 500)
          this.$refs.currentMenu.SimpleBar.getScrollElement().scrollTop =
            currentPosition + 300;
        }
      }, 300);
    },
  },
  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true,
    },
  }
};
</script>