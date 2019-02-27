import React, { Component } from 'react';

class List extends Component {
    createGreetings(greeting) {
        return <li key={greeting.message}>
                    <p>{greeting.message}</p>
                    <span>{greeting.category}</span>
                </li>
    }

    render() {
        let greets = this.props.greetingsCollection
        let greetList;

        if (greets)
            greetList = greets.map(this.createGreetings)
        else {
            greetList = <h2>Der er ingen hilsner endnu.</h2>
        }

        return (
            <div className="greetings-list">
                <ul>
                    {greetList}
                </ul>
            </div>
        );
    }
}

export default List
