
import { useEffect } from "react";
import { useData } from "../DataContext";
import { useAuth } from "../login/AuthContext";
import RateMatch from "./RateMatch";

export const Arbiter =()=>{
  const {fetchMatchsArbiter,arbiterMatchs}=useData()
  const{user}=useAuth()
  
  
  console.log(user)
  useEffect(() => {
    
    fetchMatchsArbiter(user);
  }, []); 
  // [] means only once when component loads

  if (!arbiterMatchs) {
    return <div>Loading...</div>; // Show loading screen
  }

    
      const halls = arbiterMatchs.map((props) => (
        <li key={props.match_id} className="list-unstyled">
          <RateMatch {...props} />
        </li>
      ));

      let sum = 0;
      let no_rating=0
      for (let i = 0; i < arbiterMatchs.length; i++) {
          if(arbiterMatchs[i].ratings==null){
            no_rating+=1
          }
          sum += Number(arbiterMatchs[i].ratings);
        }

      const averageMatchRating = arbiterMatchs.length > 0
          ? sum /(arbiterMatchs.length-no_rating)
          : 0;
      
        
    
      return (
        <div className="position-relative min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
          <ul className="d-flex flex-wrap justify-content-center p-0 m-0">
            {halls}
          </ul>
        <h2>
          Match Count : 
        <h3>
          {arbiterMatchs.length}
        </h3>
        </h2>
        <h2>
          Average Match Ratings : 
        <h3>
          {averageMatchRating}
        </h3>
        </h2>
        </div>
      );
    };
    
    

export default Arbiter