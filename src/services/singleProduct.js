import shirt1 from '../images/shirt1.png';
import shirt2 from '../images/shirt2.png';
import shirt3 from '../images/shirt3.png';
import shirt4 from '../images/shirt4.png';
import color1 from '../images/color1.png'
import color2 from '../images/color2.png'
import mainImage from '../images/image11.jpeg'


const singleProduct = {
  id: '1',
  title:
    'Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  logo: '/images/addidasLogo.svg',
  category: 'Men',
  rate: 4.5,
  rateCount: 22,
  price: '9,999',
  discount: '30% off',
  sizes: ['small', 'medium', 'large', 'x large', 'xx large'],
  colors: [color1, color2],
  mainImage: mainImage,
  shirts: [shirt1,
    shirt2,
    shirt3,
    shirt4]
};

export default singleProduct;
