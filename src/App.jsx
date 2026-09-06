import { useState, useEffect } from "react";
import { mockTickets } from "./mockTickets";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("http://192.168.128.103:3001/api/tickets")
      .then(res => res.json())
      .then(setTickets);
  }, []);

  const [filter, setFilter] = useState("all");

  function handleCreate(subject) {
    fetch("http://192.168.128.103:3001/api/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ customer_id: 5, subject }),
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to create ticket");
        return res.json();
      })
      .then(newTicket => setTickets([...tickets, newTicket]))
      .catch(err => console.error(err));
  }

  function handleClose(id) {
    fetch(`http://192.168.128.103:3001/api/tickets/${id}/close`, {
      method: "PATCH",
    })
      .then(res => res.json())
      .then(updatedTicket => {
        setTickets(
          tickets.map(t => (t.id === id ? updatedTicket : t))
        );
      });
  }

  const filteredTickets =
    filter === "all" ? tickets : tickets.filter(t => t.status === filter);

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 16 }}>
      <h1>Ticket Tracker</h1>

      <NewTicketForm onCreate={handleCreate} />

      <div style={{ margin: "16px 0" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("open")}>Open</button>
        <button onClick={() => setFilter("closed")}>Closed</button>
      </div>

      <TicketList tickets={filteredTickets} onClose={handleClose} />
    </div>
  );
}

export default App;
