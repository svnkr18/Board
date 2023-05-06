import React from "react";
import styles from "@/styles/sidebar.module.css";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className={styles.section}>
      <div className={styles.option}>
        <Image src="/dashboard_icon.svg" alt="" height={18} width={18} />
        <p className={styles.p} style={{ fontWeight: "700" }}>
          Dashboard
        </p>
      </div>
      <div className={styles.option}>
        <Image src="/transaction_icon.svg" alt="" height={18} width={18} />
        <p className={styles.p}>Transactions</p>
      </div>
      <div className={styles.option}>
        <Image src="/schedule_icon.svg" alt="" height={18} width={18} />
        <p className={styles.p}>Schedules</p>
      </div>
      <div className={styles.option}>
        <Image src="/user_icon.svg" alt="" height={18} width={18} />
        <p className={styles.p}>Users</p>
      </div>
      <div className={styles.option}>
        <Image src="/setting_icon.svg" alt="" height={18} width={18} />
        <p className={styles.p}>Settings</p>
      </div>
      <div className={styles.help}>
        <p className={styles.p1}>Help</p>
        <p className={styles.p1}>Contact Us</p>
      </div>
    </div>
  );
};

export default Sidebar;
