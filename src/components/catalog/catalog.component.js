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
	            		<div className="HeaderNota">
	            			<div className="P_Data">
	            				<p>Data</p>
	            			</div>
	            			<div className="P_Tipul">
	            				<p>Tipul</p>
	            			</div>
	            			<div className="P_Nota">
	            				<p>Nota</p>
	            			</div>
	            			<div className="P_Poza">
	            				<p>Poza</p>
	            			</div>
	            		</div>
	            		<CatalogNote />
	            		<CatalogNote />
	            		<CatalogNote />
	            		<CatalogNote />
	            	</div>
	            	<div className="PartAbsente">
	            		<div className="HeaderAbsente">
	            			<p>Absente</p>
	            		</div>
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