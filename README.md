# Ticket Tracker UI

A React frontend for browsing, creating, filtering, and closing support tickets.

## What this is

The client-facing piece of the Ticket Tracker application. Talks to [ticket-tracker-api](https://github.com/tjonadibernice/ticket-tracker-api) (Node/Express) over HTTP, which in turn reads/writes a PostgreSQL database whose schema is managed by [ticket-tracker](https://github.com/tjonadibernice/ticket-tracker) (Python/SQLAlchemy/Alembic).

## Features

- View all tickets
- Filter by status (all / open / closed)
- Create a new ticket
- Close an open ticket

## Tech stack

- React, Vite

## Setup

```bash
npm install
npm run dev
```

Requires [ticket-tracker-api](https://github.com/tjonadibernice/ticket-tracker-api) running and reachable — update the API URL in `App.jsx` if it's not running on `http://localhost:3001`.

## What I learned building this

- Lifting state up: the parent `App` component owns ticket state; child components (`TicketList`, `NewTicketForm`) receive data and callbacks as props rather than managing their own copies
- Controlled form inputs and the standard React create/update/filter pattern
- Debugging a real cross-environment networking issue: WSL2's `localhost` port forwarding didn't reliably reach the browser on Windows, requiring the machine's network IP instead
