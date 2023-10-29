const Languages = ({languages}) => {
    return (
        <ul>
            {Object.entries(languages).map(([key, value]) => {
                return(
                    <li key={key}>{value}</li>
                )
            })}
        </ul>
    )
}

export default Languages
