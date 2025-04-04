import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventsView from "../views/EventsView.vue";
import EventView from "../views/EventView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import CategoryView from "../views/CategoryView.vue";
import ProfileView from "../views/ProfileView.vue";
import TriaView from "../views/tria.vue";
import HelpCenter from "../views/HelpCenterView.vue"
import TryView from "../views/try.vue";
import TryView2 from "../views/try2.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/events",
            name: "events",
            component: EventsView
        },{
            path: "/event",
            name: "event",
            component: EventView
        },{
            path: "/categories",
            name: "categories",
            component: CategoriesView
        },
        {
            path: "/category",
            name: "category",
            component: CategoryView
        },
        {
            path: "/profile",
            name: "profile",
            component: ProfileView
        },
        {
            path: "/tria",
            name: "tria",
            component: TriaView
        },
        {
            path: "/try",
            name: "try",
            component: TryView
        },
        {
            path: "/help",
            name: "help",
            component: HelpCenter
        },
        {
            path: "/try2",
            name: "try2",
            component: TryView2
        }
    ]
})

export default router