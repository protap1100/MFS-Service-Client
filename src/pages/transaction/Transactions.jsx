import { useContext } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import { UserContext } from "../Provider/UserProvider";
import Loading from "../../components/shared/Loading";
import UserTrans from "./UserTrans";
import AgentTrans from "./AgentTrans";

const Transactions = () => {
  const { user, loading } = useContext(UserContext);
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <SectionTitle
        heading={`${user?.user?.role} Transaction Details`}
        subHeading={"Send Money, Cash In and Cash Out Easily"}
      ></SectionTitle>
      <div>
        {user?.user?.status === "Pending" ? (
          <div className="my-10">
           <h1 className="text-2xl font-bold text-red-500 text-center"> Your Account Is Not Activated Yet Please Wait For Admin Approvals</h1>
           <h1 className="mt-2 text-xl font-bold text-green-600 text-center">Thank You For Your Patience</h1>
          </div>
        ) : user?.user?.role === "User" ? (
          <UserTrans></UserTrans>
        ) : (
          <AgentTrans></AgentTrans>
        )}
      </div>
    </div>
  );
};

export default Transactions;
