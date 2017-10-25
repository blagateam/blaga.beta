// Import framework specific functions
import { Component, h } from 'preact';
import './catalog-absente.style.scss';

import { CatalogColoanaAbsenta } from '../catalog-coloana-absenta/catalog-coloana-absenta.component'
import { CatalogProfAbsenta } from '../catalog-prof-absenta/catalog-prof-absenta.component'

export class CatalogAbsente extends Component {

	constructor() {
		super();

		this.state = {
			coloanaAbsenta: [],
			showFormAbs: false
		}

		this.showFormAbsenta = this.showFormAbsenta.bind(this);
	}

	componentWillUpdate() {
		let database = firebase.database();
		let user = firebase.auth().currentUser;
		let userID = user.uid;
		let refAbsente = database.ref("users/" + userID + "/absente");
		var coloana = [];

		refAbsente.on('value', snapshot => {
			let variable = snapshot.val();
			let keys = Object.keys(variable);

			for (let i = 0; i < keys.length; i++) {
				let key = keys[i];
				coloana.push(variable[key]);
			}

			this.setState({
				coloanaAbsenta: coloana
			})
		})
	}

	showFormAbsenta() {
		let x = !this.state.showFormAbs;
		this.setState({
			showFormAbs: x
		})
	}

	render() {
		return (
			<div className="catalog-absente">
				<div className="container">
				<button className="showAbsBtn" onClick={this.showFormAbsenta}>+</button>
					{this.state.showFormAbs ? <CatalogProfAbsenta /> : null}
					<div className="table-absente">
						<div className="table-head">
							<h3>Data</h3>
							<h3>Tip</h3>
						</div>
						{this.state.coloanaAbsenta.map(content => {
							return (<CatalogColoanaAbsenta coloana={content} />)
						})}
					</div>
				</div>
			</div>
		)
	}
}