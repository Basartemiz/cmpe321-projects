import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../DataContext";
import { useAuth } from "../login/AuthContext";
import PlayerCard from "./PlayerCard";

export const Player = () => {

  const {player,fetchPlayers}=useData()

  const {user}=useAuth()

  useEffect(()=>{
    fetchPlayers(user)
  },[])
  if (!player) {
    return <div>Loading...</div>; // Show loading screen
  }
  const rating=()=>{

    //must get players with a tie first //must change asap
    let sum=0
    for(let i=0;i<player.length;i++){
        sum+=player[i].elo_rating
    }
    return sum/player.length
  }

  const players_data = player.map((props) => (
    <li key={props.name} className="list-unstyled">
      <PlayerCard {...props} />
    </li>
  ));

  return (
    <div className="position-relative min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
      <ul className="d-flex flex-wrap justify-content-center p-0 m-0">
        {players_data}
      </ul>

      <div
        className="position-fixed bottom-0 start-0 end-0 bg-light text-center p-2 border-top shadow-sm"
        style={{ fontWeight: "bold" }}
        >
        average ELO rating of players with a tie: {rating()}
        </div>
    </div>
  );
};

export default Player;