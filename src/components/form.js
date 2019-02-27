import React, { Component } from 'react';
import List from './list'

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            category: ''
        };

        this.greetings = []
    }

    changeHandler = event => {
      
        this.setState({ [event.target.name]: event.target.value })

    }

    submitHandler = event => {

        event.preventDefault();

        const greeting = {
            message: this.state.message,
            category: this.state.category
        }

        this.greetings.push(greeting);
        this.setState({
            message: '',
            category: ''
        })
    }

    render() {
        return (
            <div>
                <List greetingsCollection={this.greetings} />
                <form>
                    <div className="form-components">
                        <input className="greeting-input" name="message" type="text" placeholder="Skriv en hilsen" value={this.state.message} onChange={this.changeHandler}></input>
                        <select value={this.state.category || 'Vælg Kategori'} name="category" onChange={this.changeHandler}>
                            <option value="Vælg Kategori" disabled>Vælg Kategori</option>
                            <option value="Valentinsdag">Valentinsdag</option>
                            <option value="Begravelse">Begravelse</option>
                            <option value="Elsker">Elsker</option>
                            <option value="Mors Dag">Mors Dag</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <button className="button" onClick={this.submitHandler}>Tilføj Hilsen</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form
