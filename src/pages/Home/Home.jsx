import { axios } from "axios";

export async function loadData() {
  try {
    const response = await axios.get(
      "https://prj-backend-shopping-basket.onrender.com/products"
    );
    console.log("response data:", response.data);
  } catch (err) {
    console.log("Something went wrong!");
  }
}
