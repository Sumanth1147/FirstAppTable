import React from 'react';

import  './Table.css';

const Table = (props) => {
 
    return( 
        <div className="table">
          <h1 className="h1">React-App</h1><br />
          <h4 className="h4">Building a Reusable Table Component</h4><br />

        <table>
        <thead>
            <tr>
                <th>ID</th>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>DATE</th>
            <th>ORDER-NO</th>
            </tr>
        </thead>
            <tbody>
            {props.items.map((data) => (
                
        <tr key={data.id}>
            
            <td>{data.id}</td>
            <td>{data.Name}</td>
            <td>{data.Address}</td>
            <td>{data.Date}</td>
            <td>{data.Orderno}</td>   
        </tr>
            )
        )}

    </tbody>

</table>
</div>   
       
    );
}

export default Table;