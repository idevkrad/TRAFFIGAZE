<template>
    <div class="topnav">
        <div class="container-fluid">
            <nav class="navbar navbar-light navbar-expand-lg topnav-menu active">
                <div class="collapse navbar-collapse active" id="topnav-menu-content">
                    <ul class="navbar-nav active">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle arrow-none" id="topnav-components"
                                role="button"><i class="bx bx-home-circle me-1"></i> Dashboards 
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle arrow-none" id="topnav-components"
                                role="button"><i class="bx bx-book-bookmark me-1"></i> Documents 
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle arrow-none" id="topnav-components"
                                role="button"><i class="bx bx-trip me-1"></i> Travels 
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle arrow-none" id="topnav-components"
                                role="button"><i class="bx bx-notepad me-1"></i> Requests 
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle arrow-none" id="topnav-components"
                                role="button"><i class="bx bx-calendar me-1"></i> Calendar
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            wew : 'haha'
        }
    },

    created(){
        console.log(this.wew);
    }
}
</script>
