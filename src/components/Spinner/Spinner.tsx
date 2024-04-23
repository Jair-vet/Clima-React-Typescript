import styles from './Spinner.module.css'

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
    </div>
  )
}



