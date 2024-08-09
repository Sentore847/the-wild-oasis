import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking sucessfuly deleted");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
      navigate(-1);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };
}
