export default function SectionHeading({ subtitle, title, description, align = 'center' }) {
  return (
    <div className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="text-xs tracking-[0.3em] uppercase text-gold font-body font-semibold">
          {subtitle}
        </span>
      )}
      <h2 className="font-heading text-3xl lg:text-5xl mt-3 text-foreground leading-tight" style={{ textWrap: 'balance' }}>
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground font-body max-w-2xl leading-relaxed text-base lg:text-lg mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
