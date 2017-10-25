// Import framework specific functions
import {Component, h} from 'preact';
import './catalog-prof-absenta.style.scss';

export class CatalogProfAbsenta extends Component {

	render() {
        return (
            <div className="catalog-prof">
				<select required className="absTypes">
					<option value="">Motivata</option>
					<option value="">Intarziere</option>
					<option value="">Nemotivata</option>
				</select>
				<input type="date" />
            </div>
        )
    }
}