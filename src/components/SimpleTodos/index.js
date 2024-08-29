import {Component} from 'react'
import './index.css'
import DeleteTodo from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class todo extends Component {
  state = {todoList: initialTodosList}

  render() {
    const {todoList} = this.state
    const todoDelete = id => {
      const delteList = initialTodosList.filter(eachItem => eachItem.id !== id)
      this.setState({todoList: delteList})
    }
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {todoList.map(eachItem => (
              <DeleteTodo
                key={eachItem.id}
                item={eachItem}
                discard={todoDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default todo
