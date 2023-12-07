"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from "@/assets/logo.png";
import { IconButton, Link, Stack } from '@mui/material';
const pages = ['Products', 'Pricing', 'Blog'];

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Instagram, LinkedIn } from '@mui/icons-material';
import Header from './Header';


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
        pathname: "/categories/news?category=all-news",
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


function Navbar() {

    return (
        <>
        <Header></Header>
            <AppBar position="static" className='bg-black'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* Navbar logo */}
                        <Image src={logo} width={100} height={100} alt='logo' />

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

                        {/* social icons */}

                        <Box>
                            <Stack direction="row" sx={{
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
                            </Stack>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navbar;