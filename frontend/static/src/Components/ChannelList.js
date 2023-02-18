// import { useState, useEffect } from "react";
// import Cookies from "js-cookie";


// function ChannelList() {
//   const [channels, setChannels] = useState(null);
//   // If you put in 'books', every time the books value changes, it would run this function; with the empty array, it mounts to the DOM
//   // Put fetch request here
//   // async lets you put await in function to tell JS to not wait
//   // fetch is asynchronous, but tells js to wait to do this before moving on
//   // React sends this request to django since a proxy has been set up
//   useEffect(()=> {
//     const get = async() => {
//       const response = await fetch("/api_v1/chats/")
      
    
      
//       if(!response.ok){
//         // Statements after 'throw' won't be executed
//         throw new Error("Network response was not OK");
//       }

//       const data = await response.json();
//       // Method to update value of books
//       setChannels(data);
//     };

//     getChannels();

//   }, []);

//   const addChannels = async () => {
//     const channel = {
//       title: "A books from React",
//       author: "An author goes here"
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
//     body: JSON.stringify(book),
//   }

//   const response = await fetch("/api_v1/chats/", options)
//   if(!response.ok){
//     throw new Error("Network response not Ok")
//   }

// const data = await response.json();
// setChannels([...c, data])
// };

//   // If the fetch request is still processing, it will load this spinner
//   if (!books){
//     return <div>Fetching data ...</div>
//   }
//   const channelsHTML = books.map(book => (
//     <li key={book.id}>{book.title}</li>
//   ))
//   const reviewsHTML = reviews.map(review => (
//     <li key={review.id}>{review.text}</li>
//   ))
  
//   return (
//     <div className="BookList">
//       {booksHTML}
//     <button type="button" onClick={addBook}>Add Book</button>
//     </div>
//   );
// }

// export default BookList;
