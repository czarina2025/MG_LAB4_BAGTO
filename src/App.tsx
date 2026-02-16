import { useState, type Key } from 'react';
import './App.css';
import './EventCard.tsx' ;'./components/EventCard';

function App() {
  const[events] = useState ([
    {
      eventName: "Volleyball",
      venue: "University Gym",
      date: "Feb 1, 2026",
      organizer: "School of Information Technology",
      capacity: 60,
      registeredStudents: ['Juan Dela Cruz', 'John Batumbakal', 'Jomar Smith']
    },
    {
      eventName: "Basketball",
      venue: "University Gym",
      date: "Feb 2, 2026",
      organizer: "School of Engineering and Architecture",
      capacity: 65,
      registeredStudents: ['Maria Sales', 'Martha Juanita', 'Marissa Dela Rosa']
    },
    {
      eventName: "Football",
      venue: "Melvin Jones",
      date: "Feb 3, 2026",
      organizer: "School of Natural Sciences",
      capacity: 70,
      registeredStudents: ['Elsa Cruz', 'Anna Joseph', 'Olaf Snow']
    },
  ])
  return (
    <>
      <header>
        <h1>University Event Registration Dashboard</h1>
      </header>
      <main>
        <section className = "event-list-section">
          <h1>Events List</h1>
          <div className = "event-card-container">
            {events.map((event: any, index: Key | null | undefined) => (
              <li key={index}>{event}</li>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
