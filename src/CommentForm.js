import React, { Component } from 'react';

class CommentForm extends Component {
    state = {  
        name: "",
        message: ""
    }


    handleChangeName = (e) => {
        this.setState({
        name:  e.target.value
        })
    }

    handleChangeMessage = (e) => {
        this.setState({
        message:  e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.state.name, this.state.message);
    }


    render() { 
        return (
            <div className="column">
                <form className="CommentForm" onSubmit={this.handleSubmit} >
                    <h2 className="title is-2">Ajouter un commentaire</h2>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Your name"
                            onChange={this.handleChangeName} 
                            value={this.state.name} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Your comment"
                            onChange={this.handleChangeMessage}
                            value={this.state.message}></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-primary">Envoyer</button>
                        </div>
                    </div>
                </form>
            </div>
          );
    }
}
 
export default CommentForm;