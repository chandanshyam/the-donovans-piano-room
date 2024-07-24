import React, { useState } from "react";
import { books } from "@/utils/general";
import { useEffect } from "react";
import bookInterface from "@/components/atoms/bookInterface";
import BookItem from "./BookItem";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { SxProps } from "@mui/system";

export default function YourCart() {
  const [booksList, setBooksList] = useState<[bookInterface[]]>([[]]);
  const iconStyles: SxProps = {
    fontSize: 50,
    color: "#E98427",
  };
  useEffect(() => {
    let booksList: [bookInterface[]] = [[]];
    for (let i in books) {
      const book = books[i];
      switch (book.page) {
        case "cart":
          booksList[0].push(book);
          break;
      }
    }
    setBooksList(booksList);
  }, []);

  return (
    <>
    <div className="w-full  justify-center" style={{ padding: "8% 8% 0 8%" }}>
      <div className="relative  items-center justify-center bg-[#edd6fe]" style={{ width: "100%", height: "40vh", padding: "0 6% 2% 6%" }}>
        <h2 className="font-montserrat text-6xl font-semibold leading-[46px] text-primary-brown 3xl:text-7xl 4xl:text-8xl" style={{ padding: "2% 0% 1% 0%" }}>Your cart</h2>
        <div className="flex h-[29vh] w-full flex-col items-center justify-center rounded-lg bg-[#ffffff]">
          <div><ShoppingCartOutlinedIcon sx={iconStyles} /></div>
          <h3 className="text-center font-montserrat text-4xl font-bold leading-[34px] text-primary-brown 3xl:text-6xl 4xl:text-7xl">Your shopping cart is currently empty</h3>
          <p>Go back to the bookstore and start shopping </p>
        </div>
      </div>
      </div>
      <div className="my-[6vh] flex min-h-[50.9vh]  " style={{ padding: "0% 8% 0 8%" }}>
        <div className="w-[60.7%] ">
          <h5 className="mb-[2%] text-3xl font-semibold text-primary-brown">Frequently purchased together</h5>
          <div className="flex justify-between">
            {booksList[0].map((book, i) => (
              <BookItem key={i} book={book} />
            ))}
          </div>
        </div>
      </div>
      </>
  );
}



