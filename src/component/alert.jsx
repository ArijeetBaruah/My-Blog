import React, { Component } from 'react';

class Alert extends Component{
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  static Danger = "alert-danger"
  static Success = "alert-success"

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({
        show: false,
      });
      window.clearInterval(this.timer);
    }, 5000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {
    if (!this.state.show) {
      return <div/>;
    }

    const ClassStr = `alert ${this.props.type} alert-dismissible`;
    return (
      <div class={ClassStr}>
        {this.props.msg}
        <button type="button" className="close" onClick={() => {
          this.setState({
            show: false,
          });
        }} data-dismiss="alert">&times;</button>
      </div>
    );
  }
}

export default Alert;
