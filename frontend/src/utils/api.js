const baseURL = "http://localhost:4000/api/";

const getAllQuestions = async () => {
    try {
        const response = await fetch(baseURL+"questions");
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

const getQuestionAnswerCount = async (questionID) => {
    try {
        const response = await fetch(baseURL + "answers/count/"+questionID);
        if(response.status === 200){
            return await response.json();
        } else {
            console.log(response);
        }
    }
    catch(ex){
        console.log(ex);
    }
}

const getAnswersByQuestionID = async (questionID) => {
    try {
        const response = await fetch(baseURL + "answers/question/" + questionID);
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

const getTopQuestions = async (count) => {
    try {
        const response = await fetch(baseURL + "questions/top/"+count);
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

const getQuestionByID = async (id) => {
    try {
        const response = await fetch(baseURL + "questions/"+id);
        if(response.status === 200){
            return await response.json();
        } else {
            console.log(response);
        }
    }
    catch(ex){
        console.log(ex);
    }
}

const getAllUserQuestions = async (username) => {
    try {
        const response = await fetch(baseURL + "questions/user/" + username);
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

const getAnswerFormUrl = (id) => {
    return "/AnswerForm/"+id;
}

const getQuestionUrl = (id, username) => {
    return "/question/"+id + "/" + username;
}

const getQuestionFormUrl= (id=null) => {
    return "/questionform/"+id;
}

const UserValidation = async (username, password, type, setAuthentication) =>{
    try{
        const rawResponse = await fetch(baseURL + "users/"+type, {
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

const createAnswer = async(answer, questionID, username) => {
    try{
        const rawResponse = await fetch(baseURL + "answers/"+questionID, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ UserID:username, Answer:answer})
        });
        const content = await rawResponse.json();
        console.log(content);

    }
    catch(ex){
        console.log(ex);
    }
}

const createQuestion = async(title, question, username) => {
    try{
        const rawResponse = await fetch(baseURL + "questions/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Username:username, Question:question, Title:title })
        });
        const content = await rawResponse.json();
        console.log(content);

    }
    catch(ex){
        console.log(ex);
    }
}

const updateQuestion = async(title, question, questionID) => {
    try {
        const rawResponse = await fetch(baseURL + "questions/"+questionID, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Question:question, Title:title })
        });
        const content = await rawResponse.json();
        console.log(content);
    }
    catch(ex){
        console.log(ex);
    }
}

const deleteQuestion = async (id) => {
    try{
        const rawResponse = await fetch(baseURL + "questions/"+id, {
            method: 'DELETE',
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

const likeQuestion = async(questionID) => {
    try{
        const rawResponse = await fetch(baseURL + "questions/like/"+questionID, {
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
        const rawResponse = await fetch(baseURL + "questions/dislike/"+questionID, {
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
    UserValidation, getAllQuestions, getHomePageUrl, getQuestionUrl, getQuestionFormUrl,
    createQuestion, likeQuestion, dislikeQuestion, getAllUserQuestions,
    getTopQuestions, deleteQuestion, getQuestionByID, getAnswersByQuestionID,
    getQuestionAnswerCount, getAnswerFormUrl, createAnswer, updateQuestion
}