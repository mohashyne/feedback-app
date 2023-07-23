import React from 'react';

// OLD WAY OF DOING STUff IF YOU DON'T WANT TO USE JSX
// this is regular javascript
// function App() {
//   return React.createElement(
//     'div',
//     { className: 'App-container' },
//     React.createElement('h1',  {style: {color: 'red'}},'My App')
//   );
// }

function App() {
    // set varialbles
    const title = "Feedback App";
    const subtitle = "This is my feedback";
    const comments = [
        {id:1, text: "Comment one"},
        {id:2, text: "Comment two"},
        {id:3, text: "Comment three"},
    ]
    

    return (
        <div className="App">
        <header className="App-header">
            <h1>{title}</h1>
        </header>
        <main>
            <p >{subtitle}</p>
            <div id="mycontent">{Math.floor(5 / 3)}</div>
           <div className="ifstatement">
                {5 > 3 ? <p>5 is greater than 3</p> : <p>5 is not greater than 3</p>}
            </div> 
            <h2 className="comments">{comments.lenght}</h2>
            <ul>
                {comments.map((comment,  index) => (
                    <li key={index}>{comment.text}</li>
                    ))}
            </ul>
        </main>
        </div>
    );
}

export default App;
