import React, { Component } from 'react';
import AppContext from "./AppContext";

class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 20,
            increase: () => {
                this.setState({
                    number: this.state.number + 1
                })
            }
        }
    }

    render() {
        return <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>
    }
}

export default AppProvider;