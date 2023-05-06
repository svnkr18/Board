import Image from "next/image";
import React from "react";
import styles from "@/styles/dashboard.module.css";
import Sidebar from "./Sidebar";
import InfoTile from "./InfoTile";

import LineCharts from "./LineCharts";
import PieTile from "./PieTile";
import CalenderTile from "./CalenderTile";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    // <div className={styles.main}>
    //   <div className={styles.sidebar}>
    //     <p className={styles.board}>Board.</p>

    //   </div>
    //   <div className={styles.header}>
    //     <p className={styles.dashboard}>Dashboard</p>
    // <div >

    //   <Image src="/bell-icon.svg" alt="bell icon" height={20} width={18} />
    //   <div className={styles.avatar}>
    //     {/* <Image src="/avatar.png" alt="profile" height={51} width={52} /> */}
    //   </div>
    //  </div>
    // </div>
    //   <div></div>
    // </div>
    <>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <p className={styles.board}>Board.</p>
          <Sidebar />
        </div>
        <div className={styles.header}>
          <p className={styles.dashboard}>Dashboard</p>
          <div className={styles.headerRight}>
            <div className={styles.searchbox}>
              <input
                type="text"
                placeholder="search..."
                className={styles.input}
              />
              <Image
                src="/Search icon.svg"
                alt="search icon"
                height={12}
                width={12}
                style={{ marginRight: "15px" }}
              />
            </div>
            <Image
              src="/bell-icon.svg"
              alt="bell icon"
              height={20}
              width={18}
            />
            <div className={styles.avatar}>
              <Image
                src="/avatar.jpg"
                alt="profile"
                height={51}
                width={52}
                className={styles.profile}
                onClick={() => auth.signOut()}
              />
            </div>
          </div>
        </div>
        <div className={styles.tiles}>
          <InfoTile />
        </div>
        <div className={styles.activitiesCard}>
          <div>
            <p className={styles.p}>Activities</p>
            <div className={styles.month}>
              <p className={styles.p1}>May-June 2021</p>
              <Image src="/dropdown.svg" alt="" height={5} width={8} />
            </div>
          </div>
          <LineCharts />
        </div>
        <div className={styles.additionalCard}>
          <PieTile />
        </div>
        <div className={styles.additionalCard1}>
          <CalenderTile />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
