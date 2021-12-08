import React from 'react'
import './MenuItem.scss'
import {withRouter} from 'react-router-dom';

const MenuItem = ({title,u,size,history, linkUrl, match}) => {
    return (
        <div >
            <div className={`${size} menu-item`} onClick={()=>{history.push(`${match.url}${linkUrl}`)}} >
             
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

export default withRouter(MenuItem)
