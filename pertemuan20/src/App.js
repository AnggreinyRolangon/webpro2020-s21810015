import React from 'react';
import './App.css';
const sortByPower = (a, b) => {
    return b.power - a.power;
}
const List = props => {
return (
<>
<h1>React People!</h1>

<ul className="list">
{props.data.sort(sortByPower).map((person) => (
<li key={person.name} className="list-item">
<div className="list-item-image-container">
<img src={person.thumbnail} />
</div>
<span className="list-item-name">
{person.name} ( Power:{' '}
<span className="list-item-power">{person.power}</span> )
</span>
</li>
))}
</ul>
</>
);
}
const App = () => {
const human = [
{
name: 'Anj',
thumbnail:
        'https://www.facebook.com/photo?fbid=3641933419163435&set=pcb.3641933459163431',
power: 10
},
{
name: 'Elis',
thumbnail: 
        'https://www.facebook.com/photo?fbid=117656656738503&set=a.117656673405168',
power: 3
},
{
name: 'Valent',
thumbnail:
        'https://www.facebook.com/photo?fbid=1517340805008739&set=a.103905693018931',

power: 30
}
];
return (
<div className="App">
<List data={human} />
</div>
);
}
export default App;