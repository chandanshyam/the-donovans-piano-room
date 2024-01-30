"use server"

import { z } from 'zod'
import { SignupFormSchema } from '@/lib/schema'

type Inputs = z.infer<typeof SignupFormSchema>

export async function addNewUser(data: Inputs) {
  const result = SignupFormSchema.safeParse(data)

  if (result.success) {
    return { success: true, data: result.data }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}