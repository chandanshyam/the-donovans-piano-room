import Button3 from "@/components/atoms/Button3";
import Button4 from "@/components/atoms/Button4";
import CatalogItems from "./CatalogItems";

export default function Catalog() {
  return (
    <div className="mt-[8.8vh] flex w-full justify-center bg-white">
      <div className="mt-[30px] flex h-[50vh] w-[84.7%] items-center justify-around">
        <div className="flex h-full w-[47%] items-center">
          <div className="h-[90%] w-[50%]">
            <p className="text-xl font-medium text-primary-brown 3xl:text-2xl 4xl:text-3xl">
              Soft cover | Book I
            </p>
            <h2 className="my-6 text-6xl font-medium text-primary-brown 3xl:text-7xl 4xl:text-8xl">
              The Donovan&apos;s piano room
            </h2>
            <p
              className="text-xl 3xl:text-2xl 4xl:text-3xl "
              style={{ lineHeight: "2.4vh" }}
            >
              For a limited time, 20 people can purchase the book (plus free
              shipping) and the audio book together for only $20!
            </p>
            <div className="mt-[3.6vh]">
              <Button3
                text="Add to cart"
                style={{ marginTop: "12px", marginBottom: "12px" }}
              />
              <Button4
                text="Browse all soft cover books"
                style={{ paddingTop: "6px", paddingBottom: "6px" }}
              />
            </div>
          </div>
        </div>
        <CatalogItems />
      </div>
    </div>
  );
}
