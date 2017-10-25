// Import framework specific functions
import { Component, h } from 'preact';
import './catalog-note.style.scss';

import { CatalogColoana } from '../catalog-coloana/catalog-coloana.component'

export class CatalogNote extends Component {

	constructor() {
		super();

		this.state = {
			coloanaNota: []
		}
	}

	componentWillUpdate() {
		let database = firebase.database();
		let user = firebase.auth().currentUser;
		let userID = user.uid;
		let refMarks = database.ref("users/" + userID + "/marks");
		var coloana = [];

		refMarks.on('value', snapshot => {
			let variable = snapshot.val();
			let keys = Object.keys(variable);

			for(let i = 0; i < keys.length; i++){
				let key = keys[i];
				coloana.push(variable[key]);
			}

			this.setState({
				coloanaNota: coloana
			})
		})
	}

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
					{this.state.coloanaNota.map(content =>{
						return(<CatalogColoana coloana={content} />)
					})}
				</div>
			</div>
		)
	}
}