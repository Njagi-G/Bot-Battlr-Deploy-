import React from "react";
import BotCard from "./BotCard";

function BotCollection({ botsArray, handleClick, handleDelete }) {
  return (
    <div className="ui four column grid" id="bot">
      {/* Display entire bots array fetched from localhost(refer to BotsPage)in child div below*/}
      <div className="row">
        {botsArray.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
