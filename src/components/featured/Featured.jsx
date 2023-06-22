import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title"> Average Growth In Registrations:</h1>
        {/* <MoreVertIcon fontSize="small" /> */}
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={10} text={"10%"} strokeWidth={5} />
        </div>
        <p className="title">Total no. of registrations (as of 2022):</p>
        <p className="amount">61</p>
        <p className="desc">
         All the statistics have been calculated with respect to the given sample dataset.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">1</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">5</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Year</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">49</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
