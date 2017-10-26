// Import framework specific functions
import {Component, h} from 'preact';
import './catalog-prof-absenta.style.scss';

export class CatalogProfAbsenta extends Component {

	constructor() {
		super();

		this.acceptAbsForm = this.acceptAbsForm.bind(this);
	}

	acceptAbsForm() {
		let database = firebase.database();
		let user = firebase.auth().currentUser;
		let userID = user.uid;
		let refAbs = database.ref('users/' + userID + '/absente');
		let temp;
		var dateRAW = document.querySelector('input[type="date"]').value;
		var dateSpl = dateRAW.split("").reverse();
		var date;
		var index = document.getElementById("absenta");
		var type = index.options[index.selectedIndex].text;

		temp = dateSpl[0];
		dateSpl[0] = dateSpl[1];
		dateSpl[1] = temp;

		temp = dateSpl[3];
		dateSpl[3] = dateSpl[4];
		dateSpl[4] = temp;

		temp = dateSpl[6];
		dateSpl[6] = dateSpl[9];
		dateSpl[9] = temp;

		temp = dateSpl[7];
		dateSpl[7] = dateSpl[8];
		dateSpl[8] = temp;

		dateSpl[2] = '/';
		dateSpl[5] = '/';

		date = dateSpl.join("");

		refAbs.push({
			data: date,
			tip: type
		})
	}

	render() {
        return (
            <div className="catalog-prof">
				<select id="absenta" className="absTypes" required>
					<option value="">Motivata</option>
					<option value="">Intarziere</option>
					<option value="">Nemotivata</option>
				</select>
				<input type="date" required pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"/>
				<button className="AcceptAbsForm" onClick={this.acceptAbsForm}>Accept</button>
            </div>
        )
    }
}