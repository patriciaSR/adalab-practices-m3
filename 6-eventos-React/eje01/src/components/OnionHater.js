import React from 'react';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);

    this.checkIsHating = this.checkIsHating.bind(this);
  }

  checkIsHating(event) {
    const text = event.currentTarget.value;
    const isHating = text.includes(this.props.vegetable);
    
    this.props.reaction(isHating);
  }

  render(){
    return (
      <textarea className='textarea' onChange={this.checkIsHating}></textarea>
    )
  }
}

export default OnionHater;