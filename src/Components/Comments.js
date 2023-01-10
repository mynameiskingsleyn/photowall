import React, {Component} from 'react';

class Comments extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props)
        const com = event.target.elements.comment.value;
        event.target.elements.comment.value = '';
        if (com) {
            const comment = {
                id: Number(new Date()),
                post_id: this.props.post_id,
                com: com
            };
            //console.log(comment);
            this.props.startAddingComment(comment);
        }
        
    }

    render() {
        const comms = this.props.comments.filter((com) => {
            return com.post_id === this.props.post_id
        });
        return <div className="comment">
            {
                comms.map((comment, index) => {
                    return (
                    <p key={index}>{comment.com}</p>
                    )
                })
            }
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="comment" name="comment"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    }
}

export default Comments