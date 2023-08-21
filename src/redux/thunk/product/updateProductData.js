import { updateProduct } from "../../actions/productAction";

const updateProductData = (product, id) => {
  return async (dispatch, getState) => {
    // axios.put(`http://localhost:5000/product/${id}`, product)
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(e=>console.log(e))

    const res = await fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    if (data.acknowledged) {
      dispatch(
        updateProduct({
          _id: id,
          ...product,
        })
      );
    }
  };
};

export default updateProductData;
