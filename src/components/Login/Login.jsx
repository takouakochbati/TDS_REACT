import { useState } from "react";
function Login(){
    const[email,setEmail]=useState("");
    const[password,setPasswor]=useState("");
    const[erreur,setErreur]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        let newErreur={};
        if (email.trim()==="")
            newErreur.email="veuillez introduire un email"
        else if(! /\S+@+\S+\.+_S/.test(email))
            newErreur.email="veuillez introduire un email valider"
        if(password.trim()==="")
            newErreur.password="veuillez introduire un password"
        else if(password.length<8)
            newErreur.password="veuillez introduire un password sup ou egale a 8"
        else if(!/[A-Z]/.test(password))
            newErreur.password="veuillez introduire un password contenir au moins une lettre majuscule"
        else if(!/[0-9]/.test(password))
            newErreur.password="veuillez introduire un password contenir au moins une lettre majuscule"
        else if(!/[^A-Za-z0-Z]/.test(password))
            newErreur.password="veuillez introduire un password contenir  au moins un caractere special"
        if(Object.keys(newErreur).length===0)
           {
            alert("enregistrement avec succes");
           console.log("email:" + email+"password:"+ password);
        } 
        else{
        setErreur(newErreur);
        console.log(newErreur);
    }
            
    }
    


return(
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">email</label>
                <input type="text"
                 name="email" 
                 id="email" 
                 value={email} 
                 onChange={(e) => setEmail(e.target.value)}/>
                 {
                    erreur.email && <span>{erreur.email}</span>
                 }
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" 
                name="password"
                 id="password"
                 value={password} 
                 onChange={(e) => setPasswor(e.target.value)}
                 />
                 {
                    erreur.password && <span>{erreur.email}</span>
                 }
            </div>
            <div>
                <button type="submit">enregistrer</button>
            </div>
        </form>
    </div>
);
}
export default Login;