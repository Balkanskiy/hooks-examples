import React from "react";

function Welcome() {
  return (
    <form>
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="Task" />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    </form>
  );
}

export default Welcome;
