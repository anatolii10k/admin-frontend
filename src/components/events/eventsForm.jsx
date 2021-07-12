import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import queryString from "query-string";
import moment from "moment";
import { createEvent, getEvent } from "../../api/event";

export const EventsForm = (props) => {
  const [imgData, setImgData] = useState(null);
  const [image, setImage] = useState(null);
  const [textLabel, setTextLabel] = useState("save");
  const [buttonLabel, setButtonLabel] = useState("Save");
  const [eventsObject, setEventObject] = useState({
    id: "",
    title: "",
    description: "",
    eventLink: "",
    time: moment().format("YYYY-MM-DD"),
    image: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("eventLink", data.eventLink);
    formData.append("time", data.time);
    formData.append("image", eventsObject.image);
    formData.append("id", eventsObject.id);
    createEvent(formData)
      .then((res) => {
        window.openNotification("success", "Success!", "Event");
      })
      .catch((err) => {
        window.openNotification("error", "Error", "Event");
      });
  };

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

  const handleChange = (e) => {
    setEventObject({ ...eventsObject, ...{ [e.target.name]: e.target.value } });
  };
  useEffect(() => {
    const id = queryString.parse(props.history.location.search).id;
    if (id) {
      getEvent(id)
        .then((res) => {
          setEventObject(res[0]);
          setImgData(
            `${process.env.REACT_APP_PUBLIC_URL}/news/image?name=${res[0].image}`
          );
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
      <h4 className="headingForm">Event {textLabel}</h4>
      <div className="eventsForm">
        {console.log(eventsObject)}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="imageUpload">
            <label htmlFor="file-upload" className="custom-file-upload">
              <b>Upload Image</b>
            </label>
            <input
              {...register("image")}
              onChange={renderImageOnUI}
              id="file-upload"
              type="file"
            />
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
                value={eventsObject.title}
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
                value={eventsObject.description}
                className="form-control"
                placeholder="Description"
                name="description"
                onChange={handleChange}
              />
            </div>
            <div className="eachRow">
              <label>
                <b>Event Link</b>
              </label>
              <input
                {...register("eventLink")}
                value={eventsObject.eventLink}
                className="form-control"
                placeholder="Event link"
                name="eventLink"
                onChange={handleChange}
              />
            </div>
            <div className="eachRow">
              <label>
                <b>Event Link</b>
              </label>
              <input
                {...register("time")}
                value={eventsObject.time}
                className="form-control"
                type="date"
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
