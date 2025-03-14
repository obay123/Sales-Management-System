'use client'

import { useEffect, useState } from "react";
import useSalesmenApi from "@/api/SalesmenApi";

export default function Salesmen() {
  const [Salesmen, setSalesmen] = useState([]);

  useEffect(() => {
    const fetchSalesmen = async () => {
      try {
        const { getSalesmen } = useSalesmenApi();
        const data = await getSalesmen();
        setSalesmen(data.salesmen.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchSalesmen();
  }, []);

  console.log(Salesmen);

  return (
    <div className="main-div">
      <h1>Salesmen Page</h1>
    </div>
  );
}
