import React from "react";

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <img className="img" src="https://i.imgur.com/BAGjiyF.jpg" />
        <button  className='btn' onClick={this.props.changeView('home')}>Join Us</button>
      </div>
    );
  }
}
export default Logo;
