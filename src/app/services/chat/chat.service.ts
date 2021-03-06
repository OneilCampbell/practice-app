import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  //****** FOR PRODUCTION ********
  //url of deployed socket.io server
  private url = 'https://protected-hollows-20171.herokuapp.com/';

  //****** FOR LOCAL DEVELOPMENT ONLY *****/
  //url for local socket.io server
  //private url = 'https://localhost:3000';

  private socket;

  constructor() {
    /**
     * connects the web socket.io client to the express server
      @param uri — The uri that we'll connect to, including the namespace, where '/' is the default one (e.g. http://localhost:4000/somenamespace)
      @opts — Any connect options that we want to pass along
      @return — A Socket object
     */
    this.socket = io(this.url);
  }

  public sendMessage(message: string) {

    //triggers a socket 'new message' event and passes along the message as an argument
    //listener in ./socket-server.js that listens for 'new-message' event and takes message as a parameter 
    this.socket.emit('new-message', message);
  }

  //every time the server receives a new message, observer.next() forwards it to all observers
  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message: string) => {
        observer.next(message);
      })
    })
  }
}
