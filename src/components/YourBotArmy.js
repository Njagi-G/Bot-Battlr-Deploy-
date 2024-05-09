import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botsArray, handleClick, handleDelete }) {
  return (
    <div className="ui segment inverted olive bot-army" id="armys">
      <div className="ui five column grid">
        {/* Display bots enlisted by user in child div below*/}
        <div className="row bot-army-row">
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
    </div>
  );
}

export default YourBotArmy;
