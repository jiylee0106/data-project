import { PointsLog } from "@prisma/client";
import { Service } from "typedi";

@Service()
class HandlePassword {
  async earnPoints(
    data: Pick<PointsLog, "userId" | "points" | "action_type" | "method">
  ) {}

  async spendPoints(
    data: Pick<PointsLog, "userId" | "points" | "action_type" | "method">
  ) {}
}

export default HandlePassword;
