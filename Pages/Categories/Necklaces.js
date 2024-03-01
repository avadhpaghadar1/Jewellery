import Card from "../Components/Card";
import "./Category.css";
import image1 from "../../Images/necklace1.png";
import image2 from "../../Images/necklace2.png";
import image3 from "../../Images/necklace3.png";
const Necklaces = () => {
  const necklaces = [
    {
      id: 1,
      name: "Necklace-1",
      image: image1,
      carret: 18,
      weight: "300gm",
      price:"100"
    },
    {
      id: 2,
      name: "Necklace-1",
      image: image2,
      carret: 20,
      weight: "450gm",
      price:"$100"
    },
    {
      id: 3,
      name: "Necklace-1",
      image: image3,
      carret: 22,
      weight: "600gm",
      price:"$100"
    },
  ];
  return (
    <>
      <div className="components">
        {necklaces.map((data) => (
          <Card
            id={data.id}
            name={data.name}
            carret={data.carret}
            weight={data.weight}
            image={data.image}
            price={data.price}
          >
            {" "}
          </Card>
        ))}
      </div>
    </>
  );
};
export default Necklaces;
