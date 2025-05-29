"use client";
import Image from "next/image";

interface RecommendationCardsProps {
  title: string;
  recommendations: {
    text: string;
    name: string;
    role: string;
    image: {
      src: string;
      alt: string;
    };
  }[];
}

const RecommendationCards = ({
  title,
  recommendations,
}: RecommendationCardsProps) => {
  return (
    <section
      id="recommendations"
      className="flex items-center justify-center p-12 w-full bg-white-secondary dark:bg-black-secondary border-b-4 border-primary border-dashed"
    >
      <div className="md:w-lg sm:w-sm dark:border-tertiary">
        <h2 className="text-primary text-3xl font-bold mb-4">{title}</h2>

        <div className="flex flex-col space-y-6 mb-8 border border-gray-200 rounded-lg shadow-xs dark:border-gray-700 bg-tertiary dark:bg-gray-800 p-6">
          {recommendations.map((recommendation) => (
            <figure
              key={`recommendation-${recommendation.name}`}
              className="flex flex-col items-center text-center bg-tertiary border-b border-primary dark:bg-gray-800 dark:border-gray-700 pb-6 last:border-b-0"
            >
              <blockquote className="max-w-2xl mx-auto mb-4 text-black-secondary dark:text-gray-400">
                <p className="my-4 text-justify">{recommendation.text}</p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-4">
                <Image
                  width={0}
                  height={0}
                  className="rounded-full w-24 h-24"
                  src={recommendation.image.src}
                  alt={recommendation.image.alt}
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left ms-3">
                  <h3 className="text-lg ">{recommendation.name}</h3>
                  <div className="text-md italic dark:text-gray-400">
                    {recommendation.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationCards;