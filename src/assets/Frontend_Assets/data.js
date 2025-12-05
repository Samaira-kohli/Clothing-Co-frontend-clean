import p1_img from './product_1.png'
import p2_img from './product_2.png'
import p3_img from './product_3.png'
import kurti from './kurti.jpg'
import dress from './dress.jpg'
import midi from './midi.jpg'
import coord from './coord.jpg'
import p4_img from './product_4.png'
import p22_img from "./product_22.png";

let data_product = [
  {
    id:3,
    name:"Black Strappy Slit Midi Dress",
    image:dress,
    new_price:50.00,
    old_price:80.50,
  },
  {
    id:18,
    name:"Pastel Kurta Set",
    image:kurti,
    new_price:85.00,
    old_price:120.50,
  },
  {
    id: 22,
    name: "Green Gym Wear Set",
    category: "women",
    subCategory: "ACTIVEWEAR",
    image: p22_img,
    price: 1700,
    availability: "Out of Stock",
    sizes: ["XS", "M"],
  },

];

export default data_product;
