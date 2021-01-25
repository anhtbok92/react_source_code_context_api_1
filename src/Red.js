import { Component } from 'react';
import './App.css';
import AppContext from "./AppContext";
import AppProvider from "./AppProvider";
import Blue from "./Blue";

class Red extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
          <AppProvider>
              <div className="red">
                  <p>This is Red component</p>
                  <AppContext.Consumer>
                      {(context) => context.number}
                  </AppContext.Consumer>
                  <AppContext.Consumer>
                    {(context) => <button className="button" onClick={context.increase}>Increase</button>}
                  </AppContext.Consumer>
                  <Blue />
              </div>
          </AppProvider>
      );
  }
}

export default Red;
