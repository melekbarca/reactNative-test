import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../Interfaces/Redux"
import AR from '../../Lang/ar'
import FR from '../../Lang/fr'
import EN from '../../Lang/en'
import { Elang, IKeys, IPageProps } from "../../Interfaces"

export const LangContext = React.createContext<IKeys>(FR)

export default function LangProvider(props: IPageProps): JSX.Element {
  const lang = useSelector((state: RootState) => state.setting.lang)

  let type = FR
  if (lang === Elang.en) {
    type = EN
  }
  else if (lang === Elang.ar) {
    type = AR
  }
  return <LangContext.Provider value={type}>{props.children}</LangContext.Provider>
}
