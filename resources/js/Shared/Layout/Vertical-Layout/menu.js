export const menuItems = [{
        id: 1,
        label: "Menu",
        isTitle: true,
        user: [],
    },
    {
        id: 2,
        label: "Home",
        icon: "bx-home-circle",
        link: "/home",
        component: "Home/Index",
        name: "Home",
        user: [],
    },
    {
        id: 3,
        label: "Users",
        icon: "bxs-face",
        link: "/users",
        component: "Modules/Users/Index",
        name: "Modules/Users",
        user: ['Super Administrator'],
    },
];