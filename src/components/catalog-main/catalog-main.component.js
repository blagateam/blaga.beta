// Import framework specific functions
import { Component, h } from 'preact';

//Import style
import './catalog-main.style.scss';

import { CatalogNote } from '../catalog-note/catalog-note.component'
import { CatalogAbsente } from '../catalog-absente/catalog-absente.component'

export class CatalogMain extends Component {
    constructor(...args) {
        super()
        this.state = {
            noteComp: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (e.target.innerHTML == 'Note') {
            this.setState({
                noteComp: true
            })
            document.querySelector(".table-main").style.backgroundColor  = '#2196f3';
        }
        else {
            this.setState({
                noteComp: false
            })
            document.querySelector(".table-main").style.backgroundColor  = '#ff3a3a';
        }
    }

    render() {
        return (
            <div className="catalog-main">
                <div className="options">
                    <h1>{this.props.materia}</h1>
                    <button className="note" onClick={this.handleClick}>Note</button>
                    <button className="absente" onClick={this.handleClick}>Absente</button>
                </div>
                <div className="table-main">
                    {this.state.noteComp ? <CatalogNote /> : <CatalogAbsente />}
                </div>
            </div>
        )
    }
}