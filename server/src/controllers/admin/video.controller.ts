import VideoService from "@src/services/admin/video.service";
import { Request, Response } from "express";
import Container, { Service } from "typedi";

const videoService = Container.get(VideoService);
@Service()
class VideoController {
  async putVideoController(req: Request, res: Response) {
    const result = await videoService.putVideoService(req.body);
    res.status(201).json(result);
  }

  async patchVideoController(req: Request, res: Response) {
    const result = await videoService.patchVideoService(req.body.id);
    res.status(201).json(result);
  }

  async getVideoController(req: Request, res: Response) {
    const result = await videoService.getVideoService();
    res.status(201).json(result);
  }
}

export default VideoController;
