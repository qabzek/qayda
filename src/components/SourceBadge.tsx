export function SourceBadge({ sourceId, organization }: { sourceId?: string; organization?: string }) {
  const isDemo = sourceId === "demo" || !sourceId;

  if (isDemo) {
    return (
      <span className="inline-flex items-center gap-1 border border-flame px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-flame">
        Үлгі дерек
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 border border-ink/30 px-2 py-0.5 text-[10px] uppercase tracking-wide text-ink/60">
      Дереккөз: {organization}
    </span>
  );
}
