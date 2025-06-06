"use client";

export const TestButtons = () => {
  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
      <button onClick={() => fetch("/api/hello")}>/hello</button>
      <button onClick={() => fetch("/api/random-url")}>/:wild</button>
    </div>
  );
};
