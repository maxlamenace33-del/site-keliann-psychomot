import { z } from "zod";

export const siteSettingsSchema = z.object({
  alertBanner: z.object({
    enabled: z.boolean(),
    message: z.string().max(250),
    variant: z.enum(["info", "warning", "holiday"]).default("info"),
  }),
  contact: z.object({
    fullName: z.string().min(1),
    title: z.string().min(1),
    phone: z.string(),
    email: z.string().email(),
    address: z.object({
      street: z.string().min(1),
      postalCode: z.string().min(4),
      city: z.string().min(1),
      complement: z.string().optional(),
    }),
    googleMapsUrl: z.string().url(),
    doctolibUrl: z.string().url(),
  }),
  openingHours: z.array(
    z.object({
      day: z.string(),
      slots: z.string(),
    })
  ),
  pricing: z.object({
    bilan: z.object({
      amount: z.number().positive(),
      label: z.string(),
      description: z.string(),
    }),
    seance: z.object({
      amount: z.number().positive(),
      label: z.string(),
      duration: z.string(),
    }),
    reimbursementNote: z.string(),
  }),
  prescriptionNote: z.string(),
  legal: z.object({
    rpps: z.string(),
    siret: z.string(),
    legalStatus: z.string(),
    host: z.string(),
  }),
});

export type SiteSettings = z.infer<typeof siteSettingsSchema>;
