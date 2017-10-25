// Import framework specific functions
import { Component, h } from 'preact';
import './catalog-coloana.style.scss';

export class CatalogColoana extends Component {

	constructor(...args) {
        super(...args);
	}

    render() {
		return (
			<div className="catalog-coloana">
				<h3>{this.props.coloana.nota}</h3>
				<h3>{this.props.coloana.tip}</h3>
                <h3>{this.props.coloana.data}</h3>
                <h3>None</h3>
			</div>
		)
	}
}