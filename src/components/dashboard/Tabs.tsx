import React, {ReactElement, useEffect, useState} from "react"
import TabTitle from "./TabTitle"

type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <>
      <ul>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            active={index === selectedTab}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </>
  )
}

export default Tabs
