import { useState, useEffect } from "react";
import Cookies from "js-cookie";

// const INITIAL_CHANNEL    = {
//     name: '',
//     creator: '',
//     participants: '',
// }


function ChannelList() {
  const [channels, setChannels] = useState(null);
  // If you put in 'channels', every time the channels value changes, it would run this function; with the empty array, it mounts to the DOM
  // Put fetch request here
  // async lets you put await in function to tell JS to not wait
  // fetch is asynchronous, but tells js to wait to do this before moving on
  // React sends this request to django since a proxy has been set up
  useEffect(()=> {
    const getChannels = async() => {
      const response = await fetch("/api_v1/chats/")
      
      
      if(!response.ok){
        // Statements after 'throw' won't be executed
        throw new Error("Network response was not OK");
      }

      const data = await response.json();
      // Method to update value of channels
      setChannels(data);
    };

    getChannels();

  }, []);

  const addChannels = async () => {
    const channel = {
      name: 'channel-name',
      creator: "channel-creator",
      participants: 'channel-participants'
    }

  const options = {
    // http method; typ of request
    method: "POST",
    // 
    headers: {
      "Content-Type":"application/json",
      "X-CSRFToken": Cookies.get("csrftoken")
    },
    // data we're sending
    body: JSON.stringify(channel),
  }

  const response = await fetch("/api_v1/chats/", options)
  if(!response.ok){
    throw new Error("Network response not Ok")
  }

const data = await response.json();
setChannels([...channels, data])
};

  // If the fetch request is still processing, it will load this spinner
  if (!channels){
    return <div>Fetching Data ...</div>
  }
  const channelsHTML = channels.map(channel => (
    <li key={channels.id}>{channel.name}</li>
  ))

  
  return (
    <div className="ChannelList">
      {channelsHTML}
    <button type="button" onClick={addChannels}>Add Channel</button>
    </div>
  );
}

export default ChannelList;
