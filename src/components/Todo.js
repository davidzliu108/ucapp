import React, { Component } from 'react'
import { Header } from "./common"


class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem: "",
            list: []
        }
    }
    
    // Red Light Foods
    updateInput(key, value) {
        this.setState({
            [key]: value
        })
    }
    addItem() {
        const newItem={
            id: 1+ Math.random(),
            value: this.state.newItem.slice()
        }
        const list = [...this.state.list]
        list.push(newItem)
        this.setState({
            list,
            newItem:""
        })
    }
    deleteItem(id) {
        const list = [...this.state.list]
        const updatedList = list.filter(item=>item.id !== id)
        this.setState({list: updatedList})
    }




    render() {
        return (
            <div>
                <div>
                    <div class="text-center" ><h2 > UC Center</h2></div>
                    <Header />
                </div>
                <div className="Todo">
                    <div>
                        No Go Foods
                    <br />
                        <input
                            type="text"
                            placeholder="Type item here..."
                            value={this.state.newItem}
                            onChange={e => this.updateInput("newItem", e.target.value)}
                        />
                        <button
                            onClick={() => this.addItem()}
                            className="btn btn-dark btn-sm"
                        >
                            Add
                    </button>
                    <br />
                    <ul>
                        {this.state.list.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.value}
                                    <button 
                                        onClick={()=> this.deleteItem(item.id)}
                                        className="btn btn dark"
                                    >x
                                    </button>
                                </li>
                            )
                        })}
                    </ul>

                    </div>
                </div>

            </div>
        )
    }
}

export default Todo
