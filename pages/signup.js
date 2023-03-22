import styles from "../styles/signin.module.css"

const signIn = () => {
  return (
      <div className={styles.mainContainer}>
    <div className={styles.container}>
      <div className={styles.box}>
      <h2 className={styles.headingSignInForm}>Sign Up Page</h2>
      <form>
        <label className={styles.signInLabel}>Name</label>
        <input className={styles.signInInput} type="text" name="username" required/>
        <label className={styles.signInLabel}>Email ID</label>
        <input className={styles.signInInput} type="text" name="emailid" required/>
        <label className={styles.signInLabel}>Mobile No</label>
        <input className={styles.signInInput}type="text" name="mobileno" pattern="[1-9]{1}[0-9]{9}" maxLength="10" required/>
        <label className={styles.signInLabel}>Password</label>
        <input className={styles.signInInput} type="password" name="password" required/>
        <button className={ styles.buttonSignIn}type="submit" id="button">Sign Up</button>
      </form>

      </div>
      </div>
      </div>
  )
}

export default signIn