import React, { Component } from 'react';

class NewsArticle extends Component {
  render() {
    const article = this.props.article;
    
    return (
      <div className="media">
        <div className="media-content">
          <div className="content">
            <p>
                <strong>{article.topic}</strong>
              <small><i> {article.detail}</i></small>
              <br/>
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsArticle;