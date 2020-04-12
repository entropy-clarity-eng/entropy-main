import React from 'react';


const CollectThought: React.FC = () => {
  
    let [thoughtText, setThoughtText] = React.useState("");

    const onThoughtChange = (event:React.ChangeEvent<HTMLTextAreaElement>):void => {

        setThoughtText(event.currentTarget.value)
    }

    const onThoughtKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>):void => {

      if(event.key === "Enter") {
        console.log("Enter Key found");
      }
    
    }
    
    return(
       <textarea name="thoughtTextArea" onKeyDown={onThoughtKeyDown} value={thoughtText} onChange={onThoughtChange}></textarea>
    )
}



export default CollectThought;