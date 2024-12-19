import Movie from "./Movie"



const ListMovie=({movie,deleteMovie})=>{




    return (

        <div style={{display:"flex",flexWrap: "wrap", gap: "16px"}}>
        
        {
            movie.map(el=><Movie {...el}  key={el.id} deleteMovie={deleteMovie} />)
        }
        </div>
    )
}


export default ListMovie