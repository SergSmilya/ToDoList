import { List, Item } from './ToDoList.styled';

function ToDoList({ props, onDelete }) {
  return (
    <List>
      {props.map(({ id, text }) => {
        return (
          <Item key={id}>
            <p>{text}</p>
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </Item>
        );
      })}
    </List>
  );
}

export default ToDoList;
