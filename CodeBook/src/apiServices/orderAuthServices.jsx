const getSession =()=>{
    const token = JSON.parse(sessionStorage.getItem("token"))
    const cbid = JSON.parse(sessionStorage.getItem("cbid"))

    return {token, cbid}
}
export const getUser = async()=>{
    const browserData = getSession()

    const requestOptions ={
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${browserData.token}`, 
        }
    }

    const response = await fetch(`http://localhost:800/users/${browserData.cbid}`, requestOptions);
    const data = await response.json();

    return data

}









export const createOrder = async(cartList, SiToptal, user, cardDetail)=>{
    const browserData = getSession()

    const order = {
        cartList:cartList,
        amount_paid: total,
        quantity:cartList.length,
        cardDetail:cardDetail,
        user:{
            name: user.name,
            email:user.email,
            id:user.id,
        },
    };

    const requestOptions = {
        method:"POST",
        headers: {"Content-Type": "application/json", Authorization:`Bearer ${browserData.token}`},
        body: JSON.stringify(order)
    }

    const response = await fetch(`http://localhost:800/orders`, requestOptions);
    const data = await response.json();
}
