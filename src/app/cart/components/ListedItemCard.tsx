import React from 'react';
import Image from 'next/image';
import Button4 from "@/components/atoms/Button4";

const ListedItemCard: React.FC<{ book?: any }> = ({ 
    book = { 
        title: "Book I", 
        imageSrc: "/bookstore/books/book-1.svg", 
        price: "$25.00" 
    } 
}) => {
  return (
    <div className="flex flex-row justify-center items-center p-8 gap-6 w-[62%] h-full tablet:w-full tablet:h-[72%] laptop:w-full laptop:h-[75%] bg-white rounded-[12px] shadow-md">
      {/* Image Section */}
      <div className="relative tablet:w-[167.32px] tablet:h-[238px]  desktop:w-[167.32px] desktop:h-[238px] flex-none">
        <Image
          src={book.imageSrc === "/bookstore/book-list/soft-cover-1.svg" ? "/bookstore/books/book-1.svg" : book.imageSrc === "/bookstore/book-list/soft-cover-2.svg" ? "/bookstore/books/book-2.svg" : book.imageSrc === "/bookstore/book-list/soft-cover-3.svg" ? "/bookstore/books/book-3.svg" : "/bookstore/books/book-1.svg"}
          alt="Book Cover"
          width={168}
          height={238}
          className="absolute w-full h-full left-0 top-0 rounded-[12px]"
          style={{objectFit : "cover", boxShadow: "2px 2px 4px 0px #AC7A2280", margin: 0, padding: 0 }}
        />
      </div>

      {/* Text and Details Section */}
      <div className="flex flex-col justify-between w-[65%] h-[238px] laptop:w-[65%] ">
        {/* Title */}
        <div className="flex flex-col gap-[15px]">
          <h3 className="font-montserrat font-bold text-[28px] leading-[34px] text-[#59371D]">
            The Donovan Piano Room {book.title}
          </h3>
        </div>

        {/* Quantity and Remove */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-start gap-[32px]">
            <div className="flex flex-row items-center gap-[4px] w-[80px] h-[24px]">
              <span className="font-roboto font-bold text-[14px] text-[#6F219E]">
                Remove
              </span>
              <div className="w-[24px] h-[24px]">
                <Image src="/delete.svg" alt="Delete" width={24} height={24} />
              </div>
            </div>

            <div className="flex flex-row items-center gap-[9px] w-[52px] h-[26px]">
              <span className="font-roboto font-bold text-[14px] text-[#6F219E]">
                1X
              </span>
              <div className="w-[26px] h-[26px] bg-no-repeat bg-center bg-contain">
                <Image src="/add.svg" alt="Plus" width={26} height={26} />
              </div>
            </div>
          </div>

          {/* Price Section */}
          <div className="flex flex-col items-end p-2 w-[123px] h-[68px] bg-[#F5E8FF] rounded-[12px]">
            <span className="font-roboto font-bold text-[16px] text-[#714B2D]">
              Price
            </span>
            <div className="flex flex-row items-center gap-[9px] w-[63px] h-[28px]">
              <span className="font-roboto font-semibold text-[20px] text-[#1C1A1A]">
                {book.price}
              </span>
            </div>
          </div>
        </div>

        {/* Coupon Section */}
        <div className="flex flex-row items-center gap-[24px] w-[100%] h-[56px] tablet:justify-between laptop:gap-[10%] laptop:w-[100%] ">
          <div className="flex flex-col w-[192px] h-[56px] border border-[#59371D] rounded-[12px] bg-[#FEF8EE]">
            <div className="flex flex-row items-center p-2 w-full h-full">
              <span className="font-roboto text-[16px] text-[#391F0F]">
                Coupon code
              </span>
            </div>
          </div>
          <Button4 text="Apply Coupon"
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: '24px', paddingRight: '24px', paddingTop: '8px', paddingBottom: '8px', width: '200px', height: '40px', border: '1px solid #6F219E', borderRadius: '31px', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', fontSize: '16px', color: '#6F219E'}}
          />
        </div>
      </div>
    </div>
  );
};

export default ListedItemCard;



















