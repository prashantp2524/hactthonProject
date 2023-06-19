import { Typography, Box, Avatar, Stack } from '@mui/material'
import Container from '../components/common/Container'
import './home.css'

const HomePage = () =>
{
    return (
        <Container>
            <Stack sx={{ margin: '5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box sx={{ position: 'relative', left: '100px' }}>
                    <Typography class="animate-charcter" variant='h4' fontWeight={700}>
                        Welcome to Hackthon
                    </Typography>
                </Box>
                <Box sx={{}}>
                    <img style={{ borderRadius: '50%' }} src="https://profoundedutech.com/blog/wp-content/uploads/2022/05/Full-Stack-Developer.png" alt="" />
                </Box>

            </Stack>
        </Container>
    )
}

export default HomePage