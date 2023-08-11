export default function EducationsLayout({
  children,
}: {
    children: React.ReactNode;
  }) {
  return (
    <main className="bg-gray-200 h-screen px-[4rem] py-[2rem]">
      <h2 className="text-[2rem] w-[30rem] border-b-2 order-solid border-gray-400 mb-[2rem]">
        Internship
      </h2>
      {children}
    </main>
  )
}
