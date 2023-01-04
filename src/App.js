
import './App.css';

function App() {
  return (
    <div className="E-test">
      <img
        src="https://cdn.shopify.com/s/files/1/0773/9113/products/matte-black-15-xs-roebling-28210584846416_1600x.jpg?v=1651578554"
        alt=""
        className="bicycle-img"
      />
      <div className="E-testInfo">
        <div>
          <h2>Brompton Black Edition C Line Explore </h2>
          </div>
          <div className="rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <p>Write a review</p>
          </div>
          <br/>
       
        <div className="price">
          <h3>Price:</h3>
          <h3 className="tag">
            $1592 <span className="mrp">$1992.5</span> <span className="off">(10 % OFF)</span>
          </h3>
        </div>
        <div className="size">
          <h3>Size:</h3>
          <p>175 cm - 185cm | L ( 2 avalible )</p>
        </div>
        <div className="color">
          <h3>Color:</h3>
          <div className="wrapper">
            <div className="box blue"></div>
            <div className="box purple"></div>
            <div className="box wine"></div>
          </div>
        </div>
        <div>
          <label>Collect Form :</label>
          <select className="collect">
            <optgroup label="categories">
              <option value="a">Select Loction</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="d">D</option>
              <option value="e ">E</option>
            </optgroup>
          </select>
        </div>
        <div>
          <label for="quantity">Quantity:</label>
          <input type="number" name="quantity" min="1" max="5" />
          <div className="buy-btn">
            <button className="buy">Buy Now </button>
            <button className="add">Add to Cart</button>
          </div>
          <button className="fin-btn">0% Finance Avalible </button>
        </div>
      </div>
    </div>
  );
}

export default App;
