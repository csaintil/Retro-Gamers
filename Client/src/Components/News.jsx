import React, { Component } from "react";
import { Link } from "react-router-dom";

class News extends Component {
  render() {
    return (
      <div className="news_container">
        {this.props.articles.map((article, i) => {
          return (
            <div key={i}>
              <p className="author"> By {article.author} </p>
              <p className="description"> {article.description} </p>
              <p className="published">{article.publishedAt} </p>
              <div className="source">
                <p className="sponser">
                  {" "}
                  Sponsored Stories &#169; {article.source.name}{" "}
                </p>
              </div>
              <h2 className="title">{article.title} </h2>
              <p className="news_link"> </p>
              <p className="news_img">
                {" "}
                <a href={article.url}>
                  {" "}
                  <img src={article.urlToImage} alt="" />
                </a>
              </p>
              <div className = "comments">
              <p className= "comment">
              Comments
              </p>
              </div>
            </div>
          );
        })}

        <p> </p>
      </div>
    );
  }
}
export default News;
