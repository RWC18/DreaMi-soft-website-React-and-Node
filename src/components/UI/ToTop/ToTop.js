import React, {Component} from 'react';
import './ToTop.scss';

class  ToTop extends Component{
    //
    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }
    // componentWillUpdate() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }
    //
    // btn = null;
    //
    //  handleScroll(){
    //     let services = document.querySelector('.services');
    //      if (this.scrollY >= services.offsetTop) {
    //         this.btn = <div className="totop"><Button activeClass="active" target="header" title={<i className=" far fa-arrow-alt-circle-up"> </i>}/></div>;
    //         console.log(this.scrollY);
    //      }
    // }

    toTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        }); 
    };

    render() {
        return <div className="totop"><li><a onClick={(e) => this.toTop(e)}><i className=" far fa-arrow-alt-circle-up"> </i></a></li></div>;
    }
}


export default ToTop;

