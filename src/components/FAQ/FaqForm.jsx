import React from "react";
import Button from "../../shared/Button/Button";
import { toast } from "react-toastify";

const FaqForm = () => {
  const handleMessageSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    if (name) {
      toast.success("Successfully sent");
      event.target.reset();
    }
  };
  return (
    <div>
      <div className="w-full bg-white rounded-lg md:p-6 ">
        <h2 className="text-xl md:text-xl lg:text-2xl font-semibold mb-8">
          Do you have any questions?
        </h2>
        <form
          onSubmit={handleMessageSubmit}
          className="w-full flex flex-col gap-4"
          action=""
        >
          <div className="flex flex-col lg:flex-row items-center gap-[32px]">
            <input
              className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
              type="text"
              name="name"
              id="name"
              placeholder="Full name"
              required={true}
            />
            <input
              className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              required={true}
            />
          </div>
          <div className="">
            <textarea
              className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Message"
              required={true}
            ></textarea>
          </div>
          <Button type="submit" category="primary">
            Submit Now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FaqForm;
