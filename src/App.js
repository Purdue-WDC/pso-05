import "./App.css";
import Title from "./components/Title";
import Song from "./components/Song";

const songList = [
  {
    name: "bad guy",
    year: 2019,
    fname: "Billie",
    lname: "Eilish",
    albumArt:
      "https://images-na.ssl-images-amazon.com/images/I/71SHkMeVdhL._SX466_.jpg",
  },
  {
    name: "Run",
    year: 2020,
    fname: "Joji",
    lname: "",
    albumArt:
      "https://cdna.artstation.com/p/assets/images/images/032/616/692/large/roland-c.jpg?1606955631",
  },
  {
    name: "WAP (feat. Megan Thee Stallion)",
    year: 2020,
    fname: "Cardi",
    lname: "B",
    albumArt:
      "https://media.allure.com/photos/5f297bc78c0221d12c7c6878/1:1/w_1109,h_1109,c_limit/wap%20megan%20thee%20stallion%20cardi%20b.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <Title />
      {songList.map((song) => (
        <Song
          name={song.name}
          year={song.year}
          fname={song.fname}
          lname={song.lname}
          albumArt={song.albumArt}
        />
      ))}
    </div>
  );
}

export default App;
