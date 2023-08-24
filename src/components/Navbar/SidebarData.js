import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { FaGreaterThan, FaLessThan, FaRegUser } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { BiInfoCircle, BiEnvelope } from "react-icons/bi";
import { MdOutlineHomeWork } from "react-icons/md";
import { AiOutlineHistory, AiOutlineDoubleLeft } from "react-icons/ai";
import { FcMoneyTransfer } from "react-icons/fc";

export const SidebarData = [
  {
    title: "Personal Information",
    path: "/personal-information",
    icon: <IoIcons.IoIosPerson />,
    cName: "nav-text",
  },
  {
    title: "Change Email",
    path: "/change-email",
    icon: <IoIcons.IoIosMail />,
    cName: "nav-text",
  },
  {
    title: "Change Password",
    path: "/change-password",
    icon: <IoIcons.IoIosKey />,
    cName: "nav-text",
  },
  {
    title: "My Entries",
    path: "/my-entries",
    icon: <FcMoneyTransfer />,
    cName: "nav-text",
  },
  // {
  //   title: "FabiCash",
  //   path: "/fabicash",
  //   icon: <IoIcons.IoIosWallet />,
  //   cName: "nav-text",
  // },
  {
    title: "Wallet",
    path: "/userwallet",
    icon: <IoIcons.IoIosWallet />,
    cName: "nav-text",
  },
  // {
  //   title: "FAQ",
  //   path: "/faq",
  //   icon: <BiInfoCircle />,
  //   cName: "nav-text",
  // },
  // {
  //   title: "About Us",
  //   path: "/about-us",
  //   icon: <MdOutlineHomeWork />,
  //   cName: "nav-text",
  // },
  {
    title: "Contact Us",
    path: "/contact-us",
    icon: <BiEnvelope />,
    cName: "nav-text",
  },
];
