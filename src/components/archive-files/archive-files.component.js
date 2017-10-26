// Import framework specific functions
import { Component, h } from 'preact';
import './archive-files.style.scss';


export class Files extends Component {
    constructor(props) {
        super(props);
        this.fileName = this.props.fileName;
        this.url = this.props.url;
    }

    deleteFile(){
        this.props.deleteFile(this.fileName);
    }
   
    render() {
        return (
            <div className="file">
                <a href={this.url} className="fileName">{this.fileName}</a>
                <button onClick={()=>{this.deleteFile()}}>X</button>
            </div>
        )
    }
}
