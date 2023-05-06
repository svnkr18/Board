import React, { useEffect, useState } from "react";
import styles from "@/styles/infoTile.module.css";
import Image from "next/image";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const InfoTile = () => {
  // const [data, setData] = useState([]);

  // const fetchUserData = () => {
  //   fetch("https://api-generator.retool.com/xCktXs/dashboard_data")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //     });
  // };

  // useEffect(() => {
  //   fetchUserData();
  //
  // }, [data]);
  const { data, error } = useSWR(
    "https://api-generator.retool.com/xCktXs/dashboard_data",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { totalLikes, totalUsers, totalRevenue, totalTransaction } = data[0];

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
        <p className={styles.p2}>$ {totalRevenue}</p>
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
        <p className={styles.p2}>{totalTransaction}</p>
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
        <p className={styles.p2}>{totalLikes}</p>
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
        <p className={styles.p2}>{totalUsers}</p>
      </div>
    </div>
  );
};

export default InfoTile;

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(
//     `https://api-generator.retool.com/xCktXs/dashboard_data`
//   );
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
