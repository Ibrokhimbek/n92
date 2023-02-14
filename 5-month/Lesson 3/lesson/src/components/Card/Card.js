import './Card.scss'

function Card({ avatar, firstname, surname, email }) {
  // const { firstname, surname, email } = props;

  return (
    <div className="card">
      <img src={avatar} alt="" />
      <div>
        <h3>{firstname} {surname}</h3>
        <h4>{email}</h4>
      </div>
    </div>
  );
}

export default Card;
