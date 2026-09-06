import TicketCard from "./TicketCard";

function TicketList({ tickets, onClose }) {
  if (tickets.length === 0) {
    return <p>No tickets found.</p>;
  }

  return (
    <div>
      {tickets.map(ticket => (
        <TicketCard key={ticket.id} ticket={ticket} onClose={onClose} />
      ))}
    </div>
  );
}

export default TicketList;
