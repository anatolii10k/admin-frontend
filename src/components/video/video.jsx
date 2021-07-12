import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./video.scss";
import { useHistory } from "react-router-dom";
import { getVideo, deleteEvent } from "../../api/video";

export const Videos = () => {
  const [videoList, setVideoList] = useState([]);
  const [reload, setReload] = useState(false);
  const history = useHistory();

  useEffect(() => {
    getVideo("all")
      .then((res) => {
        setVideoList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  const gotoEditVideos = (row) => {
    history.push({
      pathname: "/videosForm",
      search: `?id=${row.id}`,
      state: { videosDetail: row },
    });
  };

  const gotoCreateVideos = () => {
    history.push("/videosForm");
  };

  const deleteVideoData = (row) => {
    deleteEvent(row.id)
      .then((res) => {
        window.openNotification("success", "Success!", "Video");
        setReload(!reload);
      })
      .catch((err) => {
        window.openNotification("error", "Error", "Video");
      });
  };
  const columns = [
    {
      name: "Id",
      selector: "id",
      sortable: true,
      width: "8%",
    },
    // {
    //     name: "Image",
    //     cell:(row) => <img src={process.env.PUBLIC_URL +row.image} alt="No Image" width="50" height="50"/>,
    //     width: "12%"
    // },
    {
      name: "Title",
      selector: "title",
      sortable: true,
      width: "12%",
    },
    {
      name: "Video Link",
      selector: "videoLink",
      width: "30%",
    },
    {
      name: "Time",
      selector: "time",
      width: "20%",
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="actionButtons" data-tag="allowRowEvents">
          <button className="editButton" onClick={() => gotoEditVideos(row)}>
            Edit
          </button>
          <button className="deleteButton" onClick={() => deleteVideoData(row)}>
            Delete
          </button>
        </div>
      ),
      button: true,
      width: "12%",
    },
  ];

  return (
    <div className="videos">
      <button className="createButton" onClick={gotoCreateVideos}>
        Create
      </button>
      <DataTable
        title="Videos List"
        columns={columns}
        data={videoList}
        defaultSortFieldId={1}
        pagination
        striped
        highlightOnHover
        responsive
      />
    </div>
  );
};
