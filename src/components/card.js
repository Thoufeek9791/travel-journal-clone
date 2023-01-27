export default function Card(props) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-head">
          <img
            src={props.item.imageUrl}
            alt="somthing went wrong"
            className="cover-img"
          />
        </div>
        <div className="card-body">
          <div className="location">
            <span className="location-icon">
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <h4 className="location-detail">{props.item.location}</h4>
            <span className="google-maps">
              <a href={props.item.googleMapsUrl} className="location-link">
                View on Google Maps
              </a>
            </span>
          </div>
          <div className="location-name">
            <h1>{props.item.title}</h1>
          </div>
          <div className="card-info">
            <p className="date">{`${props.item.startDate}-${props.item.endDate}`}</p>
            <p className="details">
              {props.item.description}
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
