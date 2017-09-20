// Import framework specific functions
import { Component, h } from 'preact';
import './timeline.style.scss';


export class TimelineComponent extends Component {
    render() {
        return (
            <div className="timeline-component">
                <div className="filters">
                    <button className="active">all</button>
                    <button>romana</button>
                    <button>matematica</button>
                    <button>engleza</button>
                    <button>informatica</button>

                </div>
                
            </div>
        )
    }
}
