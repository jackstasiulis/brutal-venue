import EventCard from '../EventCard/EventCard';
import './Events.scss'

function Events () {


    return(
        <section className='events'>

            <div className='events__title--container'>
                <h1 className='events__title'>EVENTS</h1>
            </div>

            <div>
                <EventCard />
                <EventCard />
                <EventCard />
            </div>


        </section>
    )
}

export default Events;