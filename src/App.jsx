import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Google from "./components/Google";
import Signout from "./components/Signout";
import { data } from "./firebase/firebase_config";
import { collection, getDocs, addDoc ,deleteDoc,doc} from "firebase/firestore";

function App() {
  const [per, setper] = useState([]);
  //
  const [name, setname] = useState("");
  const [adge, setadge] = useState(0);
  const [work, setwork] = useState(false);

  const col = collection(data, "movea");
  const [trf, setref] = useState("");
  useEffect(() => {
    const wridData = async () => {
      try {
        const dataDoc = await getDocs(col);
        const fileterData = dataDoc.docs.map((e) => ({
          ...e.data(),
          id: e.id,
        }));
        setper(fileterData);
      } catch (error) {
        console.log(error);
      }
    };

    wridData();
  }, [trf]);
  const click = async () => {
    try {
      await addDoc(col, {
        name: name,
        adeg: adge,
        work: work,
      }
      );setref("1")
    } catch (err) {
      console.log(err);
    }
  };

  const Delet_ = async (id) => {
    const movesd = doc(data,"movea" , id)
      await deleteDoc(movesd)
      setref("2"+id)
  }
  return (
    <>
      <input type="text" onChange={(e) => setname(e.target.value)} />
      <input type="number" onChange={(e) => setadge(Number(e.target.value))} />
      <label htmlFor=""> work</label>
      <input
        type="checkbox"
        checked={work}
        onChange={(e) => setwork(e.target.checked)}
      />
      <button onClick={click}>subit</button>

      <div className="fc">
        <Auth />
        <br />
        <Google />
        <br />
        <Signout />
        {per.map((e) => {
          return (
            <div key={e.id}>
              <p style={{ color: e.work ? "green" : "red" }}>{e.name}</p>
              <p>{e.adeg}</p>
              <button onClick={()=> Delet_(e.id)}>Delet</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
