const Tag = () => {
  const tagList = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Zustand',
    'Typescript',
    'GraphCMS',
    'Axios',
    'React Query',
    'Hasura',
    'Firebase',
    'NodeJS',
    'MongoDB',
    'Express',
    'Mongoose',
  ];
  return (
    <>
      {tagList.map((tag, i) => (
        <button className='resume-btn text-[15px]' key={i}>
          {tag}
        </button>
      ))}
    </>
  );
};

export default Tag;
