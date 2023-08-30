import { Color } from "@prisma/client"
import ColorRepository from "../repositories/colors"

const ColorService = {
  async getColors(): Promise<Color[]> {
    // Aunque esta capa es innecesaria para esta funcionalidad en específico (debido a que no hay reglas de negocio), la agregué para tener una
    // arquitectura más escalable en la API en general.
    return await ColorRepository.getColors()
  }
}

export default ColorService