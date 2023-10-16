import { twMerge } from "tailwind-merge";

// eslint-disable-next-line react/prop-types
export default function ColorSelector({className}) {
  return (
    <div className={twMerge("flex w-full items-center justify-center space-x-2",className)}>
      <span className="flex h-4 w-4 cursor-pointer rounded-full bg-red-800" />
      <span className="flex h-4 w-4 cursor-pointer rounded-full bg-gray-800" />
      <span className="flex h-4 w-4 cursor-pointer rounded-full bg-red-800" />
      <span className="flex h-4 w-4 cursor-pointer rounded-full bg-blue-800" />
      <span className="flex h-4 w-4 cursor-pointer rounded-full bg-green-500" />
    </div>
  );
}
