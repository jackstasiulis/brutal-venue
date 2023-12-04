import EventCard from '../EventCard/EventCard';
import './Events.scss'
import eventData from '../../Assets/Data/eventData.json'

function Events () {

    return(
        <section className='events' >
            <span className='events__scroll-point' id='events'></span>
            
            <div className='events__title--container' >
                <h1 className='events__title'  >EVENTS</h1>
            </div>

            <div>
            {
                eventData.map( event => {
                    return(
                        <EventCard 
                        key={event.id}
                        image={event.image}
                        poster={event.poster}
                        title={event.title}
                        eventText1={event.eventText1}
                        eventText2={event.eventText2}
                        eventText3={event.eventText3}
                        />
                    )
                })
            }
            </div>
        </section>
    )
}

export default Events;