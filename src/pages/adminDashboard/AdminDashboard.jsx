import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loading from "react-loading";
import SectionTitle from "../../components/shared/SectionTitle";
import Swal from "sweetalert2";

const AdminDashboard = () => {
  const axiosPublic = useAxiosPublic();

  const { data: users = [], isLoading: loading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    try {
      await axiosPublic.delete(`/users/${id}`);
      Swal.fire({
        title: "Deleted!",
        text: "User has been deleted.",
        icon: "success",
        timer: 2000,
      });
      refetch(); // Refetch the users after deletion
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred while deleting the user.",
        icon: "error",
        timer: 2000,
      });
    }
  };

  if (loading) {
    return <Loading type="spin" color="#000" />;
  }

  return (
    <div>
      <SectionTitle
        heading={"All Users"}
        subHeading={"All Agent And User Information"}
      />
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.number}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
