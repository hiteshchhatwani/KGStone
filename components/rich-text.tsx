function parseInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function RichText({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 leading-relaxed text-foreground/90">
      {paragraphs.map((p, i) => {
        const isBullet = p.trim().startsWith("• ");
        return (
          <p key={i} className={isBullet ? "pl-4" : undefined}>
            {parseInline(p)}
          </p>
        );
      })}
    </div>
  );
}
