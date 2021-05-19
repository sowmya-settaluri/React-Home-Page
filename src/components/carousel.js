const Carousel = ({carousels}) => {
  return ( 
    <div className="carousel-content">
      
        {carousels.map((page) => (
          <div className="carousel-item" className={page.cl}>
          <div className="container" key = {page.id}>
            <img className="d-block w-100 img-responsive" src={page.image} alt={page.alter}></img>
            <div className="text-block">
              <h4>{page.heading}</h4>
              <p>{page.content}</p>
            </div>
          </div>
          </div>
      ))}
        
      
    </div>
   );
}
 
export default Carousel;