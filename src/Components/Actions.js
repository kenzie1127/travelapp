import React from 'react';
import {Table, Button, Glyphicon } from 'react-bootstrap';
import Destination from './Destination';
// import Weather from './Weather';


class Actions extends React.Component {
    constructor() {
        super();

        this.state = { tasks: [], showEdit: false, editTask: {} };
        this.getActions = this.getActions.bind(this);
        this.onDestination = this.onDestination.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.handleCloseEdit = this.handleCloseEdit.bind(this);
        this.handleShowEdit = this.handleShowEdit.bind(this);
        this.editTask = this.editTask.bind(this);
    }
    
    getActions() {
        fetch('http://localhost:3005/tasks')
          .then(response => response.json())
          .then(json => {
              this.setState({ tasks: json.data });
          });
    
        }
    
        componentDidMount() {
            this.getActions();
        }

    onDestination(task) {
        const payload = JSON.stringify({ data: task });
        fetch('http://localhost:3005/tasks' , {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: payload
        }).then(() => this.getActions());
    
    }

    onDelete(e, destinationId) {
        e.preventDefault();
        fetch(`http://localhost:3005/tasks/${destinationId}` , {
            method: 'Delete',
            headers: {
                Accept: 'application/json'
            }
        }).then(() => this.getActions());
    }

    editTask(e) {
        e.preventDefault();
        const task = this.state.editTask;
        console.log(task);
        const payload = JSON.stringify({
           data: {
               location: task.location,
               date: task.date,
               destinationId: task.destinationId
           }  
        });
        console.log('payload: ' + payload);

        fetch(`http://localhost:3005/tasks/${task.destinationId}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: payload
        })
        .then(this.handleCloseEdit)
        .then(() => this.getActions());
    }
   
    handleCloseEdit(e) {
        this.setState({ showEdit: false });
    }  

    handleShowEdit(e, task) {
        const edit = Object.assign({}, task);
        this.setState({ showEdit: true, editTask: edit });
    }

    handleEditChange(e) {
        const target = e.target;
        const name = target.name;

        const edit = Object.assign(this.state.editTask, {[name]: target.value});
        this.setState((prev, props) => ({
            editTask: edit
        }));
    }


render(){
    return(
        <div className='actions'>
            <h2>Itinerary</h2>
            <Table className='bordered'>
                <thead>
                    <tr>
                    <th>Your trip</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tasks.map(t => {
                      return(  
                        <tr key={t.destinationId}>
                        <td>{t.location}</td>
                        <td>{t.date}</td>
                        <td>
                            <Button bsStyle="danger" 
                             onClick={e => this.onDelete(e, t.destinationId)}>
                            <Glyphicon glyph="remove" />
                            </Button>
                        </td>  
                        <td>
                            <Button bsStyle='info'
                            onClick={e => this.handleShowEdit(e, t)}>
                                <Glyphicon glyph="pencil" />
                            </Button>
                        </td>  
                    </tr>
                    );

                })}
                </tbody>
                </Table>

            <Destination onAdd={this.onDestination} showEdit={this.state.showEdit} editTask={this.state.editTask} onEditSubmit={this.editTask}/>
            {/* <Weather /> */}
            
        </div>
    );
} 
 
}

export default Actions;