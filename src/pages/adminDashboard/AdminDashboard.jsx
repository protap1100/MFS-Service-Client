import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loading from "react-loading";
import SectionTitle from "../../components/shared/SectionTitle";
import Swal from "sweetalert2";

const AdminDashboard = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: users = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  const handleDelete = async (user) => {
    Swal.fire({
      title: `Delete ${user.name}`,
      text: "Are You Sure You Want to Delete This",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosPublic.delete(`/users/${user._id}`);
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
      }
    });
  };

  const handleUpdateStatus = async (user) => {
    if (user.status === "Pending") {
      Swal.fire({
        title: `Approve ${user.name}`,
        text: "Do You Want To Give Him Approval",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Approve!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axiosPublic.put(`/users/${user._id}`, { status: "Verified" });
            Swal.fire({
              title: "Updated!",
              text: "User status has been updated to verified.",
              icon: "success",
              timer: 2000,
            });
            refetch();
          } catch (error) {
            Swal.fire({
              title: "Error!",
              text: "An error occurred while updating the user status.",
              icon: "error",
              timer: 2000,
            });
          }
        }
      });
    }
  };

  if (loading) {
    return (
      <div className="my-20 flex justify-center items-center">
        <Loading type="spin" color="#000" />
      </div>
    );
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
              <th className="px-4 py-2 text-center">Id</th>
              <th className="px-4 py-2 text-center">Name</th>
              <th className="px-4 py-2 text-center">Email</th>
              <th className="px-4 py-2 text-center">Phone</th>
              <th className="px-4 py-2 text-center">Role</th>
              <th className="px-4 py-2 text-center">Approval</th>
              <th className="px-4 py-2 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2 text-center">{user.name}</td>
                <td className="border px-4 py-2 text-center">{user.email}</td>
                <td className="border px-4 py-2 text-center">{user.number}</td>
                <td className="border px-4 py-2 text-center">{user.role}</td>
                <td
                  className={`border px-4 py-2 text-center cursor-pointer`}
                  onClick={() => handleUpdateStatus(user)}
                >
                  <p
                    className={`font-bold rounded p-2 text-white ${
                      user.status === "Pending"
                        ? "bg-red-500 hover:bg-red-400"
                        : "bg-green-500 p-2 hover:bg-green-400"
                    }`}
                  >
                    {user.status}
                  </p>
                </td>
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(user)}
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
