import React, { Component } from 'react';
import UserService from '../../services/UserService';

class ListUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id) {
        UserService.deleteUser(id).then(res => {
            this.setState({ users: this.state.users.filter(user => user.id !== id) });
        });
    }
    viewUser(id) {
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id) {
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount() {
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data });
        });
    }

    addUser() {
        this.props.history.push('/add-user/_add');
    }

    render() {
        return (
            <div>
                <br />
                <div className="row">
                    <div>
                        <button className="btn btn-primary" onClick={this.addUser}> Adicionar Cliente </button>
                    </div>
                </div>
                <br /><hr /><br />
                <h2 className="text-center">Lista de Clientes</h2>
                <br />
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr className="text-center">
                                <th> Nome </th>
                                <th> Sobrenome </th>
                                <th> Email </th>
                                <th> Telefone </th>
                                <th> Ações </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td> {user.firstName} </td>
                                            <td> {user.lastName}</td>
                                            <td> {user.emailId}</td>
                                            <td> {user.phoneId}</td>
                                            <td>
                                                <button onClick={() => this.editUser(user.id)} className="btn btn-success"> Atualizar </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteUser(user.id)} className="btn btn-danger"> Deletar </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewUser(user.id)} className="btn btn-info"> Detalhes </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListUserComponent;