import Card from "../Components/Card";
import "./Category.css";
import image1 from "../../Images/bangle1.png";
import image2 from "../../Images/bangle2.png";
const Bangles = () => {
  const Bangles = [
    {
      id: 1,
      name: "Bangles-1",
      image: image1,
      carret: 18,
      weight: "300gm",
      price:"$100"
    },
    {
      id: 1,
      name: "Bangles-1",
      image: image2,
      carret: 20,
      weight: "450gm",
      price:"$100"
    }
  ];
  return (
    <>
      <div className="components">
        {Bangles.map((data,index) => (
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
export default Bangles;
