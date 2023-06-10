import { Service, Inject } from "typedi";
import AdminRepository from "@src/repository/admin.repository";
import { Participation } from "@prisma/client";

@Service()
class ParticipationService {
  @Inject() private readonly adminRepository: AdminRepository;

  async putParticipationService(
    participation: Pick<Participation, "title" | "description" | "image_link">
  ) {
    await this.adminRepository.putParticipation(participation);
  }

  async patchParticipationService(id: number) {
    await this.adminRepository.patchParticipation(id);
  }

  async getParticipationService() {
    return await this.adminRepository.getParticipation();
  }
}

export default ParticipationService;
