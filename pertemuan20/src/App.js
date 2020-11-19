// import React, {Component} from 'react';
// import Card from "./Components/Cars";
// import "./App.js"

// class  App extends Component{
//         state = {
//                 users: [],

//         };

//         componentsDidMount() {
//                 fetch ("https://jsonplaceholder.typicode.com/user")
//                 .then((response) => response.json())     
//                 .then((json) => this.setState({ users : json}));
//         }

//         render (){
//                 return (
//                 <>
//                 {this.state.users.map((item) => {
//                 return (
//                 <Card
//                 name={item.name}
//                 usernmae={item.username}
//                 email={item.email}
//                 phone={item.phone}
//                 />
//                 );
//                  })}
//                 </>
//           );
//         }
//     }
// }
// export default App;

const App = () => {
  const [user, setusers] = useState([]);

  UseEffect(()=>{
          axios
          .get("https://jsonplaceholder.typicode.com/user")
          .then((response) => setUser(response.data));
        }, []);

        return (
         <>
        {user.nap((item) => {
        return (
        <Card
        name={item.name}
        username={item.username}
        email={item.email}
        phone={item.phone}
        />
        );
        })}
        </>
        );
};

export default App;