import React, {useState} from "react";
import AnalyticItem from "../Components/Analytics/AnalyticItem";
import QWAnalytics from "../Pages/QWAnalytics"
import "../style/analytics.css";




const Analytics = (props) => {
  const [isSingle, setIsSingle] = useState(false);

  return (
    <>
      

      {isSingle ? (
        <QWAnalytics />
      ) : (
        <>
          <div className="analysis">
            <h1 className="analtitle">Quiz Analysis</h1>
            <div className="analtable">
              <table className="table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Quiz Name</th>
                    <th>Created On</th>
                    <th>Impression</th>
                    <th> </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <AnalyticItem  setIsSingle={setIsSingle} />
                  <AnalyticItem  setIsSingle={setIsSingle} />
                  <AnalyticItem  setIsSingle={setIsSingle} />
                  
                </tbody>
              </table>
            </div>
            
          </div>
        </>
      )}
    </>
  );
};

export default Analytics;
