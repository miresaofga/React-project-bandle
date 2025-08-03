import { useState } from 'react';
import './CarShop.css';

const CarShop = () => {
  const [cars] = useState([
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2023,
      price: 28500,
      color: 'Silver',
      mileage: 15000,
      image: '🚗',
      description: 'Reliable and fuel-efficient sedan perfect for daily commuting.'
    },
    {
      id: 2,
      make: 'Honda',
      model: 'CR-V',
      year: 2022,
      price: 32000,
      color: 'Blue',
      mileage: 22000,
      image: '🚙',
      description: 'Spacious SUV with excellent safety ratings and cargo space.'
    },
    {
      id: 3,
      make: 'BMW',
      model: 'X3',
      year: 2023,
      price: 45000,
      color: 'Black',
      mileage: 8000,
      image: '🚐',
      description: 'Luxury SUV with premium features and sporty performance.'
    },
    {
      id: 4,
      make: 'Tesla',
      model: 'Model 3',
      year: 2023,
      price: 42000,
      color: 'White',
      mileage: 5000,
      image: '⚡',
      description: 'Electric sedan with autopilot and cutting-edge technology.'
    },
    {
      id: 5,
      make: 'Ford',
      model: 'F-150',
      year: 2022,
      price: 38000,
      color: 'Red',
      mileage: 18000,
      image: '🛻',
      description: 'America\'s best-selling truck with impressive towing capacity.'
    },
    {
      id: 6,
      make: 'Audi',
      model: 'A4',
      year: 2023,
      price: 41000,
      color: 'Gray',
      mileage: 12000,
      image: '🏎️',
      description: 'Elegant sedan with advanced driver assistance features.'
    }
  ]);

  const [cart, setCart] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [filter, setFilter] = useState('all');

  const addToCart = (car) => {
    if (!cart.find(item => item.id === car.id)) {
      setCart([...cart, car]);
    }
  };

  const removeFromCart = (carId) => {
    setCart(cart.filter(item => item.id !== carId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, car) => total + car.price, 0);
  };

  const filteredCars = cars.filter(car => {
    if (filter === 'all') return true;
    if (filter === 'luxury') return car.price > 40000;
    if (filter === 'economy') return car.price <= 30000;
    if (filter === 'mid-range') return car.price > 30000 && car.price <= 40000;
    return true;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="car-shop">
      <header className="shop-header">
        <h1>🚗 Premium Car Shop</h1>
        <p>Find your perfect vehicle today!</p>
      </header>

      <div className="shop-controls">
        <div className="filters">
          <label>Filter by Price Range:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Cars</option>
            <option value="economy">Economy (≤ $30K)</option>
            <option value="mid-range">Mid-Range ($30K - $40K)</option>
            <option value="luxury">Luxury (&gt; $40K)</option>
          </select>
        </div>
        
        <div className="cart-summary">
          <span className="cart-count">Cart: {cart.length} cars</span>
          <span className="cart-total">Total: {formatPrice(getTotalPrice())}</span>
        </div>
      </div>

      <div className="shop-content">
        <div className="car-grid">
          {filteredCars.map(car => (
            <div key={car.id} className="car-card">
              <div className="car-image">{car.image}</div>
              <div className="car-info">
                <h3>{car.year} {car.make} {car.model}</h3>
                <p className="car-price">{formatPrice(car.price)}</p>
                <div className="car-details">
                  <span className="detail">🎨 {car.color}</span>
                  <span className="detail">🛣️ {car.mileage.toLocaleString()} miles</span>
                </div>
                <p className="car-description">{car.description}</p>
                <div className="car-actions">
                  <button 
                    className="btn-view" 
                    onClick={() => setSelectedCar(car)}
                  >
                    View Details
                  </button>
                  <button 
                    className={`btn-cart ${cart.find(item => item.id === car.id) ? 'in-cart' : ''}`}
                    onClick={() => cart.find(item => item.id === car.id) 
                      ? removeFromCart(car.id) 
                      : addToCart(car)
                    }
                  >
                    {cart.find(item => item.id === car.id) ? 'Remove' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="shopping-cart">
            <h3>🛒 Shopping Cart</h3>
            <div className="cart-items">
              {cart.map(car => (
                <div key={car.id} className="cart-item">
                  <span>{car.image} {car.year} {car.make} {car.model}</span>
                  <span>{formatPrice(car.price)}</span>
                  <button 
                    className="btn-remove"
                    onClick={() => removeFromCart(car.id)}
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total-final">
                <strong>Total: {formatPrice(getTotalPrice())}</strong>
              </div>
              <button className="btn-checkout">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>

      {selectedCar && (
        <div className="modal-overlay" onClick={() => setSelectedCar(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCar(null)}>✕</button>
            <div className="modal-header">
              <span className="modal-image">{selectedCar.image}</span>
              <h2>{selectedCar.year} {selectedCar.make} {selectedCar.model}</h2>
            </div>
            <div className="modal-body">
              <div className="modal-details">
                <div className="detail-row">
                  <strong>Price:</strong> {formatPrice(selectedCar.price)}
                </div>
                <div className="detail-row">
                  <strong>Color:</strong> {selectedCar.color}
                </div>
                <div className="detail-row">
                  <strong>Mileage:</strong> {selectedCar.mileage.toLocaleString()} miles
                </div>
                <div className="detail-row">
                  <strong>Year:</strong> {selectedCar.year}
                </div>
              </div>
              <p className="modal-description">{selectedCar.description}</p>
              <button 
                className={`btn-cart-modal ${cart.find(item => item.id === selectedCar.id) ? 'in-cart' : ''}`}
                onClick={() => {
                  cart.find(item => item.id === selectedCar.id) 
                    ? removeFromCart(selectedCar.id) 
                    : addToCart(selectedCar);
                }}
              >
                {cart.find(item => item.id === selectedCar.id) ? 'Remove from Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarShop;
