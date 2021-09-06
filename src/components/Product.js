import React, { Component } from "react";
import "./Product.css";
import myPhoto from "./cartman.png";

export default class Product extends Component {
  state = {
    fullName: "",
    bio: "",
    imgSrc: "",
    profession: "",
  };
  toggle = () => {
    this.setState({
      fullName: "pitche",
      bio: "humble",
      imgSrc: myPhoto,
      profession: "Fullstack developper",
    });
  };

  render() {
    return (
      <div className="wrapper">
        <button onClick={this.toggle}>Add</button>
        {this.state.fullName ? <p> Name: {this.state.fullName}</p> : null}
        {this.state.imgSrc ? <img src={this.state.imgSrc} /> : null}

        {this.state.profession ? (
          <p> profession: {this.state.profession}</p>
        ) : null}
        {this.state.bio ? <p> Bio: {this.state.bio}</p> : null}
      </div>
    );
  }
}
