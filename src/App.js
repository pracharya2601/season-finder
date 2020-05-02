import React from "react";
import SeasonDisplay from './SeasonDisplay';
import Loder from './Loader';


class App extends React.Component {
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
    
    //helper function
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div> ;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div><SeasonDisplay lat={this.state.lat} /></div>;
        }
        
        return <div><Loder message="Please Accept location request" /></div>
    }


    //requirement for react
    render() {
        return (
            <div className="border">
                {this.renderContent()}
            </div>
        )
    }
}


export default App;