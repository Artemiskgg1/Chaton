const MessageSkeleton = () => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="skeleton w-12 h-12 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-1 w-48 h-14">
          <div className="skeleton h-6 w-48 "></div>
          <div className="skeleton h-6 w-48"></div>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-end h-14">
        <div className="flex flex-col gap-1 ">
          <div className="skeleton h-6 w-48"></div>
        </div>
        <div className="skeleton w-12 h-12 rounded-full shrink-0"></div>
      </div>
    </>
  );
};
export default MessageSkeleton;
