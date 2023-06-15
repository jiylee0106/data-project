import ContentService from "@src/services/content.service";
import { Request, Response } from "express";
import Container, { Service } from "typedi";

const contentService = Container.get(ContentService);
@Service()
class ContentController {
  async getSelectedVideoController(req: Request, res: Response) {
    const result = await contentService.getSelectedVideoService();
    res.status(200).json(result);
  }

  async getSelectedParticipationController(req: Request, res: Response) {
    const result = await contentService.getSelectedParticipationService();
    res.status(200).json(result);
  }

  async getNewsController(req: Request, res: Response) {
    const result = await contentService.getNewsService();
    res.status(200).json(result);
  }

  async getCampaignController(req: Request, res: Response) {
    const result = await contentService.getCampaignService();
    res.status(200).json(result);
  }
}

export default ContentController;
