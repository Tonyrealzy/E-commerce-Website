import React from 'react'

const Sidebar = ({sidebarElements}) => {
  return (
    <div>
        {sidebarElements.map(d => 
        <div key={d.id}>{d.title}</div>
        )}
    </div>
  )
}

export default Sidebar;