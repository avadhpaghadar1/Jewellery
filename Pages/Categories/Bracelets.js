import Card from "../Components/Card";
import "./Category.css";
import image1 from "../../Images/bracelet1.png";
const Bracelets = () => {
  const Bracelets = [
    {
      id: 1,
      name: "Bracelets-1",
      image: image1,  
      carret: 18,
      weight: "300gm",
      price:"$100"
    }
  ];
  return (
    <>
      <div className="components">
        {Bracelets.map((data) => (
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
export default Bracelets;
