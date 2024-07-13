import React, { Component } from "react";
import TableOrder from "./tableOrder";
import ChartAnalytic from "./chartAnalytic";
import "../App.css";

class AdminPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div></div>
        <div className="App my-5 col-md-13">
          <section>
            <TableOrder />
          </section>
        </div>
        <div className="App my-5">
          <ChartAnalytic />
        </div>
      </div>
    );
  }
}

export default AdminPage;
