import PrivacyPolicy from "@/components/PrivacyPolicy";
import Terms from "@/components/Terms";
const Footer = () => {
return(
  <div className="bg-red-500 py-10">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight mb-4 md:mb-8 block">
            Swaggy.com
        </span>
        <span className="text-black font-bold tracking-tight flex gap-4 md:flex-row">
            <PrivacyPolicy/>
            <Terms/>
        </span>
    </div>
  </div>
);
};

export default Footer;