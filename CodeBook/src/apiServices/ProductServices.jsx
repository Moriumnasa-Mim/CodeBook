/* eslint-disable no-unused-vars */
//data fetch kora start
 const getProductList = async()=>{
    const productList = await fetch("http://localhost:8000/products")

    const data = await productList.json()
    return data;
}
export default getProductList
// data fetch end