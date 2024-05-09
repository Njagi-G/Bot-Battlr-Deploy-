import React from "react";

function BotCard({ bot, handleClick, handleDelete }) {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        // Clicking on bot invokes handleEnlist to enlist/retire bot to/from myArmy
        onClick={() => console.log(handleClick(bot))}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}

            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                // Clicking the button invokes handleDelete to delete/discharge bot from bots array
                onClick={() => {
                  console.log(handleDelete(bot));
                }}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
