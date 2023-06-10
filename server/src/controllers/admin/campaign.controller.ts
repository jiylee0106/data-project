import CampaignService from "@src/services/admin/campaign.service";
import { Request, Response } from "express";
import Container, { Service } from "typedi";

const campaignService = Container.get(CampaignService);
@Service()
class CampaignController {
  async putCampaignController(req: Request, res: Response) {
    const result = await campaignService.putCampaignService(req.body);
    res.status(201).json(result);
  }

  async patchCampaignController(req: Request, res: Response) {
    const result = await campaignService.patchCampaignService(req.body);
    res.status(201).json(result);
  }

  async getCampaignController(req: Request, res: Response) {
    const result = await campaignService.getCampaignService();
    res.status(201).json(result);
  }
}

export default CampaignController;
