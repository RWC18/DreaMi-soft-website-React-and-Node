import React, {Fragment, Component} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Services from "./components/Services/Services";
import ToTop from "./components/UI/ToTop/ToTop";

const App = () => {
        document.addEventListener('contextmenu', event => event.preventDefault());
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         greeting: ''
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    //
    // handleChange(event) {
    //     this.setState({ name: event.target.value });
    // }
    //
    // handleSubmit(event) {
    //     event.preventDefault();
    //     fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
    //         .then(response => response.json())
    //         .then(state => this.setState(state));
    // }
    // render() {
    //     return (
    //             <form onSubmit={this.handleSubmit}>
    //                 <label htmlFor="name">Enter your name: </label>
    //                 <input
    //                     id="name"
    //                     type="text"
    //                     value={this.state.name}
    //                     onChange={this.handleChange}
    //                 />
    //                 <button type="submit">Submit</button>
    //             </form>
    //             <p>{this.state.greeting}</p>

        return (
            <Fragment>
                <NavBar/>
                <Header/>
                <Services/>
                <Portfolio/>
                <Footer/>
            </Fragment>
        );
};

export default App;
