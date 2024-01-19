import Button from 'react-bootstrap/Button';
import { useNavigate} from 'react-router-dom';

// import { Route } from 'react-router-dom';
import { CartItemType } from './CartItemType'
type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item = ({ item, handleAddToCart }:Props) => {
  const renderStars = () => {
    const filledStars = Math.round(item.rating.rate); 
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= filledStars ? 'fa-solid fa-star' : 'fa-regular fa-star';
      stars.push(<i key={i} className={starClass} />);
    }
    return stars;
  };

  const navigate = useNavigate();

  const navigateToProductPage = () => {
    // 👇️ navigate to /contacts
    navigate('/productPage', { state: { selectedItem: item } });
  };
  return (
    <div className="card" style={{ width: '18rem' , margin:'auto', backgroundColor:''}} onClick={navigateToProductPage}>
      <br />
      <img
        className="card-img-top"
        style={{ width: '10rem', height: '10rem', margin: 'auto' ,objectFit:'scale-down', backgroundColor:''}}
        src={item.image}
        alt={item.title}
      />

      <div className="card-body">
        <h5
          className="card-title"
          title={item.title}
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
          {item.title}
        </h5>
        <p
          className="card-text "
          title={item.description}
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
          {item.description}
        </p>
    
        <p
          className="card-text "
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
          ${item.price}
        </p>
        {renderStars()}
        <br />
      </div>
      <div className="card-body" style={{ borderRadius: '0 0 40px 40px' }}>
        
        <Button className="btn btn-dark" >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default Item;

