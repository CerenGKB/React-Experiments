import React from "react"
import {useParams} from "react-router-dom"

const VanDetail = () => {

    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(()=> {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data =>setVan(data.vans))
    }, [params.id])


    return(
        <div className="">
        {van ? (
            <div className="">
                <img src={van.imageUrl} />
                <i className={` ${van.type}`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className=""><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="">Rent this van</button>
            </div>
        ) : <h2>Loading...</h2>}
    </div>
    )
}


export default VanDetail