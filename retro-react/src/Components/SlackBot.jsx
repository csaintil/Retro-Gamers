import React, {Component} from "react";
import { ReactSlackChat } from 'react-slack-chat';
import ReactChatSlack from 'react-chat-slack';



class SlackBot extends Component {
  render(){
    return(
    <div>

  <ReactChatSlack
        token="eG94Yi0zMzAyMDE0NDQ3NzUtMlhxQmFrSlp6SHhwYWhhcTBtdFlpY3Vz"
        channel_id="C9P3FLQ2Z"
        username="cashbot"
        title="Help?"
        saveSession={false} // default is false
      />
    </div>

      );
  }
}
export default SlackBot;