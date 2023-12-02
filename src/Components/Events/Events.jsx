import EventCard from '../EventCard/EventCard';
import './Events.scss'

function Events () {


    return(
        <section className='events'>
            <h1>events</h1>
            <EventCard />
            <EventCard />

        </section>
    )
}

export default Events;