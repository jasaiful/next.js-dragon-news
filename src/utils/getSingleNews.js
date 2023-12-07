export const getSingleNews = async (id) => {
    const res = await fetch(
        `https://the-dragon-news-server-omega-nine.vercel.app/news/${id}`,
        {
            cache: "no-store",
        }
    );
    return res.json();
};



