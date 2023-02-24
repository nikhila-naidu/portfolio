import Image from 'next/image';
import PersonalInfo from './PersonalInfo';

const index = () => {
  return (
    <div className='grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center'>
      {/* start .col and routePath image left */}
      <div className='col-span-12 md:col-span-4'>
        {/* personal images for routePath page  */}
        <Image
          className='square-full'
          src='/images/about/about.jpeg'
          width={700}
          height={300}
          alt='routePath'
        />
      </div>
      {/* End .col and routePath image left */}

      {/* Start about right content */}
      <div className='col-span-12 md:col-span-8 space-y-2.5'>
        <div className=' md:mr-12 xl:mr-16'>
          <h3 className='text-4xl font-medium dark:text-white mb-2.5 '>
            Who am i?
          </h3>
          <p className='text-gray-lite  dark:text-color-910 leading-7'>
            I&apos;m a doctor who graduated from GITAM University,
            Visakhapatnam. During my Internship, I started learning about web
            development basics and quickly grasped a grip on technologies like
            HTML, CSS, and Javascript. This knowledge enabled me to create my
            projects using technologies like MERN Stack, React and NextJs, and I
            became a FullStack Developer.
          </p>
          <p className='text-gray-lite leading-7 mt-2.5 dark:text-color-910'>
            {/* My aim is to bring across your message and identity in the most
            creative way. I created web design for many famous brand companies. */}
          </p>
        </div>

        {/* personal information */}
        <div>
          <h3 className='text-4xl font-medium my-5 dark:text-white'>
            Personal Info
          </h3>
          <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <PersonalInfo />
          </div>
        </div>
        {/* End personal information */}
      </div>
      {/* End about right content */}
    </div>
  );
};

export default index;
