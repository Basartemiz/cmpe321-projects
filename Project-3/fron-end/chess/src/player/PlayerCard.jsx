

const PlayerCard = (props) => {
    const {
      name,
      surname,
      elo_rating,
    } = props;
    //delete match from database
    
  
    return (

      <div className="card shadow-sm m-3" style={{ width: "20rem" }}>

        <div className="card-body d-flex flex-column">

          <h5 className="card-title text-center">player:</h5>
          
          <p className="card-text">

            <strong>Player name:</strong> {name} <br />
            <strong>Player surname:</strong> {surname} <br />
            {elo_rating && (
              <span>
                <strong>Elo-rating:</strong> {elo_rating}
              </span>
            )}
            
          </p>
        </div>
      </div>
    );
  };
  
  export default PlayerCard;