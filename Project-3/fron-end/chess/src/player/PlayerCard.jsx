

const PlayerCard = (props) => {
    const {
      player_id,
      player_name,
      elo_rating,
    } = props;
    //delete match from database
    
  
    return (
      <div className="card shadow-sm m-3" style={{ width: "20rem" }}>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">player: {player_id}</h5>
          
          <p className="card-text">
            <strong>Player name:</strong> {player_name} <br />
            <strong>Elo-rating:</strong> {elo_rating}
          </p>
        </div>
      </div>
    );
  };
  
  export default PlayerCard;