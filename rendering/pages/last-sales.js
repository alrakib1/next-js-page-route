import React, { useEffect, useState } from "react";


export default function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
    fetch("https://car-doctor-5f3ce-default-rtdb.firebaseio.com/sales.json")
      .then((res) => res.json())
      .then((data) => {
        const transformedSales = [];

        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

        setSales(transformedSales);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);


  if (!sales) {
    return <p>Loading...</p>;
  }


  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id} className="text-xl font-semibold">
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(ctx) {
  const response = await fetch(
    "https://car-doctor-5f3ce-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();

  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return {
    props: {
      sales: transformedSales,
    },
  };
}
