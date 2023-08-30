import { Router } from "express"
import ColorService from "../services/colors"

const router = Router()

router.get('/', async (req, res) => {
  try {
    const colors = await ColorService.getColors()
    res.status(200).json(colors)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router