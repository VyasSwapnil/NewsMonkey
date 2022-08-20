import classes from "./NewsItem.module.css";

const NewsItem = (props) => {
  debugger;
  let source = props.newsdata.readMoreUrl ? props.newsdata.readMoreUrl : 'Unknown';
  if(source !== 'unknown'){
    if(source.includes('www.')) source = source.split('www.')[1].split('/')[0];
    else if(source.includes('://'))  source = source.split('://')[1].split('/')[0];
    
    if(source.includes('.co'))  source = source.split('.co')[0];
    else if(source.includes('.gov'))  source = source.split('.gov')[0];
    else if(source.includes('.in')) source = source.split('.in')[0];
    else if(source.includes('.org')) source = source.split('.org')[0];
  }
  return (
    <div className="my-3">
      <div className="card">
        <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: 0 }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        {/* <img className="card-img-top" src={props.newsdata.imageUrl}/> */}
        <div className={classes.img} style={{ backgroundImage: "url(" + props.newsdata.imageUrl + ")" }}></div>
        <div className="card-body">
          <h5 className="card-title">{props.newsdata.title}</h5>
          <p className="card-text">{props.newsdata.content}</p>
          <p className="card-text">
            <small className="text-muted">
              By {props.newsdata.author} on {props.newsdata.date} - {props.newsdata.time}
            </small>
          </p>
          <a href={props.newsdata.readMoreUrl} target="_bank" rel="noreferrer" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
