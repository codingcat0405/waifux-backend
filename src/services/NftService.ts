import {Elysia} from "elysia";
import {Repository} from "typeorm";
import {NFT} from "../entities";
import {AppDataSource} from "../data-source";

class NftService {
  private readonly nftRepository: Repository<NFT>

  constructor() {
    this.nftRepository = AppDataSource.getRepository(NFT)
  }

  public async getNftById(id: number) {
    return await this.nftRepository.findOneOrFail({
      where: {
        tokenId: id
      }
    })
  }

  public async mint(body: { tokenId: number, image: string }) {
    return await this.nftRepository.save(body)
  }
}

export default new Elysia()
  .decorate('nftService', new NftService())