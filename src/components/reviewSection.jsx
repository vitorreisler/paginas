import { reviewData } from "@/data/reviewData";
import ReviewCard from "./reviewCard";


const ReviewSection = () => {
  return (
     <section className="bg-[#e3d7bf] py-10 px-4">
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-stretch gap-6 max-w-6xl mx-auto">
        {reviewData.map((item) => (
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
