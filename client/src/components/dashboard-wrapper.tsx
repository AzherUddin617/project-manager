const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* sidebar */}
      <main className="dark:bg-dark-bg md:pl64 w-full flex-1 flex-col bg-gray-50">
        {/* navbar */}
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
