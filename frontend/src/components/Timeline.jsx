// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "../Api";
import { toast } from "react-hot-toast"; 
import "./Timeline.css";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/timeline")
      .then((response) => {
        setTimeline(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the timeline!", error);
      });
  }, [timeline]);

  const handleAddEvent = () => {
    if (title && description && date) {
      axios
        .post("http://localhost:5000/api/timeline", {
          title,
          description,
          date,
        })
        .then((response) => {
          setTimeline([...timeline, response.data]);
          setTitle("");
          setDescription("");
          setDate("");
          toast.success("Event added successfully!"); 
        })
        .catch((error) => {
          console.error("There was an error adding the event!", error);
          toast.error("Error adding event!"); 
        });
    }
  };

  const handleEditEvent = (id) => {
    const event = timeline.find((item) => item._id === id);
    setTitle(event.title);
    setDescription(event.description);
    setDate(event.date);
    setEditing(true);
    setCurrentId(id);
  };

  const handleUpdateEvent = () => {
    if (title && description && date) {
      axios
        .put(`http://localhost:5000/api/timeline/${currentId}`, {
          title,
          description,
          date,
        })
        .then((response) => {
          setTimeline(
            timeline.map((item) =>
              item._id === currentId ? response.data : item
            )
          );
          setTitle("");
          setDescription("");
          setDate("");
          setEditing(false);
          toast.success("Event updated successfully!"); // Success message
        })
        .catch((error) => {
          console.error("There was an error updating the event!", error);
          toast.error("Error updating event!"); 
        });
    }
  };

  const handleDeleteEvent = (id) => {
    axios
      .delete(`http://localhost:5000/api/timeline/${id}`)
      .then(() => {
        setTimeline(timeline.filter((item) => item._id !== id));
        toast.success("Event deleted successfully!"); 
      })
      .catch((error) => {
        console.error("There was an error deleting the event!", error);
        toast.error("Error deleting event!"); 
      });
  };

  return (
    <div className="timeline-container">
      <h2>Timeline (Our Memories) </h2>

      <div className="timeline-events">
        {timeline.map((event) => (
          <div key={event._id} className="timeline-event">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <small className="date">
              {new Date(event.date).toLocaleDateString()}
            </small>
            <button onClick={() => handleEditEvent(event._id)}>Edit</button>
            <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="timeline-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {editing ? (
          <button onClick={handleUpdateEvent}>Update Event</button>
        ) : (
          <button onClick={handleAddEvent}>Add Event</button>
        )}
      </div>
    </div>
  );
};

export default Timeline;
