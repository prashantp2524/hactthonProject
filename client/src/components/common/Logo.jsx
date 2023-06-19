import { Typography, useTheme } from '@mui/material';
// import '../../pages/home.css'
const Logo = () =>
{
    const theme = useTheme();


    return (
        <Typography fontWeight="700" fontSize="1.7rem">
            Hack<span style={{ color: theme.palette.primary.main }}>thon</span>
        </Typography>
    );
};

export default Logo;