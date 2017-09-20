import { Component, h } from 'preact';
import './chat-window.style.scss';

export class ChatWindow extends Component {

	constructor(...args) {
        super(...args);
	
       this.receiveMessage=this.receiveMessage.bind(this);
       this.closeChat=this.closeChat.bind(this);
       this.minimiseChat=this.minimiseChat.bind(this);
       this.sendMessage=this.sendMessage.bind(this);
       this.createChatWindow=this.createChatWindow.bind(this);
       this.refs = {};
       this.minimised=false;
    }

    closeChat(event){
    	let y=event.target.parentNode.parentNode;
    	y.parentNode.removeChild(y);
    }
	minimiseChat(event){
    	if(this.minimised==false)
    	{
    		event.target.parentNode.nextSibling.style.display="none";
	    	event.target.parentNode.nextSibling.nextSibling.style.display="none";
	    	event.target.parentNode.parentNode.style.height="auto";
	    	this.minimised=true;
	    }
	    else
	    {
	    	event.target.parentNode.nextSibling.style.display="initial";
	    	event.target.parentNode.nextSibling.nextSibling.style.display="initial";
	    	event.target.parentNode.parentNode.style.height="100%";
	    	this.minimised=false;
	    }
    }
	receiveMessage(){
		let ownID = firebase.auth().currentUser.uid;
		let personID = "flkdsniabigjbi";
		let database = firebase.database();

		let ref = database.ref('chats');
		ref.on('value',function(snapshot){

			let val = snapshot.val();
            
            let x = Object.keys(val).map(key => {
                return val[key];
            });
            console.log(x);



        });
		/*
		let ref = database.ref('chats' + ownID + "/" + personID);

		ref.on('value',function(snapshot){

			let val = snapshot.val();
            
            let x = Object.keys(val).map(key => {
                return val[key];

            })
            if(x.length<10)
            {
	            for (let aux = 0; aux < x.length; aux++) {
	                console.log(x[aux].message);
	                 
	            }
	        }
	        else
	        {
	        	for (let aux = 0; aux < 10; aux++) {
	                console.log(x[aux].message);
	                 
	            }
	        }
		});*/

	}

	personMessage(content){

	}

	ownMessage(content,time){

		let msgdiv=content.createElement("DIV");
		msgdiv.className+="message-own";

		let msgtitle=content.createElement("DIV");
		msgtitle.className+="message-title";

		let msgcontent=content.createElement("DIV");
		msgcontent.className+="message-content";

		let msgtext=content.createElement("P");
		let text=this.refs.text.value;
		msgtext.innerHTML=text;

		let msgtime=content.createElement("SPAN");
		msgtime.className+="message-time";
		msgtime.innerHTML=time;



		msgdiv.appendChild(msgtitle);
		msgdiv.appendChild(msgcontent);
		msgcontent.appendChild(msgtext);
		msgcontent.appendChild(msgtime);
	}

	sendMessage(){
		let text = this.refs.text.value;
		let database = firebase.database();

		let ownID = firebase.auth().currentUser.uid;
		let personID = "sagasfbadrf";

		

		if(text!="")
		{
		let ref = database.ref('chats');

		ref.once("value", function(snapshot) {
			//console.log(snapshot.val())
    	snapshot.forEach(function(data) {
    		let person1=false;
    		let person2=false;
    		let parent = data.key;

    		data.child('participants').forEach(function(participants) {
    			if(ownID==participants.val())
    			{
    				person1=true;
    			}
    			if(personID==participants.val())
    			{
    				person2=true;
    			}
    		});

    		if(person1==true&&person2==true)
    		{
    		let today = new Date();
			let hours = today.getHours();
			let minutes= today.getMinutes();

			if(hours<10){
				hours="0"+hours;
			}
			if(minutes<10){
				minutes="0"+minutes;
			}

			console.log(parent);
			database.ref('chats/'+ parent).push().set({
				message:{
					sender:ownID,
					time: hours + ":" + minutes,
					message:text
				}

			});
			let msgtime=hours + ":" + minutes;
			//ownMessage(content,msgtime);
    		}
    	});
		});
			
		}
	}

	createChatWindow(){
		let text = this.refs.text.value;
		let database = firebase.database();
		let ownID = firebase.auth().currentUser.uid;
		let personID = "sagasfbadrf";
		let participants = [ownID,personID];

		database.ref('chats').push().set({
			participants: participants
		})
		
	}

    render() {
        return (
        	<div className="chat-holder">
            	<div className="chat-window">
	                <div className="chat-title">
	                <span className="chat-name">
				                </span>
				                <button type="button" onclick={this.minimiseChat} className="chat-minimise">-</button>
				                <button type="button" onclick={this.closeChat} className="chat-close">X</button>
	                </div>
	                <div className="chat-content">
	                </div>
	                <div className="chat-form">
	                	<form>
	                		<input placeholder="Enter text..." className="chat-input"type="text" name="cinput"></input>
	                		<button type="button" onclick={this.sendMessage} className="chat-send"><i className="send-arrow"></i></button>
	                	</form>
	                </div>
            	</div>

            	{this.receiveMessage}

            	<div className="chat-window">
	                <div className="chat-title">
		                <span className="chat-name">
		                </span>
		                <button type="button" onclick={this.minimiseChat} className="chat-minimise">-</button>
		                <button type="button" onclick={this.closeChat} className="chat-close">X</button>
	                </div>
	                <div className="chat-content">
	                	<div className="message-own">
	                		
	                		<div className="message-content">
	                			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                			tempor incididunt ut labore et dolore magna aliqua.</p>
	                			<span className="message-time"> 5:50 AM
	                			</span>
	                		</div>
	                		<div className="message-time">
	                		</div>
	                	</div>
	                	<div className="message-notown">
	                		<div className="message-title">

	                		</div>
	                		<div className="message-content">
	                		<span className="message-time">5:53 AM
	                			</span>
	                			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	                			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	                			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	                			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	                		</div>
	                	</div>
	                	<div className="message-own">
	                		<div className="message-title">
	                		</div>
	                		<div className="message-content">
	                			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	                			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	                			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	                			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	                			<span className="message-time">6:08 AM
	                			</span>
	                		</div>

	                	</div>
	                </div>
	                <div className="chat-form">
	                	<form>
	                		<input ref={(e) => this.refs.text = e} className="chat-input" placeholder="Enter text..." type="text" name="cinput"></input>
	                		<button type="button" onclick={this.sendMessage} className="chat-send" ><i className="send-arrow"></i></button>
	                	</form>
	                </div>
            	</div>
            </div>
        )
    }
}