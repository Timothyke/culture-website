document.addEventListener('DOMContentLoaded', function() {
    // Populate the event section with sample data
    const eventList = document.getElementById('event-list');
    const events = [
        { name: 'African Art Exhibition', date: '2024-11-15' },
        { name: 'Music Festival: Sounds of Africa', date: '2024-12-01' },
        { name: 'African Cultural Heritage Conference', date: '2024-12-10' }
    ];

    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event');
        eventItem.innerHTML = `<h3>${event.name}</h3><p>Date: ${event.date}</p>`;
        eventList.appendChild(eventItem);
    });
});

function exploreMore() {
    alert('Explore more features coming soon!');
}

function joinForum() {
    window.location.href = 'https://cultureconnect.com/forum'; // Link to the forum
}
