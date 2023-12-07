import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";

const LatestNews = async () => {
    const { data } = await getAllNews();
    console.log(data[0]);

    return (
        <Box className="my-5">
            <Card>
                <CardMedia>
                    <Image src={data[0].thumbnail_url} width={800} height={500} alt="top-news" />
                </CardMedia>
                <CardContent>
                    <p
                        className="
                    w-[100px]
                    bg-red-500
                    text-white
                    px-2
                    my-5
                    rounded">
                        {data[0].category}
                    </p>
                    <Typography gutterBottom variant="h5" component="div">
                        {data[0].title}
                    </Typography>
                    <Typography gutterBottom className="my-3">
                        By {data[0].author.name} - {data[0].author.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data[0].details.length > 200
                            ? data[0].details.slice(0, 200) + "..."
                            : data[0].details}
                    </Typography>
                </CardContent>
            </Card>

            <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                {
                    data.slice(0, 4).map(news => (
                        <Grid key={news.id} item xs={6}>
                            <Card>
                                <CardMedia sx={{
                                    "& img": {
                                        width: "100%",
                                        height: "250px",
                                    },
                                }}
                                >
                                    <Image
                                        src={news.thumbnail_url}
                                        width={800}
                                        height={100}
                                        alt="top news" />
                                </CardMedia>
                                <CardContent>
                                    <p
                                        className="
                    w-[100px]
                    bg-red-500
                    text-white
                    px-2
                    my-5
                    rounded" >
                                        {news.category}
                                    </p>
                                    <Typography gutterBottom>
                                        {news.title}
                                    </Typography>
                                    <Typography gutterBottom className="my-3">
                                        By {news.author.name} - {news.author.published_date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">

                                        {news.details.length > 200
                                            ? news.details.slice(0, 200) + "..."
                                            : news.details}

                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }

            </Grid>
        </Box>
    );
};

export default LatestNews;