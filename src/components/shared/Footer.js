import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Instagram, LinkedIn } from '@mui/icons-material';
import Link from "next/link";


const Footer = () => {

    // Menu
    const navItems = [
        {
            route: "Home",
            pathname: "/",
        },
        {
            route: "Pages",
            pathname: "/pages",
        },
        {
            route: "Category",
            pathname: "/category",
        },
        {
            route: "News",
            pathname: "/news",
        },
        {
            route: "About",
            pathname: "/about",
        },
        {
            route: "Contact",
            pathname: "/contact",
        },
    ];


    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box className="w-full text-center" sx={{
                    "& svg": {
                        color: "white",
                    }
                }} >

                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton>
                        <YouTubeIcon />
                    </IconButton>
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                    <IconButton>
                        <Instagram />
                    </IconButton>

                </Box>

                <Box className="w-full text-center">
                    {
                        navItems.map((item) => (
                            <Link key={item} href={item.pathname}>
                                <Button className="text-white">
                                    {item.route}
                                </Button>
                            </Link>
                        ))
                    }
                </Box>
                <Typography variant="body2" textAlign="center" color="gray">
                    @2023 The Dragon News. Design by Programming Hero.
                </Typography>
            </Container>
        </Box>

    );
};

export default Footer;