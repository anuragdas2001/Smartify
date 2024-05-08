interface PurchaseButtonProps {
  range: number[];
  credit: number[];
  sliderValue: number;
}
export const PurchaseButton = ({
  range,
  credit,
  sliderValue,
}: PurchaseButtonProps) => {
  const handlePurchase = () => {
    for (let i = 0; i < range.length; i++) {
      if (sliderValue === range[i]) {
        console.log("credit",credit[i]);
      }
    }
  };
  return (
    <>
      <button
        onClick={() => {
          handlePurchase();
        }}
        className="h-auto w-auto mt-5 text-white bg-purple-500 rounded-lg p-4"
      >
        Confirm auto-purchase
      </button>
    </>
  );
};
