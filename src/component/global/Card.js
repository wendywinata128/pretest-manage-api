const Card = ({ className, child }) => {
  return (
    <div
      className={`card w-96 mx-4 p-8 bg-white white-shadow rounded-md flex flex-col items-center ${className}`}
    >
      {child}
    </div>
  );
};

export default Card;
