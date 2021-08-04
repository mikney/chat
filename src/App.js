import React from "react"
import {Button} from "./components"
import {Block} from "./components"
import Kill from "./components/kill.tsx";


function App() {
  return (
    <div className="wrapper">
      <Block>
        <Button size={'large'} type={'primary'}>
          This is button
        </Button>
      </Block>
      <Kill />
    </div>
  );
}

export default App;
