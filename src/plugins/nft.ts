import {Elysia, t} from 'elysia'
import {nftService} from "../services";

const nftPlugin = new Elysia()
  .group("/nft", (group) =>
    group
      .use(nftService)
      .get("/:id", async ({nftService, params}) => {
        const {id} = params;
        return await nftService.getNftById(parseInt(id))
      }, {
        detail: {
          tags: ['nft'],
        },
        params: t.Object({
          id: t.String(),
        })
      })
      .post("/mint", async ({nftService, body}) => {
        return await nftService.mint(body)

      }, {
        detail: {
          tags: ['nft'],
        },
        body: t.Object({
          tokenId: t.Number(),
          image: t.String()
        })
      })
  )

export default nftPlugin