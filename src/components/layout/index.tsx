import React from 'react'
import Header from '../header'

interface LayoutProps {
  headerProps?: React.ReactNode;
  children: React.ReactNode;
  title?: string;
}

const MainLayout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
     <div className="page-wrapper">
          <Header />
          {children}
     </div>
  )
}

export default MainLayout