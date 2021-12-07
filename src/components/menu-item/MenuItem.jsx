import React from 'react'
import './MenuItem.scss'

const MenuItem = ({title,u,size}) => {
    return (
        <div >
            <div className={`${size} menu-item`}  >
             
            <div className="background-image" style={{
                backgroundImage: `url(${u})` }}/>

                    <div className="content">
                        <h1 className="title">{title.toUpperCase()}</h1>
                        <span className="subtitle"> SHOP NOW</span>
                        
                    </div>
                </div>
        </div>
    )
}

export default MenuItem
