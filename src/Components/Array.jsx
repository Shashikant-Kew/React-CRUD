import React from "react";
import queryString from 'query-string'
import {useSearchParams} from 'react-router-dom'


class Itemarray extends React.Component{

    
    constructor(){

        super();
        this.state={
            Items : [],
            queris:'',
            FirstName:'',
            LastName:'',
            EmailId:'',
            ContactNo:'',
            Password:''

        }
        this.handlePush = this.handlePush.bind(this);
    }

    handlePush =()=>{
        debugger;
        let fname = this.props.FirstName;
        let lname = this.props.LastName;
        let emailid = this.props.EmailId;
        let contactno = this.props.ContactNo;
        let password = this.props.Password;
        let count = this.state.Items.length +1;
        let obj = [{'Id': count, 'FirstName':fname,'LastName':lname,'EmailId':emailid,'ContactNo':contactno,'Password':password}];
        //this.setState({Items: [...this.state.Items,...obj]});
        let itemsdata = this.state.Items;
        itemsdata.push(obj);
        this.setState({Items: itemsdata});
       // let ar = this.state.Items.concat(obj);
       // this.setState({Items: [...this.state.Items, ...[{'Id':count}]]});
        //console.log(this.state.Items);
    }
    
    render(){  
        let itemsData = this.state.Items;
        console.log(itemsData);       
        return(            
            <div>
                 <table>
                    <thead>
                        <tr>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsData.map((item,i) =>
                           
                                <tr key={i}>
                                    <td>
                                        {item.Id}
                                    </td>
                                    <td>
                                        {item.FirstName}
                                    </td>
                                    <td>
                                        {item.LastName}
                                    </td>
                                    <td>
                                        {item.EmailId}
                                    </td>
                                    <td>
                                        {item.Password}
                                    </td>
                                </tr>
                            
                        )}
                    </tbody>
                    <tr>

                    </tr>
                </table>
            </div>
            
        )
    }
}

export default Itemarray;
