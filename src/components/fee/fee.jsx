import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { API_URL } from "../../config";
import { Link } from "react-router-dom";
import Toggle from 'react-toggle'
import { toast } from "react-toastify";
import "react-toggle/style.css" 

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" className="trash">
    <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
  </svg>
)
function Fee() {
  const [cheeseIsReady, setCheesIsReady] = useState(false)

  const handleCheeseChange=()=>{
      setCheesIsReady(!cheeseIsReady);
  }
  return (
    <main className="main">
      <div className="container">
        <div className="pledge-list">
          <div className="form-submit">
            <div className="btn-submit">Wallet Connect</div>
          </div>
          <div className="toggle-container">
           <Toggle
                id='cheese-status'
                defaultChecked={cheeseIsReady}
                onChange={handleCheeseChange} />
              <label htmlFor='cheese-status' className="fee-title">Staking Fee OFF/ON</label>
          </div>
        
        </div>
      </div>
    </main>
  );
}
export default Fee;