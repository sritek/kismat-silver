interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-8 md:mb-16">
      <span className="text-primary text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold block mb-2 md:mb-3">
        {subtitle}
      </span>
      <h2 className="font-serif text-2xl md:text-4xl text-gray-900">
        {title}
      </h2>
    </div>
  );
}

