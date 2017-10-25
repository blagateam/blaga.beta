// Import framework specific functions
import {Component, h} from 'preact';
import './catalog-prof.style.scss';

export class CatalogProf extends Component {

	render() {
        return (
            <div className="catalog-prof">
				<input type="number" min="1" max="10" value="5" />
				<select required>
					<option value="">Test</option>
					<option value="">Teza</option>
					<option value="">Oral</option>
				</select>
				<input type="date" />
				<input type="file"/>
            </div>
        )
    }
}