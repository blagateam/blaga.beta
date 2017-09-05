// Import framework specific functions
import {Component, h} from 'preact';
import './catalog-header.style.scss';

export class CatalogHeader extends Component {

	constructor() {
        super();

        this.moveLeftCatalog = this.moveLeftCatalog.bind(this);
        this.moveRightCatalog = this.moveRightCatalog.bind(this);

        this.index = 0;
       
    }

    componentDidMount(){
        let track = document.querySelector(".track");
        this.numberOfElements = track.querySelectorAll(".track button").length - 4;
        console.log(this.numberOfElements);
    }
    

    moveRightCatalog() {
        if (this.index < this.numberOfElements) {
            let track = document.querySelector(".track");
            this.index++;
            track.style.transform = "translateX( -" + (this.index * 100) + "px )";
        }
    }

    moveLeftCatalog() {
        if (this.index > 0) {
            let track = document.querySelector(".track");
            this.index--;
            track.style.transform = "translateX( -" + (this.index * 100) + "px )";
        }
    }

    render() {
        return (
                <div className="slider-wrap-catalog">
                <button onClick={this.moveLeftCatalog}>&#60;</button>
                <div className="slider">
                    <div className="track">
                        <button>Romana</button>
                        <button>Matematica</button>
                        <button>Informatica</button>
                        <button>Engleza</button>
                        <button>Franceza</button>
                        <button>Chimie</button>
                        <button>Geografie</button>
                        <button>Istorie</button>
                        <button>Desen</button>
                        <button>Muzica</button>
                        <button>Sport</button>
                        <button>TIC</button>
                        <button>Romana</button>
                        <button>Matematica</button>
                        <button>Informatica</button>
                        <button>Engleza</button>
                        <button>TIC</button>
                        <button>Romana</button>
                    </div>
                </div>
                <button onClick={this.moveRightCatalog}>&#62;</button>
                </div>
        )
    }
}