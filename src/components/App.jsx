import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm){
    return (
        <Entry 
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.description}
        />
    );
}

function App() {
    return (
        <div>
            <h1>
                <span>Emojipedia</span>
            </h1>
            <dl className='dictionary'>{emojipedia.map(createEntry)}</dl>
        </div>
    );
}

export default App;