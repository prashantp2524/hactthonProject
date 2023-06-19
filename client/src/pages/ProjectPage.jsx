
import React from 'react';
import { Typography, Paper, Stack, Button } from '@mui/material'
import Container from '../components/common/Container'
import { useSelector } from 'react-redux'

const ProjectPage = () =>
{
    return (
        <Container>
            <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" fontSize={{ xs: "1.5rem", md: "2rem", lg: "3rem" }}
                    fontWeight="500">Full Stack Web Development Bootcamp</Typography>
            </Paper>
        </Container>
    )
}

export default ProjectPage