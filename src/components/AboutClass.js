import React from "react";

class About extends React.Component{

    constructor(props){
        super(props); {
            this.state = {
                userInfo: {
                    name: "Dummy Name",
                    location: "Dummy location"
                },
            }
        }
        console.log("Constructor")
    }

    async componentDidMount() {
        const data  = await fetch("https://api.github.com/users/Kartik9082");
        const json = await data.json();
        // console.log(json);
        this.setState({
            userInfo : json,
        })
        console.log("componentDidMount")
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate")
    }

    componentWillUnmount(){
        console.log("ComponentWillUnmount")
    }

    render(){
        console.log("render")
        return(
        <div>
            <img src= {this.state.userInfo.avatar_url}/>
            <h1>Name : {this.state.userInfo.name}</h1>
            <h1>Bio : {this.state.userInfo.bio}</h1>
            <h1>Location : {this.state.userInfo.location}</h1>
        </div>
        )
    }
}

export default About;