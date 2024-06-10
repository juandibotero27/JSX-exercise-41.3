// const Tweet = ({username, name, date, text}) => (
//     <ul>
//         <l1>unsername: {username}</l1>
//         <l1>name: {name}</l1>
//         <l1>date: {date}</l1>
//         <l1>text: {text}</l1>
//     </ul>
// )
const Tweet = ({username,name,date,text}) => {
    return (
        <ul className="tweet">
            <li className="username">username: {username}</li>
            <li className="name">name: {name}</li>
            <li className="date">date: {date}</li>
            <li className="text">text: {text}</li>
        </ul>
    )
}



