import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import queryString from "query-string";
import { createNews, getNews } from "../../api/news";

export const NewsForm = (props) => {
  const [imgData, setImgData] = useState(null);
  const [textLabel, setTextLabel] = useState("save");
  const [buttonLabel, setButtonLabel] = useState("Save");
  const [image, setImage] = useState(null);
  const [newsObject, setNewObject] = useState({
    id: "",
    title: "",
    description: "",
    artLink: "",
  });
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const fromData = new FormData();
    fromData.append("file", image);
    fromData.append("id", newsObject.id);
    fromData.append("image", newsObject.image);
    fromData.append("title", data.title);
    fromData.append("description", data.description);
    fromData.append("artLink", data.artLink);
    createNews(fromData, data)
      .then((res) => {
        window.openNotification("success", "Success!", "News");
      })
      .catch((err) => {
        window.openNotification("error", "Error", "News");
      });
  };
  useEffect(() => {
    const id = queryString.parse(props.history.location.search).id;
    if (id)
      getNews(id)
        .then((res) => {
          setNewObject(res[0]);
          setImgData(
            `${process.env.REACT_APP_PUBLIC_URL}/news/image?name=${res[0].image}`
          );
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  const renderImageOnUI = (e) => {
    setImage(e.target.files[0]);
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div className="formContainer">
      <h4 className="headingForm">News {textLabel}</h4>
      <div className="newsForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="imageUpload">
            <label htmlFor="file-upload" className="custom-file-upload">
              <b>Upload Image</b>
            </label>
            <input
              {...register("file")}
              onChange={renderImageOnUI}
              id="file-upload"
              type="file"
            />
            {/* <input type="file"/> */}
            <img
              className="uploadedImage"
              width="200"
              height="200"
              src={imgData}
              alt=""
            />
          </div>
          <div className="detailsForm">
            <div className="eachRow">
              <label>
                <b>Title</b>
              </label>
              <input
                {...register("title", { required: true })}
                defaultValue={newsObject.title}
                className="form-control"
                placeholder="Title"
              />
              {errors.title && <p className="errorMsg">Title is required.</p>}
            </div>
            <div className="eachRow">
              <label>
                <b>Description</b>
              </label>
              <textarea
                {...register("description")}
                defaultValue={newsObject.description}
                className="form-control"
                placeholder="Description"
              />
            </div>
            <div className="eachRow">
              <label>
                <b>Atricle Link</b>
              </label>
              <input
                {...register("artLink")}
                defaultValue={newsObject.artLink}
                className="form-control"
                placeholder="Article link"
              />
            </div>
            <button type="submit" className="submitButton">
              {buttonLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
