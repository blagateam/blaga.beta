// Import framework specific functions
import {Component, h} from 'preact';

//Import style
import './catalog.style.scss';

import { CatalogHeader } from '../catalog-header/catalog-header.component';
import { CatalogMain } from '../catalog-main/catalog-main.component';

export class CatalogComponent extends Component {
    constructor(){
        super();
        this.state={
            materia:'Romana'
        }

        this.changeMat = this.changeMat.bind(this);
    }

    changeMat(mat){
        this.setState({
            materia:mat
        })
    }

    render() {
        return (
            <div className="catalog-component">
            	<CatalogHeader changeMat={this.changeMat}/>
            	<CatalogMain materia={this.state.materia}/>
            </div>
        )
    }
}