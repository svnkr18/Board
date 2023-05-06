import React from "react";
import styles from "@/styles/infoTile.module.css";
import Image from "next/image";

const InfoTile = () => {
  return (
    <div className={styles.main}>
      <div className={styles.box} style={{ background: "#ddefe0" }}>
        <Image
          src="/revenue.svg"
          alt=""
          height={24}
          width={26}
          className={styles.logo}
        />
        <p className={styles.p1}>Total Revenues</p>
        <p className={styles.p2}>$2,129,430</p>
      </div>
      <div
        className={styles.box}
        style={{ background: "#F4ECDD", position: "relative" }}
      >
        <Image
          src="/total_transactions_icon.svg"
          alt=""
          height={24}
          width={20}
          className={styles.logo}
        />
        <p className={styles.p1}>Total Transactions</p>
        <p className={styles.p2}>1,520</p>
      </div>
      <div
        className={styles.box}
        style={{ background: "#EFDADA", position: "relative" }}
      >
        <Image
          src="/like.svg"
          alt=""
          height={24}
          width={23}
          className={styles.logo}
        />
        <p className={styles.p1}>Total Likes</p>
        <p className={styles.p2}>9,721</p>
      </div>
      <div
        className={styles.box}
        style={{ background: "#DEE0EF", position: "relative" }}
      >
        <Image
          src="/users.svg"
          alt=""
          height={24}
          width={36}
          className={styles.logo}
        />
        <p className={styles.p1}>Total Users</p>
        <p className={styles.p2}>892</p>
      </div>
    </div>
  );
};

export default InfoTile;
