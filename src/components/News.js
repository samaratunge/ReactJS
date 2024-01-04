import { useEffect, useState } from "react";

const News = () => {
    const [news, setNews] = useState([]);

    const fetchNews = () => {
        fetch("https://hn.algolia.com/api/v1/search?query=react")
            .then(result => result.json())
            .then(data => setNews(data.hits))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchNews();
    });


    return (<div>
        <h2>News {news.map((n, i) => (<p key={i}> {n.title}</p>))}</h2>

    </div>

    );
}

export default News;