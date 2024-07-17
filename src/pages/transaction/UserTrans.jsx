import { useContext } from "react";
import { useRef } from "react";
import { UserContext } from "../Provider/UserProvider";
import Loading from "../../components/shared/Loading";

const UserTrans = () => {
  const { user, loading } = useContext(UserContext);

  const sendNumberRef = useRef();
  const sendAmountRef = useRef();
  const sendPinRef = useRef();

  const cashInNumberRef = useRef();
  const cashInAmountRef = useRef();
  const cashInPinRef = useRef();

  const cashOutNumberRef = useRef();
  const cashOutAmountRef = useRef();
  const cashOutPinRef = useRef();
  if (loading) {
    return <Loading></Loading>;
  }

  const handleSendMoney = () => {
    const sendNumber = sendNumberRef.current.value;
    const sendAmount = sendAmountRef.current.value;
    const sendPin = sendPinRef.current.value;
    console.log("Send Money:", { sendNumber, sendAmount, sendPin });
  };

  const handleCashIn = () => {
    const cashInNumber = cashInNumberRef.current.value;
    const cashInAmount = cashInAmountRef.current.value;
    const cashInPin = cashInPinRef.current.value;
    console.log("Cash In:", { cashInNumber, cashInAmount, cashInPin });
  };

  const handleCashOut = () => {
    const cashOutNumber = cashOutNumberRef.current.value;
    const cashOutAmount = cashOutAmountRef.current.value;
    const cashOutPin = cashOutPinRef.current.value;
    console.log("Cash Out:", { cashOutNumber, cashOutAmount, cashOutPin });
  };

  return (
    <div className="mt-5">
      <div className="my-5">
        <h1 className="text-3xl font-bold text-center">
          Your Balance: {user?.user?.taka}
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 grid-cols-1">
        {/* Send Money */}
        <div className="bg-gray-100">
          <h1 className="text-center my-5 font-bold">Send Money</h1>
          <div className="flex flex-col justify-center items-center my-5">
            <div className="mb-5 px-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Number
              </label>
              <input
                type="number"
                name="sendNumber"
                placeholder="Enter Number"
                ref={sendNumberRef}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 px-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Amount
              </label>
              <input
                type="number"
                name="sendAmount"
                placeholder="Enter Amount"
                ref={sendAmountRef}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 px-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Pin
              </label>
              <input
                type="number"
                name="sendPin"
                placeholder="Enter Your Pin"
                ref={sendPinRef}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button
                onClick={handleSendMoney}
                className="p-2 font-bold text-white bg-green-600 hover:bg-green-500 rounded"
              >
                Send Money
              </button>
            </div>
          </div>
        </div>

        {/* Cash In */}
        <div className="bg-gray-100">
          <h1 className="text-center my-5 font-bold">Cash In</h1>
          <div className="flex flex-col justify-center items-center my-5">
            <div className="mb-5 px-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Number
              </label>
              <input
                type="number"
                name="cashInNumber"
                placeholder="Enter Number"
                ref={cashInNumberRef}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 px-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Amount
              </label>
              <input
                type="number"
                name="cashInAmount"
                placeholder="Enter Amount"
                ref={cashInAmountRef}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 px-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Pin
              </label>
              <input
                type="number"
                name="cashInPin"
                placeholder="Enter Your Pin"
                ref={cashInPinRef}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button
                onClick={handleCashIn}
                className="p-2 font-bold text-white bg-blue-600 hover:bg-blue-500 rounded"
              >
                Cash In
              </button>
            </div>
          </div>
        </div>

        {/* Cash Out */}
        <div className="bg-gray-100">
          <h1 className="text-center my-5 font-bold">Cash Out</h1>
          <div className="flex flex-col justify-center items-center my-5">
            <div className="mb-5 px-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Number
              </label>
              <input
                type="number"
                name="cashOutNumber"
                placeholder="Enter Number"
                ref={cashOutNumberRef}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 px-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Amount
              </label>
              <input
                type="number"
                name="cashOutAmount"
                placeholder="Enter Amount"
                ref={cashOutAmountRef}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 px-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Pin
              </label>
              <input
                type="number"
                name="cashOutPin"
                placeholder="Enter Your Pin"
                ref={cashOutPinRef}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button
                onClick={handleCashOut}
                className="p-2 font-bold text-white bg-red-600 hover:bg-red-500 rounded"
              >
                Cash Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTrans;
