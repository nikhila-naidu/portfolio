import { MdOutlineBusinessCenter, MdOutlineSchool } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';

module.exports = [
  {
    id: 1,
    title: 'Education',
    icon: <MdOutlineBusinessCenter />,
    items: [
      {
        id: 1,
        date: 'Present',
        title: 'FullStack Developer',
        place: 'Visakhapatnam',
        bg: '#FFF4F4',
      },

      {
        id: 2,
        date: '2017-2022',
        title: 'Bachelor of Dental surgery',
        place: 'GITAM Dental College and Hospital',
        bg: '#FFF1FB',
      },

      {
        id: 3,
        date: '2021',
        title: 'Best Developer ',
        place: 'University Of Melbourne, NA',
        bg: '#FFF4F4',
      },
    ],
  },
  {
    id: 2,
    title: 'Experience',
    icon: <MdOutlineSchool />,
    items: [
      {
        id: 1,
        date: '2021-2022',
        title: 'Dental Camps',
        place: 'Visakhapatnam',
        bg: '#EEF5FA',
      },

      {
        id: 2,
        date: '2019-2021',
        title: 'Clinical Postings ',
        place: 'GITAM Dental College and Hospital',
        bg: '#F2F4FF',
      },

      {
        id: 3,
        date: '2017-2019',
        title: 'Pre-Clinical Postings',
        place: 'GITAM Dental College and Hospital',
        bg: '#EEF5FA',
      },
    ],
  },
  {
    id: 3,
    title: 'Projects',
    icon: <FaAward />,
    items: [
      {
        id: 1,
        date: '2015-2017',
        title: ' Todo App ',
        place: (
          <>
            <a href='https://todo.nikhila.dev/'>Todolist</a>
          </>
        ),
        bg: '#FCF4FF',
      },

      {
        id: 2,
        date: '2014 - 2015',
        title: 'Mern',
        place: (
          <>
            <p>
              <a href='/mern'>Mern</a>
            </p>
          </>
        ),
        bg: '#FCF9F2',
      },

      {
        id: 3,
        date: '2015-2017',
        title: 'Coffee Connoisseur',
        place: (
          <>
            <p>
              <a href='/coffee-connoisseur'>coffee</a>
            </p>
          </>
        ),
        bg: '#FCF4FF',
      },
    ],
  },
];
