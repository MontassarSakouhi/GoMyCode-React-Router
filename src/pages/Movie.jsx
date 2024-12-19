import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import ReactStars from 'react-stars'
import { useNavigate } from 'react-router-dom';
export default function Movie({id,title,trailer,description,posterURL,rating,deleteMovie}){

        const navigate=useNavigate()
const getInfo=(id)=>{
    navigate(`/info/${id}`)

}

    return (

        <div  >
        <Card style={{
            width: '15rem',
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            margin: '10px',
            backgroundColor: '#f9f9f9',
        }}>
            <Card.Img
                variant="top"
                src={posterURL}
                style={{
                    borderRadius: '10px',

                    height: '300px',
                }}
            />
            <Card.Body>
                <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold', textAlign: 'center' }}>
                    {title}
                </Card.Title>
                <Card.Text style={{ color: '#555', textAlign: 'justify', margin: '10px 0' }}>
                    {description}
                </Card.Text>
                <Card.Title
                    style={{
                        fontSize: '1.5rem',
                        color: 'black',
                        textAlign: 'center',
                        display:'flex',
                        justifyContent:'center'
                    }}
                >
                    <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        value={rating}
                        size={24}
                        edit={false}
                        color2={'#ffd700'} />
                </Card.Title>
                <Button onClick={()=>getInfo(id)} variant="primary">Watch trailer</Button> <Button onClick={()=>deleteMovie(id)} variant="danger">Delete movie</Button>
            </Card.Body>
        </Card>
    </div>
    )
}