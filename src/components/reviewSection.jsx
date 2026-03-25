import { reviewData } from "@/data/reviewData";
import ReviewCard from "./reviewCard";

const ReviewSection = ({ curso }) => {
  const reviewsFiltradas = reviewData.filter(
    (item) => item.cursoQueAparece === curso,
  );

  if (!reviewsFiltradas || reviewsFiltradas.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#e3d7bf] py-10">
      <h2 className="text-4xl text-center p-3 mb-5 md:text-6xl story-script-regular bg-[#e5e3d8]">
            Reviews
          </h2>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-stretch gap-6 max-w-6xl mx-auto">
        {reviewsFiltradas.map((item) => (
          <ReviewCard
            key={item.id}
            review={item.review}
            srcImg={item.srcImg}
            name={item.name}
            datee={item.datee}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
