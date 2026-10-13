// import type { EmblaOptionsType } from 'embla-carousel';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// // import { useAutoplay } from './EmblaCarouselAutoplay';
// // import { usePrevNextButtons } from './EmblaCarouselArrowButtons';
// // import { ButtonIcon } from '../../../atoms/Buttons/ButtonIcon';
// // import { Icon } from '../../../atoms/Icon/Icon';
// // import { ICONS } from '../../../../constants/icons';

// type PropType = {
//   slides: number[];
//   options?: EmblaOptionsType;
// };

// const EmblaCarousel = (props: PropType) => {
//   const { slides, options } = props;
//   // const [emblaRef, emblaApi] = useEmblaCarousel(options, [
//   //   Autoplay({ delay: 3000 }),
//   // ]);

//   // const {
//   //   prevBtnDisabled,
//   //   nextBtnDisabled,
//   //   onPrevButtonClick,
//   //   onNextButtonClick,
//   // } = usePrevNextButtons(emblaApi);

//   return (
//     <div className="embla">
//       <div
//         className="embla__viewport"
//         ref={emblaRef}
//       >
//         <div className="embla__container">
//           {slides.map((index) => (
//             <div
//               className="embla__slide"
//               key={index}
//             >
//               <div className="embla__slide__number">
//                 <span>{index + 1}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="embla__controls">
//         <div className="embla__buttons">
//           {/* <ButtonIcon
//             className='w-8 h-8'
//             handleClick={() => onAutoplayButtonClick(onPrevButtonClick)}
//             isDisabled={prevBtnDisabled}
//           >
//             <Icon src={ICONS.ARROW.LEFT} />
//           </ButtonIcon>
//           <ButtonIcon
//             className='w-8 h-8'
//             handleClick={() => onAutoplayButtonClick(onNextButtonClick)}
//             isDisabled={nextBtnDisabled}
//           >
//             <Icon src={ICONS.ARROW.RIGHT} />
//           </ButtonIcon> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmblaCarousel;
