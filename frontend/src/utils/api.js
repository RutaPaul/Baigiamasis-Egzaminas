const getFlats = async () => {
    try {
        const response = await fetch("https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json");
        if(response.status === 200){
            return await response.json();
        } else {
            console.log(response);
        }
    }
    catch (ex){
        console.log(ex);
    }
}

const getHomePageUrl = () => {
    return "http://localhost:3000/";
}

const UserValidation = async (username, password, type, authenticate) =>{
    try{
        const rawResponse = await fetch("http://localhost:4000/api/users/"+type, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Username:username, Password:password })
        });
        const content = await rawResponse.json();
        authenticate({Username:content.Username, Authenticated:true})
        console.log(content);

    }
    catch(ex){
        console.log(ex);
    }
}


export {
    UserValidation
}