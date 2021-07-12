import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import { getNews, deleteNews } from "../../api/news";
import "./news.scss";

export const News = () => {
  const history = useHistory();
  const [newsList, setNewsList] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getNews("all")
      .then((res) => {
        setNewsList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  const gotoEditNews = (row) => {
    history.push({
      pathname: "/newsForm",
      search: `?id=${row.id}`,
      state: { newsDetail: row },
    });
  };

  const deleteNewsData = (row) => {
    deleteNews(row.id)
      .then((res) => {
        window.openNotification("success", "Success!", "News");
        setReload(!reload);
      })
      .catch((err) => {
        window.openNotification("error", "Error", "News");
      });
  };
  const columns = [
    {
      name: "Id",
      selector: "id",
      sortable: true,
      width: "8%",
    },
    {
      name: "Image",
      selector: "image",
      cell: (row) => (
        <div className="imageContainer">
          <img
            src={`${process.env.REACT_APP_PUBLIC_URL}/news/image?name=${row.image}`}
            alt="new_img"
            width="50"
            height="50"
          />
        </div>
      ),
      width: "12%",
    },
    {
      name: "Title",
      selector: "title",
      sortable: true,
      width: "10%",
    },
    {
      name: "Description",
      selector: "description",
      cell: (row) => <div className="descriptionClass">{row.description}</div>,
      width: "38%",
    },
    {
      name: "Article Link",
      selector: "artLink",
      width: "20%",
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="actionButtons" data-tag="allowRowEvents">
          <button className="editButton" onClick={() => gotoEditNews(row)}>
            Edit
          </button>
          <button
            className="deleteButton"
            onClick={() => {
              deleteNewsData(row);
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

  const gotoCreateNews = () => {
    history.push("/newsForm");
  };
  return (
    <div className="news">
      <button className="createButton" onClick={gotoCreateNews}>
        Create
      </button>
      <DataTable
        title="News List"
        columns={columns}
        data={newsList}
        defaultSortFieldId={1}
        pagination
        striped
        highlightOnHover
        responsive
      />
    </div>
  );
};
