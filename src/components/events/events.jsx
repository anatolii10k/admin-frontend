import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./events.scss";
import EventsData from "./eventsData";
import { useHistory } from "react-router-dom";
import { getEvent, deleteEvent } from "../../api/event";

export const Events = () => {
  const history = useHistory();
  const [eventList, setEventList] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getEvent("all")
      .then((res) => {
        console.log(res);
        setEventList(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [reload]);

  const gotoEditEvents = (row) => {
    history.push({
      pathname: "/eventsForm",
      search: `?id=${row.id}`,
      state: { eventDetail: row },
    });
  };
  const deleteEventData = (row) => {
    deleteEvent(row.id)
      .then((res) => {
        window.openNotification("success", "Success!", "Event");
        setReload(!reload);
      })
      .catch((err) => {
        window.openNotification("error", "Error", "Event");
      });
  };
  const gotoCreateEvents = () => {
    history.push("/eventsForm");
  };

  const columns = [
    {
      name: "Id",
      selector: "id",
      sortable: true,
      width: "10%",
    },
    {
      name: "Image",
      cell: (row) => (
        <img
          src={`${process.env.REACT_APP_PUBLIC_URL}/news/image?name=${row.image}`}
          alt="event"
          width="50"
          height="50"
        />
      ),
    },
    {
      name: "Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Event Link",
      selector: "eventLink",
    },
    {
      name: "Time",
      selector: "time",
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="actionButtons" data-tag="allowRowEvents">
          <button className="editButton" onClick={() => gotoEditEvents(row)}>
            Edit
          </button>
          <button
            className="deleteButton"
            onClick={() => {
              deleteEventData(row);
            }}
          >
            Delete
          </button>
        </div>
      ),
      button: true,
      width: "12%",
    },
  ];

  return (
    <div className="events">
      <button className="createButton" onClick={gotoCreateEvents}>
        Create
      </button>
      <DataTable
        title="Events List"
        columns={columns}
        data={eventList}
        defaultSortFieldId={1}
        pagination
        striped
        highlightOnHover
        responsive
      />
    </div>
  );
};
