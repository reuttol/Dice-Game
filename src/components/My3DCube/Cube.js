import * as React from 'react';
import './cube.css';
import Cube from 'react-3d-cube';

class MyCube extends React.Component {
  render() {
    return (
        <div 
            style={{
                width: 100,
                height: 100
            }}
            >
            <Cube size={100} className="cube-container">
                <div className="dice dice-1"></div>
                <div className="dice dice-2"></div>
                <div className="dice dice-3"></div>
                <div className="dice dice-4"></div>
                <div className="dice dice-5"></div>
                <div className="dice dice-6"></div>

                {/* <div className='side-container'>
                    <div className="dice dice-1"></div>
                </div>
                <div className='side-container'>
                    <div className="dice dice-2"></div>
                </div>
                <div className='side-container'>
                    <div className="dice dice-3"></div>
                </div>
                <div className='side-container'>
                    <div className="dice dice-4"></div>
                </div>
                <div className='side-container'>
                    <div className="dice dice-5"></div>
                </div>
                <div className='side-container'>
                    <div className="dice dice-6"></div>
                </div> */}
            </Cube>
        </div>
    );
  }
}

export default MyCube;