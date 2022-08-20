import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateNews = async () => {
    setLoading(true);
    const url = `https://inshorts.deta.dev/news?category=${props.filter}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.data);
    setLoading(false);
  };
  useEffect(() => {
    updateNews();
  }, [props.filter]);

  let heading = "News Monkey - Top Headlines";
  if (props.filter !== "all") heading = "News Monkey - Top " + props.filter.charAt(0).toUpperCase() + props.filter.slice(1) + " Headlines";

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        {heading}
      </h1>
      {loading && <Spinner />}
      <div className="container">
        <div className="row">
          {articles.map((a) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={a.id}>
                <NewsItem newsdata={a}/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default News;
