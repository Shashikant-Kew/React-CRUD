//import { convertRoutesToDataRoutes } from "@remix-run/router/dist/utils";
import React from "react";
//import Itemarray from "./Array";
import { Table } from "react-bootstrap";
//import Tablejs from   './TableJs';


class Crudapp extends React.Component{

    constructor(){
        super();
        this.handleEmailId = this.handleEmailId.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePush = this.handlePush.bind(this);
        this.handleContactno = this.handleContactno.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleContactOnPress = this.handleContactOnPress.bind(this);

        this.state = {
            Items : [],            
            FirstName: '',
            LastName: '',
            EmailId:'',
            ContactNo:'',
            Password:'',
            isError : false
        }
    }

    
        handleFirstName(e){

            if(this.state.FirstName!=''){
                this.state.FirstName = '';
                let fname = e.currentTarget.value;
                this.setState({FirstName: fname});
            }
            else{
            let fname = e.currentTarget.value;
           this.setState({FirstName: fname});
            }
        }

        handleLastName (e){

            if(this.state.LastName !='')
            {
                this.state.LastName = '';
                let lname = e.currentTarget.value;
                //this.LastName = lname;
                this.setState({LastName: lname});
            }
            else{
            let lname = e.currentTarget.value;
            this.setState({LastName: lname});
            }
        }

        handleEmailId(e){
            if(this.state.EmailId !=''){
                this.state.EmailId = '';
                let email = e.currentTarget.value;
               // this.EmailId = email;
                this.setState({EmailId:email});
            }
            else{
            let email = e.currentTarget.value;
            this.setState({EmailId:email});
            }
        }

        handleContactOnPress=(e)=>{
            debugger;
            let charCode = (e.which) ? e.which : e.keyCode
            if (charCode > 31 && (charCode < 48 || charCode > 57))
            {
                this.setState({isError:true});
                return false;
            }
            this.setState({isError:false});
            return true;
        }
        handleContactno(e){
            
                if(this.state.isError){
                    return false;
                }
                if(e.currentTarget.value.length >10){
                    alert("Please enter only 10 digit mobile Number");                    
                    return false;
                }
                if(this.state.ContactNo!=''){

                    this.state.ContactNo = '';
                    let cont = e.currentTarget.value;
                    this.setState({ContactNo:cont});

                }
                else{

                    let cont = e.currentTarget.value;
                    this.setState({ContactNo:cont});
                }

        }

            handlePassword(e){
                if(this.state.Password!=''){
                this.state.Password ='';
                let pwd = e.currentTarget.value;
                this.setState({Password:pwd})
            }
            else{
            let pwd = e.currentTarget.value;
            this.setState({Password:pwd});
            }

        }

