import './App.css';
import EventCard from './components/EventCard';

function App() {
  const events = [
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
  ]

  return (
    <>
      <header>
        <h1>University Event Registration Dashboard</h1>
      </header>
      <main>
        <section>
          <h2>Event List</h2>
          {events.map((event, index) => (
            <EventCard
              key={index} 
              eventName={event.eventName}
              venue={event.venue}
              date={event.date}
              organizer={event.organizer}
              capacity={event.capacity}
              registeredStudents={event.registeredStudents}
            />
          ))}
        </section>
        <section>
          <h2>Registered Students</h2>
          <p>Total registered students across all events: {events.reduce((total, event) => total + event.registeredStudents.length, 0)}</p>
        </section>
      </main>
    </>
  );
}

export default App;
