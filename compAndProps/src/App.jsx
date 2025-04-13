import { TodoListItem } from "./TodoListItem"
import { NameClass } from "./NameClass"
import { TodoListItemClass } from "./TodoListItemClass"

function App() {

  return (
    <>
      {/* <TodoListItem isComplete = {true}>
        Child Name
      </TodoListItem> */}

        {/* agar isComplete nh likhnga to byDefault false lega */}
      <TodoListItemClass isComplete> 
        Child Name
      </TodoListItemClass>

      <NameClass name="Yaseen">
        CHildren
      </NameClass>
    </>
  )
}

export default App
