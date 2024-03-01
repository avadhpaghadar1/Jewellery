import Card from "../Components/Card";
import "./Category.css";
import image1 from '../../Images/ring1.png';
import image2 from '../../Images/ring2.png';
import image3 from '../../Images/ring3.png';
import image4 from '../../Images/ring4.png';

const Rings = () => {
  const Rings=[
    {
      "id": 1,
      "name": "Ring-1",
      "image": image1,
      "carret": 18,
      "weight": "100gm",
      price:"$100"
    },
    {
      "id": 2,
      "name": "Ring-2",
      "image":image2,
      "carret": 20,
      "weight": "200gm",
      price:"$100"
    },
    {
      "id": 3,
      "name": "Ring-3",
      "image": image3,
      "carret": 22,
      "weight": "300gm",
      price:"$100"
    },
    {
      "id": 4,
      "name": "Ring-4",
      "image": image4,
      "carret": 22,
      "weight": "400gm",
      price:"$100"
    }
  ]
  
  return (
    <>
      <div className="components">
        {Rings.map((data) => (
          <Card
            id={data.id}
            name={data.name}
            carret={data.carret}
            weight={data.weight}
            image={data.image}
            price={data.price}
          >
          </Card>
        ))}
      </div>
    </>
  );
};
export default Rings;
