import * as React from "react"

export const useToggle = () => {
  const [isToggle, setToggle] = React.useState<boolean>(false)

  const handleToggle = () => setToggle((crt) => !crt)

  return [isToggle, handleToggle]
}
