import Image from "next/image";
import React from "react";
import styles from "@/styles/pieTile.module.css";
import PieCharts from "./PieCharts";

const PieTile = () => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <div className={styles.top}>
          <p className={styles.p}>Top products</p>
          <div className={styles.month}>
            <p className={styles.p1}>May-June 2021</p>
            <Image src="/dropdown.svg" alt="" height={5} width={8} />
          </div>
        </div>
      </div>
      <div className={styles.pieCharts}>
        <PieCharts />
      </div>
      <div className={styles.percent}>
        <div className={styles.meet1}>
          <Image
            src="/green.svg"
            alt=""
            height={19}
            width={10}
            style={{ float: "left", marginRight: "15px" }}
          />
          <div className={styles.meeting}>
            <p className={styles.p3}>Basic Tees</p>
            <p className={styles.p4}>40%</p>
          </div>
        </div>
        <div className={styles.meet1}>
          <Image
            src="/yellow.svg"
            alt=""
            height={19}
            width={10}
            style={{ float: "left", marginRight: "15px" }}
          />
          <div className={styles.meeting}>
            <p className={styles.p3}>Custom Short Pant</p>
            <p className={styles.p4}>30%</p>
          </div>
        </div>
        <div className={styles.meet1}>
          <Image
            src="/red.svg"
            alt=""
            height={19}
            width={10}
            style={{ float: "left", marginRight: "15px" }}
          />
          <div className={styles.meeting}>
            <p className={styles.p3}>Super Hoodies</p>
            <p className={styles.p4}>30%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieTile;
