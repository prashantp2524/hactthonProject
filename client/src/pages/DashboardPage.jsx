import React from 'react';
import { Typography, Paper, Stack, Button } from '@mui/material'
import Container from '../components/common/Container'
import { useSelector } from 'react-redux'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import menuConfigs from '../configs/menu.configs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css'


const DashboardPage = () =>
{

    const { user } = useSelector((state => state.user))
    // console.log(user)

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) =>
    {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <Container>
                <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography className='animate-charcter' variant="h4" fontSize={{ xs: "1.5rem", md: "2rem", lg: "3rem" }}
                        fontWeight="500">Dashboard</Typography>
                </Paper>
            </Container>
            <Container>
                <Stack >
                    {menuConfigs.dashboardmenu.map((item, index) => (
                        <Button
                            key={index}
                            component={Link}
                            to={item.path}
                        >
                            <Accordion expanded={expanded === index} onChange={handleChange(index)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        {item.display}
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Button>
                    ))}
                </Stack>
            </Container>
        </>
    )
}

export default DashboardPage