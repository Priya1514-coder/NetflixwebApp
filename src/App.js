import "./styles.css";
import Card from "./Components/Card";
import sdata from "./Components/sdata";

export default function App() {
  return (
    <div className="App">
      <h1> List Of top 5 Netflix series in 2020</h1>
      <Card
        pname={sdata[0].pname}
        imgsrc={sdata[0].imgsrc}
        title={sdata[0].title}
        link={sdata[0].link}
      />
      <Card
        pname={sdata[1].pname}
        imgsrc={sdata[1].imgsrc}
        title={sdata[1].title}
        link={sdata[1].link}
      />
      <Card
        pname={sdata[2].pname}
        imgsrc={sdata[2].imgsrc}
        title={sdata[2].title}
        link={sdata[2].link}
      />
      <Card
        pname={sdata[3].pname}
        imgsrc={sdata[3].imgsrc}
        title={sdata[3].title}
        link={sdata[3].link}
      />
    </div>
  );
}
