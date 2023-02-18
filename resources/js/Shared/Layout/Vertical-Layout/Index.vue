
<template>
    <div>
        <div id="preloader">
            <div id="status">
                <div class="spinner-chase">
                    <div class="chase-dot"></div>
                    <div class="chase-dot"></div>
                    <div class="chase-dot"></div>
                    <div class="chase-dot"></div>
                    <div class="chase-dot"></div>
                    <div class="chase-dot"></div>
                </div>
            </div>
        </div>
        <div id="layout-wrapper">
            <Header/>
            <Sidebar :is-condensed="isMenuCondensed" />

            <div class="main-content">
                <div class="page-content" style="margin-bottom: -60px;">
                    <div class="container-fluid">
                        <slot />
                    </div>
                </div>
            </div>
            <RightBar />
        </div>
    </div>
</template>


<script>
import Header from "./Header.vue";
import RightBar from "@/Shared/Layout/Common/RightBar.vue";
import Sidebar from "@/Shared/Layout/Vertical-Layout/Sidebar.vue";
export default {
    components: { Header, RightBar, Sidebar },
    data() {
        return {
            isMenuCondensed: false
        };
    },
    created: () => {
        document.body.removeAttribute("data-layout", "horizontal");
        document.body.removeAttribute("data-topbar", "dark");
    },
    mounted() {
        const layout = JSON.parse(localStorage.getItem("layout")) || {};
        if (layout.loader == true) {
            document.getElementById("preloader").style.display = "block";
            document.getElementById("status").style.display = "block";

            setTimeout(function() {
                document.getElementById("preloader").style.display = "none";
                document.getElementById("status").style.display = "none";
            }, 2500);
        } else {
            document.getElementById("preloader").style.display = "none";
            document.getElementById("status").style.display = "none";
        }
    },
    methods: {
        toggleMenu() {
            document.body.classList.toggle("sidebar-enable");

            if (window.screen.width >= 992) {
                document.body.classList.toggle("vertical-collpsed");
            } else {
                document.body.classList.remove("vertical-collpsed");
            }
            this.isMenuCondensed = !this.isMenuCondensed;
        },
        toggleRightSidebar() {
            document.body.classList.toggle("right-bar-enabled");
        },
        hideRightSidebar() {
            document.body.classList.remove("right-bar-enabled");
        }
    }
};
</script>