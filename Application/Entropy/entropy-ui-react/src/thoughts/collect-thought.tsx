import React from 'react';
import { useRootStore } from '../index';
import { ThoughtStore } from '../stores/thought-store';


const CollectThought: React.FC = () => {
  
    const {thoughtStore} = useRootStore();

    let [thoughtText, setThoughtText] = React.useState("");

    const onThoughtChange = (event:React.ChangeEvent<HTMLTextAreaElement>):void => {

        setThoughtText(event.currentTarget.value)
    }

    const onThoughtKeyDown = async (event: React.KeyboardEvent<HTMLTextAreaElement>) => {

      if(event.key === "Enter") {
       try {
        await thoughtStore.add(event.currentTarget.value);
        setThoughtText("");
       } catch(error) {
         alert('An error occurred whilst saving thoughts');
       }
      }
    
    }
    
    return(
       <textarea name="thoughtTextArea" onKeyDown={onThoughtKeyDown} value={thoughtText} onChange={onThoughtChange}></textarea>
    )
}



export default CollectThought;