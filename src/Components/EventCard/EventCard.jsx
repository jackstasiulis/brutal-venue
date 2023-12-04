import './EventCard.scss'
import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';

function EventCard ({title, image, poster, eventText1, eventText2, eventText3}) {

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg','-17.5deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg','17.5deg']);


    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height -0.5;
        
        x.set(xPct);
        y.set(yPct);
    }

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    }

    return(
        <article className='event-card'>
            <div className='event-card__content'>
                <div className='event-card__image--container'>
                    <img className='event-card__image' src="https://placehold.co/500x200" alt="Event background image" />
                </div>

                {/* HERE is our framer motion.div that takes our mouse position to move the poster */}
                <motion.div className='event-card__poster--container' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{rotateX, rotateY, transformStyle: 'preserve-3d',}}>
                    <img className='event-card__poster' src={"https://placehold.co/200x350"} alt="Event poster" />
                </motion.div>

                <div className='event-card__text--container'>
                    <p className='event-card__text'>{title}</p>
                    <p className='event-card__text'>{eventText1}</p>
                    <p className='event-card__text'>{eventText2}</p>
                    <p className='event-card__text'>{eventText3}</p>
                </div>
            </div>
        </article>
    )
}

export default EventCard;