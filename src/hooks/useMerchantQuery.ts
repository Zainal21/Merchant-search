import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useMerchantQuery = (keyword: string) => {
  return useQuery({
    queryKey: ["merchant"],
    queryFn: () =>
      axios.get(`/api/merchant?keyword=${keyword}`).then((res) => res.data),

    enabled: false,
  });
};
