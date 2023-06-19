import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";

import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";

const main = [
  {
    display: "home",
    path: "/",
    icon: <HomeOutlinedIcon />,
    state: "home",
  },
  {
    display: "dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
    state: "dashboard",
  },
];

const user = [
  {
    display: "password update",
    path: "/password-update",
    icon: <LockResetOutlinedIcon />,
    state: "password.update",
  },
];

const dashboardmenu = [
  {
    display: "projects",
    path: "/projects",
    icon: <HomeOutlinedIcon />,
    state: "projects",
  },
  {
    display: "quizes",
    path: "/quizes",
    icon: <HomeOutlinedIcon />,
    state: "quizes",
  },
  {
    display: "casestudies",
    path: "/casestudies",
    icon: <HomeOutlinedIcon />,
    state: "casestudies",
  },
];

const menuConfigs = { main, user, dashboardmenu };

export default menuConfigs;
