import { Link } from "react-router-dom";

const vans = [
  {
    id: 1,
    name: "Modest Explorer",
    price: 60,
    image: "/vans/chevrolet-camper.jpg",
    description: "Simple and comfortable for your next adventure."
  },
  {
    id: 2,
    name: "Beach Bum",
    price: 80,
    image: "/vans/beach-bum.jpg",
    description: "Perfect for relaxing trips along the coast."
  },
  {
    id: 3,
    name: "Reliable Red",
    price: 70,
    image: "/vans/reliable-red.jpg",
    description: "A dependable van for longer road trips."
  }
];

export default function Vans() {
  return (
    <main className="vans-page">
      <h1>Our Vans</h1>

      <p className="vans-intro">
        Choose the perfect van for your next adventure.
      </p>

      <div className="van-list">
        {vans.map(van => (
          <article className="van-card" key={van.id}>
            <img
              src={van.image}
              alt={van.name}
              className="van-image"
            />

            <div className="van-card-content">
              <h2>{van.name}</h2>

              <p>{van.description}</p>

              <p className="van-price">
                ${van.price}/day
              </p>

              <Link
  to={`/vans/${van.id}`}
  className="view-details-button"
>
  View Details
</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
