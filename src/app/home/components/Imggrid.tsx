// components/ResponsiveImageGrid.js
import Image from 'next/image';

const images = [
  { src: '/public/car1.jpg', alt: 'Yellow Mini Cooper' },
  { src: '/images/person1.jpg', alt: 'Happy woman in car' },
  { src: '/images/person2.jpg', alt: 'Man in car' },
  { src: '/images/car2.jpg', alt: 'Mercedes parked' },
  { src: '/images/person3.jpg', alt: 'Woman smiling in car' },
];

const ResponsiveImageGrid = () => {
  return (
    <section className="bg-white w-screen">
      <div className="py-4 px-10 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 h-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="/bmw.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
             
            </a>
          </div>

          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
            >
              <img
                 src="/out.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
             
            </a>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="/man.png"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
               
              </a>
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="/lady.png"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                
              </a>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="/cooper.jpeg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
              
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveImageGrid;
