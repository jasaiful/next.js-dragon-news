import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImage from "@/assets/The Dragon News.png"
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {

    const currentDate = getCurrentDate();

    return (
        <Box className="w-full my-5">
            <Container>
                <Image src={headingImage} width={500} height={500} alt='headingLogo' className="mx-auto" />
                <Typography variant="body2" textAlign="center" color="gray" className="my-2">
                    Journalism Without Fear or Favour
                </Typography>
                <Typography textAlign="center">
                    {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;