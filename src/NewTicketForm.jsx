import { useState } from "react";

function NewTicketForm({ onCreate }) {
  const [subject, setSubject] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!subject.trim()) return;
    onCreate(subject);
    setSubject("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="New ticket subject"
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default NewTicketForm;
