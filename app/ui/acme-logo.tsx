// import { GlobeAltIcon } from '@heroicons/react/24/outline';
// // import { lusitana } from '././app/ui/fonts';
// import { Montserrat } from 'next/font/google'

// export default function AcmeLogo() {
//   return (
//     <div
//       className={`${Montserrat.className} flex flex-row items-center leading-none text-white`}
//     >
//       <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
//       <p className="text-[44px]">Acme</p>
//     </div>
//   );
// }
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { Montserrat } from 'next/font/google';

const montserratFont = Montserrat({ subsets: ['latin'] }); // Asignar la carga de la fuente a una constante

export default function AcmeLogo() {
  return (
    <div className={`${montserratFont.className} flex flex-row items-center leading-none text-white`}>
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
