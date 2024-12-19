import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';


export default function MoreInfo({ movie }) {
    const navigate = useNavigate()
    const { id } = useParams()
    const found = movie.find(el => el.id == id)
    console.log(found)
    return (

        <>
            <h2>{found.description}</h2>
            <iframe width="560" height="315" src={found.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br />
            <Button onClick={() => navigate('/')} variant="outline-secondary">Back</Button>
        </>


    )


}