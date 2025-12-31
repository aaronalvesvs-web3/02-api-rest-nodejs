import 'knex'

declare module 'knex' {
  namespace Knex {
    export interface Tables {
      transactions: {
        id: string
        title: string
        amount: number
        created_at: string
        session_id: string
      }
    }
  }
}
