import { createContext, useContext, useState } from "react"

const DataContext=createContext()


export const useData = () => {
    const ctx = useContext(DataContext);
    if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
    return ctx;
  }

function DataProvider({children}){

    const API_URL = import.meta.env.VITE_API_URL; //get API

    const [halls,setHalls]=useState(null)
    const [matchs,setMatchs]=useState(null)

    const [arbiterMatchs,setArbiterMatchs]=useState(null)

    const [player,setPlayers]=useState(null)

    const [teams,setTeams]=useState(null)

    const[arbiters,setArbiters]=useState(null)

    //for coaches
    const[team_id,setTeamId]=useState(null)

    const fetchHalls=()=>{
        fetch(`${API_URL}/chess_app/halls/`)
            .then(response => response.json())
            .then(data => setHalls(data))
            .catch(error => console.error('Error fetching halls:', error));
    }

    const changeHallName=()=>{} //TO DO

    const fetchMatchsCoach=(coach_username)=>{
        fetch(`${API_URL}chess_app/match/${coach_username}/`)
            .then(response => response.json())
            .then(data => setMatchs(data))
            .catch(error => console.error('Error fetching matches:', error));
    }
    const fetchMatchsArbiter=(arbiter_username)=>{
        fetch(`${API_URL}chess_app/arbiter/${arbiter_username}/`)
            .then(response => response.json())
            .then(data => setArbiterMatchs(data))
            .catch(error => console.error('Error fetching matches:', error));
        
    }

    const fetchPlayers=(player_username)=>{
        fetch(`${API_URL}chess_app/player/${player_username}/`)
            .then(response => response.json())
            .then(data => setPlayers(data))
            .catch(error => console.error('Error fetching players:', error));
    }

    const fetchTeams=()=>{
        fetch(`${API_URL}chess_app/teams/`)
            .then(response => response.json())
            .then(data => setTeams(data))
            .catch(error => console.error('Error fetching players:', error));
    }

    const fetchArbiters=async ()=>{
      try {
          const response = await fetch(`${API_URL}chess_app/getArbiter/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            });
          
    
          const data = await response.json();
          setArbiters(data)
           
          

        } catch (error) {
          console.error('Error during login:', error);
        }
  }

    //POST METHODS
    const addCoach= async (props)=>{
        try {
            const response = await fetch(`${API_URL}chess_app/addCoach/`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                "username":props.username, 
                "password":props.password,
                "name":props.firstName, 
                "surname":props.surname,
                "nationality":props.nationality, 
                "team":props.selectedTeam,
                "contract_start":props.contractStart,
                "contract_finish":props.contractEnd,

            })});
            
            if (!response.ok) throw new Error('Adding failed failed');
      
            const data = await response.json();
            //return data
            return data

          } catch (error) {
            console.error('Error during login:', error);
          }
    }

    //add Arbiter
    const addArbiter= async (props)=>{
        try {
            const response = await fetch(`${API_URL}chess_app/addArbiter/`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                "username":props.username, 
                "password":props.password,
                "name":props.firstName, 
                "surname":props.surname,
                "nationality":props.nationality, 
                "experience_level":props.experience_level
            })});
            
            if (!response.ok) throw new Error('Adding failed failed');
      
            const data = await response.json();
            //return data
            return data

          } catch (error) {
            console.error('Error during login:', error);
          }
    }

    //add Arbiter
    const addPlayer= async (props)=>{
        try {
            const response = await fetch(`${API_URL}chess_app/addPlayer/`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                "username":props.username, 
                "password":props.password,
                "name":props.name, 
                "surname":props.surname,
                "nationality":props.nationality, 
                "date_of_birth":props.date_of_birth,
                "fide_id":props.fide_id, 
                "elo_rating":props.elo_rating,
                "title_id":props.title_id, 
            })});
            
            if (!response.ok) throw new Error('Adding player failed');
      
            const data = await response.json();
            //return data
            return data

          } catch (error) {
            console.error('Error during login:', error);
          }
    }

    const renameHall=async (props)=>{
        try {
            const response = await fetch(`${API_URL}chess_app/halls/`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                "hall_id":props.hall_id, 
                "hall_name":props.hall_name,
            })});
            
            if (!response.ok) throw new Error('renaming hall failed');
      
            const data = await response.json();
            //return data
            return data

          } catch (error) {
            console.error('Error during login:', error);
          }
    }

    const createMatch=async (props)=>{
      try {
          const response = await fetch(`${API_URL}chess_app/createMatch/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              "match_id":props.match_id, 
              "match_date":props.match_date,
              "time_slot":props.time_slot, 
              "hall_id":props.hall_id,
              "table_id":props.table_id, 
              "team1_id":props.team1_id,
              "team2_id":props.team2_id, 
              "arbiter_username":props.arbiter_username,
              "ratings":null,
          })});
          
          if (!response.ok) throw new Error('renaming hall failed');
    
          const data = await response.json();
          //return data
          return data

        } catch (error) {
          console.error('Error during login:', error);
        }
  }

  const getCoachTeam=async (username)=>{
    try {
      const response = await fetch(`${API_URL}chess_app/getCoachTeam/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username
        })
      });
        
        if (!response.ok) throw new Error('renaming hall failed');
  
        const data = await response.json();
        //return data
        setTeamId(data[0]["team_id"])
       

      } catch (error) {
        console.error('Error during login:', error);
      }
}

const deleteMatch=async (match_id)=>{
  try {
    const response = await fetch(`${API_URL}chess_app/deleteMatch/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        match_id: match_id
      })
    });
      
      if (!response.ok) throw new Error('match deleting failed');

      const data = await response.json();
      //return data
      return data.status
     

    } catch (error) {
      console.error('Error during login:', error);
    }
}

    
    
    return (
        <DataContext.Provider value={{
        halls:halls,
        fetchHalls:fetchHalls,

        fetchMatchsCoach:fetchMatchsCoach,
        matchs:matchs,

        fetchMatchsArbiter:fetchMatchsArbiter,
        arbiterMatchs:arbiterMatchs,

        player:player,
        fetchPlayers:fetchPlayers,

        teams:teams,
        fetchTeams:fetchTeams,

        addCoach:addCoach,

        addArbiter:addArbiter,

        addPlayer:addPlayer,

        renameHall:renameHall,

        fetchArbiters:fetchArbiters,
        arbiters,

        getCoachTeam:getCoachTeam,
        team_id:team_id,

        createMatch:createMatch,

        deleteMatch:deleteMatch
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider