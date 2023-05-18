import "../css/Carousel.css"
export function CarouselItem (props: { image: string }) {
    const { image } = props;
    return (
        <div className="carousel-item">
            <img className="carousel-image"src={image}/>
        </div>
    )
}