import './EventCard.scss'

function EventCard () {


    return(
        <article className='event-card'>
            <div className='event-card__content'>
                <div className='event-card__image--container'>
                    <img className='event-card__image' src="https://placehold.co/500x200" alt="Event background image" />
                </div>
                <div className='event-card__poster--container'>
                    <img className='event-card__poster' src="https://placehold.co/200x350" alt="Event poster" />
                </div>

                <div className='event-card__text--container'>
                    <p className='event-card__text'>text for description</p>
                    <p className='event-card__text'>text for description</p>
                    <p className='event-card__text'>text for description</p>
                    <p className='event-card__text'>text for description</p>
                </div>
            </div>
        </article>
    )
}

export default EventCard;