// Import framework specific functions
import { Component, h } from 'preact';
import './catalog-coloana-absenta.style.scss';

export class CatalogColoanaAbsenta extends Component {

	constructor(...args) {
        super(...args);
	}

    render() {
		return (
			<div className="catalog-coloana-absenta">
                <h3>{this.props.coloana.data}</h3>
                <h3>{this.props.coloana.tip}</h3>
			</div>
		)
	}
}