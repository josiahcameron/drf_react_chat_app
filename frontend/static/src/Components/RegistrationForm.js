import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function RegistrationForm() {
  return (
    <div className='container'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default RegistrationForm;

// import { useState, useEffect } from "react";
// import Cookies from "js-cookie";




// function RegistrationForm() {
//   const [users, setUsers] = useState(null);

//   useEffect(()=> {
//     const getUsers = async() => {
//       const response = await fetch("/api_v1/chats/")
      
      
//       if(!response.ok){
//         // Statements after 'throw' won't be executed
//         throw new Error("Network response was not OK");
//       }

//       const data = await response.json();
//       // Method to update value of channels
//       setUsers(data);
//     };

//     getUsers();

//   }, []);

//   const addUsers = async () => {
//     const users = {
//       name: 'channel-name',
//       creator: "channel-creator",
//       participants: 'channel-participants'
//     }

//   const options = {
//     // http method; typ of request
//     method: "POST",
//     // 
//     headers: {
//       "Content-Type":"application/json",
//       "X-CSRFToken": Cookies.get("csrftoken")
//     },
//     // data we're sending
//     body: JSON.stringify(channel),
//   }

//   const response = await fetch("/api_v1/chats/", options)
//   if(!response.ok){
//     throw new Error("Network response not Ok")
//   }

// const data = await response.json();
// setChannels([...channels, data])
// };

//   // If the fetch request is still processing, it will load this spinner
//   if (!channels){
//     return <div>Fetching Data ...</div>
//   }
//   const channelsHTML = channels.map(channel => (
//     <li key={channels.id}>{channel.name}</li>
//   ))

  
//   return (
//     <div className="ChannelList">
//       {channelsHTML}
//     <button type="button" onClick={addChannels}>Add Channel</button>
//     </div>
//   );
// }

// export default ChannelList;
