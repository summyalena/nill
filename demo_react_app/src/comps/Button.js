import React from 'react'

import styles from "../App.css"

function Button({children, className}) {
  return (
    <div className={`flex ${className} ${styles.buttonContainer}`}>
      {children}
    </div>
  )
}

export default Button