import React  from "react";

const InputField = ({input, setInput}) => {
    return (
        <input 
            input="text"
            className="newToDo"
            placeholder="Start making a list!"
            onChange={(event) => setInput(event.target.value)}
            value={input}
        />
    );
};

export default InputField;