type ServiceCardProps = {
  title: string;
  description: string;
};

/** Kompakte Leistungsvorschau-Karte. */
export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-brand-800">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </article>
  );
}
