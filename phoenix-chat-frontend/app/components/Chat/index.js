import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"

import { default as Sidebar } from "../Sidebar"

class Chat extends React.Component {
  render() {
    return (
    <div>
      <Sidebar />
      <div className={style.chatWrapper}>
        chat it up
      </div>
      {this.props.children}
    </div>
    )
  }
}

export default cssModules(Chat, style)
