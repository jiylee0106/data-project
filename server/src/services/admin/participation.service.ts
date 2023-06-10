import { Service, Inject } from "typedi";
import { Participation } from "@prisma/client";
import ParticipationRepository from "@src/repository/admin/participation.repository";
import { MessageResponseDto } from "@src/dto/global.dto";

@Service()
class ParticipationService {
  @Inject() private readonly participationRepository: ParticipationRepository;

  async putParticipationService(
    participation: Pick<Participation, "title" | "description" | "image_link">
  ): Promise<MessageResponseDto> {
    await this.participationRepository.putParticipation(participation);
    return { message: "동참이 추가되었습니다" };
  }

  async setCurrentParticipationService(
    id: number
  ): Promise<MessageResponseDto> {
    await this.participationRepository.setCurrentParticipation(id);
    return { message: "현재 동참이 설정되었습니다" };
  }

  async getParticipationService(): Promise<Participation[]> {
    return await this.participationRepository.getParticipation();
  }

  async patchParticipationService(
    id: number,
    participation: Pick<Participation, "title" | "description" | "image_link">
  ): Promise<MessageResponseDto> {
    await this.participationRepository.patchParticipation(id, participation);
    return { message: "동참이 수정되었습니다" };
  }

  async deleteParticipationService(id: number): Promise<MessageResponseDto> {
    await this.participationRepository.deleteParticipation(id);
    return { message: "동참이 삭제되었습니다" };
  }
}

export default ParticipationService;
