export function TodoListItem({ children, isComplete }) {
  return (
    <label>
      <input type="checkbox" defaultChecked={!isComplete} />
      {children}
    </label>
  );
}

//TodoListItem -- Component
// props : children = name , isComplete : boolean
//Checkbox (checked if completed)
// label (children value)
