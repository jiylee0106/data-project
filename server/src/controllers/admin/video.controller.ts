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

  async setCurrentVideoController(req: Request, res: Response) {
    const result = await videoService.setCurrentVideoService(
      Number(req.params.id)
    );
    res.status(201).json(result);
  }

  async getVideoController(req: Request, res: Response) {
    const result = await videoService.getVideoService();
    res.status(201).json(result);
  }

  async patchVideoController(req: Request, res: Response) {
    const result = await videoService.patchVideoService(
      Number(req.params.id),
      req.body
    );
    res.status(201).json(result);
  }

  async deleteVideoController(req: Request, res: Response) {
    const result = await videoService.deleteVideoService(Number(req.params.id));
    res.status(201).json(result);
  }
}

export default VideoController;
