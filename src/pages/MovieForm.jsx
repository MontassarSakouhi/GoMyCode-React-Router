import * as yup from 'yup'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';
import ReactStars from 'react-stars';
import { useNavigate } from 'react-router-dom';


export default function MovieForm({addMovie}) {

    let movieSchema = yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("description is required"),
        posterURL: yup.string().required("posterURL is required"),
        rating: yup.number().positive(),

    });
    const navigate = useNavigate()
    const [errors, setErrors] = useState("")
    const [val, setVal] = useState({ id: uuid(), title: "", description: "", posterURL: "", rating: 0 })

    const updateVal = (evt) => {
        console.log(val)
        setVal(oldVal => {
            return { ...oldVal, [evt.target.name]: evt.target.value }
        })

    }

    const handleForm = async (e) => {
        e.preventDefault()
        try {
            await movieSchema.validate(val, { abortEarly: false })
            addMovie(val)
            setVal({ id: uuid(), title: "", description: "", posterURL: "", rating: "" })
            navigate('/')
        } catch (error) {
            // console.log(error.inner);
            if (error.inner) {
                const newErrors = {};
                error.inner.forEach((err) => (newErrors[err.path] = err.message));
                setErrors(newErrors);
            }
        }

    }

    const ratingChanged = (newRating) => {
        setVal(oldVal => {
            console.log(oldVal)
            return { ...oldVal, rating: newRating }
        })
    }
    return (


        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>title : </Form.Label>
                    <Form.Control onChange={updateVal} type="text" placeholder="title" value={val.title} name="title" />
                    {errors.title ? <span>{errors.title}</span> : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>description : </Form.Label>
                    <Form.Control onChange={updateVal} type="text" placeholder="description" value={val.description} name="description" />
                    {errors.description ? <span>{errors.description}</span> : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>posterURL : </Form.Label>
                    <Form.Control onChange={updateVal} type="text" placeholder="posterURL" value={val.posterURL} name="posterURL" />
                    {errors.posterURL ? <span>{errors.posterURL}</span> : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>rating :   </Form.Label>
                    <div style={{ display: "flex", justifyContent: 'center' }} >
                        <ReactStars
                            value={val.rating}
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            color2={'#ffd700'}
                        />
                    </div>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleForm} >
                    Submit
                </Button>
            </Form>
        </>
    )
}