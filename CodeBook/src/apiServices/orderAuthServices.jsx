const getSession =()=>{
    const token = JSON.parse(sessionStorage.getItem("token"))
    const cbid = JSON.parse(sessionStorage.getItem("cbid"))

    return token, cbid
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