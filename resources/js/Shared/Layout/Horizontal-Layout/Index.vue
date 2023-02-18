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
            <Header />
            <Navigation />
            <div class="main-content">
                <div class="page-content">
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
    import Navigation from "./Navigation.vue";
    import Header from "./Header.vue";
    import RightBar from "../Common/RightBar.vue";
    export default {
        props: ['auth'],
        components: { Header, Navigation, RightBar },
        data() {
            return {
                isMenuCondensed: false,
            };
        },
        created: () => {
            document.body.setAttribute("data-layout", "horizontal");
            document.body.setAttribute("data-topbar", "dark");
            document.body.removeAttribute("data-sidebar", "dark");
            document.body.removeAttribute("data-layout-size", "boxed");
        },
        mounted() {
            const layout = JSON.parse(localStorage.getItem("layout")) || {};
            if (layout.loader == true) {
                document.getElementById("preloader").style.display = "block";
                document.getElementById("status").style.display = "block";

                setTimeout(function () {
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
