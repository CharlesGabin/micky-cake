const Title = ({ title }) => {
  return (
    <div className="pt-20 px-4 w-[90%]">
      <h1 className="font-pacifico md:text-4xl text-3xl underline text-primary-color2 pb-4">
        {title}
      </h1>
    </div>
  );
};

export default Title;
