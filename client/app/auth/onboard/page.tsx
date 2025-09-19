import Link from "next/link";

const page = () => {
  return (
    <div className="container min-h-screen items-center justify-center">
      <div className="border border-gray-300">
        <h2>
          Biz sining emailingiz asdashd ga link yubordik u orqali siz royxatdan
          otishni yakunlashingiz mumkun
        </h2>
        <Link href={`http://mail.google.com/`}>Emailni ochish</Link>
      </div>
    </div>
  );
};

export default page;
