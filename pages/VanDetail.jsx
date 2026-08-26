import { Link, useParams } from "react-router-dom";

const vans = [
  {
    id: "1",
    name: "Modest Explorer",
    price: 60,
    image: "/assets/images/vans/chevrolet-camper.jpg",
    description: "Simple and comfortable for your next adventure."
  },
  {
    id: "2",
    name: "Beach Bum",
    price: 80,
    image: "/assets/images/vans/beach-bum.jpg",
    description: "Perfect for relaxing trips along the coast."
  },
  {
    id: "3",
    name: "Reliable Red",
    price: 70,
    image: "/assets/images/vans/reliable-red.jpg",
    description: "A dependable van for longer road trips."
  }
];

export default function VanDetail() {
  const { id } = useParams();

  const van = vans.find(van => van.id === id);

  if (!van) {
    return (
      <main className="van-detail">
        <h1>Van Not Found</h1>
        <Link to="/vans">Back to Vans</Link>
      </main>
    );
  }

  return (
    <main className="van-detail">
      <Link to="/vans" className="back-link">
        ← Back to Vans
      </Link>

      <img
        src={van.image}
        alt={van.name}
        className="van-detail-image"
      />

      <h1>{van.name}</h1>

      <p className="van-detail-price">
        ${van.price}/day
      </p>

      <p>{van.description}</p>

      <button type="button" className="rent-button">
        Rent This Van
      </button>
    </main>
  );
}
