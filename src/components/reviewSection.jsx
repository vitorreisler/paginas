const ReviewSection = ({ review, srcImg, name, datee }) => {
  return (
    <div className="  w-full lg:flex ">
      <div className=" flex-none  bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="flex items-center w-1/3">
          <div>
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={srcImg}
                alt={`Avatar of ${name} `}
              />
          </div>
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{name}</p>
            <p className="text-gray-600">{datee}</p>
          </div>
        </div>
        <div className="mb-6 w-1/2">
          <p className="text-gray-700 text-base">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
