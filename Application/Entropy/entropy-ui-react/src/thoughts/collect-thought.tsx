import React from 'react';
import { useRootStore } from '../index';
import { ThoughtStore } from '../stores/thought-store';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css'
import { EditorContainer } from './collect-thought-container';
import { relative } from 'path';


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
    
    const [editorState, setEditorState] = React.useState(
      EditorState.createEmpty()
    );

    

    return(
       <EditorContainer>
       <Editor editorState={editorState} textAlignment={'center'} onChange={setEditorState} />
       </EditorContainer>
    )
}



export default CollectThought;