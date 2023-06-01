import React from "react"
import { useSelector } from "react-redux"
import { light,dark } from "../../assets/abstracts/colors"
import { Etheme, IKeys, IPageProps } from "../../Interfaces"
import { RootState } from "../../Interfaces/Redux"
export const ThemeContext = React.createContext<IKeys>(light)
export default function ThemeProvider(props: IPageProps): JSX.Element {
  const theme = useSelector((state: RootState) => state.setting.theme)

  let type = light
  if (theme === Etheme.light) {
    type = light
  }
  else if (theme === Etheme.dark) {
    type = dark
  }
  return <ThemeContext.Provider value={type}>{props.children}</ThemeContext.Provider>
}
