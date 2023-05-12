import { Link } from "react-router-dom";
import { replaceSpaceWithHyphen } from "../../../utils/format";

const EstateCard = ({property}) => {
    return (
        <div className="inner-box h-100">
        <div className="image-box">
          <figure className>
            <Link
              to={`/estate/${replaceSpaceWithHyphen(property?.name)}`}
            >
              <div style={{height: 300}}>
              <img src={property?.photo} alt="" style={{maxHeight: "100%", width: "100%"}}/>
              </div>
            </Link>
          </figure>
        </div>
        <div className="lower-content h-100">
          <h4>
            <Link to={`/estate/${replaceSpaceWithHyphen(property?.name)}`}>{property?.name} - <small style={{color:"#ed6c11"}}>{property?.propertyCategory}</small></Link>
          </h4>
          <p>{property?.caption}</p>
          <div className="btn-box">
            <Link
              to={`/estate/${replaceSpaceWithHyphen(property?.name)}`}
              className="read-more"
            >
              View Now
            </Link>
          </div>
        </div>
      </div>
    );
};

export default EstateCard;