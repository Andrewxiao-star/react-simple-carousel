// import logo from './logo.svg';
import './App.css';
import Carousel from './component/Carousel.js'

function App() {
  return (
    <div className="App" style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
      <Carousel
        show={4}
        // infiniteLoop={true}
      >     
        <div>
          <div className="product-image">
            <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg" alt="placeholder" style={{ width: '100%' }} />
          </div>
          <h3 className="product-name">Dress 1</h3>
          <p className="product-price">$800</p>
        </div>
        <div>
          <div className="product-image">
            <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg" alt="placeholder" style={{ width: '100%' }} />
          </div>
          <h3 className="product-name">Dress 2</h3>
          <p className="product-price">$800</p>        
        </div>
        <div>
          <div className="product-image">
            <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg" alt="placeholder" style={{ width: '100%' }} />
          </div>
          <h3 className="product-name">Dress 3</h3>
          <p className="product-price">$800</p>        
        </div>
        <div>
          <div className="product-image">
            <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg" alt="placeholder" style={{ width: '100%' }} />
          </div>
          <h3 className="product-name">Dress 4</h3>
          <p className="product-price">$800</p>
        </div>
        <div>
          <div className="product-image">
            <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg" alt="placeholder" style={{ width: '100%' }} />
          </div>
          <h3 className="product-name">Dress 5</h3>
          <p className="product-price">$800</p>
        </div>
        <div>
          <div className="product-image">
            <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg" alt="placeholder" style={{ width: '100%' }} />
          </div>
          <h3 className="product-name">Dress 6</h3>
          <p className="product-price">$800</p>
        </div>
        <div>
          <div className="product-image">
            <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg" alt="placeholder" style={{ width: '100%' }} />
          </div>
          <h3 className="product-name">Dress 7</h3>
          <p className="product-price">$800</p>
        </div>
        <div>
          <div className="product-image">
            <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg" alt="placeholder" style={{ width: '100%' }} />
          </div>
          <h3 className="product-name">Dress 8</h3>
          <p className="product-price">$800</p>
        </div>
      </Carousel>

    </div>
  );
}

export default App;
