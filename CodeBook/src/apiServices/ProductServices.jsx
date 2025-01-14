//data fetch kora start
 const getProductList = async(searchTerm)=>{
    const productList = await fetch(`http://localhost:800/products?q=${searchTerm}`)

    const data = await productList.json()
    return data;
}
export default getProductList
// data fetch end

//Upcomingproduct fetch start
export const getUpcomingProducts = async()=>{
    const response = await fetch("http://localhost:800/upcoming_products")
    const data = await response.json()
    return data;
}
//Upcomingproduct fetch end

export const getProductDetails = async(id)=>{
    const response = await fetch(`http://localhost:800/products/${id}`)
    const data = await response.json()
    return data;
}
