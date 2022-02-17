import React from "react";

import Jokes from "./Jokes";
import jokes from './JokeData'

function App2() {
  const joky = jokes.map(joke => <Jokes key={joke.setup} setup={joke.setup} punchline={joke.punchline} />)
  
  return (
    <div>
    {joky}
    </div>
  );
}

export default App2;

// Previous method
{/* <Jokes
        punchline="...he ransomware."
        setup="How did the hacker escape the police?"
        isPun={true}
        upvote={300}
        comments={
          
            { 
              by: "Alan",
              id: "1",
              text: "Really funny"
            }}
        // passing  a boolean value and a Number value
      />
      <Jokes
        punchline="Then that is your business."
        setup="If you want to setup a company and run it"
        isPun={false}
        upvote={200}
        comments={
          
            { 
              by: "Huberman",
              id: "2",
              text: "Mind blowing"
            }}
      />
      <Jokes
        punchline="So, a suicidal teen walks into a car."
        setup="My grandpa says, Comedians are too dark and dont tell set-up punchline jokes anymore."
        isPun={true}
        upvote={150}
        comments={
          
            { 
              by: "Grandad", 
              id: '3',
              text: "Hahah!"
            }}
      />

      <Jokes
        punchline="And thats how I found out...
            what toxic shock means."
        setup="I will make the punchline, you create the set-up."
        isPun={false}
        upvote={100}
        comments={
          
            { 
              by: "Joey Diaz",
              id: "4",
              text: "Want more"
            }}
      />
      <Jokes
        punchline="Jew and a Pollock are in a rainstorm...That is all I know and I have been dying to find out the rest. Anybody have any ideas?"
        setup="I have only heard the setup for this joke, anybody know the rest?"
        isPun={false}
        upvote={60}
        comments={
          
            { 
              by: "Richy Jew",
              id: "5",
              text: "Amazing Heheh!"
            }}
      /> */}