import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { API_URL } from "../../config";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15" className="trash">
    <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
  </svg>
)
function Lists() {
  const [lists, setLists] = useState([])

  const deletePledge = (id) => {
    Axios.get(`${API_URL}/delete/${id}`).then((res) => {
      console.log(res)
      if (res.status === 200) {
        toast.success('Successfully deleted.')
        setLists(lists.filter(x=>x.id!==id))
      }
    })
  }

  useEffect(() => {
    Axios.get(`${API_URL}`).then(res => {
      console.log("responsive....",res)
      if (res.status === 200) {
        setLists(res.data)
      }
    })
  }, [])
  return (
    <main className="main">
      <div className="container">
        <div className="pledge-list">
          <div className="form-submit">
            <Link to="/" className="btn-submit">Back</Link>
          </div>
          <div className="lists">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Social Site</th>
                  <th>Email</th>
                  <th>Amount</th>
                  <th>Comments</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {lists.length>0? lists.map((list, index) => (
                  <tr key={'list-'+index}>
                    <td>{index+1}</td>
                    <td>{list.social}</td>
                    <td>{list.email}</td>
                    <td>{list.amount}</td>
                    <td>{list.comments}</td>
                    <td>
                      <span onClick={() => { deletePledge(list.id) }}>
                        <TrashIcon />
                      </span>
                    </td>
                  </tr>
                )) : (
                    <tr>
                      <td colSpan="6" className="no-data">There is no available data.</td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Lists;