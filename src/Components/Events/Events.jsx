import EventCard from '../EventCard/EventCard';
import './Events.scss'

function Events () {


    return(
        <section className='events' >
            <span className='events__scroll-point' id='events'></span>
            
            <div className='events__title--container' >
                <h1 className='events__title'  >EVENTS</h1>
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