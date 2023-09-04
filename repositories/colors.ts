import prisma from "../prisma"
import { Color } from "@prisma/client"

export type CorrectedColor = Pick<Color, 'id' | 'name'> & {
  multiplier: number
  tolerance: number | null
}

const ColorRepository = {
  async getColors(): Promise<CorrectedColor[]> {
    const colorsDecimalAsStrings = await prisma.color.findMany()
    const colors = colorsDecimalAsStrings.map(color => {
      const multiplier = (color.multiplier as unknown) as string // Esto fue necesario porque PostgreSQL devuelve los numeros de
      // tipo decimal en formato de string a Node.js, entonces tuve que convertir esos numeros string a numeros float
      const tolerance = (color.tolerance as unknown) as string | null
      if (tolerance !== null) return { ...color, multiplier: parseFloat(multiplier), tolerance: parseFloat(tolerance) }
      else return { ...color, multiplier: parseFloat(multiplier), tolerance: null }
    })
    return colors
  }
}

export default ColorRepository