import AdminService from "@src/services/admin.service";
import { Request, Response } from "express";
import Container, { Service } from "typedi";

const adminService = Container.get(AdminService);
@Service()
class VideoController {
  async putVideoController(req: Request, res: Response) {
    const result = await adminService.putVideoService(req.body);
    res.status(201).json(result);
  }

  async patchVideoController(req: Request, res: Response) {
    const result = await adminService.patchVideoService(req.body.id);
    res.status(201).json(result);
  }

  async getVideoController(req: Request, res: Response) {
    const result = await adminService.getVideoService();
    res.status(201).json(result);
  }
}

export default VideoController;
