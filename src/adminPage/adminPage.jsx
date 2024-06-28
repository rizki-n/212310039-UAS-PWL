import React, { Component } from 'react';
import TableOrder from './tableOrder';
import ChartAnalytic from './chartAnalytic';
import '../App.css';

class AdminPage extends Component {
    render() {
        return (
            <div>
        <div>

        </div>
        <div className='App my-5'>
            <section>
            <TableOrder/> 
            </section>
        </div>
        <div className='App my-5'>
            <ChartAnalytic/>            
        </div>
        
      </div>
        );
    }
}

export default AdminPage;
