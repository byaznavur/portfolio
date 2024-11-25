import "./card.scss";
import { FaCheck } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const Card = ({ name, isLearn, icon }) => {
  return (
    <div className="card">
      <h3>
        <span>{icon}</span>
        {name}
      </h3>
      {!isLearn ? (
        <p>
          <IoMdTime />
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
