import { Link } from "react-router-dom";
import PlayerCard from "./PlayerCard";

export const Player = () => {
  const data = [
    {
      player_id: "id1",
      player_name: "hall1",
      elo_rating: 10,
    },
    {
      player_id: "id2",
      player_name: "hall2",
      elo_rating: 20,
    },
    // you can add more halls here
  ];

  const rating=()=>{
//to do fetch data
  }

  const players = data.map((props) => (
    <li key={props.player_id} className="list-unstyled">
      <PlayerCard {...props} />
    </li>
  ));

  return (
    <div className="position-relative min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
      <ul className="d-flex flex-wrap justify-content-center p-0 m-0">
        {players}
      </ul>

      <div
        className="position-fixed bottom-0 start-0 end-0 bg-light text-center p-2 border-top shadow-sm"
        style={{ fontWeight: "bold" }}
        >
        average ELO rating of players with a tie: {rating}
        </div>
    </div>
  );
};

export default Player;