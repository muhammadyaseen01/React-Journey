import { TodoListItem } from "./TodoListItem"
import { NameClass } from "./NameClass"
import { TodoListItemClass } from "./TodoListItemClass"
import Heading from "./Heading"

function App() {

  return (
    <> 
      <Heading name1='yaseen' age='22'>
        <h1>hello</h1>
      </Heading>



      {/* <TodoListItem isComplete = {true}>
        Child Name 
      </TodoListItem> */}

        {/* agar isComplete nh likhnga to byDefault false lega */}
      {/* <TodoListItemClass isComplete> 
        Child Name
      </TodoListItemClass>

      <NameClass name="Yaseen">
        CHildren
      </NameClass> */}
    </>
  )
}

export default App
