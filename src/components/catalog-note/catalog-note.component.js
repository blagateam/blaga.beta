// Import framework specific functions
import { Component, h } from 'preact';
import './catalog-note.style.scss';

export class CatalogNote extends Component {

	render() {
		return (
			<div className="catalog-note">
				<div className="table">
					<div className="table-head">
						<h3>Nota</h3>
						<h3>Tip</h3>
						<h3>Data</h3>
						<h3>Poza</h3>
					</div>
					<div className="table-text">
						<h3>10</h3>
						<h3>Test</h3>
						<h3>10/10/2017</h3>
						<h3>None</h3>
					</div>
					<div className="table-text">
						<h3>10</h3>
						<h3>Test</h3>
						<h3>10/10/2017</h3>
						<h3>None</h3>
					</div>
					<div className="table-text">
						<h3>10</h3>
						<h3>Test</h3>
						<h3>10/10/2017</h3>
						<h3>None</h3>
					</div>
				</div>
			</div>
		)
	}
}