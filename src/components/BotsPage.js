import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [myArmy, setMyArmy] = useState([]);

  // Calling useEffect
  // Passing in a callback function to run as sideEffect
  // The callback returns a fetch request
  useEffect(() => {
    fetch("https://njagi-g.github.io/Bot-Battlr-Deploy-/db.json")
      .then((res) => res.json())
      .then((data) => setBots(data.bots));
  }, []);

  // Handle Enlisting bot to myArmy only once
  function handleEnlist(bot) {
    if (myArmy.includes(bot)) return;
    setMyArmy((myArmy) => [...myArmy, bot]);
  }

  // Handle retiring bot from myArmy
  function handleRetire(bot) {
    setMyArmy((myArmy) =>
      myArmy.filter((selection) => selection.id !== bot.id)
    );
  }

  // Handle discharging bot from myArmy or from Bots Array(delete bot)
  function handleDelete(bot) {
    fetch(` https://njagi-g.github.io/Bot-Battlr-Deploy-/db.json/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setBots((bots) => bots.filter((selection) => selection.id !== bot.id));
      setMyArmy((myArmy) =>
        myArmy.filter((selection) => selection.id !== bot.id)
      );
    });
  }

  return (
    <div id="botArmy">
      <YourBotArmy
        botsArray={myArmy}
        handleClick={handleRetire}
        handleDelete={handleDelete}
      />
      <BotCollection
        botsArray={bots}
        handleClick={handleEnlist}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default BotsPage;
