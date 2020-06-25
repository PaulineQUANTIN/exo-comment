import React, { Component } from 'react';

class CommentList extends Component {
    state = {
    }

    render() { 
        let isVisible = this.props.isAdmin ? "" : "";
        let commentsList = this.props.comments.map(comment => {
            return <article className="media">
                        <div className="media-content">
                            <div className="content">
                                <p className="comment" key={comment.id}>
                                    <strong>{comment.name}</strong>
                                    <br></br>
                                    {comment.message}
                                    <button onClick={() => {this.props.deleteComment(comment.id)}} className="delete is-pulled-right"></button>
                                </p>
                            </div>
                        </div>
                    </article>  
         })

        return (
            <div className="column">
                <div className="commentList">
                    <h2 className="title is-2">Liste des commentaires ({this.props.comments.length})</h2>
                {commentsList}
                </div>
                
            </div>
          );
    }
}
 
export default CommentList;