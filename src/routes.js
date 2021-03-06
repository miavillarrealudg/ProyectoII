/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Clientes from "views/Clientes.jsx";
import Reservaciones from "views/Reservaciones.jsx";
import Pagos from "views/Pagos.jsx";
import Menu from "views/Menu.jsx";

// import Dashboard from "views/Dashboard.jsx";
// import UserProfile from "views/UserProfile.jsx";
// import TableList from "views/TableList.jsx";

// import Icons from "views/Icons.jsx";
// import Maps from "views/Maps.jsx";
// import Notifications from "views/Notifications.jsx";
// import Upgrade from "views/Upgrade.jsx";

const dashboardRoutes = [
  {
    path: "/clientes",
    name: "Clientes",
    icon: "pe-7s-note2",
    component: Clientes,
    layout: "/admin"
  },
  {
    path: "/reservaciones",
    name: "Reservaciones",
    icon: "pe-7s-note2",
    component: Reservaciones,
    layout: "/admin"
  },
  {
    path: "/pagos",
    name: "Pagos",
    icon: "pe-7s-piggy",
    component: Pagos,
    layout: "/admin"
  },
  {
    path: "/Menu",
    name: "Menú",
    icon: "pe-7s-news-paper",
    component: Menu,
    layout: "/admin"
  },


  /*   {
      path: "/dashboard",
      name: "Dashboard",
      icon: "pe-7s-graph",
      component: Dashboard,
      layout: "/admin"
    },
   */
  /* {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },

  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
  {
    //upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: Upgrade,
    layout: "/admin"
  } */
];

export default dashboardRoutes;
