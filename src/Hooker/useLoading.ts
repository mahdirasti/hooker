import * as React from "react"

export const useLoading = () => {
  //State for loading
  const [loading, setLoading] = React.useState(false)

  //Start loading
  const startLoading = () => setLoading(true)

  //Stop loading
  const stopLoading = () => {
    setLoading(false)
  }

  return { loading, startLoading, stopLoading }
}
