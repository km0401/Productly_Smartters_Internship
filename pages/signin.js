import styles from "../styles/signin.module.css"

const signIn = () => {
  return (
    <div className={styles.mainContainer}>
    <div className={styles.container}>
      <div className={styles.box}>
      <h2 className={styles.headingSignInForm}>Welcome Back!</h2>
      <form>
      <label className={styles.signInLabel}>Email ID</label>
        <input className={styles.signInInput} type="text" name="emailid" required/>
        <label className={styles.signInLabel}>Password</label>
        <input className={styles.signInInput} type="password" name="password" required/>
        <button className={ styles.buttonSignIn}type="submit" id="button">Sign In</button>
      </form>

      </div>
      </div>
      </div>
  )
}

export default signIn