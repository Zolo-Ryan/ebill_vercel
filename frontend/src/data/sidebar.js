import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Dashboard(admin)",
    icon: <FaTh />,
    path: "/dashboard",
    role: ["ADMIN"],
  },
  {
    title: "Products(user)",
    icon: <FaTh />,
    path: "/products",
    role: ["USER"]
  },
  {
    title: "Cart(user)",
    icon: <FaTh />,
    path: "/cart",
    role: ["USER"],
  },
  {
    title: "Add Product(admin)",
    icon: <BiImageAdd />,
    path: "/add-product",
    role: ["ADMIN"],
  },
  {
    title: "Account(both)",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
    role: ["USER","ADMIN"]
  },
  {
    title: "Report Bug(both)",
    icon: <FaCommentAlt />,
    path: "/contact-us",
    role: ["USER","ADMIN"],
  },
];

export default menu;
