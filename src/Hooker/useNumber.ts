import * as React from "react"

type NumberOperator = "adition" | "substraction" | "multiplication" | "division"

export const useNumber = (
  number: number,
  operator: NumberOperator = "adition",
  power?: number
) => {
  //Convert numbert to string format
  let n = number

  if (operator && power !== undefined) {
    switch (operator) {
      case "adition":
        n = n + power
        break
      case "substraction":
        n = n - power
        break
      case "multiplication":
        n = n * power
        break
      case "division":
        n = n / power
        break
    }
  }

  const numberFormated = n.toLocaleString()

  return { numberFormated }
}
