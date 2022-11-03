import React from 'react'
import './Sidebar.css'
import  {SidebarData}  from '../SidebarData/SidebarData'


function Sidebar() {
  return (
    <div className='Sidebar'>
        <ul className='SidebarList'> 
            { SidebarData.map((val, key)=> {
            return(

                <a key={ key }
                    className="row"
                    id={ window.location.pathname == val.link ? "active" : ""}
                    href={val.link}
                    >
                    
                    <div className='icone'>{ val.icon }</div><div className='titulo'>{val.title}</div>
                </a>
                )
        
            })}
    </ul>
    </div>
  )
}

export default Sidebar