import { FaSearch } from "react-icons/fa";
import { FiFilter, FiPaperclip } from "react-icons/fi";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function SearchBar() {
  return (
    <div className="mt-4 flex items-center gap-6 rounded-md">
      {/* Search Input */}
      <div className="relative flex-1">
        <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 transform" />
        <input
          type="text"
          placeholder="Search for order ID, customer, order status or something..."
          className="w-full rounded-md border py-2 pl-10 pr-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filter Button */}
      <button className="flex items-center rounded-md border bg-white p-2 shadow-md transition ease-out hover:scale-110 hover:bg-gray-200">
        <FiFilter className="mr-1" />
        Filters
      </button>

      {/* Attachment Button */}
      <button className="flex items-center rounded-md border bg-white p-2 shadow-md transition ease-out hover:scale-110 hover:bg-gray-200">
        <FiPaperclip className="mr-1" />
        Attachment
      </button>

      {/* Export Button */}
      <button className="flex items-center rounded-md border bg-white p-2 shadow-md transition ease-out hover:scale-110 hover:bg-gray-200">
        <HiOutlineDocumentDownload className="mr-1" />
        Export
      </button>
    </div>
  );
}
