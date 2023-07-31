import { Component } from 'react';
class TodoEditor extends Component {
  state = {
    message: '',
  };
  handletextareaChange = e => {
    this.setState({ message: e.target.value });
  };
  handleAddSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleAddSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handletextareaChange}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    );
  }
}
export default TodoEditor;
