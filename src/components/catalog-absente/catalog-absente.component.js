// Import framework specific functions
import { Component, h } from 'preact';
import './catalog-absente.style.scss';

export class CatalogAbsente extends Component {

	render() {
		return (
			<div className="catalog-absente">
				<div className="table-absente">
					<div className="table-head">
						<h3>Data</h3>
						<h3>Tip</h3>
					</div>
					<div className="table-text">
						<h3>12/11/2017</h3>
						<h3>Intarziere</h3>
					</div>
					<div className="table-text">
						<h3>15/10/2017</h3>
						<h3>Nemotivata</h3>
					</div>
					<div className="table-text">
						<h3>12/11/2017</h3>
						<h3>Motivata</h3>
					</div>
				</div>
			</div>
		)
	}
}