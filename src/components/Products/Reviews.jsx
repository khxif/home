import Select from "react-select";
import ReactStars from "react-rating-stars-component";
import ReactPaginate from "react-paginate";

export default function Reviews() {
  const options = [
    { value: "most recent", label: "Most Recent" },
    { value: "top rated", label: "Top Rated" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col space-y-6 py-6 md:flex-row md:space-x-6 md:space-y-0">
      <div className="flex w-full flex-col space-y-2 sm:space-y-6 px-4 md:px-10 ">
        <h1 className="text-center md:text-left md:w-[338px] text-2xl sm:text-3xl font-bold leading-10">
          What people says about this product
        </h1>

        <div className="flex flex-col space-y-2 py-2">
          <span className="flex w-full items-center gap-6">
            <h2 className="text-base font-bold">Sort by</h2>
            <Select
              options={options}
              defaultValue={options[0]}
              className="w-fit py-2 md:w-52"
            />
          </span>

          <div className="space-y-2">
            <div className="flex w-full items-start justify-between py-2">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <img src="/avatar.png" alt="pfp" />
                <span className="">
                  <h2 className="text-base font-bold">Amanda Spencer</h2>
                  <p className="text-xs text-[#B6B8B8]">June 28, 2019</p>
                </span>
              </div>
              <ReactStars
                count={5}
                size={24}
                edit={false}
                value={5}
                activeColor="#E9672B"
              />
            </div>
            <p className="text-sm text-[#5D5F5F]">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda.
            </p>
            <span className="flex space-x-6 py-2">
              <button className="text-sm font-medium">Like</button>
              <button className="text-sm font-medium">Reply</button>
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex w-full items-start justify-between py-2">
              <div className="flex items-center space-x-4">
                <img src="/avatar.png" alt="pfp" />
                <span className="">
                  <h2 className="text-base font-bold">Amanda Spencer</h2>
                  <p className="text-xs text-[#B6B8B8]">June 28, 2019</p>
                </span>
              </div>
              <ReactStars
                count={5}
                size={24}
                edit={false}
                value={5}
                activeColor="#E9672B"
              />
            </div>
            <p className="text-sm text-[#5D5F5F]">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda.
            </p>
            <span className="flex space-x-6 py-2">
              <button className="text-sm font-medium">Like</button>
              <button className="text-sm font-medium">Reply</button>
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex w-full items-start justify-between py-2">
              <div className="flex items-center space-x-4">
                <img src="/avatar.png" alt="pfp" />
                <span className="">
                  <h2 className="text-base font-bold">Amanda Spencer</h2>
                  <p className="text-xs text-[#B6B8B8]">June 28, 2019</p>
                </span>
              </div>
              <ReactStars
                count={5}
                size={24}
                edit={false}
                value={5}
                activeColor="#E9672B"
              />
            </div>
            <p className="text-sm text-[#5D5F5F]">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda.
            </p>
            <span className="flex space-x-6 py-2">
              <button className="text-sm font-medium">Like</button>
              <button className="text-sm font-medium">Reply</button>
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex w-full items-start justify-between py-2">
              <div className="flex items-center space-x-4">
                <img src="/avatar.png" alt="pfp" />
                <span className="">
                  <h2 className="text-base font-bold">Amanda Spencer</h2>
                  <p className="text-xs text-[#B6B8B8]">June 28, 2019</p>
                </span>
              </div>
              <ReactStars
                count={5}
                size={24}
                edit={false}
                value={5}
                activeColor="#E9672B"
              />
            </div>
            <p className="text-sm text-[#5D5F5F]">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda.
            </p>
            <span className="flex space-x-6 py-2">
              <button className="text-sm font-medium">Like</button>
              <button className="text-sm font-medium">Reply</button>
            </span>
          </div>
        </div>

        <div className="flex w-full items-center justify-center px-4">
          <ReactPaginate
            className="flex items-center space-x-4"
            previousClassName="p-2 border border-black font-medium rounded-md"
            nextClassName="p-2 border border-black font-medium rounded-md"
            activeClassName="px-4 py-2 font-medium bg-black text-white rounded-md"
            breakLabel="..."
            nextLabel="Next"
            pageRangeDisplayed={2}
            pageCount={5}
            previousLabel="Prev"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>

      <div className="space-y-5 md:w-[480px] md:space-y-8">
        <div className="mx-auto flex w-full flex-col items-center justify-center space-y-1">
          <ReactStars
            count={5}
            size={24}
            edit={false}
            value={3}
            activeColor="#E9672B"
          />
          <p className="text-left text-sm text-[#5D5F5F]">58 out of 82 (77%)</p>
          <p className="text-sm text-[#5D5F5F]">
            Customers recommended this product
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center space-y-6 bg-[#F4F4F5] p-6"
        >
          <h1 className="py-2 text-center text-2xl font-bold">
            Write a review
          </h1>

          <div className="flex flex-col space-y-2">
            <label className="text-base font-semibold">Your name</label>
            <input
              type="text"
              placeholder="ex: Julie Sample"
              className="input-sm rounded-full border border-gray-400 py-2 sm:input-md sm:py-4"
            />
            <label className="ml-4 text-xs text-[#5D5F5F]">
              *Will be displayed on the comment.
            </label>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-base font-semibold">Your email</label>
            <input
              type="text"
              placeholder="ex: julie@gmail.com"
              className="input-sm rounded-full border border-gray-400 py-2 sm:input-md sm:py-4"
            />
            <label className="ml-4 text-xs text-[#5D5F5F]">
              *Authentication only - we won&apos;t spam you.
            </label>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-base font-semibold">Rating</label>
            <input
              max={5}
              type="number"
              placeholder="Choose rating"
              className="input-sm rounded-full border border-gray-400 py-2 
              sm:input-md placeholder:text-sm placeholder:font-medium placeholder:text-black sm:py-4"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-base font-semibold">Rating</label>
            <textarea
              className="textarea textarea-bordered w-full 
                text-base focus:border-0 focus:outline-black focus:ring-offset-0"
              placeholder="Write your message here."
              rows={5}
            />
          </div>

          <button className="btn-circle w-full  mx-auto my-4 bg-black text-white hover:opacity-75">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
