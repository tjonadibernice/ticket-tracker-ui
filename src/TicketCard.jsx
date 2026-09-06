function TicketCard({ ticket, onClose }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 8, marginBottom: 8 }}>
      <strong>{ticket.subject}</strong>
      <p>Status: {ticket.status} | Priority: {ticket.priority}</p>
      {ticket.status === "open" && (
        <button onClick={() => onClose(ticket.id)}>Close</button>
      )}
    </div>
  );
}

export default TicketCard;
