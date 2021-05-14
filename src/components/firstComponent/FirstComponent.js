import './firstComponent.css';
import React from 'react';
import Draggable from 'react-draggable'; // The default

class FirstComponent extends React.Component {
    state = {
        deltaXyPos: {
            x: 0,
            y: 0
        }
    };

    handleDrag = (e, d) => {
        const { x, y } = this.state.deltaXyPos;
        this.setState({
            deltaXyPos: {
                x: x + d.deltaX,
                y: y + d.deltaY,
            }
        });
    };

    render() {

        const { deltaXyPos } = this.state;

        return (
            <Draggable
                onDrag={this.handleDrag}>

                <div className="drag-wrapper">
                    <p>Drag position:</p>
                    <div>
                        <strong>x: {deltaXyPos.x.toFixed(0)}, </strong>
                        <strong>y: {deltaXyPos.y.toFixed(0)}</strong>
                    </div>
                </div>

            </Draggable>
        );
    }
}

export default FirstComponent;