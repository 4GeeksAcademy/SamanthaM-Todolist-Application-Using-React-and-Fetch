import React, {useState} from "react";

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    fetch('https://playground.4geeks.com/apis/fake/todos/user/sam', 
	{
		method: "PUT",
		body: JSON.stringify(todos),
		headers: {
		  "Content-Type": "application/json"
		}
	  })
	  .then(resp => {
		  console.log(resp.ok); 
		  console.log(resp.status); 
		  console.log(resp.text()); 
		  return resp.json(); 
	  })
	  .then(data => {
		 
		  console.log(data); 
	  })
	  .catch(error => {
		 
		  console.log(error);
	  });
  
	  return (
		  <div className="small-container">
			  <h1>My Todo List!</h1>
			  <ul>
				  <li>
					  <input
						  type="text"
						  onChange={(e) => setInputValue(e.target.value)}
						  value={inputValue}
						  onKeyPress={(e) => {
							  if (e.key === "Enter") {
								  setTodos([...todos, inputValue]);
								  setInputValue("");
							  }
						  }}
						  placeholder="What do you need to do?"
					  />
				  </li>
				  {todos.map((item, index) => (
					  <li key={index}>
						  {item}
						  <span
							  className="x"
							  onClick={() => setTodos(todos.filter((_, currentIndex) => index !== currentIndex))}
						  >
						  </span>
					  </li>
				  ))}
			  </ul>
			  <span class="bottom-text">13 items left</span>
  
			  
		  </div>
	  );
  }
			  
			  
				  
			  
			  
		  
	  
		  
  
				  
  export default Home;