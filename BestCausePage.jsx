import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import DriveCard from "../components/Route/DriveCard/DriveCard";
import styles from "../styles/styles";
import Footer from "../components/Layout/Footer";

const BestCausePage = () => {
  const [data, setData] = useState([]);
  const {allDrives,isLoading} = useSelector((state) => state.drives);

  useEffect(() => {
    const allDrivesData = allDrives ? [...allDrives] : [];
    const sortedData = allDrivesData?.sort((a,b) => b.sold_out - a.sold_out); 
    setData(sortedData);
  }, [allDrives]);

  return (
   <>
   {
    isLoading ? (
      <Loader />
    ) : (
      <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <DriveCard data={i} key={index} />)}
        </div>
      </div>
      <Footer />
    </div>
    )
   }
   </>
  );
};

export default BestCausePage;
