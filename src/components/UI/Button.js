import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  return (
    <Button
      className={styles.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}

export default Button
