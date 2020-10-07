import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';

ReactDOM.render(<App/>, document.getElementById('root'))

// ========================================

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

// const user = {
//   firstName: 'Brownie',
//   lastName: 'Sharma'
// }

// const ele = <h1>Wuz up {formatName(user)}?</h1>


// function tick() {
//   const elem = (
//     <div>
//       <h1>Hello, World</h1>
//   <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     elem,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// function Welcome (props) {
//   return <h1>Hello, {props.name}</h1>
// }

// function App() {
//   return (
//     <div>
//       <Welcome name='Brownie'/>
//       <Welcome name='Charlie'/>
//       <Welcome name='Miles'/>
//     </div>
//   )
// }


// const elemente = <Welcome name="Sarassds"></Welcome>;

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );

// function Avatar (props) {
//   return (
//     <img className="Avatar"
//     src={props.user.avatarUrl}
//     alt={props.user.name}/>
//   );
// }

// function UserInfo (props) {
//   return (
//     <div className="UserInfo">
//     <Avatar user={props.author}/>
//      <div className="UserInfo-name">
//        {props.user.name}
//      </div>
//     </div>
//   );
// }

// function Comment (props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <UserInfo user={props.author}/>
//          <div className="Comment-text">
//            {props.text}
//          </div>
//          <div className="Comment-date">
//            {formatDate(props.date)}
//          </div>
//       </div>
//     </div>
//   );
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()}
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState(
//       {
//         date: new Date()
//       }
//     );
//   }

//   render() {
//     return (
//       <div>
//        <h1>Behold, the date and time</h1>
//        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }

// function Clock(props) {
//   return (
//     <div>
//       <h1>Behold, the date and time</h1>
//       <h2>It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }

// class Toggle extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.IsToggleOn
//     }));
//   }

//   render () {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'On' : 'Off'}
//       </button>
//     )
//   }
// }

// function App () {
//   return (
//     <div>
//       <Clock/>
//       <Toggle/>
//     </div>
//   );
// }

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );

// class Click extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {ifClicked: console.log('nothing')};

//     // This binding is necessary to make `this` work in the callback
//     this.ifClicked = this.ifClicked.bind(this);
//   }

//   ifClicked(i) {
//     this.setState(state => ({
//       ifClicked: console.log(i)
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.ifClicked.bind('nishtha')}>
//         Click Me and clook at the console
//       </button>
//     );
//   }
// }

// ReactDOM.render(
//   <Click />,
//   document.getElementById('root')
// );

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>
// }

// function GuestGreeting(props) {
//   return <h1>Sign up hoe.</h1>
// }

// function Greeting(props) {

//   const isLoggedIn = props.isLoggedIn;

//   if (isLoggedIn) {
//     return <UserGreeting/>;
//   }

//   return <GuestGreeting/>;
// }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

// function MailBox(props) {
//   const unreadMessages = props.unreadMessages;

//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//       <h2> You have {unreadMessages.length} unread stuff</h2>}
//     </div>
//   );
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => 
//     <li key={number.toString()}>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) => 
//       <li key={post.id}>
//        {post.title}
//       </li>)}
//     </ul>
//   );

//   const content = props.posts.map((post) => 
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );

//   return (
//     <div>
//       {sidebar}
//       <hr/>
//       {content}
//     </div>
//   );
// }

// const messages = [];
// const numbers = [4,5,6,7,8];
// const doubleTrouble = numbers.map((number) => number * 2);
// console.log(doubleTrouble);
// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('This is the name:' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange}/>
//         </label>
//         <input type="submit" value="Submit"/>
//       </form>
//     )
//   }
// }

// class Reservation extends React.Component {
//   constructor (props) {
//     super(props);

//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });

//     console.log(this.state);
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Is going: 
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange}/>
//         </label>
//         <br/>
//         <label>
//           Number of Guests:
//           <input
//             name="numberOfGuests"
//             type="number"
//             checked={this.state.numberOfGuests}
//             onChange={this.handleInputChange}/>
//         </label>
//       </form>
//     )
//   }
// }

// class LoginControl extends React.Component {

//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick(){
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;

//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick}/>;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick}/>;
//     }

//   return (
//     <div>
//       <Blog posts={posts}/>
//       <NumberList numbers={numbers}/>
//       <MailBox unreadMessages={messages}/>
//       <Greeting isLoggedIn={false}/>
//       {button}
//       <NameForm/>
//       <Reservation/>
//     </div>
//     );
//   }
// }

// ReactDOM.render(
//   <LoginControl/>,
//   document.getElementById('root')
// );

// function BoilingVerdict (props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>
//   }

//   return <p>The water would not boil</p>
// }

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }

// class TemperatureInput extends React.Component {
//     constructor (props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     // this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     // this.setState({temperature: e.target.value});
//     this.props.onTemperatureChange(e.target.value);
//   }

//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;

//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input
//         value={temperature}
//         onChange={this.handleChange}/>
//         {/* <BoilingVerdict
//          celsius={parseFloat(temperature)}/> */}
//       </fieldset>
//     );
//   }
// }

// class Calculator extends React.Component {
//   // constructor (props) {
//   //   super(props);
//   //   this.handleChange = this.handleChange.bind(this);
//   //   this.state = {temperature: ''};
//   // }

//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: 'c'};
//   }

//   handleCelsiusChange(temperature) {
//     this.setState({scale: 'c', temperature});
//   }

//   handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }

  // handleChange(e) {
  //   this.setState({temperature: e.target.value});
  // }

  // render() {
  //   const temperature = this.state.temperature;

  //   return (
  //     <fieldset>
  //       <legend>Enter temperature in Celsius:</legend>
  //       <input
  //       value={temperature}
  //       onChange={this.handleChange}/>
  //       <BoilingVerdict
  //        celsius={parseFloat(temperature)}/>
  //     </fieldset>
  //   );
  // }

  // render() {
  //   return (
  //     <div>
  //       <TemperatureInput scale='c'/>
  //       <TemperatureInput scale='f'/>
  //     </div>
  //   );
  // }

//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange} />
//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange} />
//         <BoilingVerdict
//           celsius={parseFloat(celsius)} />
//       </div>
//     );
//   }
// }

// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }

// function WelcomeDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         Welcome
//       </h1>
//       <p className="Dialog-message">
//         Thank you for visiting our spacecraft!
//       </p>
//     </FancyBorder>
//   );
// }

// ReactDOM.render(
//   <WelcomeDialog/>,
//   document.getElementById('root')
// );

// ReactDOM.render(<App/>, document.getElementById('root'));



