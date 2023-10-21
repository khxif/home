import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "../components/Header/Header";
import HomeIcon from "/HomeIcon.svg";
import PhoneIcon from "/PhoneIcon.svg";
import MailIcon from "/MailIcon.svg";
import FacebookIcon from "/FacebookIcon.svg";
import TwitterIcon from "/TwitterIcon.svg";
import GoogleIcon from "/GoogleIcon.svg";
import InstagramIcon from "/InstagramIcon.svg";
import YoutubeIcon from "/YoutubeIcon.svg";
import { toast } from "sonner";
import MapView from "../components/Contact/MapView";

export default function Contact() {
  const formSchema = z.object({
    name: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    phone: z.string().min(1, "Enter a valid Phone number"),
    subject: z.string().min(1, "Enter the subject"),
    message: z.string().min(2, "Enter a meaningful message"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    try {
      console.log(data);
      toast.success("We will be contacting you soon...");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-4 md:py-6 md:px-0">
        <section className="flex flex-col justify-center md:space-x-32 md:flex-row md:justify-between">
          <div>
            <div>
              <h1 className="text-2xl font-bold leading-10 md:text-3xl">
                Contact Us
              </h1>
              <p className="py-2 text-sm text-[#5D5F5F] md:w-[600px]">
                We love to hear from you, so if there’s anything you’d like to
                ask us, we’re right here and ready to help in every way we can.
              </p>
            </div>
            {/* FORM */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col  space-y-4 py-4"
            >
              <div className="grid grid-cols-1 gap-x-4 sm:gap-x-6 gap-y-4 md:grid-cols-2">

                <div className="flex flex-col">
                  <span className="flex items-center justify-between">
                    <label className="label">Your Name</label>
                    {errors.name && (
                      <label className="label text-xs text-red-600 md:text-sm">
                        {errors?.name?.message}
                      </label>
                    )}
                  </span>
                  <input
                    type="text"
                    placeholder="ex: Julie Sample "
                    {...register("name")}
                    disabled={isSubmitting}
                    className="input-sm py-4 sm:py-6 rounded-full border border-gray-400 disabled:input-disabled 
                   sm:input-md"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="flex items-center justify-between">
                    <label className="label">Your Email</label>
                    {errors?.email && (
                      <label className="label text-xs text-red-600 md:text-sm">
                        {errors?.email?.message}
                      </label>
                    )}
                  </span>
                  <input
                    type="email"
                    placeholder="ex: julie@gmail.com"
                    {...register("email")}
                    disabled={isSubmitting}
                    className="input-sm py-4 sm:py-6 rounded-full border border-gray-400 sm:input-md"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="flex items-center justify-between">
                    <label className="label">Your Phone</label>
                    {errors?.phone && (
                      <label className="label text-sm text-red-600">
                        {errors?.phone?.message}
                      </label>
                    )}
                  </span>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="ex: +1 234 455 5564"
                    disabled={isSubmitting}
                    className="input-sm py-4 sm:py-6 rounded-full border border-gray-400 sm:input-md"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="flex items-center justify-between">
                    <label className="label">Subject</label>
                    {errors?.subject && (
                      <label className="label text-xs text-red-600 md:text-sm">
                        {errors?.subject?.message}
                      </label>
                    )}
                  </span>
                  <input
                    type="text"
                    placeholder="ex: return"
                    {...register("subject")}
                    disabled={isSubmitting}
                    className="input-sm py-4 sm:py-6 rounded-full border border-gray-400 sm:input-md"
                  />
                </div>
                <div className="col-span-2 row-span-2 w-full">
                  <span className="flex items-center justify-between">
                    <label className="label">Message</label>
                    {errors?.message && (
                      <label className="label text-xs text-red-600 md:text-sm">
                        {errors?.message?.message}
                      </label>
                    )}
                  </span>
                  <textarea
                    className="textarea textarea-bordered w-full 
                text-base focus:border-0 focus:outline-black focus:ring-offset-0"
                    placeholder="Write your message here."
                    {...register("message")}
                    disabled={isSubmitting}
                    rows={5}
                  />
                </div>
              </div>
              <button
                disabled={isSubmitting}
                className="btn-circle btn-wide ml-auto bg-black text-white disabled:btn-disabled 
                hover:opacity-75 disabled:opacity-50"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="mx-auto w-full py-10 md:mt-4 md:space-y-3">
            <h2 className="text-sm font-bold">WORKING HOURS</h2>
            <p className="text-sm font-normal text-[#5D5F5F]">
              Monday – Friday, 9:00am – 5:00pm PST.
            </p>
            <div className="space-y-4 py-3">
              <span className="flex items-center space-x-1">
                <img src={HomeIcon} />
                <p className="text-sm font-normal text-[#5D5F5F]">
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
              </span>
              <span className="flex items-center space-x-1">
                <img src={PhoneIcon} />
                <p className="text-sm font-normal text-[#5D5F5F]">
                  (800) 8001-8588, (0600) 874 548
                </p>
              </span>
              <span className="flex items-center space-x-1">
                <img src={MailIcon} />
                <p className="text-sm font-normal text-[#5D5F5F]">
                  (800) 8001-8588, (0600) 874 548
                </p>
              </span>
            </div>
            <h2 className="text-sm font-bold">JOIN US</h2>
            <p className="text-sm font-normal text-[#5D5F5F]">
              We are happily open new colloboration. You can ask any questions
              and offer problems by phone, email, Instagram or Facebook.
            </p>
            <span className="flex w-full space-x-3 py-2">
              <img src={FacebookIcon} />
              <img src={GoogleIcon} />
              <img src={InstagramIcon} />
              <img src={TwitterIcon} />
              <img src={YoutubeIcon} />
            </span>
          </div>
        </section>

        <section>
          <MapView />
        </section>
      </main>
    </>
  );
}
