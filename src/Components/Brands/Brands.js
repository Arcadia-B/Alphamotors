import yamaha from "../../assets/brands/yamaha.png";
import rks from "../../assets/brands/rks.png";
import cfmoto from "../../assets/brands/cfmoto.png";
import kawasaki from "../../assets/brands/kawasaki.png";

const Brands = () => {
  return (
    <div className="mt-8 container mx-auto flex flex-wrap justify-center items-center">
      <img src={kawasaki} alt="Kawasaki" className="h-48 w-52 object-contain mx-4 my-2" />
      <img src={rks} alt="RKS" className="h-48 w-52 object-contain mx-4 my-2" />
      <img src={cfmoto} alt="Cfmoto" className="h-48 w-52 object-contain mx-4 my-2" />
      <img src={yamaha} alt="Yamaha" className="h-48 w-52 object-contain mx-4 my-2" />
      
    </div>
  );
};

export default Brands;
