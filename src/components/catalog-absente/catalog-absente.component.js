// Import framework specific functions
import { Component, h } from 'preact';
import './catalog-absente.style.scss';

export class CatalogAbsente extends Component {

	constructor() {
		super();

		this.state = {
			coloanaAbsenta: []
		}
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

			for(let i = 0; i < keys.length; i++){
				let key = keys[i];
				coloana.push(variable[key]);
			}

			this.setState({
				coloanaAbsenta: coloana
			})
		})
	}

	render() {
		return (
			<div className="catalog-absente">
				<div className="table-absente">
					<div className="table-head">
						<h3>Data</h3>
						<h3>Tip</h3>
					</div>
					{this.state.coloanaAbsenta.map(content =>{
						return(<CatalogColoana coloana={content} />)
					})}
				</div>
			</div>
		)
	}
}