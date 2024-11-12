import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'

function MovieCard({ movies }) {
   return (
      <Grid container spacing={2.5}>
         {movies.map((movie) => (
            <Grid size={2.4} key={movie.id}>
               <Link to={`/detail/${movie.id}`} style={{ textDecoration: 'none' }}></Link>
            </Grid>
         ))}
      </Grid>
   )
}

export default MovieCard
