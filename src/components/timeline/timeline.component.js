// Import framework specific functions
import {Component, h} from 'preact';
import './timeline.style.scss';

export class TimelineComponent extends Component {
    render() {
        return (
            <div className="timeline-component">
                <div className="main_buttons">
                    <button>About</button>
                    <button>Friends</button>
                    <button>Carnet</button>
                </div>

                <div className="Preview">
                    <div class="About_preview">
                        <p className="Descriere">Descriere</p>
                    </div>
                    <div class="Friends_preview">
                        <div className="row">
                            <img src="https://api.adorable.io/avatars/2" alt=""/>
                            <img src="https://api.adorable.io/avatars/3" alt=""/>
                            <img src="https://api.adorable.io/avatars/4" alt=""/>
                            <img src="https://api.adorable.io/avatars/5" alt=""/>
                        </div>
                        <div className="row">
                            <img src="https://api.adorable.io/avatars/1" alt=""/>
                            <img src="https://api.adorable.io/avatars/4" alt=""/>
                            <img src="https://api.adorable.io/avatars/5" alt=""/>
                            <img src="https://api.adorable.io/avatars/6" alt=""/>
                        </div>
                    </div>
                    <div class="Carnet_preview">
                        <div className="Note">
                            <p>Nota 1</p>
                            <p>Nota 2</p>
                            <p>Nota 3</p>
                            <p>Nota 4</p>
                        </div>
                    </div>
                </div>

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
