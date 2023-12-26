import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure, 
} from "~/server/api/trpc"; 
import { v4 } from "uuid";

export const visionRouter = createTRPCRouter({ 
  create: protectedProcedure
    .input(z.object({ 
      name: z.string(),
      url: z.string(),
      timeOfDay: z.string(),
    }))
    .mutation(async ({ ctx, input }) => { 
      const {db} = ctx; 

      const {name, url, timeOfDay} = input; 
      try {
        
        const createVision = await db.vision.create({
          data: {
            id: v4(),
            name,
            url, 
            timeOfDay,
            createdBy: { connect: { id: ctx.session.user.id } },
          }
        });
        return createVision;
      } catch (error) { 
        return error; 
      }
      
    }),
  delete: protectedProcedure
    .input(z.object({ 
      id: z.string(),
    }))
    .mutation(async ({ ctx, input }) => { 
      const {db} = ctx; 

      const {id} = input; 
      try {
        const deleteVision = await db.vision.delete({
          where: { id },
        });
        return deleteVision;
      } catch (error) { 
        return error; 
      }
      
    }),
  read: protectedProcedure
    .input(z.object({ 
      id: z.string(),
    }))
    .query(async ({ ctx, input }) => { 
      const {db} = ctx; 

      const {id} = input; 
      try {
        const readVision = await db.vision.findUnique({
          where: { id },
        });
        return readVision;
      } catch (error) { 
        return error; 
      }
      
    }),
  update: protectedProcedure
    .input(z.object({ 
      id: z.string(),
      name: z.string(),
      url: z.string(),
      timeOfDay: z.string(),
    }))
    .mutation(async ({ ctx, input }) => { 
      const {db} = ctx; 

      const {id, name, url, timeOfDay} = input; 
      try {
        const updateVision = await db.vision.update({
          where: { id },
          data: {
            name,
            url,
            timeOfDay,
          }
        });
        return updateVision;
      } catch (error) { 
        return error; 
      }
      
    }),
  readAll: protectedProcedure
    .query(async ({ ctx }) => { 
      const {db} = ctx;  
      const readAllVisions = await db.vision.findMany({
        where: { 
          createdBy: { id: ctx.session.user.id },
        },
      });
      return readAllVisions;
      
      
    }),
});
