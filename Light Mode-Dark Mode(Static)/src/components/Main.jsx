import React from "react"

export default function Main(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
           <div className="textContainer"> 
           <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
                <li>React is not a framework</li>
                <li>Virtual DOM is faster than real DOM</li>
                <li>React is Not Just a Fad</li>
                <li>React Has a Strong Community</li>
                <li>Create React App Can Handle CORS (Cross Origin Resource Sharing) Errors</li>
            </ul>
            </div>
        </main>
    )
}