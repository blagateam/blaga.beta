// Import framework specific functions
import {Component, h} from 'preact';
import './catalog.style.scss';
import {CatalogHeader} from '../catalog-header/catalog-header.component';
import {CatalogProf} from '../catalog-prof/catalog-prof.component';
import {CatalogNote} from '../catalog-note/catalog-note.component';
import {CatalogAbsente} from '../catalog-absente/catalog-absente.component';

export class CatalogComponent extends Component {

    render() {
        return (
            <div className="catalog-component">
            	<CatalogHeader />
            	<CatalogProf />
            	<div className="catalogBottom">
	            	<div className="PartNote">
	            		<CatalogNote />
	            		<CatalogNote />
	            		<CatalogNote />
	            		<CatalogNote />
	            	</div>
	            	<div className="PartAbsente">
	            		<CatalogAbsente />
	            		<CatalogAbsente />
	            		<CatalogAbsente />
	            		<CatalogAbsente />
	            	</div>
	            </div>
            </div>
        )
    }
}