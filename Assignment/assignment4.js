let tickets=[
    { id: "T101", priority: "HIGH", resolved: true },
    { id: "T102", priority: "LOW", resolved: false },
    { id: "T103", priority: "MEDIUM", resolved: true },
    { id: "T104", priority: "LOW", resolved: false },
    { id: "T105", priority: "HIGH", resolved: true }
];
tickets.unshift(
    {id: "T106", priority: "MEDIUM", resolved: true }
);

tickets.push(
    { id: "T107", priority: "HIGH", resolved: true },
    { id: "T108", priority: "LOW", resolved: false }
);
const currentTicket = tickets.shift();

const droppedTicket = tickets.pop();

const pending = tickets.filter(ticket => !ticket.resolved);

const pendingIds = pending.map(ticket => ticket.id)

console.log("Ticket removed is :",currentTicket);
console.log("Popped Ticket is:",droppedTicket);
console.log("Tickets that not resolved  :",pending);
console.log("Tickets are:",pendingIds);