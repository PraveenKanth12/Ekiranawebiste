import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://i.pinimg.com/originals/e4/32/04/e43204c4412505e7119cc9c26eba969f.jpg"
            alt=""
            className="home_image"
          />
          <div className="home__row">
            <Product
              id="213323"
              title="TIDE Double Power Jasmine & Rose Detergent Powder – 1kg"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNRjT9xO6Ej7myDvEhbsjUj30sB6a5PqUAA&s"
              price={12}
              rating={5}
            />
            <Product
              id="21165187"
              title="Tata Salt Vacuum Evaporated Iodised Salt - Helps Mental Development, 1 kg Pouch"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPanx7j6oowS32IyICE9aiv5UdDwpf6LcZQ&s"
              price={8}
              rating={4}
            />
            <Product
              id="22374227"
              title="Park Avenue Pure Luxury Soap 125 g (Pack of 4)"
              image="https://www.jiomart.com/images/product/original/490999978/park-avenue-original-collection-luxury-soap-125-g-buy-3-get-1-free-product-images-o490999978-p490999978-0-202205301920.jpg?im=Resize=(1000,1000)"
              price={8}
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id="369649"
              title="Madhur Pure & Hygienic Sugar 5 kg"
              image="https://www.jiomart.com/images/product/original/490861956/madhur-pure-hygienic-sugar-5-kg-product-images-o490861956-p490861956-0-202208221852.jpg?im=Resize=(420,420)"
              price={32}
              rating={3}
            />
            <Product
              id="75487154"
              title="Britannia Little Hearts Shaped Classic, Sugar Sprinkled Biscuit – Pack of 2"
              image="https://sumranikiranastore.com/wp-content/uploads/2021/07/pro_225254.jpg"
              rating={5}
              price={2}
            />
            <Product
              id="98496944"
              title="Saffola Active Pro Weight Watchers + Grocery Sugar Combo"
              image="https://sumranikiranastore.com/wp-content/uploads/2021/07/pro_459444.jpg"
              rating={4}
              price={55}
            />
          </div>
          <div className="home__row">
            <Product
              id="239623"
              title="Pears Oil Clear & Glow Soap Bar, 75 g Pack of 4  (4 x 75 g)"
              image="https://www.vizaggrocerystore.com/wp-content/uploads/2020/09/Pears-Soft-Fresh-Soap-Bar-75-g-Pack-of-4.jpg"
              rating={4}
              price={30}
            />
            <Product
              id="9036078"
              title="Cinthol Original Bath – Soap, 100 g (Pack of 4)"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ED5toqpfxu6mcbdf59DszdIlqth_qC-KGw&s"
              price={9}
              rating={3}
            />
            <Product
              id="21342984"
              title="Lifebuoy Total 10 Germ Protection Soap Bar (Pack of 3, 100 gm Each)"
              image="https://images.jdmagicbox.com/quickquotes/images_main/lifebuoy-total-10-soap-pack-of-3-300-gm-94344998-a746s.jpg"
              price={10}
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
