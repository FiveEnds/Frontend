// Use the template to add new demo component
/*
<div className="pb-15">
  <Typography level="h1" className='pb-5'>New added component</Typography>
  {insert your component here...}
</div>
*/
// import { ProductsCarousel } from '../components/organisms/Carousels/ProductsCarousel/ProductsCarousel';
// import { AvailableColors } from '../components/molecules/AvailableColors/AvailableColors';
// import { SelectCapacity } from '../components/molecules/SelectCapacity/SelectCapacity';
// import { ProductCardSpecs } from '../components/molecules/ProductCardSpecs/ProductCardSpecs';
import { useState } from 'react';
// import { PhoneSpecsTable } from '../components/molecules/PhoneSpecsTable/PhoneSpecsTable';
// import { ProductAbout } from '../components/molecules/ProductAbout/ProductAbout';
// import { ProductsCarousel } from '../components/organisms/Carousels/ProductsCarousel/ProductsCarousel';
import { Footer } from '../components/organisms/Footer/Footer';
import { Header } from '../components/organisms/Header/Header';
// import { PhoneTechSpecs } from '../components/organisms/PhoneTechSpecs/PhoneTechSpecs';
// import { ProductConfigurator } from '../components/organisms/ProductConfigurator/ProductConfigurator';
// import { ProductItemLayout } from '../components/templates/ProductItemLayout/ProductItemLayout';
import { CartLayout } from '../components/templates/CartLayout/CartLayout';
import { CartItem } from '../components/molecules/CartItem';
import { Checkout } from '../components/molecules/Checkout/Checkout';
// import { useState } from 'react';
// import { PromoCarousel } from '../components/organisms/Carousels/PromoCarousel/PromoCarousel';
// import { BANNERS } from '../constants/banners';
// import { SQUARE_BANNERS } from '../constants/square_banners';

// function getResizeValue() {
//   const width = window.innerWidth;
//   if (width < 640) {
//     return 1.5;
//   } else if (width < 1200) {
//     return 2.5;
//   } else {
//     return 4;
//   }
// }

