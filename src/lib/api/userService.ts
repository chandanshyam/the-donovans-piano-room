export const getUser = async () =>{
    try{
        const response = await fetch('/api/user/', {
            method: "GET", 
            credentials: 'include'
        })
        const data = await response.json()
        return {data, ok: response.ok}
    }catch(err){
        return {ok:false}
    }
    
}

export const updateUser = async (fullName: string, displayName: string, email: string, phoneNumber: string, pronouns: string, DOB: string) => {
    const response = await fetch('/api/user/', {
        method: "PUT", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullName, 
            displayName,
            email,
            phoneNumber,
            pronouns,
            DOB
        })
    })
    const data = await response.json()
    return {data, ok: response.ok}
}