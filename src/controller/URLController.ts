import { Request, Response } from 'express'
import shortId from "shortid";
import { config } from '../config/Constants';



export class URLController {

  public async shorten(req: Request, res: Response) : Promise<void> {
    const { originalUrl } = req.body
    const hash = shortId.generate()
    const shortUrl = `${config.API_URL}/${hash}`    
    
    res.json({ originalUrl, hash, shortUrl })
  }

  public async redirect(req: Request, res: Response) : Promise<void> {

    const { hash } = req.params

    const url =  {
      originalUrl: "https://google.com",
      hash: "SoDV9_CLK",
      shortUrl: "http://localhost:5000/SoDV9_CLK"
    }

    res.redirect(url.originalUrl)
  }
}