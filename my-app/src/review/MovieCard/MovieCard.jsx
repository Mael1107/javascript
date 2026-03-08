import "./MovieCard.css"

const MovieCard = ({title, year, note}) => {
   return (
    <div className="container">
      <div className="card">
        <div className="card">
          <h1>{note > 8 ? `⭐ ${title} — Destaque!` : title}</h1>
          <h2>{year}</h2>
          <h2>{note}</h2>
        </div>
      </div>
    </div>
  )
}

export default MovieCard