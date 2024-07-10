import Button3 from "@/components/atoms/Button3";
import Button4 from "@/components/atoms/Button4";
import CatalogItems from "./CatalogItems";

export default function Catalog() {

  return (
        <div className="w-full mt-[8.8vh] flex justify-center bg-white">
            
            <div className="h-[45vh] w-[84.7%] flex items-center justify-around">
                <div className="w-[45%] flex items-center">
                    <div className="w-[50%]">
                        <p className="text-primary-brown text-xl 3xl:text-2xl 4xl:text-3xl font-medium">Soft cover | Book I</p>
                        <h2 className="text-primary-brown text-5xl 3xl:text-6xl 4xl:text-7xl font-medium my-6">The Donovan's piano room</h2>
                        <p className="text-xl 3xl:text-2xl 4xl:text-3xl">For a limited time, 20 people can purchase the book (plus free shipping) and the audio book together for only $20!</p>
                        <Button3 text="Add to cart" style={{marginTop: "12px", marginBottom: "12px"}}/>
                        <Button4 text="Browse all soft cover books" style={{paddingTop: "6px", paddingBottom: "6px"}}/>
                    </div>
                </div>
                <CatalogItems />
            </div>
        </div>
  )
}
