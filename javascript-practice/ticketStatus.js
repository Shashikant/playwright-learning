const testStatus = [
    {
        id: 1,
        status: "new",
        history: ["new", "in_progress"]
    },
    {
        id: 2,
        status: "resolved",
        history: ["in_progress", "resolved"]
    },
    {
        id: "",
        status: "closed",
        history: ["resolved", "closed"]
    },
    {
        id: null,
        status: "invalid_status",
        history: ["resolved", "new"]
    },
    {
        id: 5,
        status: "closed",
        history: ["new", "in_progress", "resolved", "closed"]
    },
    {
        id: 6,
        status: "closed",
        history: ["new", "in_progress", "closed"]
    }
];

let validFlow = ["new", "in_progress", "resolved", "closed"]

function validateRule(data) {
    return data.map((ticket, index) => {
        let errors = [];

        // Validate ID
        if (!ticket.id) {
            errors.push("Invalid ID");
        }

        // Validate history order
        for (let i = 0; i < ticket.history.length - 1; i++) {
            let currentIndex = validFlow.indexOf(ticket.history[i]);
            let nextIndex = validFlow.indexOf(ticket.history[i + 1]);

            if (currentIndex === -1 || nextIndex === -1) {
                errors.push("Invalid status in history");
                break;
            }

            if(nextIndex-currentIndex === 1)
            {
                if (nextIndex < currentIndex) {
                    errors.push("Incorrect status order");
                    break;
                }
            }
            else
            {
                errors.push("Incorrect status order");
            }
        }

        // Validate final status matches last history entry
        if (ticket.status !== ticket.history[ticket.history.length - 1]) {
            errors.push("Status does not match last history");
        }

        return {
            id: ticket.id || `ticket-${index + 1}`,
            valid: errors.length === 0,
            errors
        };
    });
}

const results = validateRule(testStatus);

// Print results nicely
results.forEach(result => {
    if (result.valid) {
        console.log(`✅ Ticket ${result.id} is valid`);
    } else {
        console.log(`❌ Ticket ${result.id} failed: ${result.errors.join(", ")}`);
    }
});
