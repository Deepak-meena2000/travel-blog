import { ListTodo, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

const OverViewSection = ({
  overview,
  IconName,
}: {
  overview: string;
  IconName: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}) => {
  const IconComponent = IconName;
  return (
    <section>
      <div
        className="flex items-center gap-6 rounded-2xl shadow-xl p-8 backdrop-blur-md bg-white/60 border border-white/40"
        style={{
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
          borderRadius: 24,
          background: "linear-gradient(180deg, #FFF 0%, #FFF4F3 100%)",
          backdropFilter: "blur(32px)",
          border: "1px solid #672C2C",
        }}
      >
        <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-red-700/50 shadow-md">
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <span className="text-base md:text-lg text-gray-700 font-normal leading-relaxed">
            {overview}
          </span>
        </div>
      </div>
    </section>
  );
};

export default OverViewSection;
