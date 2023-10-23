import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEmail } from "../../Service/action";

const useEmailList = (page) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://flipkart-email-mock.now.sh/?page=${page}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data);
        // localStorage.clear();
        data.list.forEach((email) => {
          dispatch(addEmail(email));
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);
};

export default useEmailList;
