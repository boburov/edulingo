import Link from "next/link";

const page = () => {
  return (
    <div className="container min-h-screen flex items-center justify-center">
      <div className="border border-gray-300 p-10 rounded-xl bg-green-50 max-w-lg text-center flex flex-col gap-5">
        <h2>
          Biz sining emailingiz asdashd ga link yubordik u orqali siz royxatdan
          otishni yakunlashingiz mumkun
        </h2>
        <Link
          href={`http://mail.google.com/`}
          className="px-5 pt-2 pb-1.5 bg-red-400 rounded-xl mt-3"
        >
          Emailni ochish
        </Link>
      </div>
    </div>
  );
};

export default page;
