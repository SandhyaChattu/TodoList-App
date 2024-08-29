// Write your code here
import './index.css'

const DeleteTodo = props => {
  const {item, discard} = props
  const onDelete = () => {
    discard(item.id)
    console.log(item.id)
  }

  return (
    <li className="listItem-container">
      <p>{item.title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default DeleteTodo
