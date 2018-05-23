import React from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Modal } from 'react-bootstrap';

class Destination extends React.Component {
    constructor() {
        super();

        this.state = { location: '', date:'',  editTask: {} };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEditChange = this.handleEditChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const task = this.state;

        if(this.props.onAdd) {
            this.props.onAdd(task);
        }
        this.setState({ location: '', date: ''});
    }

    handleEditChange(e) {
        const target = e.target;
        const name = target.name;

        const edit = Object.assign(this.props.editTask, {[name]: target.value});
        this.setState((prev, props) => ({
            editTask: edit
        }));
    }


    render() {
        return (
          <div>
           <form onSubmit={this.handleSubmit}>
            <h2>Add Itinerary</h2>
            <FormGroup>
                 <ControlLabel htmlFor='location'>Location</ControlLabel>
                 <FormControl
                    type='text'
                    name='location'
                    id='location'
                    value={this.state.location}
                    onChange={this.handleChange}
                 />
                </ FormGroup> 
                <FormGroup>
                 <ControlLabel htmlFor='date'>Date</ControlLabel>
                 <FormControl
                    type='text'
                    name='date'
                    id='date'
                    value={this.state.date}
                    onChange={this.handleChange}
                 />
            </ FormGroup>  
            <Button type='submit' bsStyle='primary'>Submit new destination</Button>   
           </form>

          <Modal show={this.props.showEdit} onHide={this.handleCloseEdit}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Edit Itinerary
                </Modal.Title>
            </Modal.Header>
          <Modal.Body>
        <form onSubmit={this.props.onEditSubmit}>
        <FormGroup>
            <ControlLabel htmlFor="location">Location</ControlLabel>
            <FormControl
              type="text"
              name="location"
              id="location"
              value={this.props.editTask.location}
              onChange={this.handleEditChange}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel htmlFor="date">Date</ControlLabel>
            <FormControl
              type="text"
              name="date"
              id="date"
              value={this.props.editTask.date}
              onChange={this.handleEditChange}
            />
          </FormGroup>
          <Button type="submit" bsStyle="primary">Save</Button>
        </form>
            </Modal.Body>
        </Modal>
        </div>
        );
    }
}

export default Destination;