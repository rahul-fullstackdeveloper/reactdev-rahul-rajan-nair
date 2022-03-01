import React, { useCallback } from "react"

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
  active:boolean
}

const TabTitle: React.FC<Props> = ({ active,title, setSelectedTab, index }) => {

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <li className={active ? "active":""} onClick={onClick}> {title}</li>
  )
}

export default TabTitle
