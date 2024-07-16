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
        {user?.user?.role === "User" ? (
          <UserTrans></UserTrans>
        ) : (
          <AgentTrans></AgentTrans>
        )}
      </div>
    </div>
  );
};

export default Transactions;
