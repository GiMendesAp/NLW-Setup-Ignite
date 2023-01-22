import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const firstHabitId = '0730ffac-d039-4194-9571-01aa2aa0efbd'
const firstHabitCreationDate = new Date('2022-12-31T03:00:00.000')

const secondHabitId = '00880d75-a933-4fef-94ab-e05744435297'
const secondHabitCreationDate = new Date('2023-01-03T03:00:00.000')

const thirdHabitId = 'fa1a1bcf-3d87-4626-8c0d-d7fd1255ac00'
const thirdHabitCreationDate = new Date('2023-01-08T03:00:00.000')

const fourthHabitId = '0757442c-a14f-4b0a-b011-f3bd1b4e953d'
const fourthHabitCreationDate = new Date('2023-01-09T03:00:00.000')

const fifthHabitId = '539f8dd2-78b7-480e-b1b3-bef1dc6cfb9f'
const fifthHabitCreationDate = new Date('2023-01-09T03:00:00.000')

const sixthHabitId = 'b2420ce3-a17f-4763-888e-5bb629f1be24'
const sixthHabitCreationDate = new Date('2023-01-10T03:00:00.000')

async function run() {
  await prisma.dayHabit.deleteMany()
  await prisma.habitWeekDays.deleteMany()
  await prisma.day.deleteMany()
  await prisma.habit.deleteMany()

  /**
   * Create habits
   */
  await Promise.all([
    prisma.habit.create({
      data: {
        id: firstHabitId,
        title: 'Beber 2L água',
        created_at: firstHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: secondHabitId,
        title: 'Exercitar',
        created_at: secondHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 3 },
            { week_day: 5 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: thirdHabitId,
        title: 'Dormir 8h',
        created_at: thirdHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: fourthHabitId,
        title: 'Passear com o cachorro',
        created_at: fourthHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: fifthHabitId,
        title: 'Ler 30 minutos',
        created_at: fifthHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 0 },
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: sixthHabitId,
        title: 'Caminhar',
        created_at: sixthHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 2 },
            { week_day: 4 },
            { week_day: 6 },
          ]
        }
      }
    })
  ])

  await Promise.all([
    /**
     * Habits (Complete/Available): 1/1
     */
    prisma.day.create({
      data: {
        /** Monday */
        date: new Date('2023-01-02T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: firstHabitId,
          }
        }
      }
    }),

    /**
     * Habits (Complete/Available): 2/2
     */
     prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date('2023-01-04T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
          ]
        }
      }
    }),

    /**
     * Habits (Complete/Available): 1/2
     */
    prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-06T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: secondHabitId,
          }
        }
      }
    }),

    /**
     * Habits (Complete/Available): 2/3
     */
    prisma.day.create({
      data: {
        /** Monday */
        date: new Date('2023-01-09T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: thirdHabitId },
          ]
        }
      }
    }),

    /**
     * Habits (Complete/Available): 2/4
     */
    prisma.day.create({
      data: {
        /** Tuesday */
        date: new Date('2023-01-10T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: fourthHabitId },
            { habit_id: fifthHabitId },
          ]
        }
      }
    }),

    /**
     * Habits (Complete/Available): 1/5
     */
    prisma.day.create({
      data: {
        /** Wednesday */
        date: new Date('2023-01-11T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: firstHabitId,
          }
        }
      }
    }),

    /**
     * Habits (Complete/Available): 3/5
     */
    prisma.day.create({
      data: {
        /** Thursday */
        date: new Date('2023-01-12T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: fourthHabitId },
            { habit_id: fifthHabitId },
          ]
        }
      }
    }),

    /**
     * Habits (Complete/Available): 3/3
     */
    prisma.day.create({
      data: {
        /** Saturday */
        date: new Date('2023-01-14T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: fourthHabitId },
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
          ]
        }
      }
    }),

    /**
     * Habits (Complete/Available): 1/5
     */
    prisma.day.create({
      data: {
        /** Tuesday */
        date: new Date('2023-01-17T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: thirdHabitId
          }
        }
      }
    }),

    /**
     * Habits (Complete/Available): 2/5
     */
    prisma.day.create({
      data: {
        /** Thursday */
        date: new Date('2023-01-19T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: fifthHabitId },
            { habit_id: sixthHabitId },
          ]
        }
      }
    }),

    /**
     * Habits (Complete/Available): 5/5
     */
     prisma.day.create({
      data: {
        /** Friday */
        date: new Date('2023-01-20T03:00:00.000z'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId },
            { habit_id: thirdHabitId },
            { habit_id: fourthHabitId },
            { habit_id: fifthHabitId },
          ]
        }
      }
    }),
  ])
}

run()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })