import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <div className="pt-40 pb-20 bg-slate-100">{children}</div>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
