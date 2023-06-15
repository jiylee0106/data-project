import NewsService from "@src/services/admin/news.service";
import { Request, Response } from "express";
import Container, { Service } from "typedi";

const newsService = Container.get(NewsService);
@Service()
class NewsController {
  async putNewsController(req: Request, res: Response) {
    const result = await newsService.putNewsService(req.body);
    res.status(201).json(result);
  }

  async getNewsController(req: Request, res: Response) {
    const result = await newsService.getNewsService();
    res.status(201).json(result);
  }

  async patchNewsController(req: Request, res: Response) {
    const result = await newsService.patchNewsService(
      Number(req.params.id),
      req.body
    );
    res.status(201).json(result);
  }

  async deleteNewsController(req: Request, res: Response) {
    const result = await newsService.deleteNewsService(Number(req.params.id));
    res.status(201).json(result);
  }
}

export default NewsController;
