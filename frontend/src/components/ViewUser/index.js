import React, { Component } from 'react';
import UserService from '../../services/UserService';

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount() {
        UserService.getUserById(this.state.id).then(res => {
            this.setState({ user: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> Detalhes do Usuário </h3>
                    <div className="card-body">
                        <div className="row">
                            <label> <b>Nome:</b> </label>
                            <div> {this.state.user.firstName} </div>
                        </div>
                        <div className="row">
                            <label> <b>Sobrenome:</b> </label>
                            <div> {this.state.user.lastName} </div>
                        </div>
                        <div className="row">
                            <label> <b>Email:</b> </label>
                            <div> {this.state.user.emailId} </div>
                        </div>
                        <div className="row">
                            <label> <b>Telefone:</b> </label>
                            <div> {this.state.user.phoneId} </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUserComponent;