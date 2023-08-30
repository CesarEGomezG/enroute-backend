import prisma from "../prisma"
import { Color } from "@prisma/client"

const ColorRepository = {
  async getColors(): Promise<Color[]> {
    const colors = await prisma.color.findMany()
    return colors
  }
}

export default ColorRepository