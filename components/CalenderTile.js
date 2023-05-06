import React from "react";
import styles from "@/styles/calenderTile.module.css";
import Image from "next/image";

const CalenderTile = () => {
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.heading}>
          <div className={styles.top}>
            <p className={styles.p}>Today&apos;s schedule</p>
            <div className={styles.month}>
              <p className={styles.p1}>See All</p>
              <Image src="/dropRight.svg" alt="" height={5} width={8} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.meet1}>
        <Image
          src="/Line 6.svg"
          alt=""
          height={60}
          width={10}
          style={{ float: "left", marginRight: "15px" }}
        />
        <div className={styles.meeting}>
          <p className={styles.p3}>Meeting with suppliers from Kuta Bali</p>
          <p className={styles.p4}>4.00 - 15.00</p>
          <p className={styles.p4}>at Sunset Road, Kuta, Bali</p>
        </div>
      </div>
      <div className={styles.meet1} style={{ top: "165px" }}>
        <Image
          src="/Line 7.svg"
          alt=""
          height={60}
          width={10}
          style={{ float: "left", marginRight: "15px" }}
        />
        <div className={styles.meeting}>
          <p className={styles.p3}>Check operation at Giga Factory 1</p>
          <p className={styles.p4}>18.00 - 20.00</p>
          <p className={styles.p4}>at Central Jakarta</p>
        </div>
      </div>
    </div>
  );
};

export default CalenderTile;
