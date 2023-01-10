import React, {Component} from 'react';
import Title from './Title';

const title = "Add Photo";
class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const link = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    if (description && link) {
      var post = {
        id: Number(new Date()),
        description: description,
        imageLink: link
      };
      this.props.onAddPhoto(post);
    }
    console.log(link);
    console.log(description);
  }

  render() {
    return (
      <div>
            <Title title={title} />
            <div className="form">
              <form className="add-photo" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Link" name="link"/>
                <input type="text" placeholder="Description" name="description" />
                <button>Post</button>
              </form>
            </div>
      </div>
        )
  }
}

export default AddPhoto
