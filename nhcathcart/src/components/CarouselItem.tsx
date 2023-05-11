import "../css/Carousel.css"
export function CarouselItem (props: {description: string, image: string}) {
    const { description, image } = props;
    return (
        <div className="carousel-item">
            <img className="carousel-image"src={image}/>
            <h1 className="carousel-item-text">{description}</h1>
        </div>
    )
}