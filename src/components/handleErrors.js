const errorMessage = document.querySelector('#error-message-container'); 

const renderError = () => {
        errorMessage.style.display = 'block'; 
};

const validateInput = (city) => {
    if(city == ''){
        renderError()
    }else{
        errorMessage.style.display = 'none';
        return false
    }
};

export { validateInput, renderError }