fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco')
.then(response => response.json())
.then(data => {
    displayEvents(data.events);
})
.catch(error => console.error('Error fetching events:', error));

function displayEvents(events) {
    const eventList = document.querySelector('.event-list');
    const imagePaths = [
      'images/RE/event1.svg',
      'images/RE/event2.svg',
      'images/RE/event3.svg',
      'images/RE/event4.svg',
      'images/RE/event5.svg',
      'images/RE/event6.svg',
      'images/RE/event7.svg',
      'images/RE/event8.svg'
    ];
    
    events.forEach((event, index) => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item', `event-item-${index + 1}`);
        eventItem.style.backgroundImage = `url(${imagePaths[index]})`;
        
        const eventDetails = document.createElement('div');
        eventDetails.classList.add('event-details');

        const eventName = document.createElement('div');
        eventName.classList.add('event-name');
        eventName.textContent = event.eventName;

        const eventDate = document.createElement('div');
        eventDate.classList.add('event-date');
        const formattedDate = new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        eventDate.textContent = formattedDate;

        const eventLocation = document.createElement('div');
        eventLocation.classList.add('event-location');
        eventLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${event.cityName}`;

        const eventWeather = document.createElement('div');
        eventWeather.classList.add('event-weather');
        eventWeather.textContent = event.weather;

        const eventSeparator = document.createElement('div');
        eventSeparator.classList.add('event-separator');
        eventSeparator.textContent = '|';

        const eventDistance = document.createElement('div');
        eventDistance.classList.add('event-distance');
        const distanceKm = Math.floor(event.distanceKm); // Get only the digits before the decimal point
        eventDistance.textContent = `${distanceKm} km`;

        // Append event details to eventItem
        eventDetails.appendChild(eventName);
        eventDetails.appendChild(eventDate);
        eventDetails.appendChild(eventLocation);
        eventDetails.appendChild(eventWeather);
        eventDetails.appendChild(eventSeparator);
        eventDetails.appendChild(eventDistance);

        // Append eventDetails to eventItem
        eventItem.appendChild(eventDetails);

        // Append eventItem to eventList
        eventList.appendChild(eventItem);
    });
}

/*--------------upcoming events--------------*/

fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco')
.then(response => response.json())
.then(data => {
    displayUpcomingEvents(data.events);
})
.catch(error => console.error('Error fetching events:', error));

function displayUpcomingEvents(events) {
    const upcomingEventList = document.querySelector('.upcoming-event-list');
    const imagePaths = [
        'images/UE/ue1.svg',
        'images/UE/ue2.svg',
        'images/UE/ue3.svg',
        'images/UE/ue4.svg',
        'images/UE/ue5.svg',
        'images/UE/ue6.svg',
        'images/UE/ue7.svg',
        'images/UE/ue8.svg',
        'images/UE/ue9.svg',
        'images/UE/ue10.svg',
    ];
    
    events.forEach((event, index) => {
    const upcomingEventItem = document.createElement('div');
    upcomingEventItem.classList.add('upcoming-event-item', `upcoming-event-item-${index + 1}`);
    upcomingEventItem.style.backgroundImage = `url(${imagePaths[index]})`;

    const upcomingEventDetails = document.createElement('div');
    upcomingEventDetails.classList.add('upcoming-event-details');

    const eventName = document.createElement('div');
    eventName.classList.add('upcoming-event-name');
    eventName.textContent = event.eventName;

    const eventDate = document.createElement('div');
    eventDate.classList.add('upcoming-event-date');
    const formattedDate = new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    eventDate.textContent = formattedDate;

    const eventLocation = document.createElement('div');
    eventLocation.classList.add('upcoming-event-location');
    eventLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${event.cityName}`;

    const eventWeather = document.createElement('div');
    eventWeather.classList.add('upcoming-event-weather');
    eventWeather.textContent = event.weather;

    const eventSeparator = document.createElement('div');
    eventSeparator.classList.add('upcoming-event-separator');
    eventSeparator.textContent = '|';

    const eventDistance = document.createElement('div');
    eventDistance.classList.add('upcoming-event-distance');
    const distanceKm = Math.floor(event.distanceKm); // Get only the digits before the decimal point
    eventDistance.textContent = `${distanceKm} km`;

    // Append event details to upcomingEventItem
    upcomingEventDetails.appendChild(eventName);
    upcomingEventDetails.appendChild(eventDate);
    upcomingEventDetails.appendChild(eventLocation);
    upcomingEventDetails.appendChild(eventWeather);
    upcomingEventDetails.appendChild(eventSeparator);
    upcomingEventDetails.appendChild(eventDistance);

    // Append upcomingEventDetails to upcomingEventItem
    upcomingEventItem.appendChild(upcomingEventDetails);

    // Append upcomingEventItem to upcomingEventList
    upcomingEventList.appendChild(upcomingEventItem);
  });
}