// Import framework specific functions
import {Component, h} from 'preact';
import './catalog-header.style.scss';

export class CatalogHeader extends Component {

	constructor() {
        super();

        this.moveLeftCatalog = this.moveLeftCatalog.bind(this);
        this.moveRightCatalog = this.moveRightCatalog.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.index = 0;
       
    }

    componentDidMount(){
        let track = document.querySelector(".track");
        this.numberOfElements = track.querySelectorAll(".track button").length - 4;
        console.log(this.numberOfElements);
    }
    
    handleClick(e){
        this.props.changeMat(e.target.innerHTML);
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
                        <button onClick={this.handleClick}>Romana</button>
                        <button onClick={this.handleClick}>Matematica</button>
                        <button onClick={this.handleClick}>Informatica</button>
                        <button onClick={this.handleClick}>Engleza</button>
                        <button onClick={this.handleClick}>Franceza</button>
                        <button onClick={this.handleClick}>Chimie</button>
                        <button onClick={this.handleClick}>Geografie</button>
                        <button onClick={this.handleClick}>Istorie</button>
                        <button onClick={this.handleClick}>Desen</button>
                        <button onClick={this.handleClick}>Muzica</button>
                        <button onClick={this.handleClick}>Sport</button>
                        <button onClick={this.handleClick}>TIC</button>
                        <button onClick={this.handleClick}>Biologie</button>
                        <button onClick={this.handleClick}>Religie</button>
                        <button onClick={this.handleClick}>Fizica</button>
                    </div>
                </div>
                <button onClick={this.moveRightCatalog}>&#62;</button>
                </div>
        )
    }
}