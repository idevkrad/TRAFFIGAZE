<script>
    import { SimpleBar } from 'simplebar-vue3';
    import NotificationTravel from '../../../Pages/Notifications/Requests.vue';
    import NotificationDocument from '../../../Pages/Notifications/Documents.vue';
    export default {
        data() {
            return {
                languages: [{
                        flag: "/images/flags/us.jpg",
                        language: "en",
                        title: "English",
                    },
                    {
                        flag: "/images/flags/phil.png",
                        language: "ph",
                        title: "Tagalog",
                    }
                ],
                lan: "en",
                text: null,
                flag: null,
                value: null,
                currentUrl: window.location.origin,
            };
        },
        components: { SimpleBar, NotificationTravel, NotificationDocument },
        methods: {
            toggleMenu() {
                this.$parent.toggleMenu();
            },
            toggleRightSidebar() {
                this.$parent.toggleRightSidebar();
            },
            initFullScreen() {
                document.body.classList.toggle("fullscreen-enable");
                if (
                    !document.fullscreenElement &&
                    /* alternative standard method */
                    !document.mozFullScreenElement &&
                    !document.webkitFullscreenElement
                ) {
                    // current working methods
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen(
                            Element.ALLOW_KEYBOARD_INPUT
                        );
                    }
                } else {
                    if (document.cancelFullScreen) {
                        document.cancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                }
            },
        },
    };

</script>

<template>
    <header id="page-topbar">
        <div class="navbar-header">
            <div class="d-flex">
                <!-- LOGO -->
                <div class="navbar-brand-box">
                    <a href="/" class="logo logo-dark">
                        <span class="logo-sm">
                            <img src="/images/logo.svg" alt height="22" />
                        </span>
                        <span class="logo-lg">
                            <img src="/images/logo-dark.png" alt height="17" />
                        </span>
                    </a>

                    <a href="/" class="logo logo-light">
                        <span class="logo-sm">
                            <img src="/images/sei.png" alt height="30" />
                        </span>
                        <span class="logo-lg">
                            <img src="/images/logo-dost.png" alt height="19" />
                        </span>
                    </a>
                </div>

                <button id="vertical-menu-btn" type="button" class="btn btn-sm px-3 font-size-16 header-item"
                    @click="toggleMenu">
                    <i class="fa fa-fw fa-bars"></i>
                </button>

                <!-- App Search-->
                <form class="app-search d-none d-lg-block">
                    <div class="position-relative">
                        <input type="text" class="form-control" placeholder="Search here" />
                        <span class="bx bx-search-alt"></span>
                    </div>
                </form>
            </div>

            <div class="d-flex">
                <b-dropdown class="d-inline-block d-lg-none ms-2" variant="black" menu-class="dropdown-menu-lg p-0"
                    toggle-class="header-item noti-icon" right>
                    <template v-slot:button-content>
                        <i class="mdi mdi-magnify"></i>
                    </template>

                    <form class="p-3">
                        <div class="form-group m-0">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search ..."
                                    aria-label="Recipient's username" />
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="submit">
                                        <i class="mdi mdi-magnify"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </b-dropdown>

                <div class="dropdown d-none d-lg-inline-block ms-1">
                    <button type="button" class="btn header-item noti-icon" @click="initFullScreen">
                        <i class="bx bx-fullscreen"></i>
                    </button>
                </div>

                <NotificationDocument></NotificationDocument>
                <NotificationTravel></NotificationTravel>

                <b-dropdown right variant="black" toggle-class="header-item" menu-class="dropdown-menu-end">
                    <template v-slot:button-content>
                        <img class="rounded-circle header-profile-user" :src="currentUrl+'/images/avatars/'+$page.props.auth.data.avatar" alt="n/a" />
                        <span class="d-none d-xl-inline-block ms-1">{{($page.props.auth) ? $page.props.auth.data.firstname+' '+$page.props.auth.data.lastname : ''}}</span>
                        <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                    </template>
                    <!-- item-->

                    <b-dropdown-item> 
                        <a>
                            <i class="bx bx-user font-size-16 align-middle me-1"></i>
                            krad
                        </a>
                    </b-dropdown-item>
                    <b-dropdown-item class="d-block" href="javascript: void(0);">
                        <span class="badge bg-success float-end">11</span>
                        <i class="bx bx-wrench font-size-16 align-middle me-1"></i>
                       wew
                    </b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <Link href="logout" method="post" as="button" class="dropdown-item text-danger">
                        <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
                       Logout
                    </Link>
                </b-dropdown>

                <div class="dropdown d-inline-block">
                    <button type="button" class="btn header-item noti-icon right-bar-toggle toggle-right"
                        @click="toggleRightSidebar">
                        <i class="bx bx-cog bx-spin toggle-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>
