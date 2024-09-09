import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  {
    id: 3,
    title: "Coding Courses",
    newTab: false,
    path: "",
    submenu: [
      {
        id: 31,
        title: "Java Full Stack",
        newTab: false,
        path: "/courses",
      },
      {
        id: 32,
        title: ".NET Full Stack",
        newTab: false,
        path: "/courses",
      },
      {
        id: 33,
        title: "MEAN Stack",
        newTab: false,
        path: "/courses",
      },
      {
        id: 34,
        title: "MERN Stack",
        newTab: false,
        path: "/courses",
      },
      {
        id: 35,
        title: "Big Data",
        newTab: false,
        path: "/courses",
      },
      {
        id: 36,
        title: "Power BI",
        newTab: false,
        path: "/courses",
      },
      {
        id: 37,
        title: "Hadoop",
        newTab: false,
        path: "/courses",
      },
    ]
  },
  {
    id: 4,
    title: "Non-coding Courses",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Manual Testing",
        newTab: false,
        path: "/courses",
      },
      {
        id: 42,
        title: "Automation Testing",
        newTab: false,
        path: "/courses",
      },
      {
        id: 43,
        title: "API Testing",
        newTab: false,
        path: "/courses",
      },
      {
        id: 44,
        title: "Mobile Testing",
        newTab: false,
        path: "/courses",
      },
      {
        id: 45,
        title: "Performance Testing",
        newTab: false,
        path: "/courses",
      },
      {
        id: 46,
        title: "Mobile Automation",
        newTab: false,
        path: "/courses",
      },
      {
        id: 47,
        title: "Appium",
        newTab: false,
        path: "/courses",
      },
    ]
  },
  {
    id: 5,
    title: "Contact",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "WhatsApp",
        newTab: true,
        path: "https://wa.me/9174859935?text=Hi%2C%20I%20am%20interested%20in%20your%20courses",
      },
      {
        id: 34,
        title: "Call Us",
        newTab: true,
        path: "tel:+91-9174859935",
      },
      {
        id: 36,
        title: "Get Callback",
        newTab: false,
        path: "/support",
      },
    ],
  },
];

export default menuData;
