import React from "react";
import "../Styles/contact.css";
import axios from "axios";


class Report extends React.Component {
  constructor() {
    super();
    this.state = {
        email:'',
        name:'',
        phNumber:'',
        message:'',
       
    };
  }

  handlereport = ()=>{
    const {  email,name,message, } = this.state;
    const repObj = {
        email:email, 
        name:name,
        message:message,
    };
       axios({
        url:'https://rocky-cliffs-40299.herokuapp.com/feeds',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: repObj
        
    })
    .then(response => {
        if (response) {
            this.setState({
                
                email: '',
                name: '',
                message:'',
                });
                alert(response.data.message)
              
        }
       
    })
    .catch(err => console.log(err))
  }


  handleInputChange = (event,state)=>{
    this.setState({[state] : event.target.value});
}

  render() {
    return (
      <div className="container-fluid form-div">
    
                        <div className="container-fluid">
                            <h3 className="Acc-name">FeedBack</h3>
                            <span> <label className="NameH">name</label>
                            <input type="text" placeholder="enter your name" className="form-control"  onChange={(event) => this.handleInputChange(event, 'name')} /></span>
                            <label className="NameH">E-mail</label>
                            <input type="email" placeholder="enter your email" className="form-control"  required onChange={(event) => this.handleInputChange(event, 'email')} />
                            <label className="NameH">Message</label>
                            <textarea type="text" placeholder="enter your valuable response " className="form-control text-areaH" onChange={(event) => this.handleInputChange(event, 'message')} />
                            <button className="btn btn-danger mt-3 mb-5 button"  onClick={this.handlereport}>Submit</button>
                            
                        </div>
        </div>
    );
  }
}
export default Report;
