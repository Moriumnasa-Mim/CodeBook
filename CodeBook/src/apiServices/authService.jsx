//jwt token porte hobe
export const signUp = async(authDetail)=>{

    const requestOptions ={
        method: "post",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(authDetail)
    }

    const response = await fetch(`http://localhost:800/register`, requestOptions)

    const data = await response.json();


    if(data.accessToken){
        sessionStorage.setItem("token",JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }
    return data

}