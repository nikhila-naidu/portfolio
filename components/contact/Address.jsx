import { useTheme } from 'next-themes';
import Image from 'next/image';
import addressData from '../../data/addressData';

const Address = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {addressData.map((item, i) => (
        <div
          key={i}
          style={{
            background: `${theme === 'dark' ? '#212425' : item?.bg}`,
          }}
          className=' flex-col p-10  border-[#A6A6A6] gap-2 rounded-xl '
        >
          <Image
            src={item.icon}
            width={30}
            height={20}
            alt='icon'
            className='text-4xl dark:text-white pb-2'
          />

          <div>
            <span className='font-semibold dark:text-white '>
              {item?.title} :
            </span>
            <div className='space-y-2'>
              <p>{item?.info}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Address;
