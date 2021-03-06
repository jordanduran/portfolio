import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
    <Disclosure as='nav' className='bg-white'>
      {({ open }) => (
        <>
          <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-12'>
              <div className='flex'>
                <div className='flex-shrink-0 flex items-center'>
                  <h1 className='text-blue-700 text-xl font-bold'>
                    Jordan Duran
                  </h1>
                </div>
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  <Link
                    className='border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer'
                    activeClass='active'
                    to='hero-section'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Home
                  </Link>
                  <Link
                    className='border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer'
                    activeClass='active'
                    to='projects-section'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Projects
                  </Link>
                  <Link
                    className='border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer'
                    activeClass='active'
                    to='blog-section'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Blog
                  </Link>
                </div>
              </div>
              <div className='-mr-2 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='pt-2 pb-3 space-y-1'>
              <Link
                className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium cursor-pointer'
                activeClass='active'
                to='hero-section'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
              <Link
                className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium cursor-pointer'
                activeClass='active'
                to='projects-section'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
              <Link
                className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium cursor-pointer'
                activeClass='active'
                to='blog-section'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Blog
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
