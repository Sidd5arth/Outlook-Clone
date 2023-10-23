import { useEffect, useState } from "react";

const useGetEmail = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          ` https://flipkart-email-mock.now.sh/?id=${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const fetchedData = await response.json();

        setData(fetchedData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  return { data, loading };
};

export default useGetEmail;
