import React, { Component } from 'react';
import UserService from '../../services/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            phoneId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        } else {
            UserService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    emailId : user.emailId,
                    phoneId : user.phoneId
                });
            });
        }        
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            emailId: this.state.emailId, 
            phoneId: this.state.phoneId
        };

        if(this.state.id === '_add'){
            UserService.createUser(user).then(res =>{
                this.props.history.push('/users');
            });
        } else {
            UserService.updateUser(user, this.state.id).then( res => {
                this.props.history.push('/users');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changePhoneHandler= (event) => {
        this.setState({phoneId: event.target.value});
    }

    cancel(){
        this.props.history.push('/users');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adicionar Usu??rio</h3>
        } else {
            return <h3 className="text-center">Atualizar Usu??rio</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <br/>
                                            <input placeholder="Nome" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <br/>
                                            <input placeholder="Sobrenome" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <br/>
                                            <input placeholder="Email" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <br/>
                                            <input placeholder="Telefone" name="phoneId" className="form-control" 
                                                value={this.state.phoneId} onChange={this.changePhoneHandler} required />
                                        </div>

                                        <br/>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateUser}> Salvar </button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Cancelar </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateUserComponent;