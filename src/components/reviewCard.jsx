const ReviewCard = ({ review, srcImg, name, datee }) => {
  return (
    <div className="w-full md:w-[48%] lg:w-[30%] bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-center mb-3">
        <img
          className="w-12 h-12 rounded-full mr-3"
          src={srcImg}
          alt={`Avatar de ${name}`}
          loading="lazy"
        />
        <div>
          <p className="text-gray-900 font-semibold">{name}</p>
          <p className="text-gray-500 text-sm">{datee}</p>
        </div>
        
      </div>
      <p className="text-gray-700 text-start italic">"{review}"</p>
    </div>
  );
};
export default ReviewCard;