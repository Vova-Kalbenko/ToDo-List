import { Component } from 'react';
class Form extends Component {
  state = {
    name: '',
    tag: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.formReset()
  };
  formReset = () => {
    this.setState({
      name: '',
      tag: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
        </label>
        <label>
          Tag
          <input
            type="text"
            value={this.state.tag}
            onChange={this.handleChange}
            name="tag"
          />
        </label>
        <button type="submit">Send</button>
      </form>
    );
  }
}
export default Form;
