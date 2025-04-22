import Link from "next/link";

export const generateStaticParams = () => [];
export const experimental_ppr = true;

const TestPpr = () => {
  return (
    <div>
      <h1>TEST PPR</h1>

      <Link href={"/hideout"} prefetch={false}>
        HIDEOUT
      </Link>
    </div>
  );
};

export default TestPpr;
