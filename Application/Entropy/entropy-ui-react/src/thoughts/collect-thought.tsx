import React from 'react';
import { useRootStore } from '../index';

import { Editor, EditorState, getDefaultKeyBinding, DraftEditorCommand, SelectionState, Modifier } from 'draft-js';
import 'draft-js/dist/Draft.css'
import { EditorContainer } from './collect-thought-container';

import { EditorCommands } from '../general/editor-commands';
//Have to export this here as it is not properly exported from Draft JS typings. 
type SyntheticKeyboardEvent = React.KeyboardEvent<{}>;

const CollectThought: React.FC = () => {
  
    const {thoughtStore} = useRootStore();

    
    const [editorState, setEditorState] = React.useState(
      EditorState.createEmpty()
    );
   
    const onThoughtKeyDown =  (event: SyntheticKeyboardEvent):null | EditorCommands | DraftEditorCommand => {

      if(event.key === "Enter") {
       return  "CLEAR_AND_COLLECT_THOUGHT";
       
      } else {
        return getDefaultKeyBinding(event);
      }
    }
    
    const onThoughtKeyCommand = (command: string, editorState: EditorState, eventTimeStamp: number):any => {
      if(command) {
        switch(command) {
          case "CLEAR_AND_COLLECT_THOUGHT":
                persistThought();
                break;
        }
      }
    }
  
    const persistThought = async ()  => {
       var thoughtText = editorState.getCurrentContent().getPlainText("\n");

       await thoughtStore.add(thoughtText);
       clearEditor();
    }

    const clearEditor = () => {
  
      setEditorState( EditorState.createEmpty() );
    }

    const editorRef = React.createRef<Editor>();

    React.useLayoutEffect(()=>{
      editorRef.current?.focus();
    },[editorRef]);

   

    const containerClick = () => {
      editorRef.current?.focus();
    }
    

    return(
       <EditorContainer onClick={containerClick}>
       <div>
       <Editor ref={editorRef} keyBindingFn = {onThoughtKeyDown}
        editorState={editorState} textAlignment={'center'} 
        onChange={setEditorState}
        handleKeyCommand = {onThoughtKeyCommand} />
       </div>
       </EditorContainer>
    )
}



export default CollectThought;