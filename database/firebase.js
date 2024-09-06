import axios from "axios";
const BACKEND_URL ="https://coffe-data-default-rtdb.firebaseio.com/";
export async function storeCoffe(type,itemData) {
  const response = await axios.post(
    BACKEND_URL + `/${type}.json`,
    itemData
  );
  const id = response.data.name;
  return id;
}


export async function fetchCoffes(type) {
  const response = await axios.get(BACKEND_URL + `/${type}.json`);
  const Coffes = [];

  for (const key in response.data) {
    const coffeObj = {
      id: key,
      imageUrl:response.data[key].imageUrl,
      title: response.data[key].title,
      price: response.data[key].price,
      description: response.data[key].description,
    };

    Coffes.push(coffeObj);
  }

  return Coffes;
}

