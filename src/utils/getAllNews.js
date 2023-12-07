export const getAllNews = async () => {
    const res = await fetch(
      "https://the-dragon-news-server-omega-nine.vercel.app/all-news",
      {
        next: {
          revalidate: 30,
        },
      }
    );
    return res.json();
  };