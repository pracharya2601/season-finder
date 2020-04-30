import React from "react";
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     //initialize the state 
    //     this.state = {
    //         lat: null,
    //         errorMessage: '' //lat id the short form of latitude
    //     };
    // }
    state = {
        lat: null,
        errorMessage: ''
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }



    //requirement for react
    render() {
        return(
            <div>
                <SeasonDisplay lat={this.state.lat} />
                <br />
                Error: {this.state.errorMessage}
            </div>
        );
    }
}


export default App;