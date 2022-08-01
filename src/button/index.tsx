import * as React from "react"
import classnames from "classnames"

import css from "./styles.module.css"

export type ButtonProps = {
  type?: "button" | "submit" | "reset"
  primary?: boolean
  children: React.ReactNode
}

export function Button(props: ButtonProps): React.ReactElement {
  const { primary, type = "button", children } = props
  return (
    <button type={type} className={classnames(css.button, primary && css.primary)}>
      {children}
    </button>
  )
}
