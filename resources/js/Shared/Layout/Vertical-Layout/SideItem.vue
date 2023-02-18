
<template>
<div id="sidebar-menu">
    <ul id="side-menu" class="metismenu list-unstyled">
        <template v-for="item in menuItems">
            <li class="menu-title" v-if="item.isTitle" :key="item.id">
                {{ item.label }}
            </li>
            <li v-if="!item.isTitle && !item.isLayout" :key="item.id">
                <a v-if="hasItems(item)" href="javascript:void(0);" class="is-parent" :class="{ 'has-arrow': !item.badge, 'has-dropdown': item.badge }">
                    <i :class="`bx ${item.icon}`" v-if="item.icon"></i>
                    <span>{{ item.label }}</span>
                    <span :class="`badge rounded-pill bg-${item.badge.variant} float-end`" v-if="item.badge">{{ $t(item.badge.text) }}</span>
                </a>
                <Link :href="item.link" :class="{'mm-active': $page.component.startsWith(item.name) }"  v-if="!hasItems(item)" class="side-nav-link-ref">
                    <i :class="`bx ${item.icon}`" v-if="item.icon"></i>
                    <span>{{ item.label }} </span>
                    <span :class="`badge rounded-pill bg-${item.badge.variant} float-end`" v-if="item.badge">{{ item.badge.text }}</span>
                </Link>

                <ul v-if="hasItems(item)" class="sub-menu" aria-expanded="false">
                    <li v-for="(subitem, index) of item.subItems" :key="index">
                        <a v-if="!hasItems(subitem)" class="side-nav-link-ref">
                             <i :class="`bx ${subitem.icon}`" v-if="subitem.icon"></i> {{ item.label  }}
                        </a>
                        <a v-if="hasItems(subitem)" class="side-nav-link-a-ref has-arrow" href="javascript:void(0);">{{ subitem.label }}</a>
                        <ul v-if="hasItems(subitem)" class="sub-menu mm-collapse" aria-expanded="false">
                            <li v-for="(subSubitem, index) of subitem.subItems" :key="index">
                                <a class="side-nav-link-ref">
                                    {{ subitem.label }}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </template>
    </ul>
</div>
</template>

<script>
import { menuItems} from "./menu";

export default {
    data() {
        return {
            menuItems: menuItems,
            menuData: null,
        };
    },

    methods: {
        hasItems(item) {
            return item.subItems !== undefined ? item.subItems.length > 0 : false;
        },
        toggleMenu(event) {
            event.currentTarget.nextElementSibling.classList.toggle("mm-show");
        },
    },
}
</script>