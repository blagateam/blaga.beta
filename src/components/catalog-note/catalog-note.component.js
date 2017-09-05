// Import framework specific functions
import {Component, h} from 'preact';
import './catalog-note.style.scss';

export class CatalogNote extends Component {

	render() {
        return (
            <div className="catalog-note">
            	<div className="DataNota">
            		<p className="DataNasterii">10/10</p>
            	</div>
            	<div className="nota">
            		<p className="notaElev">10</p>
            	</div>
            	<input className="atasament" type="file"></input>
            	<img className="atasamentPoza" src="https://api.adorable.io/avatars/6" alt=""/>
            </div>
        )
    }
}