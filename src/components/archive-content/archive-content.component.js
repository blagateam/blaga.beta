// Import framework specific functions
import { Component, h } from 'preact';
import './archive-content.style.scss';

import { Files } from '../archive-files/archive-files.component'

export class ArchiveContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    }

    this.getUserInput = this.getUserInput.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
    this.setState({
      files: [],
      newFile: {},
    })

    const previousFiles = this.state.files;
    this.database = firebase.database().ref().child('files/' + this.props.materie);

    // DataSnapshot
    this.database.on('child_added', snap => {
      previousFiles.push({
        id: snap.key,
        fileName: snap.val().fileName,
        url: snap.val().url
      })

      this.setState({
        files: previousFiles
      })
    })

    this.database.on('child_removed', oldSnap => {
      let index = previousFiles.findIndex(x => x.id === oldSnap.key);
      previousFiles.splice(index, 1);

      this.setState({
        files: previousFiles
      })
    })

  }

  getUserInput(e) {
    this.setState({
      newFile: e.target.files[0]
    })
  }

  uploadFile() {
    this.props.addFile(this.state.newFile);
  }

  render() {
    return (
      <div className="archive-content-component">
        <div className="matHeader">
          <h1>{this.props.materie}</h1>
          <input type="file" onChange={this.getUserInput} />
          <button className="uploadButton"
            onClick={this.uploadFile}>Upload</button>
        </div>
        <div className="FilesBody">
          {
            this.state.files.map((file) => {
              return (
                <Files fileName={file.fileName}
                  key={file.id} url={file.url} deleteFile={this.props.deleteFile} />
              )
            })
          }
        </div>
      </div>
    )
  }
}