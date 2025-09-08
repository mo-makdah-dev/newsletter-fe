type Props = {
  label: string;
  color: string;
};

export const Pill = ({ label, color }: Props) => {
  return (
    <div
      className={`px-2 rounded-full text-white`}
      style={{ background: color }}
    >
      {label}
    </div>
  );
};
