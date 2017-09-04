// Import framework specific functions
import { Component, h } from 'preact';

// Import the components
import { ArchiveHeader } from '../archive-header/archive-header.component';
import { ArchiveContent } from '../archive-content/archive-content.component';

export class ArchiveComponent extends Component {
    constructor() {
        super();

        this.updateContent = this.updateContent.bind(this);
        this.addFile = this.addFile.bind(this);
        this.showUploadForm = this.showUploadForm.bind(this);
        this.deleteFile = this.deleteFile.bind(this);
        this.dataExist = this.dataExist.bind(this);

        this.state = {
            materie: 'Romana',
            showUpload: false
        }

        this.duplicate = 0;
    }

    updateContent(mat) {
        this.setState({
            materie: mat
        })
    }

    dataExist(fName) {
        
        let database = firebase.database().ref('files/' + this.state.materie);
        database.once('value', snap => {
            if(snap.val() != null){

            let val = snap.val();
            
            let x = Object.keys(val).map(key => {
                return val[key];
            })

            for (let aux = 0; aux < x.length && this.duplicate == 0 ; aux++) {
                if (fName == x[aux].fileName) {
                    this.duplicate = 1;
                }
                else {
                    this.duplicate = 0;
                }
            }
        }
        })
    }

    addFile(file) {
        this.dataExist(file.name);
        if ( this.duplicate == 0) {
            firebase.storage().ref().child('files/' + this.state.materie + '/' + file.name).put(file).then(snapshot => {
                firebase.database().ref('files/' + this.state.materie).push().set({
                    fileName: file.name,
                    url: snapshot.downloadURL
                })

            }).catch((error) => {
                console.log(error)
            });
        }
    }

    showUploadForm(sta) {
        this.setState({
            showUpload: sta
        })
    }

    deleteFile(fname) {
        this.database = firebase.database().ref().child('files/' + this.state.materie).orderByChild("fileName").equalTo(fname);
        this.database.once('value', snap => {
            for (let obj in snap.val()) {
                firebase.database().ref().child('files/' + this.state.materie + '/' + obj).remove();
            }
        })
        firebase.storage().ref().child('files/' + this.state.materie + '/' + fname).delete();
    }

    render() {
        return (
            <div className="container archive">
                <ArchiveHeader updateContent={this.updateContent} />
                <ArchiveContent materie={this.state.materie} deleteFile={this.deleteFile} addFile={this.addFile} />
            </div>
        )
    }
}