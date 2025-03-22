import formatDateRangeText from "@/utils/formatDateRangeText";
import formatParagraph from "@/utils/formatParagraph";
interface TimelineProps {
  title: string;
  techText: string;
  experiences: {
    companyName: string;
    website: string;
    role: string;
    startDate: string;
    endDate?: string;
    description: string;
    stack: string[];
  }[];
}

const Timeline = ({ title, techText, experiences }: TimelineProps) => {
  return (
    <div className="w-full bg-white-secondary dark:bg-black-secondary flex flex-col items-center justify-center p-12 border-y-4 border-primary border-dashed">
      <h2 id="experience" className="text-primary text-3xl font-bold mb-4">
        {title}
      </h2>
      <ol className="relative md:w-lg sm:w-sm border-s-2 border-primary dark:border-tertiary">
        {experiences.map((experience, index) => (
          <li key={index} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-primary dark:bg-tertiary rounded-full mt-1.5 -start-1.5"></div>
            <time className="mb-1 text-sm font-normal leading-none text-primary dark:text-tertiary">
              {formatDateRangeText(experience.startDate, experience.endDate)}
            </time>
            <h3 className="text-lg font-semibold text-primary">{experience.role}</h3>

            <p className="text-primary text-sm">
              <span className="font-semibold">{experience.companyName}</span> -{" "}
              <a className="text-primary underline" href={experience.website}>
                {experience.website}
              </a>
            </p>

            <div className="mb-4 ml-5 text-base font-normal text-black-secondary dark:text-white-secondary">
              {formatParagraph(experience.description)}
            </div>
            {experience.stack && experience.stack.length > 0 && (
              <div className="mt-2">
                <h4 className="text-sm font-semibold text-primary">
                  {techText}
                </h4>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {experience.stack.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="px-2 py-1 text-sm text-white-secondary bg-primary rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
