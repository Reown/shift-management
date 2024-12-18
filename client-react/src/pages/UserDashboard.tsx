import { useEffect, useState } from "react";
import { getSchedule } from "../services/Schedule";
import BidForm from "../components/specialised/BidForm";

const UserDashboard = () => {
  const [schedule, setSchedule] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const callGetSchedule = async () => {
    const res = await getSchedule();
    if (res) {
      setSchedule(res);
      setLoading(false);
    }
  };

  useEffect(() => {
    callGetSchedule();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>UserDashboard</p>
      <div className="card displayblock mx-auto">
        <div className="card-body">
          <h3 className="card-title">Upcoming Schedule</h3>
          <hr />
          {schedule.map((item: any, index: number) => (
            <div key={index} className="json-item">
              <h5>Date: {item.date}</h5>
              <p>
                Shifts:{" "}
                {item.shift.map((shift: any, idx: number) => (
                  <span key={idx}>
                    {shift}
                    {idx < item.shift.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="card formblock mx-auto">
        <div className="card-body">
          <h3 className="card-title">Bid Form</h3>
          <hr />
          <BidForm></BidForm>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

//see all shifts
//bid shift
