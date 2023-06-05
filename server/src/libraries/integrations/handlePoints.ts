import { PointsLog } from "@prisma/client";
import PointRepository from "@src/repository/point.repository";
import { Inject, Service } from "typedi";

@Service()
class HandlePoint {
  @Inject() private readonly pointRepository: PointRepository;
  async earnPoints(
    data: Pick<PointsLog, "userId" | "points" | "action_type" | "method">
  ) {
    await this.pointRepository.putPointsLog(data);
  }

  async spendPoints(
    data: Pick<PointsLog, "userId" | "points" | "action_type" | "method">
  ) {
    await this.pointRepository.putPointsLog(data);
  }
}

export default HandlePoint;
