const Person = ({name,age,hobbies}) => {
    const MAX_LENGTH_NAME =6
    const VALID_AGE = age >= 18
    return (
        <div>
            <p>Learn some information about this person</p>

            <h3>name: {name.slice(0,MAX_LENGTH_NAME)}</h3>
            <h3>{VALID_AGE? "PLEASE GO VOTE": "MUST BE 18 TO VOTE"}</h3>
            <ul>{hobbies.map(h => (
                <li>{h}</li>
            ))}

            </ul> 
        </div>
    )

}