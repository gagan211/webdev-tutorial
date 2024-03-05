import { useState } from "react";
import items from "./data";
import "./App.css";
import Menu from "./Menu";
import Categories from "./Categories";

function App() {
  const allcategoy = ["all", ...new Set(items.map((val) => val.category))];

  const filteritems = (category) => {
    if (category == "all") {
      return setmenuitems(items);
    }
    const newitems = items.filter((val) => val.category == category);
    setmenuitems(newitems);
  };

  const [menuitems, setmenuitems] = useState(items);
  const [categories, setcategories] = useState(allcategoy);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filteritems={filteritems} />
        <Menu items={menuitems} />
      </section>
    </main>
  );
}

export default App;
