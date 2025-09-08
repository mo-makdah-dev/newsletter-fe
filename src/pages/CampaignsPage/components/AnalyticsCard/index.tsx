type Props = {
  value: number;
  isPercentage: boolean;
  title: string;
  Icon: React.ReactNode;
};

export const AnalyticsCard = ({ value, isPercentage, title, Icon }: Props) => {
  const valueDisplay = isPercentage ? `${value}%` : value;
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
      <div className="flex items-center">
        <div className="p-3 bg-red-500 rounded-lg">{Icon}</div>
        <div className="ml-4">
          <p className="text-lg font-bold text-gray-900">{valueDisplay}</p>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
};
