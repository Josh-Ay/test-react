import { useEffect, useState } from "react"

export default function Login( { updateLoggedIn } ) {
    const [ userEmail, setUserEmail ] = useState("");
    const [ userPassword, setUserPassword ] = useState("");
    const [ disabled, setDisabled ] = useState(true);
    const [ errorMsg, setError ] = useState("");

    useEffect(() => {
        if ( ( userEmail === "" ) || ( userPassword === "" )) return setDisabled(true);

        setDisabled(false);
    }, [userEmail, userPassword]);


    const handleClick = (e) => {
        e.preventDefault();

        if ( ( userEmail === "abc@gmail.com" ) && ( userPassword === "abc" )) return updateLoggedIn(true);

        setError("Invalid username or password.");
        setTimeout(() => setError(""), 3000);
    }

    return <>
        <h1>Login</h1>
        <p>{errorMsg}</p>
        <form>
            <div>
                <label htmlFor='uEmail'>Email</label>
                <input type={'email'} name={'uEmail'} placeholder={'Email'} required={true} value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} />
            </div>
            <div>
                <label htmlFor='uPassword'>Password</label>
                <input type={'password'} name={'uPassword'} placeholder={'Password'} required={true} value={userPassword} onChange={(e) => { setUserPassword(e.target.value) }} />
            </div>

            <button type='submit' onClick={handleClick} disabled={disabled}>Login</button>
        </form>
    </>
}