import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import queryString from "query-string";
import moment from "moment";
import { createVideo, getVideo } from "../../api/video";

export const VideosForm = (props) => {
  const [textLabel, setTextLabel] = useState("save");
  const [buttonLabel, setButtonLabel] = useState("Save");
  const [videosObject, setVideoObject] = useState({
    id: "",
    title: "",
    description: "",
    videoLink: "",
    time: moment().format("YYYY-MM-DD"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("videoLink", data.videoLink);
    formData.append("time", data.time);
    formData.append("id", videosObject.id);
    createVideo(formData)
      .then((res) => {
        window.openNotification("success", "Success!", "Video");
      })
      .catch((err) => {
        window.openNotification("error", "Error", "Video");
      });
  };

  const handleChange = (e) => {
    setVideoObject({ ...videosObject, ...{ [e.target.name]: e.target.value } });
  };
  useEffect(() => {
    const id = queryString.parse(props.history.location.search).id;
    if (id) {
      getVideo(id)
        .then((res) => {
          setVideoObject(res[0]);
        })
        .catch((err) => {
          console.log(err);
        });
      setTextLabel("update");
      setButtonLabel("Update");
    }
  }, [props.history.location.search]);
  return (
    <div className="formContainer">
      <h4 className="headingForm">Video {textLabel}</h4>
      <div className="videosForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="videoDetailsForm">
            <div className="eachRow">
              <label>
                <b>Title</b>
              </label>
              <input
                {...register("title", { required: true })}
                value={videosObject.title}
                className="form-control"
                placeholder="Title"
                name="title"
                onChange={handleChange}
              />
              {errors.title && <p className="errorMsg">Title is required.</p>}
            </div>
            <div className="eachRow">
              <label>
                <b>Description</b>
              </label>
              <textarea
                {...register("description")}
                className="form-control"
                value={videosObject.description}
                placeholder="Description"
                name="description"
                onChange={handleChange}
              />
            </div>
            <div className="eachRow">
              <label>
                <b>YouTube Link</b>
              </label>
              <input
                {...register("videoLink")}
                value={videosObject.videoLink}
                className="form-control"
                placeholder="YouTube link"
                name="videoLink"
                onChange={handleChange}
              />
            </div>
            <div className="eachRow">
              <label>
                <b>Time</b>
              </label>
              <input
                {...register("time")}
                value={videosObject.time}
                type="date"
                className="form-control"
                name="time"
                onChange={handleChange}
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
