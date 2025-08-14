export default function AutoRenewPayment() {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="flex flex-1 flex-col gap-6 rounded-xl bg-primary-skin p-6">
      <h1 className="font-montserrat text-2xl font-semibold text-primary-brown md:text-3xl">
        Auto renew payment
      </h1>

      <p className="text-lg text-primary-black md:text-xl">
        Your Monthly Membership <span className="font-medium">#123456789</span> will be
        auto renewed on <span className="font-semibold text-tertiary-orange">{formattedDate}</span>.
      </p>

    </div>
  );
}
