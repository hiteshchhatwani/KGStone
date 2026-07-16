import { DynamicIcon } from "@/lib/icon";

export function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: string;
}) {
  return (
    <div className="glass rounded-2xl p-5 text-center shadow-sm sm:p-6">
      {icon && (
        <DynamicIcon
          name={icon}
          className="mx-auto mb-2 h-5 w-5 text-primary"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      )}
      <p className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">{label}</p>
    </div>
  );
}
