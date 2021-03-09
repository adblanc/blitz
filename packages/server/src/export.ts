import {normalize, ServerConfig} from "./config"
import {nextExport} from "./next-utils"

export async function blitzExport(config: ServerConfig) {
  const {buildFolder, nextBin} = await normalize(config)
  await nextExport(nextBin, buildFolder, undefined, config)
}
