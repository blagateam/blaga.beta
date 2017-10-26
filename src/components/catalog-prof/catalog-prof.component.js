// Import framework specific functions
import {Component, h} from 'preact';
import './catalog-prof.style.scss';

export class CatalogProf extends Component {

	acceptMrkForm() {
		let database = firebase.database();
		let user = firebase.auth().currentUser;
		let userID = user.uid;
		let refMrk = database.ref('users/' + userID + '/marks');
		let temp;
		var dateRAW = document.querySelector('input[type="date"]').value;
		var dateSpl = dateRAW.split("").reverse();
		var date;
		var index = document.getElementById("nota");
		var type = index.options[index.selectedIndex].text;
		var mark = document.querySelector('input[type="number"]').value

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

		refMrk.push({
			nota: mark,
			tip: type,
			data: date
		})
	}

	render() {
        return (
            <div className="catalog-prof">
				<input type="number" min="1" max="10" value="5" />
				<select id="nota" required>
					<option value="">Test</option>
					<option value="">Teza</option>
					<option value="">Oral</option>
				</select>
				<input type="date" id="mark" required />
				<input type="file"/>
				<button className="AcceptAbsForm" onClick={this.acceptMrkForm}>Accept</button>
            </div>
        )
    }
}