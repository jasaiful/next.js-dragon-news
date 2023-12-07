export const getAllCategories = async () => {
    const res = await fetch("https://the-dragon-news-server-omega-nine.vercel.app/categories");

    return res.json();
}