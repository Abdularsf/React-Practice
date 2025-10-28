// import "./components/Ev.css"
// import { Todo } from "./Projects/Todo/Help"
// import { RegistrationForm } from "./components/hooks/useState/Registration"
// import { RegistrationFormReact } from "./components/hooks/useState/RegistrationReact"
// import { ReactUseEffect } from "./components/hooks/UseEffect"
// import { CleanUp } from "./components/hooks/UseEffect/Cleanup"

import { ReactMemo } from "./components/hooks/Memo/ReactMemo"
import { MemoParentComponent } from "./components/hooks/Memo/useMemo"


export const App = () => {
  return (
    <MemoParentComponent/>
  )
}
