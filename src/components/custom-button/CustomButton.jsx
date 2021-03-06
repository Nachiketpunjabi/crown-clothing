import React from 'react'
import './CustomButton.scss'

const CustomButton = ({children, isGoogleSignIn,inverted, ...otherProps}) => {
    return (
        <div className={ 'custom-button'} {...otherProps}>
            {children}
        </div>
    )
}

export default CustomButton
