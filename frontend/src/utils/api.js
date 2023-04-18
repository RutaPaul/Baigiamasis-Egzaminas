const getAllQuestions = async () => {
    try {
        const response = await fetch("http://localhost:4000/api/questions");
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
    return "/";
}

const getQuestionUrl = (id) => {
    return "/question/"+id;
}

const getQuestionFormUrl= (id=null) => {
    return "/questionform/"+id;
}

const UserValidation = async (username, password, type, setAuthentication) =>{
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
        setAuthentication({Username:content.Username, Authenticated:true})
        console.log(content);

    }
    catch(ex){
        console.log(ex);
    }
}

const createQuestion = async(question, username) => {
    try{
        const rawResponse = await fetch("http://localhost:4000/api/questions/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Username:username, Question:question })
        });
        const content = await rawResponse.json();
        console.log(content);

    }
    catch(ex){
        console.log(ex);
    }
}

const likeQuestion = async(questionID) => {
    try{
        const rawResponse = await fetch("http://localhost:4000/api/questions/like/"+questionID, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const content = await rawResponse.json();
        console.log(content);

    }
    catch(ex){
        console.log(ex);
    }
}

const dislikeQuestion = async(questionID) => {
    try{
        const rawResponse = await fetch("http://localhost:4000/api/questions/dislike/"+questionID, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const content = await rawResponse.json();
        console.log(content);

    }
    catch(ex){
        console.log(ex);
    }
}

export {
    UserValidation, getAllQuestions, getHomePageUrl, getQuestionUrl, getQuestionFormUrl, createQuestion, likeQuestion, dislikeQuestion
}