export default function ColorSelector() {
  return (
    <div className="flex w-full items-center justify-center space-x-2">
      <span className="flex h-4 w-4 cursor-pointer rounded-full bg-red-800" />
      <span className="flex h-4 w-4 cursor-pointer rounded-full bg-gray-800" />
      <span className="flex h-4 w-4 cursor-pointer rounded-full bg-red-800" />
      <span className="flex h-4 w-4 cursor-pointer rounded-full bg-blue-800" />
      <span className="flex h-4 w-4 cursor-pointer rounded-full bg-green-500" />
    </div>
  );
}
