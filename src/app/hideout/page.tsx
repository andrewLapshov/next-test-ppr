import Link from "next/link";

const HideoutPage = async () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <h1 className="mb-6 font-bold text-white md:text-3xl">selectModule</h1>
      <Link href={"/test-ppr"} prefetch={false}>
        TEST PPR
      </Link>
    </div>
  );
};

export default HideoutPage;
