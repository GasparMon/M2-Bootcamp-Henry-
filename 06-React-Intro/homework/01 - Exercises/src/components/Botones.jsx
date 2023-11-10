import React, { Component } from "react";

class Botones extends Component {
  render() {
    const { alerts } = this.props;

    return (
      <div>
        <button onClick={() => alert(alerts.m1)}>Módulo 1</button>
        <button onClick={() => alert(alerts.m2)}>Módulo 2</button>
      </div>
    );
  }
}

export default Botones;


///
///import React from "react";

//export default function Botones(props) {
   // console.log(props.alerts.m1)
 // return (
   // <div>
     // <button onClick={() => alert(props.alerts.m1)}>Modulo 1</button>
      //<button onClick={() => alert(props.alerts.m2)}>Modulo 2</button>
    //</div>
 // );
//}
///