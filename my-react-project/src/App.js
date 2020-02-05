import React from 'react';
import logo from './logo.svg';
import './App.css';

function loadScript(url) {
  return new Promise((resolve, reject) => {
    var tag = document.createElement("script");
    tag.src = url;
    tag.onload = () => {
      resolve();
    }
    document.body.appendChild(tag);
  })
}

class App extends React.Component
{

    constructor(props)
    {
      super(props);
      this.state = {
        status: "start"
      };
    }

    componentDidMount() {
      // const aScript = document.createElement('script');
      // aScript.src = "/ng-elements/main-es5.js";
      //
      // const bScript = document.createElement('script');
      // bScript.src = "/ng-elements/polyfills-es5.js";
      //
      // const cScript = document.createElement('script');
      // cScript.src = "/ng-elements/runtime-es5.js";
      // document.body.appendChild(cScript);
      // const dScript = document.createElement('script');
      // dScript.src = "/ng-elements/zone.js";
      // bScript.onload = () => {
      //   document.body.appendChild(dScript);
      //   console.log("b done")
      // }
      // dScript.onload = () => {
      //   document.body.appendChild(aScript);
      //   document.body.appendChild(bScript);
      //   console.log("d done")
      // }
      // aScript.onload = () => {
      //   console.log("a done")
      //   this.setState({status: "done"})
      // }

      var aLoad = new loadScript("/ng-elements/polyfills-es5.js");
      var bLoad = new loadScript("/ng-elements/main-es5.js");
      var cLoad = new loadScript("/ng-elements/runtime-es5.js");
      var dLoad = new loadScript("/ng-elements/zone.js");

      aLoad.then(() => {
        bLoad.then(() => {
          cLoad.then(() => {
            dLoad.then(() => {
              this.setState({status: "done"});
            })
          })
        })
      });
    }

    render(){
      if (this.state.status === "done") {
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
              <greet-comp ></greet-comp>
            </div>
        )
      } else {
        return (
            <div>loading</div>
        )
      }
    }
}

export default App;
