import React from 'react';

function App() {
    // set varialbles
    const title = "Feedback App";
    const subtitle = "This is my feedback";
    const comments = [
        {id:1, text: "Comment one"},
        {id:2, text: "Comment two"},
        {id:3, text: "Comment three"},
    ]
    
    const loading = false;
    const showComments = true;
    const allComments = ( <div className="comments">
    <h2>{comments.lenght}</h2>
     <ul>
         {comments.map((comment,  index) => (
             <li key={index}>{comment.text}</li>
             ))}
     </ul>
    </div> )

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
        <header className="App-header">
            <h1>{title.toUpperCase()}</h1>
        </header>
        <main>
            <p >{subtitle}</p>
            <div id="mycontent">{Math.floor(5 / 3)}</div>
           
           {/* three options u can use */}
            {showComments ? (allComments) :  "no comments" }
            {showComments ? (allComments) :  null }
            {showComments && (allComments)}

            
          
            
        </main>
        </div>
    );
}

export default App;
