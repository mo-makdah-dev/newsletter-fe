import { ClipLoader } from "react-spinners";

type Props = {
  isLoading: boolean;
  color?: string;
};

export const PageLoader = ({ isLoading, color }: Props) => {
  if (!isLoading) return null;
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-[2]">
      <ClipLoader color={color} size={50} />
    </div>
  );
};
