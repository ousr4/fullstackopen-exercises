const Filter = ({filter, setFilter}) => {
    return (
        <div>
            filer show with: <input value={filter} onChange={ e => setFilter(e.target.value)} />
        </div>
    )
}

export default Filter
