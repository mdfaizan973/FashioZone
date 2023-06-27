export default function Prosection() {
  let products_Data = [
    {
      image:
        "https://olavi.in/cdn/shop/collections/Men_oversize_tshirt_540x.jpg?v=1673349126",
      name: "MENS OVERSIZED TEES",
      dis: "Olavi presents this classic red oversized t-shirt .....",
    },
    {
      image:
        "https://olavi.in/cdn/shop/collections/Women_oversize_540x.jpg?v=1673349166",
      name: "WOMENS OVERSIZED TEES",
      dis: "Olavi is a brand dedicated to provide classic products ....",
    },
    {
      image:
        "https://olavi.in/cdn/shop/collections/Mens_sweatshirt_540x.jpg?v=1673349105",
      name: "MENS SWEET SHIRT",
      dis: "A fabric that is breathable ! Crafted from 100% cotton fleece ...",
    },
    {
      image:
        "https://olavi.in/cdn/shop/collections/Women_crop_540x.jpg?v=1673349157",
      name: "CROP TOP",
      dis: "Perfect for summers ! A perfect crop top to have in your closet ... ",
    },
  ];

  return (
    <div>
      <img src="https://sslimages.shoppersstop.com/sys-master/root/h34/h2b/30163268730910/Mini-Fashion%2C-Major-Savings_Strip-web_47638999376fj.jpg" />

      <div id="maincard_div">
        {products_Data.map((ele, i) => (
          <div class="card">
            <img src={ele.image} alt="Product Image" />

            <h3>{ele.name}</h3>
            <p>{ele.dis}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
