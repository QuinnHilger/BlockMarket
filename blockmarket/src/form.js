import React, {useState} from 'react';

function Form(props){
    const [formState, setFormState] = useState({
        firstName: "",
        email: "",
        comments: "",
        premium: false,
        tpye: ""
    });


function handleChange(event){
    const {type, name, value, checked} = event.target;
    setFormState(prevState => ({...prevState,
    [name]: type === 'checkbox' ? checked: value
    }));
}
return(<form>
    <input
    type="text"
    name="firstName"
    placeholder="FirstName"
    class="text-input"
    onChange = {handleChange}
    />
</form>)
}