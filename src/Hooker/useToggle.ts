import * as React from "react"

export const useToggle = () => {
  //Toggle state
  const [isToggle, setToggle] = React.useState<boolean>(false)

  //Toggling the boolean
  const handleToggle = () => {
    setToggle((crt) => !crt)
  }

  return {
    isToggle,
    toggle: handleToggle
  }
}
