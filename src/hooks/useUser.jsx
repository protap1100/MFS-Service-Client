import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { UserContext } from "../pages/Provider/UserProvider";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(UserContext);
  // console.log(user?.user?.email)
  const {
    data: singleUser,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["user", user?.user?.email],
    queryFn: async () => {
      try {
        const { data } = await axiosPublic.get(`/users/${user?.user?.email}`);
        return data;
      } catch (err) {
        throw new Error("Failed to fetch user data");
      }
    },
    enabled: !!user,
  });

  return { singleUser, isLoading, refetch, error };
};

export default useUser;
