import PaymentCard from "./PaymentCard";
import ListedItemCard from "./ListedItemCard";
export default function ItemsAddedCart() {
  return (
    
    <div className="flex h-[39vh] w-full justify-between">
      <ListedItemCard/>
      <PaymentCard/>
      </div>
  
  )
}
