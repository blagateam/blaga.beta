// Import framework specific functions
import { Component, h } from 'preact';
import './catalog-note.style.scss';

import { CatalogColoana } from '../catalog-coloana/catalog-coloana.component'
import { CatalogProf } from '../catalog-prof/catalog-prof.component'

export class CatalogNote extends Component {

	constructor() {
		super();

		this.state = {
			coloanaNota: [],
			prof:false
		}

		this.showForm = this.showForm.bind(this);
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

			for (let i = 0; i < keys.length; i++) {
				let key = keys[i];
				coloana.push(variable[key]);
			}

			this.setState({
				coloanaNota: coloana
			})
		})
	}

	showForm(){
		let x=!this.state.prof;
		this.setState({
			prof:x
		})
	}

	render() {
		return (
			<div className="catalog-note">
				<button onClick={this.showForm} className="showBtn">+</button>
				<div className="container">
					{this.state.prof? <CatalogProf /> :null}
					<div className="table">
						<div className="grades">
							<div className="table-head">
								<h3>Nota</h3>
								<h3>Tip</h3>
								<h3>Data</h3>
								<h3>Poza</h3>
							</div>
							{this.state.coloanaNota.map(content => {
								return (<CatalogColoana coloana={content} />)
							})}
						</div>
					</div>
				</div>
			</div>
		)
	}
}