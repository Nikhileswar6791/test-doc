import "./Navbarcss.css"
import { Component } from "react";
class Navbar extends Component {
    state = {clicked:false};
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return (
        <>
          <nav>
            <a href = "../../public/index.html"><img src = {require("./logo.jpeg") } width="150px" height="60px" alt="logo" /></a>
            <div>
                <ul id = "list-nav" className={this.state.clicked ? '#navbar active' : "#navbar"}>
                    <li><a href = "index.html" className="active">Home</a></li>
                    <li><a href = "index.html">Solutions we offer</a></li>
                    <li><a href = "index.html">How the technology works</a></li>
                    <li><a href = "index.html">About</a></li>
                </ul>
            </div>
            <div id = "small-dev" onClick={this.handleClick}>
                <i id = "bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </nav>
        </>
    )
    }
}
export default Navbar;