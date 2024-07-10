// import { useContext } from "react";
// // import SearchBar from "../../components/searchBar/SearchBar";
// import "./homePage.scss";
// import { AuthContext } from "../../context/AuthContext";
// import Card from "../../components/card/Card";

// function HomePage() {

//   const {currentUser} = useContext(AuthContext);




//   const cardData = [
//     {
//       id: 1,
//       title: "Hackathon A",
//       address: "Nashik",
//       price: 1000,
//     },
//     {
//       id: 2,
//       title: "Hackathon B",
//       address: "Mumbai",
//       price: 1500,
//     },
//   ];
//   return (
//     <div className="homePage">
//       <div className="textContainer">
//         <div className="wrapper">
//           <h1 >
//             Connect with like-minded people
//           </h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
//             explicabo suscipit cum eius, iure est nulla animi consequatur
//             facilis id pariatur fugit quos laudantium temporibus dolor ea
//             repellat provident impedit!
//           </p>
//           <div className="body">
//             <h1>Hackathons are here!!!</h1>

//             <div className="cardContainer">
//               {cardData.map((item) => (
//                 <Card
//                   key={item.id}
//                   item={item}
//                   className={"card"}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="imgContainer">
//         <img src="/hac.jpg" alt="" />
//         <div className="bgAnimation1" />
//         <div className="bgAnimation2" />
//       </div>

//     </div>
//   );
// }

// export default HomePage;


// HomePage.jsx



import  { useContext } from "react";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import Card from "../../components/card/Card.jsx";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  const cardData = [
    {
      id: 1,
      title: "Hackathon A",
      address: "Nashik",
      price: 1000,
    },
    {
      id: 2,
      title: "Hackathon B",
      address: "Mumbai",
      price: 1500,
    },
  ];

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1>Connect with like-minded people!!!</h1>
          <p>
            
Integrated Campus Connection aims to improve student experience, foster community engagement, and enhance academic success by creating a seamless platform for communication, collaboration, and resource sharing within the campus community.
          </p>
          <div className="body">
            <h1>Hackathons are here!!!</h1>
            <div className="cardContainer">
              {cardData.map((item) => (
                <Card key={item.id} item={item} className={"card"} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/hac.jpg" alt="" />
        <div className="bgAnimation1" />
        <div className="bgAnimation2" />
      </div>
    </div>
  );
}

export default HomePage;




