import React from 'react';
import './App.css';
import ProfileComponent from './Profile/ProfileComponent'


function App() {
  const people = [{fullName:"Elias Ben Azouz",bio:"man",profession:"marketing responsible"},
  {fullName:"Samantha Samantha",bio:"woman",profession:"pilot"},
  {fullName:"Gianni Gianni",bio:"man",profession:"taxi driver"}]

  const handleNameTest = x => alert(`This is ${x}` )

  return (
    <React.Fragment>
      <div style={{backgroundColor:"black"}}>
        <ProfileComponent handleName={handleNameTest}
        fullName={people.filter(person=>person.fullName==="Elias Ben Azouz")[0].fullName}
        bio={people.filter(person=>person.fullName==="Elias Ben Azouz")[0].bio}
        profession={people.filter(person=>person.fullName==="Elias Ben Azouz")[0].profession}/>
        <ProfileComponent handleName={handleNameTest} fullName={people.filter(person=>person.fullName==="Samantha Samantha")[0].fullName}
        bio={people.filter(person=>person.fullName==="Samantha Samantha")[0].bio}
        profession={people.filter(person=>person.fullName==="Samantha Samantha")[0].profession}><img src="https://images.pexels.com/photos/557782/pexels-photo-557782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="sky" width="100%"></img></ProfileComponent>
      </div>
    </React.Fragment>
  );
}

export default App;
