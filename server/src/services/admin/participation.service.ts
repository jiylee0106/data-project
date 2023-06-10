import { Service, Inject } from "typedi";
import { Participation } from "@prisma/client";
import ParticipationRepository from "@src/repository/admin/participation.repository";

@Service()
class ParticipationService {
  @Inject() private readonly participationRepository: ParticipationRepository;

  async putParticipationService(
    participation: Pick<Participation, "title" | "description" | "image_link">
  ) {
    await this.participationRepository.putParticipation(participation);
  }

  async patchParticipationService(id: number) {
    await this.participationRepository.patchParticipation(id);
  }

  async getParticipationService() {
    return await this.participationRepository.getParticipation();
  }
}

export default ParticipationService;
