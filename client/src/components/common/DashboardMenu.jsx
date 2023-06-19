import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { ListItemButton, ListItemIcon, ListItemText, Menu, Typography, PaperProps } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import menuConfigs from "../../configs/menu.configs";
import { setUser } from "../../redux/features/userSlice";

const DashboardMenu = () =>
{
    const { user } = useSelector((state) => state.user)

    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null);
    const toggleMenu = (e) => setAnchorEl(e.currentTarget);


    return (


        <>

            <Typography
                variant="h6"
                sx={{ cursor: "pointer", userSelect: "none" }}
                onClick={toggleMenu}
            >
                {"dashboard"}
            </Typography>
            <Menu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                PaperProps={{ sx: { padding: 0 } }}
            >
                {menuConfigs.dashboardmenu.map((item, index) => (
                    <ListItemButton
                        component={Link}
                        to={item.path}
                        key={index}
                        onClick={() => setAnchorEl(null)}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText disableTypography primary={
                            <Typography textTransform="uppercase">{item.display}</Typography>
                        } />
                    </ListItemButton>
                ))}
            </Menu>
        </>


    )
}

export default DashboardMenu