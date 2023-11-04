
const ServicesCard = ({ service }) => {
    //console.log(Object.keys(service).join(','));
    const { _id, name, price, description, image, features } = service || {}
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-primary">{name}</h2>
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary  w-full">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;