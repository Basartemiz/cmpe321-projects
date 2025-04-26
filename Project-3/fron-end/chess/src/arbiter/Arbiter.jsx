
import RateMatch from "./RateMatch";

export const Arbiter =()=>{

    const data = [
        {
          match_id: "match1",
          date: "2025-05-01",
          time_slot: "10:00 - 11:30",
          hall_id: "id1",
          table_id: "table1",
          team1_id: "Team A",
          team2_id: "Team B",
          arbiter_username: "arbiter_john",
          ratings: 4.5,
        },
        {
          match_id: "match2",
          date: "2025-05-01",
          time_slot: "12:00 - 13:30",
          hall_id: "id2",
          table_id: "table2",
          team1_id: "Team C",
          team2_id: "Team D",
          arbiter_username: "arbiter_emily",
          ratings: 4.8,
        },
        {
          match_id: "match3",
          date: "2025-05-02",
          time_slot: "14:00 - 15:30",
          hall_id: "id1",
          table_id: "table3",
          team1_id: "Team E",
          team2_id: "Team F",
          arbiter_username: "arbiter_mike",
          ratings: 4.2,
        },
        {
          match_id: "match4",
          date: "2025-05-02",
          time_slot: "16:00 - 17:30",
          hall_id: "id2",
          table_id: "table4",
          team1_id: "Team G",
          team2_id: "Team H",
          arbiter_username: "arbiter_sarah",
          ratings: 4.9,
        },
      ];

    
      const halls = data.map((props) => (
        <li key={props.match_id} className="list-unstyled">
          <RateMatch {...props} />
        </li>
      ));
    
      return (
        <div className="position-relative min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
          <ul className="d-flex flex-wrap justify-content-center p-0 m-0">
            {halls}
          </ul>
    
        </div>
      );
    };
    
    

export default Arbiter