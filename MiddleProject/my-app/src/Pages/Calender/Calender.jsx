import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calender.css";
import { useSelector } from "react-redux";
const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function Calender() {
  const date = useSelector((state) => state.input.cardObj);
  console.log(date);
  const newDate = date[date.length - 1].date.split("-");
  console.log(newDate);
  const year =newDate[0]
  let month = newDate[1]
  if (month < 10) {
    month=month%10
  }
  let day = newDate[2]
  if (day < 10) {
    day=day%10
  }

 

  // const [Event, setEvent] = useState({ title: "", start: "", end: "" });
  // const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([
    {
      title: "event",
      allDay: true,
      start: new Date(`${year} ${month} ${day}`),
      end: new Date(`${year} ${month} ${day}`),
    },
    {
      title: "Preparation day",
      allDay: true,
      start: new Date(`${year} ${month} ${day-1}`),
      end: new Date(`${year} ${month} ${day-1}`),
    },
    {
      title: "food tasting",
      allDay: true,
      start: new Date(`${year} ${month-1} ${day}`),
      end: new Date(`${year} ${month-1} ${day}`),
    },
    {
      title: "Field inspection",
      allDay: true,
      start: new Date(`${year} ${month} ${day-7}`),
      end: new Date(`${year} ${month} ${day-7}`),
    },
    {
      title: "Photo days",
      start: new Date(`${year} ${month} ${day-4}`),
      end: new Date(`${year} ${month} ${day-2}`),
    },
  ]);

  // function handleAddEvent() {
  //   setAllEvents([...allEvents, newEvent]);
  // }
  return (
    <div>
      {/* <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div> */}
<div className="calender">
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
      </div>
    </div>
  );
}
