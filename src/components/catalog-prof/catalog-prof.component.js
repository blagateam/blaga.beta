// Import framework specific functions
import {Component, h} from 'preact';
import './catalog-prof.style.scss';

export class CatalogProf extends Component {

	render() {
        return (
            <div className="catalog-prof">
               		<select className="TipElev">
               			<option className="Elev">Student1</option>
               			<option className="Elev">Student2</option>
               			<option className="Elev">Student3</option>
               			<option className="Elev">Student4</option>
               		</select>
            		<select className="TipDetalii">
            			<option className="Tip">Test</option>
            			<option className="Tip">Semester Test</option>
            			<option className="Tip">Project</option>
            			<option className="Tip">Absence</option>
            		</select>
            		<select className="SelectieNota">
            			<option className="Notele">10</option>
            			<option className="Notele">9</option>
            			<option className="Notele">8</option>
            			<option className="Notele">7</option>
            			<option className="Notele">6</option>
            			<option className="Notele">5</option>
            			<option className="Notele">4</option>
            			<option className="Notele">3</option>
            			<option className="Notele">2</option>
            			<option className="Notele">1</option>
            		</select>
            		<input type="file" className="Attachment"></input>
            		<input type="date" className="Bday"></input>
            		<button className="ADD">&#10010;</button>          		          	 
            </div>
        )
    }
}