export const VladyslavLozynskyi: React.FC = () => {
  // const [value, setValue] = useState('Default');
  //#endregion

  // #region Cart Item
  const [quantity, setQuantity] = useState(1);
   
  const [, setIsItemVisible] = useState(true);
  // #endregion

  const product = {
    id: 'apple-iphone-11-128gb-purple',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 128GB Purple',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'purple',
    images: [
      'img/phones/apple-iphone-11/purple/00.webp',
      'img/phones/apple-iphone-11/purple/01.webp',
      'img/phones/apple-iphone-11/purple/02.webp',
      'img/phones/apple-iphone-11/purple/03.webp',
      'img/phones/apple-iphone-11/purple/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title:
          'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "6.1' IPS",
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  };
  // const productColors = [
  //   'black',
  //   'green',
  //   'starlight',
  //   'spacegray',
  //   'midnightgreen',
  //   'gold',
  //   'yellow',
  //   'white',
  //   'purple',
  //   'red',
  // ];

  // const products = [
  //   {
  //     id: 'apple-iphone-11-128gb-purple',
  //     namespaceId: 'apple-iphone-11',
  //     name: 'Apple iPhone 11 128GB Purple',
  //     capacityAvailable: ['64GB', '128GB', '256GB'],
  //     capacity: '128GB',
  //     priceRegular: 1100,
  //     colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  //     color: 'purple',
  //     images: [
  //       'img/phones/apple-iphone-11/purple/00.webp',
  //       'img/phones/apple-iphone-11/purple/01.webp',
  //       'img/phones/apple-iphone-11/purple/02.webp',
  //       'img/phones/apple-iphone-11/purple/03.webp',
  //       'img/phones/apple-iphone-11/purple/04.webp',
  //     ],
  //     description: [
  //       {
  //         title: 'And then there was Pro',
  //         text: [
  //           'A transformative triple-camera system that adds tons of capability without complexity.',
  //           'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
  //         ],
  //       },
  //       {
  //         title: 'Camera',
  //         text: [
  //           'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
  //         ],
  //       },
  //       {
  //         title:
  //           'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
  //         text: [
  //           'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
  //         ],
  //       },
  //     ],
  //     screen: "6.1' IPS",
  //     resolution: '1792x828',
  //     processor: 'Apple A13 Bionic',
  //     ram: '4GB',
  //     camera: '12 Mp + 12 Mp + 12MP',
  //     zoom: 'Digital, 5x',
  //     cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  //   },
  //   {
  //     id: 'apple-iphone-11-128gb-purple',
  //     namespaceId: 'apple-iphone-11',
  //     name: 'Apple iPhone 11 128GB Purple',
  //     capacityAvailable: ['64GB', '128GB', '256GB'],
  //     capacity: '128GB',
  //     priceRegular: 1100,
  //     priceDiscount: 1050,
  //     colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  //     color: 'purple',
  //     images: [
  //       'img/phones/apple-iphone-11/purple/00.webp',
  //       'img/phones/apple-iphone-11/purple/01.webp',
  //       'img/phones/apple-iphone-11/purple/02.webp',
  //       'img/phones/apple-iphone-11/purple/03.webp',
  //       'img/phones/apple-iphone-11/purple/04.webp',
  //     ],
  //     description: [
  //       {
  //         title: 'And then there was Pro',
  //         text: [
  //           'A transformative triple-camera system that adds tons of capability without complexity.',
  //           'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
  //         ],
  //       },
  //       {
  //         title: 'Camera',
  //         text: [
  //           'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
  //         ],
  //       },
  //       {
  //         title:
  //           'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
  //         text: [
  //           'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
  //         ],
  //       },
  //     ],
  //     screen: "6.1' IPS",
  //     resolution: '1792x828',
  //     processor: 'Apple A13 Bionic',
  //     ram: '4GB',
  //     camera: '12 Mp + 12 Mp + 12MP',
  //     zoom: 'Digital, 5x',
  //     cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  //   },
  //   {
  //     id: 'apple-iphone-11-128gb-purple',
  //     namespaceId: 'apple-iphone-11',
  //     name: 'Apple iPhone 11 128GB Purple',
  //     capacityAvailable: ['64GB', '128GB', '256GB'],
  //     capacity: '128GB',
  //     priceRegular: 1100,
  //     priceDiscount: 1050,
  //     colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  //     color: 'purple',
  //     images: [
  //       'img/phones/apple-iphone-11/purple/00.webp',
  //       'img/phones/apple-iphone-11/purple/01.webp',
  //       'img/phones/apple-iphone-11/purple/02.webp',
  //       'img/phones/apple-iphone-11/purple/03.webp',
  //       'img/phones/apple-iphone-11/purple/04.webp',
  //     ],
  //     description: [
  //       {
  //         title: 'And then there was Pro',
  //         text: [
  //           'A transformative triple-camera system that adds tons of capability without complexity.',
  //           'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
  //         ],
  //       },
  //       {
  //         title: 'Camera',
  //         text: [
  //           'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
  //         ],
  //       },
  //       {
  //         title:
  //           'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
  //         text: [
  //           'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
  //         ],
  //       },
  //     ],
  //     screen: "6.1' IPS",
  //     resolution: '1792x828',
  //     processor: 'Apple A13 Bionic',
  //     ram: '4GB',
  //     camera: '12 Mp + 12 Mp + 12MP',
  //     zoom: 'Digital, 5x',
  //     cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  //   },
  //   {
  //     id: 'apple-iphone-11-128gb-purple',
  //     namespaceId: 'apple-iphone-11',
  //     name: 'Apple iPhone 11 128GB Purple',
  //     capacityAvailable: ['64GB', '128GB', '256GB'],
  //     capacity: '128GB',
  //     priceRegular: 1100,
  //     priceDiscount: 1050,
  //     colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  //     color: 'purple',
  //     images: [
  //       'img/phones/apple-iphone-11/purple/00.webp',
  //       'img/phones/apple-iphone-11/purple/01.webp',
  //       'img/phones/apple-iphone-11/purple/02.webp',
  //       'img/phones/apple-iphone-11/purple/03.webp',
  //       'img/phones/apple-iphone-11/purple/04.webp',
  //     ],
  //     description: [
  //       {
  //         title: 'And then there was Pro',
  //         text: [
  //           'A transformative triple-camera system that adds tons of capability without complexity.',
  //           'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
  //         ],
  //       },
  //       {
  //         title: 'Camera',
  //         text: [
  //           'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
  //         ],
  //       },
  //       {
  //         title:
  //           'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
  //         text: [
  //           'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
  //         ],
  //       },
  //     ],
  //     screen: "6.1' IPS",
  //     resolution: '1792x828',
  //     processor: 'Apple A13 Bionic',
  //     ram: '4GB',
  //     camera: '12 Mp + 12 Mp + 12MP',
  //     zoom: 'Digital, 5x',
  //     cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  //   },
  //   {
  //     id: 'apple-iphone-11-128gb-purple',
  //     namespaceId: 'apple-iphone-11',
  //     name: 'Apple iPhone 11 128GB Purple',
  //     capacityAvailable: ['64GB', '128GB', '256GB'],
  //     capacity: '128GB',
  //     priceRegular: 1100,
  //     priceDiscount: 1050,
  //     colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  //     color: 'purple',
  //     images: [
  //       'img/phones/apple-iphone-11/purple/00.webp',
  //       'img/phones/apple-iphone-11/purple/01.webp',
  //       'img/phones/apple-iphone-11/purple/02.webp',
  //       'img/phones/apple-iphone-11/purple/03.webp',
  //       'img/phones/apple-iphone-11/purple/04.webp',
  //     ],
  //     description: [
  //       {
  //         title: 'And then there was Pro',
  //         text: [
  //           'A transformative triple-camera system that adds tons of capability without complexity.',
  //           'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
  //         ],
  //       },
  //       {
  //         title: 'Camera',
  //         text: [
  //           'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
  //         ],
  //       },
  //       {
  //         title:
  //           'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
  //         text: [
  //           'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
  //         ],
  //       },
  //     ],
  //     screen: "6.1' IPS",
  //     resolution: '1792x828',
  //     processor: 'Apple A13 Bionic',
  //     ram: '4GB',
  //     camera: '12 Mp + 12 Mp + 12MP',
  //     zoom: 'Digital, 5x',
  //     cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  //   },
  //   {
  //     id: 'apple-iphone-11-128gb-purple',
  //     namespaceId: 'apple-iphone-11',
  //     name: 'Apple iPhone 11 128GB Purple',
  //     capacityAvailable: ['64GB', '128GB', '256GB'],
  //     capacity: '128GB',
  //     priceRegular: 1100,
  //     priceDiscount: 1050,
  //     colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  //     color: 'purple',
  //     images: [
  //       'img/phones/apple-iphone-11/purple/00.webp',
  //       'img/phones/apple-iphone-11/purple/01.webp',
  //       'img/phones/apple-iphone-11/purple/02.webp',
  //       'img/phones/apple-iphone-11/purple/03.webp',
  //       'img/phones/apple-iphone-11/purple/04.webp',
  //     ],
  //     description: [
  //       {
  //         title: 'And then there was Pro',
  //         text: [
  //           'A transformative triple-camera system that adds tons of capability without complexity.',
  //           'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
  //         ],
  //       },
  //       {
  //         title: 'Camera',
  //         text: [
  //           'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
  //         ],
  //       },
  //       {
  //         title:
  //           'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
  //         text: [
  //           'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
  //         ],
  //       },
  //     ],
  //     screen: "6.1' IPS",
  //     resolution: '1792x828',
  //     processor: 'Apple A13 Bionic',
  //     ram: '4GB',
  //     camera: '12 Mp + 12 Mp + 12MP',
  //     zoom: 'Digital, 5x',
  //     cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  //   },
  //   {
  //     id: 'apple-iphone-11-128gb-purple',
  //     namespaceId: 'apple-iphone-11',
  //     name: 'Apple iPhone 11 128GB Purple',
  //     capacityAvailable: ['64GB', '128GB', '256GB'],
  //     capacity: '128GB',
  //     priceRegular: 1100,
  //     priceDiscount: 1050,
  //     colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  //     color: 'purple',
  //     images: [
  //       'img/phones/apple-iphone-11/purple/00.webp',
  //       'img/phones/apple-iphone-11/purple/01.webp',
  //       'img/phones/apple-iphone-11/purple/02.webp',
  //       'img/phones/apple-iphone-11/purple/03.webp',
  //       'img/phones/apple-iphone-11/purple/04.webp',
  //     ],
  //     description: [
  //       {
  //         title: 'And then there was Pro',
  //         text: [
  //           'A transformative triple-camera system that adds tons of capability without complexity.',
  //           'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
  //         ],
  //       },
  //       {
  //         title: 'Camera',
  //         text: [
  //           'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
  //         ],
  //       },
  //       {
  //         title:
  //           'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
  //         text: [
  //           'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
  //         ],
  //       },
  //     ],
  //     screen: "6.1' IPS",
  //     resolution: '1792x828',
  //     processor: 'Apple A13 Bionic',
  //     ram: '4GB',
  //     camera: '12 Mp + 12 Mp + 12MP',
  //     zoom: 'Digital, 5x',
  //     cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  //   },
  //   {
  //     id: 'apple-iphone-11-128gb-purple',
  //     namespaceId: 'apple-iphone-11',
  //     name: 'Apple iPhone 11 128GB Purple',
  //     capacityAvailable: ['64GB', '128GB', '256GB'],
  //     capacity: '128GB',
  //     priceRegular: 1100,
  //     priceDiscount: 1050,
  //     colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  //     color: 'purple',
  //     images: [
  //       'img/phones/apple-iphone-11/purple/00.webp',
  //       'img/phones/apple-iphone-11/purple/01.webp',
  //       'img/phones/apple-iphone-11/purple/02.webp',
  //       'img/phones/apple-iphone-11/purple/03.webp',
  //       'img/phones/apple-iphone-11/purple/04.webp',
  //     ],
  //     description: [
  //       {
  //         title: 'And then there was Pro',
  //         text: [
  //           'A transformative triple-camera system that adds tons of capability without complexity.',
  //           'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
  //         ],
  //       },
  //       {
  //         title: 'Camera',
  //         text: [
  //           'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
  //         ],
  //       },
  //       {
  //         title:
  //           'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
  //         text: [
  //           'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
  //         ],
  //       },
  //     ],
  //     screen: "6.1' IPS",
  //     resolution: '1792x828',
  //     processor: 'Apple A13 Bionic',
  //     ram: '4GB',
  //     camera: '12 Mp + 12 Mp + 12MP',
  //     zoom: 'Digital, 5x',
  //     cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  //   },
  //   {
  //     id: 'apple-iphone-11-128gb-purple',
  //     namespaceId: 'apple-iphone-11',
  //     name: 'Apple iPhone 11 128GB Purple',
  //     capacityAvailable: ['64GB', '128GB', '256GB'],
  //     capacity: '128GB',
  //     priceRegular: 1100,
  //     priceDiscount: 1050,
  //     colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  //     color: 'purple',
  //     images: [
  //       'img/phones/apple-iphone-11/purple/00.webp',
  //       'img/phones/apple-iphone-11/purple/01.webp',
  //       'img/phones/apple-iphone-11/purple/02.webp',
  //       'img/phones/apple-iphone-11/purple/03.webp',
  //       'img/phones/apple-iphone-11/purple/04.webp',
  //     ],
  //     description: [
  //       {
  //         title: 'And then there was Pro',
  //         text: [
  //           'A transformative triple-camera system that adds tons of capability without complexity.',
  //           'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
  //         ],
  //       },
  //       {
  //         title: 'Camera',
  //         text: [
  //           'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
  //         ],
  //       },
  //       {
  //         title:
  //           'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
  //         text: [
  //           'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
  //         ],
  //       },
  //     ],
  //     screen: "6.1' IPS",
  //     resolution: '1792x828',
  //     processor: 'Apple A13 Bionic',
  //     ram: '4GB',
  //     camera: '12 Mp + 12 Mp + 12MP',
  //     zoom: 'Digital, 5x',
  //     cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  //   },
  //   {
  //     id: 'apple-iphone-11-128gb-purple',
  //     namespaceId: 'apple-iphone-11',
  //     name: 'Apple iPhone 11 128GB Purple',
  //     capacityAvailable: ['64GB', '128GB', '256GB'],
  //     capacity: '128GB',
  //     priceRegular: 1100,
  //     priceDiscount: 1050,
  //     colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  //     color: 'purple',
  //     images: [
  //       'img/phones/apple-iphone-11/purple/00.webp',
  //       'img/phones/apple-iphone-11/purple/01.webp',
  //       'img/phones/apple-iphone-11/purple/02.webp',
  //       'img/phones/apple-iphone-11/purple/03.webp',
  //       'img/phones/apple-iphone-11/purple/04.webp',
  //     ],
  //     description: [
  //       {
  //         title: 'And then there was Pro',
  //         text: [
  //           'A transformative triple-camera system that adds tons of capability without complexity.',
  //           'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
  //         ],
  //       },
  //       {
  //         title: 'Camera',
  //         text: [
  //           'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
  //         ],
  //       },
  //       {
  //         title:
  //           'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
  //         text: [
  //           'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
  //         ],
  //       },
  //     ],
  //     screen: "6.1' IPS",
  //     resolution: '1792x828',
  //     processor: 'Apple A13 Bionic',
  //     ram: '4GB',
  //     camera: '12 Mp + 12 Mp + 12MP',
  //     zoom: 'Digital, 5x',
  //     cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  //   },
  //   {
  //     id: 'apple-iphone-11-128gb-purple',
  //     namespaceId: 'apple-iphone-11',
  //     name: 'Apple iPhone 11 128GB Purple',
  //     capacityAvailable: ['64GB', '128GB', '256GB'],
  //     capacity: '128GB',
  //     priceRegular: 1100,
  //     priceDiscount: 1050,
  //     colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  //     color: 'purple',
  //     images: [
  //       'img/phones/apple-iphone-11/purple/00.webp',
  //       'img/phones/apple-iphone-11/purple/01.webp',
  //       'img/phones/apple-iphone-11/purple/02.webp',
  //       'img/phones/apple-iphone-11/purple/03.webp',
  //       'img/phones/apple-iphone-11/purple/04.webp',
  //     ],
  //     description: [
  //       {
  //         title: 'And then there was Pro',
  //         text: [
  //           'A transformative triple-camera system that adds tons of capability without complexity.',
  //           'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
  //         ],
  //       },
  //       {
  //         title: 'Camera',
  //         text: [
  //           'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
  //         ],
  //       },
  //       {
  //         title:
  //           'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
  //         text: [
  //           'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
  //         ],
  //       },
  //     ],
  //     screen: "6.1' IPS",
  //     resolution: '1792x828',
  //     processor: 'Apple A13 Bionic',
  //     ram: '4GB',
  //     camera: '12 Mp + 12 Mp + 12MP',
  //     zoom: 'Digital, 5x',
  //     cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  //   },
  // ];

  // const specs = {
  //   id: 'apple-iphone-11-128gb-black',
  //   namespaceId: 'apple-iphone-11',
  //   name: 'Apple iPhone 11 128GB Black',
  //   capacityAvailable: ['64GB', '128GB', '256GB'],
  //   capacity: '128GB',
  //   priceRegular: 1100,
  //   priceDiscount: 1050,
  //   colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  //   color: 'black',
  //   screen: "6.1' IPS",
  //   resolution: '1792x828',
  //   processor: 'Apple A13 Bionic',
  //   ram: '4GB',
  //   camera: '12 Mp + 12 Mp + 12MP',
  //   zoom: 'Digital, 5x',
  //   cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  // };

  // const [size, setSize] = useState(getResizeValue);

  window.addEventListener('resize', () => {
    // setSize(getResizeValue);
  });
  return (
    <>
      {/* <ProductCardSpecs
        specifications={[
          ['Screen', '6inches'],
          ['Capacity', '64GB'],
        ]}
      /> */}
      {/* <ProductsCarousel
        title="Brand new models"
        products={product}
        displayedSlides={size}
        productCardHeight={440}
      /> */}
      {/* <PromoCarousel
        banners={BANNERS}
        squareBanners={SQUARE_BANNERS}
      /> */}
      {/* <AvailableColors
        colors={[
          'black',
          'green',
          'starlight',
          'spacegray',
          'midnightgreen',
          'gold',
          'yellow',
          'white',
          'purple',
          'red',
        ]}
        handleClick={() => {}}
        isSelected={'green'}
      />
      <SelectCapacity
        availableCapacities={['64GB', '256GB', '512GB']}
        selectedCapacity="64GB"
        handleClick={() => {}}
      /> */}

      {/* <ProductConfigurator
        productColors={productColors}
        selectedColor="green"
        availableCapacities={['64GB', '256GB', '512GB']}
        selectedCapacity="256GB"
        currentPrice={product[0].priceRegular}
        isSelected={false}
        isLiked={false}
        product={product[0]}
        handleCapacitySelect={() => {}}
        handleColorSelect={() => {}}
        handleLikeClick={() => {}}
        handleSelectClick={() => {}}
      /> */}

      {/* <div className="pb-50">,</div> */}
      {/* <ProductItemLayout
        header={<Header />}
        pageProductDetails={<div className="bg-black">hello</div>}
        productGallery={<div className="bg-yellow">gallery</div>}
        productConfigurator={
          <ProductConfigurator
            productColors={productColors}
            selectedColor="green"
            availableCapacities={['64GB', '256GB', '512GB']}
            selectedCapacity="256GB"
            currentPrice={product[0].priceRegular}
            isSelected={false}
            isLiked={false}
            product={product[0]}
            handleCapacitySelect={() => {}}
            handleColorSelect={() => {}}
            handleLikeClick={() => {}}
            handleSelectClick={() => {}}
          />
        }
        productAbout={
          <ProductAbout
            description={[
              {
                title: 'And then was a Pro',
                text: [
                  'A transformative triple-camera system that adds tons of capability without complexity.',
                  'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
                ],
              },
              {
                title: 'Camera',
                text: [
                  'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
                ],
              },
              {
                title:
                  'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
                text: [
                  'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
                ],
              },
            ]}
          />
        }
        techSpecs={
          <PhoneTechSpecs>
            <PhoneSpecsTable specs={specs} />
          </PhoneTechSpecs>
        }
        productsCarousel={
          <ProductsCarousel
            title="Brand new models"
            products={product}
            displayedSlides={size}
            productCardHeight={440}
          />
        }
        footer={<Footer />}
      /> */}
      <CartLayout
        header={<Header />}
        pageTopPart={<div className="bg-amber-300">hello</div>}
        productSelectedItems={
          <CartItem
            image={`/${product.images[0]}`}
            title={product.name}
            price={product.priceDiscount * quantity}
            quantity={quantity}
            productPath={`/phones/${product.id}`}
            onRemove={() => setIsItemVisible(false)}
            onQuantityChange={setQuantity}
          />
        }
        productCart={<Checkout />}
        footer={<Footer />}
      />
    </>
  );
};
