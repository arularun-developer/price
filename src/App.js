import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;

let data = [
  {
    id: "1",
    product: "Pen",
    amount: "₹10",
    url:"https://media.istockphoto.com/id/1059543698/photo/pen.jpg?s=612x612&w=0&k=20&c=xydmq5zg2BIGZGcjJfWF6uo-yeJ4mkdRNr4aA4zJ740="
  },
  {
    id: "2",
    product: "Pencil",
    amount: "₹5",
	url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pencils_hb.jpg/220px-Pencils_hb.jpg"
  },
  {
    id: "3",
    product: "Eraser",
    amount: "₹6",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyIWkA098yOBA1uloYF0DtNK8TSpWmodT-EyKmaWIc29SKHsMsK4IAdUtyTtdAaDWS2g&usqp=CAU",
  },
  {
    id: "4",
    product: "Sharpener",
    amount: "₹10",
    url: "https://helloaugust.in/wp-content/uploads/2020/04/sharpner.jpg",
  },
  {
    id: "5",
    product: "Scale",
    amount: "₹25",
    url: "https://static.vecteezy.com/system/resources/previews/005/587/258/original/cute-wooden-or-plastic-ruler-measure-instrument-kawaii-isolated-on-white-background-yellow-school-measuring-ruler-in-centimeters-scale-flat-illustration-free-vector.jpg",
  },
  {
	id:"6",
	product: "Brain Activity Book for Kids",
	amount: "₹86",
	url:"https://image.made-in-china.com/2f0j00WZNVFufsEzpo/School-Stationery-Student-exercise-Book-Note-Book-Quality-Paper-No-Smearing-Paper.webp"
  },
  {
	id:"6",
	product: "Color Pencil",
	amount: "₹100",
	url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZVlpaXkBsizdDvfk7WEZFDtFDt0SoUZo-Q&usqp=CAU"
  },
];

function Card() {
  let [count, setCount] = useState(0);

  const handleAdd = (product, amount) => {
    setCount(count + 1);
    var tempProduct = product;
    var tempAmount = amount;
    console.log(tempProduct, tempAmount);
    document.getElementById(tempProduct).disabled = true;
    document.getElementById(tempAmount).disabled = false;
  };
  const handleRemove = (product, amount) => {
    if (document.getElementById(product).disabled === true) {
      setCount(count - 1);
      var tempProduct = product;
      var tempAmount = amount;
      console.log(tempProduct, tempAmount);
      document.getElementById(tempProduct).disabled = false;
      document.getElementById(tempAmount).disabled = true;
    }
  };
  return (
    <div className="container">
      <h1 className="title"> Welcome To Zen Class Store</h1>
      <h2 className="count"><i class="fas fa-shipping-fast"></i> Your Order Count {count} </h2>

      <div className="item">
        {data.map((each, idx) => (
          <div className="Card" key={idx}>
            <img src={each.url} alt={each.product} />
            <div className="name size">{each.product}</div>
            <div className="amount size">{each.amount}</div>
			<br></br>
            <button
              id={each.product}
              className="btn size add"
              onClick={() => handleAdd(each.product, each.amount)}
            >
              Add 
            </button> 
			
            <button
              id={each.amount}
              className="btn size"
              onClick={() => handleRemove(each.product, each.amount)}
            >
              Remove 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}