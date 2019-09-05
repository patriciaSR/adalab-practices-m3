import React from 'react';

class MediaCardImproved extends React.Component {
  constructor() {
    super();

    this.state = {
      like: false
    };
  }

  render() {
    const color = this.state.like ? 'red' : '';

    return (
      <div className="card">
        <h1 className="name">{this.props.name}</h1>
        <span className="date">{this.props.date}</span>
        <img src={this.props.image} alt={this.props.name} />
        <p className="text">{this.props.text}</p>
        <span className="likes">{this.props.likes}</span>
        <i className={`fas fa-heart ${color}`} onClick={this.onHearthClick.bind(this)}></i>
      </div>
    );
  }

  onHearthClick() {
    this.setState({
      like: !this.state.like
    });
  }
}

// function MediaCard(props) {
//   return (
//     <div className="card">
//       <h1 className="name">{props.name}</h1>
//       <span className="date">{props.date}</span>
//       <img src={props.image} alt={props.name} />
//       <p className="text">{props.text}</p>
//       <span className="likes">{props.likes}</span>
//       <i className="fas fa-heart"></i>
//     </div>
//   );
// }

export default MediaCardImproved;