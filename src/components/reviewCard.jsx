import Image from "next/image";

const ReviewCard = ({ review, srcImg, name, datee }) => {
  return (
    <article
      className="w-full md:w-[48%] lg:w-[30%] bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
      itemScope
      itemType="https://schema.org/Review"
    >
      <div className="flex items-center mb-3">
        <Image
          className="w-12 h-12 rounded-full mr-3"
          src={srcImg}
          alt={`Avatar de ${name}`}
          width={48}
          height={48}
        />
        <div>
          <p className="text-gray-900 font-semibold" itemProp="author">
            {name}
          </p>
          <p className="text-gray-500 text-sm" itemProp="datePublished">
            {datee}
          </p>
        </div>
      </div>
      <p className="text-gray-700 text-start italic" itemProp="reviewBody">
        <span className="sr-only">Avaliação: </span>
        &quot;{review}&quot;
      </p>
    </article>
  );
};
export default ReviewCard;
