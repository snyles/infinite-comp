import React, { Component } from 'react';
import styles from './LittleBox.module.css';

class LittleBox extends Component {
  state = { 
    littleBoxes: [],
    childColor: '#' + Math.floor(Math.random()*16777215).toString(16),
  }

  handlePlus = () => {
    this.setState(state => ({
      littleBoxes: [...state.littleBoxes, ""]
    }));
  }

  handleMinus = () => {
    const {littleBoxes} = this.state;
    if (littleBoxes.length === 0) return
    const littleCopy = littleBoxes.slice(0,littleBoxes.length - 1);
    this.setState({littleBoxes: littleCopy})
  }

  render() {
    const {littleBoxes, childColor } = this.state;
    return ( 
      <div 
        className={styles.littleBox} 
        style={{backgroundColor: this.props.bgColor}}
      >
        <div className={styles.boxButtons}>
          <button
            onClick={this.handlePlus}  
          >+</button>
          <button
            onClick={this.handleMinus}  
          >-</button>
        </div>
        <div className=
          {`${styles.boxBody} 
          ${(this.props.display ==='grid') ? styles.grid : styles.flex}`}
        >
          {littleBoxes.map((lb, idx) => (
            <LittleBox bgColor={childColor} key={idx} display={this.props.display} />
          ))}
        </div>
      </div>
     );
  }
}
 
export default LittleBox;