        handlePush =(event)=>{
            event.preventDefault();
            debugger;
            if(!this.state.FirstName && !this.state.LastName && !this.state.EmailId && !this.state.ContactNo && !this.state.Password)
            {
                alert('Please fill at least one value');
                return false;
            }
            if(!this.state.ContactNo && this.state.ContactNo.length >10)
            {
                alert("Please Enter valid mobile Number");
                return false;
            }
            const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!this.state.EmailId||regex.test(this.state.EmailId)==false)
            {
                
                  alert('Please enter correct email');
                  //</div>          
                return false;
                 
            }
            let count = this.state.Items.length +1;
            let obj = {
                "Id": count,
                "FirstName":this.state.FirstName,
                "LastName":this.state.LastName,
                "EmailId":this.state.EmailId,
                "ContactNo":this.state.ContactNo,
                "Password":this.state.Password
            };
           let itemsdata = this.state.Items;
           itemsdata.push(obj);
           this.setState({Items:itemsdata});
           this.state.FirstName ='';
           this.state.LastName='';
           this.state.EmailId ='';
           this.state.Password ='';
           this.state.ContactNo = '';
        }

        handleDelete = (i)=> {
            //e.preventDefault();
            let itemsData = this.state.Items;
            let deletedData = itemsData.splice(i,1);
            this.setState({Items:itemsData});
        }

        handleEdit =(i) =>
        {
            debugger;
         console.log(i);
         let itemsData = this.state.Items;
         let getItems = itemsData[i];
         
         this.state.FirstName = getItems.FirstName;
         this.state.LastName = getItems.LastName;
         this.state.EmailId = getItems.EmailId;
         this.state.ContactNo = getItems.ContactNo;
         this.state.Password = getItems.Password;
         let fname = document.getElementById('fname');
         let lname = document.getElementById('lname');
         let email = document.getElementById('email');
         let contact = document.getElementById('contactno');
         let password = document.getElementById('pwd');
         fname.value = this.state.FirstName;
         lname.value = this.state.LastName;
         email.value = this.state.EmailId;
         contact.value = this.state.ContactNo;
         password.value = this.state.Password;
         let create = document.getElementById('create');
         let update = document.getElementById('update'+i);
         let cancel = document.getElementById('cancel'+i);
         let edit = document.getElementById('edit'+i);
         create.style.visibility="hidden";
         cancel.style.display="block";
         update.style.display ="block";
         edit.style.display ="none";
        }

        handleCancel =(i)=>{
            let create = document.getElementById('create');
            let update = document.getElementById('update'+i);
            let cancel = document.getElementById('cancel'+i);
            let edit = document.getElementById('edit'+i);
            create.style.visibility="visible";
            cancel.style.display="none";
            update.style.display ="none";
            edit.style.display="block";
            this.state.FirstName = '';
            this.state.LastName = '';
            this.state.EmailId = '';
            this.state.ContactNo = '';
            this.state.Password = '';
            let fname = document.getElementById('fname');
         let lname = document.getElementById('lname');
         let email = document.getElementById('email');
         let contact = document.getElementById('contactno');
         let password = document.getElementById('pwd');
         fname.value = '';
         lname.value = '';
         email.value = '';
         contact.value = '';
         password.value = '';
        }
        
        handleUpdate=(i)=>{                      
            let count = this.state.Items.length;
            let obj = {
                "Id": count,
                "FirstName":this.state.FirstName,
                "LastName":this.state.LastName,
                "EmailId":this.state.EmailId,
                "ContactNo":this.state.ContactNo,
                "Password":this.state.Password
            
            }
          let  dataItems = this.state.Items;
            dataItems[i] = obj;
            this.setState({Items:dataItems});
            let create = document.getElementById('create');
            let update = document.getElementById('update'+i);
            let cancel = document.getElementById('cancel'+i);
            let edit = document.getElementById('edit'+i);
            create.style.visibility="visible";
            cancel.style.display="none";
            update.style.display ="none";
            edit.style.display="block";
            this.state.FirstName='';
            this.state.LastName='';
            this.state.EmailId='';
            this.state.ContactNo='';
            this.state.Password='';
            let fname = document.getElementById('fname');
            let lname = document.getElementById('lname');
            let email = document.getElementById('email');
            let contact = document.getElementById('contactno');
            let password = document.getElementById('pwd');
            fname.value = '';
            lname.value = '';
            email.value = '';
            contact.value = '';
            password.value = '';
        }


        render(){
            let itemsData = this.state.Items;
           // console.log(itemsData);
            return(
<div>
                <form>                    
                <table className="table" width="50%">
                        <thead>
                            <tr>
                            <th colSpan="2"></th>
                            </tr>
                        </thead>
                        <tbody>
                    <tr>
                        <td>
                            
                    <label>
                        First Name 
                    </label>
                    
                    </td>
                    <td>
                        <input type="text" id = "fname" name= "FirstName" value={this.state.FirstName} onChange={ this.handleFirstName}></input>
                    </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Last Name
                            </label>
                        </td>
                        <td>
                            <input type="text" id ="lname" name = "LastName" value={this.state.LastName} onChange={this.handleLastName}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Email
                            </label>
                        </td>
                        <td>
                            <input type="email" id="email" name="EmailId" onChange={this.handleEmailId} value = {this.state.EmailId}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Password
                            </label>
                        </td>
                        <td>
                            <input type="password" id ="pwd" name ="Password" onChange={this.handlePassword} value={this.state.Password}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Contact No</label>
                        </td>
                        <td>
                            <input type="tel" id='contactno' name="contactno" onKeyPress={this.handleContactOnPress} onChange={this.handleContactno} value={this.state.ContactNo}></input>
                        </td>
                    </tr>
                    <tr>
                    <td align="right">
                        {/* <Itemarray FirstName = {this.state.FirstName} LastName = {this.state.LastName} EmailId ={this.state.EmailId} ContactNo = {this.state.ContactNo} Password=  {this.state.Password} ref = {instance => {this.child = instance}}></Itemarray>
                            <button type="button" name ="create" onClick={() => {this.child.handlePush();}}>Create</button> */}
                            <button type="button" className="btn btn-danger" id="create" name="create" onClick={event=> this.handlePush(event)}>Create</button>
                            
                            
                    </td>
                        <td align="left">                        
                        
                        </td>
                    </tr>                    
                      
                    </tbody>  
                                 
                    </table>

                
                </form>
                <table id="showemprecord" className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">EmailId</th>
                            <th scope="col">Password</th>
                            <th scope="col">Contact</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                           
                        </tr>
                    </thead>
                    <tbody>
                    {itemsData.map((item,i) =>
                           
                           <tr key={i}>                               
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
                               <td>
                                {"+91 "+item.ContactNo}
                               </td>
                               <td>
                                <button className="btn btn-secondary" id={"edit"+i} onClick={()=>this.handleEdit(i)}>Edit</button>
                                <button style={{display:"none"}} type="button" className="btn btn-danger" onClick={()=>this.handleCancel(i)} name="cancel" id={"cancel"+i}>Cancel</button>
                               </td>                               
                               <td>
                               <button style={{display:"none"}} type="button" className="btn btn-danger" name="update" id={"update"+i} onClick={()=>{if(window.confirm('Are you sure to want update it')) this.handleUpdate(i)}}>Update</button>
                               </td>
                               <td>                                
                                <button className="btn btn-danger" onClick={()=> {if(window.confirm('Are you Sure to want to delete it')) this.handleDelete(i)}}>Delete</button>
                               </td>                               
                           </tr>
                       
                   )}
                    </tbody>
                </table>
                
                </div>
            )
        }
}
export default Crudapp;
