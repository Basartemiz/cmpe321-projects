import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../DataContext";
import { useAuth } from "../login/AuthContext";
import PlayerCard from "./PlayerCard";

export const Player = () => {

  const {player,fetchPlayers,tie,fetchTie,fetchMostPlayers,mostPlayers}=useData()

  const {user}=useAuth()

  useEffect(()=>{
    fetchPlayers(user)
    fetchTie(user)
    fetchMostPlayers(user)
  },[])
  if (!player) {
    return <div>Loading...</div>; // Show loading screen
  }
  const rating=()=>{
    return tie.tie
  }

  const players_data = player.map((props) => (
    <li key={props.name} className="list-unstyled">
      <PlayerCard name={props.name} surname={props.surname} />
    </li>
  ));

  const mostPlayedData = mostPlayers?.length ? (
    mostPlayers.map((mp) => (
      <li key={mp.name} className="list-unstyled">
        <PlayerCard {...mp} />
      </li>
    ))
  ) : (
    <p>No most played players found.</p>
  );


  return (
    <div className="position-relative min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
      <ul className="d-flex flex-wrap justify-content-center p-0 m-0">
        {players_data}
      </ul>

      <div className="mt-5 w-100 text-center">
        <h4 className="mb-3">Most Played Player(s)</h4>
        <ul className="d-flex flex-wrap justify-content-center p-0 m-0">
          {mostPlayedData}
        </ul>
      </div>

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