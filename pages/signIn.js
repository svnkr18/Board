import Head from "next/head";
import React from "react";
import styles from "@/styles/signIn.module.css";
import Image from "next/image";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const logIn = () => {
    signInWithPopup(auth, provider).catch(alert);
  };
  return (
    <div>
      <Head>
        <title>SignIn</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.leftSide}>
          <p className={styles.board}>Board.</p>
        </div>
        <div className={styles.rightSide}>
          <div>
            <div>
              <p className={styles.signIn}>Sign In</p>
              <p className={styles.signDes}> Sign in to your account</p>
            </div>
            <div style={{ display: "flex", marginTop: "26px", gap: "25px" }}>
              <button
                onClick={logIn}
                className={styles.button}
                style={{ border: "1px solid #a4b9e470" }}
              >
                <Image
                  src="/google-icon 1.svg"
                  alt="google logo"
                  height={14}
                  width={14}
                />
                <p style={{ marginLeft: "10px" }}>Sign in with Google</p>
              </button>
              <div className={styles.button}>
                <Image
                  src="/apple 1.svg"
                  alt="apple logo"
                  height={14}
                  width={14}
                />
                <p style={{ marginLeft: "10px" }}>Sign in with Apple</p>
              </div>
            </div>
            <div className={styles.login}>
              <form className={styles.form}>
                <div className={styles.formLabel}>
                  <label className={styles.label} style={{ marginTop: "30px" }}>
                    Email address
                  </label>
                  <input type="email" required className={styles.input} />
                </div>
                <div className={styles.formLabel}>
                  <label className={styles.label}>Password</label>
                  <input type="password" required className={styles.input} />
                </div>
                <p className={styles.forgot}>Forgot password?</p>

                <input type="submit" className={styles.submit} />
              </form>
            </div>
            <p className={styles.register}>
              Don&apos;t have an account?{" "}
              <span style={{ color: "#346BD4", cursor: "pointer" }}>
                Register here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
