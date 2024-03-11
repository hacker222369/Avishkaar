import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png";
const HomePage = () => {
  return(
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-green-600">
               Bringing Flavor to Your Doorway
            </h1>
            <span className="text-xl">Culinary Bliss, Just a click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
    <div>
        <img src={landingImage} className="w-full" alt="Landing Image" />
    </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="font-bold text-3xl tracking-tighter">
                Download the Swaggy Mobile App
            </span>
            <span>
                Get faster ordering and personalised recommendations
            </span>
            <img src={appDownloadImage} className="w-full md:w-auto" alt="App Download Image" />
        </div>
    </div>
</div>
);
};

export default HomePage;