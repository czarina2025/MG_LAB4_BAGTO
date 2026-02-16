import React from 'react';
import StudentList from './StudentList';

type EventProps = {
  eventName: string;
  venue: string;
  date: string;
  organizer: string;
  capacity: number;
  registeredStudents: string[];
};

const EventCard: React.FC<EventProps> = ({
  eventName,
  venue,
  date,
  organizer,
  capacity,
  registeredStudents,
}) => {
  return (
    <article>
      <h3>{eventName}</h3>
      <p><strong>Venue:</strong> {venue}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Organizer:</strong> {organizer}</p>
      <p><strong>Capacity:</strong> {capacity}</p>
      <p><strong>Registered Students ({registeredStudents.length}):</strong></p>
      <StudentList students={registeredStudents} />
    </article>
  );
};

export default EventCard;
